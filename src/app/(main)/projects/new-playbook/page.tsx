
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";


export default function NewPlaybookPage() {
  const router = useRouter();

  const handleCreate = () => {
    // For now, just navigates back to the projects page.
    // In the future, this would handle form submission.
    router.push('/projects');
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
       <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Create New Playbook
        </h1>
        <p className="text-muted-foreground">
          Define a new playbook for your legal operations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Due Diligence Playbook</CardTitle>
          <CardDescription>
            This playbook will help you to streamline your due diligence process.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter playbook title" defaultValue="Due Diligence Playbook" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter a description for your playbook"
              className="min-h-[120px]"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={handleCreate}>Create</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

