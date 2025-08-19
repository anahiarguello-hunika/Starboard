
'use client';

import { Calculator } from "lucide-react";

export default function CotizadorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
            <Calculator className="h-8 w-8" />
            Cotizador
        </h1>
        <p className="text-muted-foreground">
          Genere cotizaciones para sus clientes.
        </p>
      </div>
       <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Contenido para el Cotizador
      </div>
    </div>
  );
}
