
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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

const boardParticipantsOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ">10"];
const independentParticipantsOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ">10"];
const compensationOptions = [
    "No pagado",
    "Tarifa por reunión",
    "Por reunión virtual",
    "Tarifa de presidente de comité",
    "Estipendio anual",
    "Equidad",
    "Phantom Equity",
    "Bono en efectivo / Carry",
    "Tarifa de presidente del consejo",
    "Tarifa de miembro principal del consejo",
    "No lo sé"
];

const annualCompensationOptions = [
    "0",
    "< USD 10,000",
    "USD 11,000 - 29,000",
    "USD 30,000 - 60,000",
    "USD 61,000 - 100,000",
    "USD 100,000 - 500,000",
    "> USD 500,000"
];

const meetingFrequencyOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", ">12"];

const meetingDynamicsOptions = [
    "Los miembros del Consejo aportan poco valor a las reuniones",
    "Las discusiones son altamente colaborativas",
    "La gerencia domina (más del 75%) los informes o la presentación de información en la reunión",
    "Las discusiones pueden ser conflictivas",
    "Hay pocas presentaciones de la gerencia y los miembros del consejo hablan la mayor parte de la reunión",
    "Unos pocos miembros del consejo dominan las discusiones",
    "Se dedica la misma cantidad de tiempo a las presentaciones de la gerencia y a la participación de los miembros del consejo",
    "Todos los miembros del consejo contribuyen por igual",
    "La gerencia pasa la mayor parte del tiempo de la reunión (51-75%) presentando información",
    "Los miembros del consejo crean un impacto transformador durante la reunión"
];

const recentMeetingMonthOptions = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

const performanceEvaluationOptions = [
    "No",
    "Sí como Grupo",
    "Sí individualmente",
    "Sí como grupo e individualmente"
];

const evaluationFrequencyOptions = [
    "Informalmente después de cada reunión",
    "Formalmente después de cada reunión (escrito y documentado)",
    "Evaluaciones informales anuales (o más) del consejo",
    "Evaluaciones formales anuales del consejo (escritas y documentadas)",
    "Formalmente una vez cada dos años",
    "Formalmente una vez cada tres años"
];

const meetingFeelingsOptions = [
    "Curioso(a) sobre los siguientes pasos",
    "Sorprendido(a)",
    "Como si fuera una reunión normal",
    "Aburrido(a)",
    "Temeroso(a)",
    "Apresurado(a)",
    "Energizado(a)",
    "Altamente comprometido(a)",
    "Inspirado(a)",
    "Curioso(a) sobre cuánto valor creó la reunión",
    "Frustrado(a)",
    "Como si fuera una pérdida de tiempo",
    "Como si fuera una reunión impactante",
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
             <Separator />
             <div className="space-y-6">
                 <div className="space-y-4">
                    <Label>11. ¿Número de participantes permanentes en el Consejo? <span className="text-destructive">*</span></Label>
                     <RadioGroup className="flex flex-wrap gap-x-6 gap-y-2">
                        {boardParticipantsOptions.map((option) => (
                            <div key={`participants-${option}`} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`participants-${option}`} />
                                <Label htmlFor={`participants-${option}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                 <div className="space-y-4">
                    <Label>12. ¿Cuántos de los participantes permanentes en el Consejo son independientes? <span className="text-destructive">*</span></Label>
                     <RadioGroup className="flex flex-wrap gap-x-6 gap-y-2">
                        {independentParticipantsOptions.map((option) => (
                            <div key={`independent-${option}`} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`independent-${option}`} />
                                <Label htmlFor={`independent-${option}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                 <div className="space-y-4">
                    <Label>13. ¿Cómo se remunera actualmente a los miembros del Consejo? (Elija todas las que correspondan) <span className="text-destructive">*</span></Label>
                     <div className="grid grid-cols-2 gap-4">
                        {compensationOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <Checkbox id={option.toLowerCase().replace(/\s/g, '-')} />
                                <Label htmlFor={option.toLowerCase().replace(/\s/g, '-')} className="font-normal">{option}</Label>
                            </div>
                        ))}
                         <div className="flex items-center space-x-2">
                            <Checkbox id="otro-remuneracion" />
                            <Label htmlFor="otro-remuneracion" className="font-normal">Otro - Escriba (Requerido)</Label>
                            <Input className="max-w-xs" />
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="space-y-6">
                <div className="space-y-4">
                    <Label>14. Compensación anual promedio en efectivo aproximada de cada miembro del Consejo <span className="text-destructive">*</span></Label>
                    <RadioGroup>
                        {annualCompensationOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`compensation-${option.toLowerCase().replace(/\s/g, '-')}`} />
                                <Label htmlFor={`compensation-${option.toLowerCase().replace(/\s/g, '-')}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="space-y-4">
                    <Label>15. ¿Cuántas veces al año se reúne el Consejo, en persona o virtualmente? (sin contar las reuniones de comités) <span className="text-destructive">*</span></Label>
                    <RadioGroup className="flex flex-wrap gap-x-6 gap-y-2">
                        {meetingFrequencyOptions.map((option) => (
                            <div key={`frequency-${option}`} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`frequency-${option}`} />
                                <Label htmlFor={`frequency-${option}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="space-y-4">
                    <Label>16. ¿Cómo describiría la dinámica típica de las reuniones? (elija las dos que se aplican con más frecuencia) <span className="text-destructive">*</span></Label>
                    <div className="grid grid-cols-1 gap-4">
                        {meetingDynamicsOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <Checkbox id={option.toLowerCase().replace(/\s/g, '-')} />
                                <Label htmlFor={option.toLowerCase().replace(/\s/g, '-')} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Separator />
            <div className="space-y-6">
                <div className="space-y-4">
                    <Label>17. ¿Cuál es el mes de su reunión más reciente? <span className="text-destructive">*</span></Label>
                    <RadioGroup>
                        {recentMeetingMonthOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`month-${option.toLowerCase()}`} />
                                <Label htmlFor={`month-${option.toLowerCase()}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="space-y-4">
                    <Label>18. ¿Se evalúa el rendimiento del Consejo (ya sea como grupo o individualmente)? <span className="text-destructive">*</span></Label>
                    <RadioGroup>
                        {performanceEvaluationOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`eval-${option.toLowerCase().replace(/\s/g, '-')}`} />
                                <Label htmlFor={`eval-${option.toLowerCase().replace(/\s/g, '-')}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="space-y-4">
                    <Label>19. Si respondió sí a la pregunta anterior, ¿con qué frecuencia la organización realiza evaluaciones o encuestas a los miembros de su consejo? <span className="text-destructive">*</span></Label>
                     <div className="grid grid-cols-1 gap-4">
                        {evaluationFrequencyOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <Checkbox id={`freq-${option.toLowerCase().replace(/\s/g, '-')}`} />
                                <Label htmlFor={`freq-${option.toLowerCase().replace(/\s/g, '-')}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                        <div className="flex items-center space-x-2">
                            <Checkbox id="freq-otro" />
                            <Label htmlFor="freq-otro" className="font-normal">Otro - Escriba</Label>
                            <Input className="max-w-xs" />
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="space-y-6">
                <div className="space-y-4">
                    <Label>20. Por lo general, cuando salgo de una reunión de consejo típica, a menudo me siento (seleccione la que se aplica con más frecuencia): <span className="text-destructive">*</span></Label>
                    <RadioGroup>
                        {meetingFeelingsOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.toLowerCase().replace(/\s/g, '-')} id={`feeling-${option.toLowerCase().replace(/\s/g, '-')}`} />
                                <Label htmlFor={`feeling-${option.toLowerCase().replace(/\s/g, '-')}`} className="font-normal">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="space-y-4">
                    <Label>21. En general, creo que este Consejo proporciona a la empresa un alto grado de valor estratégico. Utilice la escala para determinar qué nivel de valor se está creando. <span className="text-destructive">*</span></Label>
                    <div className="flex flex-col gap-2">
                       <Slider defaultValue={[50]} max={100} step={1} />
                       <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Totalmente en desacuerdo</span>
                            <span>De acuerdo</span>
                            <span>Totalmente de acuerdo</span>
                       </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6 text-center">
                 <p className="text-sm">Haga clic en el botón Enviar a continuación para completar la encuesta y recibir su informe.</p>
                <Button>Enviar</Button>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-semibold">0%</span>
                    <Progress value={0} className="w-1/3" />
                </div>
            </div>

        </CardContent>
      </Card>
    </div>
  );
}

    