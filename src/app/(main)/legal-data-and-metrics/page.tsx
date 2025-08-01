
'use client';

import { BarChart2 } from "lucide-react";

export default function LegalDataAndMetricsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
            <BarChart2 className="h-8 w-8" />
            Datos y Métricas Legales
        </h1>
        <p className="text-muted-foreground">
          Visualice y analice los datos y métricas de su departamento legal.
        </p>
      </div>
       <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Contenido para Datos y Métricas Legales
      </div>
    </div>
  );
}
