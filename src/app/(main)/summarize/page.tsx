import { SummarizeForm } from "./components/summarize-form";

export default function SummarizePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Resúmenes de Contratos Inteligentes
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Aproveche la IA generativa para obtener resúmenes instantáneos de sus contratos legales.
          Destaque las disposiciones clave, las obligaciones y los riesgos potenciales en segundos.
        </p>
      </div>

      <SummarizeForm />
    </div>
  );
}
