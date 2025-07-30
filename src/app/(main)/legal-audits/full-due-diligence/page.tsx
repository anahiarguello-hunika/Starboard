
'use client';

import { ChevronRight, FileUp, Folder, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";


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

const corporateDocumentsRequirements = [
    "Favor de adjuntar Acta Constitutiva incluyendo boleta de inscripción en el Registro Público de Comercio.",
    "Favor de adjuntar Libro de Registro de Accionistas.",
    "Favor de adjuntar Libro de Variaciones del Capital Social.",
    "Favor de adjuntar las Actas de Asambleas de Accionistas y/o las Resoluciones Unánimes adoptadas fuera de asamblea.",
    "Favor de adjuntar Libro de Actas de Sesiones del Consejo de Administración y, en su caso, de los Comités Especiales.",
    "Favor de adjuntar los Títulos Accionarios emitidos.",
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
            <div className="space-y-6">
                {corporateDocumentsRequirements.map((req, index) => (
                    <div key={index} className="space-y-4 rounded-lg border p-6">
                        <Label className="text-base">{req}</Label>
                        <div className="flex items-center justify-between mt-4">
                            <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                            <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                                    <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                                    <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                                    <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                                </svg>
                                Ver carpeta
                            </Link>
                        </div>
                    </div>
                ))}
             </div>
             <div className="space-y-4 rounded-lg border p-6">
                <Label className="text-base">Favor de adjuntar la escritura pública que contenga el nombramiento de Apoderados y Representantes Legales y en su caso la boleta de inscripción en el Registro Público de Comercio (SOLO si no fueron otorgados en el Acta Constitutiva, Asamblea de Accionistas y/o Resoluciones Unánimes).</Label>
                <div className="flex items-center justify-between mt-4">
                    <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                            <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                            <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                            <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                        </svg>
                        Ver carpeta
                    </Link>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
