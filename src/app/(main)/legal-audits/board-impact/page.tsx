
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const boardRoles = [
    "Externo no independiente",
    "Externo independiente",
    "Familiar no accionista",
    "Accionista",
    "Familiar accionista",
    "Observador",
    "Presidente del Consejo",
    "Director General",
    "Equipo ejecutivo",
    "Secretario",
    "Otro - Especifique (requerido)",
];

const boardTypes = [
    "Consejo de Administración (Fiduciario)",
    "Consejo Consultivo (No Fiduciario)",
    "Híbrido",
];

const ownershipStructures = [
    "1ra Gen FOB (controles familiares)",
    "2da Gen FOB (controles familiares)",
    "3ra Gen y más FOB (controles familiares)",
    "Empresa Familiar (sin control)",
    "Propietario mayoritario único (posee más del 50%)",
    "Mayoría de grupo pequeño (un grupo pequeño posee más del 50% de la empresa)",
    "Propiedad/control de Capital de Riesgo",
    "Propiedad/control de Capital Privado",
    "Propiedad de los empleados (los empleados poseen más del 50%) incluyendo sociedades",
    "Empresa privada con varios accionistas no relacionados",
    "Empresa Pública",
    "Propiedad del Gobierno o Cuasi-Gobierno",
    "Fundación/sin fines de lucro",
];

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
        <CardContent className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
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
            </div>
            <Separator />
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="first-name">1. Nombre <span className="text-destructive">*</span></Label>
                    <Input id="first-name" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="last-name">2. Apellido <span className="text-destructive">*</span></Label>
                    <Input id="last-name" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="contact-email">3. Correo electrónico de contacto <span className="text-destructive">*</span></Label>
                    <Input id="contact-email" type="email" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="company-name">4. Nombre de la empresa <span className="text-destructive">*</span></Label>
                    <Input id="company-name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="country">5. País <span className="text-destructive">*</span></Label>
                    <Select>
                        <SelectTrigger id="country">
                            <SelectValue placeholder="-- Por favor seleccione --" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mx">México</SelectItem>
                            <SelectItem value="us">Estados Unidos</SelectItem>
                            <SelectItem value="ca">Canadá</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-4">
                    <Label>6. ¿Cuál es su función en el Consejo?</Label>
                     <p className="text-sm">Haga clic en todos los que desee <span className="text-destructive">*</span></p>
                    <div className="grid grid-cols-2 gap-4">
                        {boardRoles.map((role) => (
                            <div key={role} className="flex items-center space-x-2">
                                <Checkbox id={role.toLowerCase().replace(/\s/g, '-')} />
                                <Label htmlFor={role.toLowerCase().replace(/\s/g, '-')} className="font-normal">{role}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Separator />
             <div className="space-y-6">
                 <div className="space-y-4">
                    <Label>7. ¿Cuál es el tipo de Consejo para esta empresa? <span className="text-destructive">*</span></Label>
                     <RadioGroup>
                        {boardTypes.map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                                <RadioGroupItem value={type} id={type.toLowerCase().replace(/\s/g, '-')} />
                                <Label htmlFor={type.toLowerCase().replace(/\s/g, '-')} className="font-normal">{type}</Label>
                            </div>
                        ))}
                         <div className="flex items-center space-x-2">
                            <RadioGroupItem value="otro" id="otro-type" />
                            <Label htmlFor="otro-type" className="font-normal">Otro - Escriba</Label>
                            <Input className="max-w-xs" />
                        </div>
                    </RadioGroup>
                </div>

                 <div className="space-y-2">
                    <Label htmlFor="company-location">8. Ubicación de la empresa <span className="text-destructive">*</span></Label>
                    <Select>
                        <SelectTrigger id="company-location">
                            <SelectValue placeholder="-- Por favor seleccione --" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mx">México</SelectItem>
                            <SelectItem value="us">Estados Unidos</SelectItem>
                            <SelectItem value="ca">Canadá</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4">
                    <Label>9. Estructura de propiedad <span className="text-destructive">*</span></Label>
                     <RadioGroup>
                        {ownershipStructures.map((structure) => (
                            <div key={structure} className="flex items-center space-x-2">
                                <RadioGroupItem value={structure} id={structure.toLowerCase().replace(/\s/g, '-')} />
                                <Label htmlFor={structure.toLowerCase().replace(/\s/g, '-')} className="font-normal">{structure}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                 <div className="space-y-2">
                    <Label htmlFor="company-revenue">10. Proporcione los ingresos de la empresa a la que sirve este Consejo <span className="text-destructive">*</span></Label>
                    <Select>
                        <SelectTrigger id="company-revenue">
                            <SelectValue placeholder="-- Por favor seleccione --" />
                        </SelectTrigger>
                        <SelectContent>
                             <SelectItem value="rev-1">Menos de $1M</SelectItem>
                            <SelectItem value="rev-2">$1M - $10M</SelectItem>
                            <SelectItem value="rev-3">$10M - $50M</SelectItem>
                            <SelectItem value="rev-4">$50M - $100M</SelectItem>
                             <SelectItem value="rev-5">Más de $100M</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            </div>
        </CardContent>
      </Card>
    </div>
  );
}

