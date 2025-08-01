
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LegalRisksPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Riesgos Legales</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Riesgos Legales
        </h1>
         <p className="text-muted-foreground">
            Complete el siguiente cuestionario.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Cuestionario de Riesgos Legales</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Formato de cuestionario próximamente.</p>
        </CardContent>
      </Card>
    </div>
  );
}
