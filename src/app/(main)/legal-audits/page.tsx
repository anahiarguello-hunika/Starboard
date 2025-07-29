
'use client';

import {
    ChevronRight
} from "lucide-react";


export default function LegalAuditsPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Auditorías Legales
        </h1>
      </div>
      <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Contenido para Auditorías Legales
      </div>
    </div>
  );
}
