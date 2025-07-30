
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const corporateRequirements = [
    "Primer Testimonio del acta constitutiva.",
    "Boleta de inscripción del Acta Constitutiva.",
    "¿Los Estatutos han sufrido alguna modificación?",
    "Libros Corporativos actualizados incluye...",
    "Títulos de acciones representativos del c...",
    "En caso que la Sociedad haya emitido lo...",
    "Resoluciones Unánimes adoptadas fuera...",
    "En caso de contar con Comités Especial...",
    "¿Se han nombrado Apoderados o Repres...",
];

const radioOptions = [
    "Sí, se encuentra actualizado.",
    "Sí, pero no se encuentra actualizado.",
    "Sí",
    "No"
];

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
             <div className="space-y-4 rounded-lg border p-6">
                <Label className="text-base font-semibold">Mencione si la Sociedad cuenta con los siguientes requerimientos: <span className="text-destructive">*</span></Label>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            {radioOptions.map((option) => (
                                <TableHead key={option} className="text-center">{option}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         {corporateRequirements.map((req, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{index + 1}. {req}</TableCell>
                                {radioOptions.map((option) => (
                                    <TableCell key={option} className="text-center">
                                        <RadioGroup>
                                            <RadioGroupItem value={`${req}-${option}`} id={`${req}-${option}`}/>
                                        </RadioGroup>
                                    </TableCell>
                                ))}
                            </TableRow>
                         ))}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
