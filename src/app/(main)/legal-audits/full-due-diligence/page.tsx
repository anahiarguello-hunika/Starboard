

'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function FullDueDiligencePage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Due Dilligence Completo</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Due Dilligence Completo
        </h1>
         <p className="text-muted-foreground">
            La evaluación que a continuación se presenta es una herramienta de diagnóstico sobre la situación actual de su empresa (sociedad o compañía) con el fin de determinar las áreas susceptibles a ser mejoradas dentro de la misma.
        </p>
      </div>
      <Card>
        <CardContent className="p-6 space-y-6">
            <div>
                <p className="text-sm text-muted-foreground">Se registrarán el nombre, la foto y el correo electrónico asociados con tu Cuenta de Google cuando subas archivos y envíes este formulario.</p>
            </div>
            <Separator />
            <div>
                <p className="text-sm text-destructive">* Indica que la pregunta es obligatoria</p>
            </div>
             <div className="space-y-4 rounded-lg border p-6">
                <Label htmlFor="email" className="text-base font-semibold">Correo electrónico <span className="text-destructive">*</span></Label>
                <Input id="email" placeholder="Tu dirección de correo electrónico" required />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
