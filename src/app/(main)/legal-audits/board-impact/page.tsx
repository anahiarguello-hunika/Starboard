
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BoardImpactPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Impacto del Consejo</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Impacto del Consejo
        </h1>
         <p className="text-muted-foreground">
            Complete el siguiente cuestionario.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Cuestionario de Impacto del Consejo</CardTitle>
            <CardDescription>
                El objetivo de esta encuesta es proporcionarle datos para optimizar los tres factores críticos de impacto del consejo.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">1. Proceso:</h3>
              <p>los procesos optimizados para mejorar el compromiso generan un mayor potencial de impacto.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">2. Compromiso:</h3>
              <p>cuanto mayor sea el nivel de compromiso del consejo y del equipo, mayor será el potencial de impacto futuro.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">3. Estructura:</h3>
              <p>una estructura optimizada del consejo es la base de un consejo de alto impacto.</p>
            </div>
            <p>
                Esta herramienta proporcionará una calificación general de su Consejo, para medir el nivel de compromiso potencial y el impacto que su consejo está generando para su organización.
            </p>
            <p>
                Los consejos que no maximizan su impacto estratégico son costosos y pueden suponer una desventaja competitiva para sus organizaciones. Un consejo optimizado para el Alto Impacto puede ser un acelerador estratégico para el Valor Empresarial de cualquier organización.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
