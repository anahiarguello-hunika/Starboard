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
      message: "El texto del contrato debe tener al menos 100 caracteres.",
    })
    .max(50000, {
      message: "El texto del contrato no debe exceder los 50,000 caracteres.",
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
      console.error("Error al resumir el contrato:", error);
      toast({
        variant: "destructive",
        title: "Ocurrió un error.",
        description: "No se pudo resumir el contrato. Por favor, inténtelo de nuevo más tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Analizar Contrato</CardTitle>
          <CardDescription>
            Pegue el texto de su contrato a continuación. Nuestra IA resumirá los términos clave,
            obligaciones y riesgos potenciales.
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
                    <FormLabel>Texto del Contrato</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Pegue el texto completo de su contrato legal aquí..."
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
                    <FormLabel>Jurisdicción Aplicable (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="ej., California, Delaware" {...field} />
                    </FormControl>
                    <FormDescription>
                      Proporcionar la jurisdicción ayuda a la IA a considerar las leyes locales pertinentes.
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
                Resumir Contrato
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {isLoading && (
          <Card className="flex flex-col items-center justify-center p-10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Analizando su contrato...</p>
          </Card>
        )}

        {summary && (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <FileText /> Análisis Completo
              </CardTitle>
              <CardDescription>
                Aquí está el resumen de su contrato generado por IA.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Resumen Ejecutivo</h3>
                <p className="text-sm text-muted-foreground">{summary.summary}</p>
              </div>

              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold">
                    <ShieldCheck className="mr-2 h-5 w-5 text-green-600" /> Disposiciones Clave
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {summary.keyProvisions.map((provision, index) => <li key={index}>{provision}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base font-semibold">
                    <FileText className="mr-2 h-5 w-5 text-blue-600" /> Obligaciones
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {summary.obligations.map((obligation, index) => <li key={index}>{obligation}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base font-semibold">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" /> Riesgos Potenciales
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {summary.potentialRisks.map((risk, index) => <li key={index}>{risk}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
               <Badge variant="outline" className="mt-4">
                Potenciado por GenAI
              </Badge>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
