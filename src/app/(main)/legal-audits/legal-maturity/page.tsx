

'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LegalMaturityPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Madurez Legal</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Madurez Legal
        </h1>
         <p className="text-muted-foreground">
            Complete el siguiente cuestionario.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Cuestionario de Madurez Legal</CardTitle>
        </CardHeader>
        <CardContent>
            {/* Questionnaire content will go here */}
            <p className="text-muted-foreground">Formato de cuestionario próximamente.</p>
        </CardContent>
      </Card>
    </div>
  );
}
