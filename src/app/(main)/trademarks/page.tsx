
'use client';

import {
    ChevronRight
} from "lucide-react";


export default function TrademarksPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Marcas y Patentes</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Marcas y Patentes
        </h1>
         <p className="text-muted-foreground">
            Gestione sus marcas y patentes.
        </p>
      </div>
      <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Contenido para Marcas y Patentes
      </div>
    </div>
  );
}
