"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  summarizeContract,
  type SummarizeContractOutput,
} from "@/ai/flows/summarize-contract";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, FileText, AlertTriangle, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  contractText: z
    .string()
    .min(100, {
      message: "Contract text must be at least 100 characters.",
    })
    .max(50000, {
      message: "Contract text must not exceed 50,000 characters.",
    }),
  jurisdiction: z.string().optional(),
});

export function SummarizeForm() {
  const [summary, setSummary] = useState<SummarizeContractOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contractText: "",
      jurisdiction: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeContract(values);
      setSummary(result);
    } catch (error) {
      console.error("Contract summarization error:", error);
      toast({
        variant: "destructive",
        title: "An error occurred.",
        description: "Failed to summarize the contract. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Analyze Contract</CardTitle>
          <CardDescription>
            Paste your contract text below. Our AI will summarize key terms,
            obligations, and potential risks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="contractText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the full text of your legal contract here..."
                        className="min-h-[300px] font-mono text-xs"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jurisdiction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Governing Jurisdiction (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., California, Delaware" {...field} />
                    </FormControl>
                    <FormDescription>
                      Providing jurisdiction helps the AI consider relevant local laws.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Summarize Contract
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {isLoading && (
          <Card className="flex flex-col items-center justify-center p-10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Analyzing your contract...</p>
          </Card>
        )}

        {summary && (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <FileText /> Analysis Complete
              </CardTitle>
              <CardDescription>
                Here is the AI-generated summary of your contract.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Executive Summary</h3>
                <p className="text-sm text-muted-foreground">{summary.summary}</p>
              </div>

              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold">
                    <ShieldCheck className="mr-2 h-5 w-5 text-green-600" /> Key Provisions
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {summary.keyProvisions.map((provision, index) => <li key={index}>{provision}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base font-semibold">
                    <FileText className="mr-2 h-5 w-5 text-blue-600" /> Obligations
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {summary.obligations.map((obligation, index) => <li key={index}>{obligation}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base font-semibold">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" /> Potential Risks
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {summary.potentialRisks.map((risk, index) => <li key={index}>{risk}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
               <Badge variant="outline" className="mt-4">
                Powered by GenAI
              </Badge>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
