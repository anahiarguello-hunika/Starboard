
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const playbooks = [
    { title: "General", description: "A general-purpose playbook for any legal matter." },
    { title: "Due Diligence", description: "A structured process for conducting thorough due diligence." },
    { title: "M&A Process", description: "Manage mergers and acquisitions from start to finish." },
    { title: "Real Estate General", description: "A standard playbook for real estate transactions." },
    { title: "Fund Creation", description: "Streamline the process of creating a new investment fund." },
    { title: "Legal Six Sigma", description: "Apply Six Sigma principles to optimize legal processes." },
    { title: "Technology", description: "Handle technology-related legal matters like IP and licensing." },
    { title: "Transformation", description: "Guide your organization through major legal transformations." },
    { title: "Contracts", description: "A dedicated playbook for contract lifecycle management." },
    { title: "Fractional Law", description: "Manage legal services for multiple clients as a fractional counsel." },
]

export default function NewPlaybookPage() {
  const router = useRouter();

  const handleSelect = () => {
    // For now, just navigates back to the projects page.
    // In the future, this would handle playbook selection.
    router.push('/projects');
  };

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
       <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Create New Project
        </h1>
        <p className="text-muted-foreground">
          Select a playbook to get started with a new project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playbooks.map((playbook) => (
            <Card key={playbook.title} className="flex flex-col">
                <CardHeader>
                    <CardTitle>{playbook.title}</CardTitle>
                    <CardDescription>{playbook.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-end">
                     <Button variant="outline" size="sm" onClick={handleSelect}>
                        Select <ArrowRight className="ml-2 h-4 w-4" />
                     </Button>
                </CardContent>
            </Card>
        ))}
      </div>
       <div className="flex justify-start">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
       </div>
    </div>
  );
}
