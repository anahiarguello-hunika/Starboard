

'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BasicDueDiligencePage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Due Dilligence Básico</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Due Dilligence Básico
        </h1>
         <p className="text-muted-foreground">
            Complete el siguiente cuestionario.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Cuestionario de Due Dilligence Básico</CardTitle>
        </CardHeader>
        <CardContent>
            {/* Questionnaire content will go here */}
            <p className="text-muted-foreground">Formato de cuestionario próximamente.</p>
        </CardContent>
      </Card>
    </div>
  );
}
