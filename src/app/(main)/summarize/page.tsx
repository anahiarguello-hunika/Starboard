import { SummarizeForm } from "./components/summarize-form";

export default function SummarizePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Smart Contract Summaries
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Leverage GenAI to get instant summaries of your legal contracts.
          Highlight key provisions, obligations, and potential risks in seconds.
        </p>
      </div>

      <SummarizeForm />
    </div>
  );
}
