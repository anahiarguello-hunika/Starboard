
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Calendar as CalendarIcon, FilePlus2, ChevronDown, BookCopy, Award } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

export default function NewServiceRequestPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Solicitud de Servicio
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Cree un nuevo servicio para solicitar asistencia del equipo legal.
          </p>
        </div>
        <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <FilePlus2 className="mr-2 h-4 w-4" /> Nuevo Contrato <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/contracts/new/service-agreement">1. Contrato de Prestación de Servicios (Cliente)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contracts/new/lease-agreement">2. Contrato de Arrendamiento</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>3. Contrato de Subarrendamiento</DropdownMenuItem>
                <DropdownMenuItem>4. Contrato de Prestación de Servicio (Prestador)</DropdownMenuItem>
                <DropdownMenuItem>5. Contrato de Confidencialidad</DropdownMenuItem>
                <DropdownMenuItem>6. Contrato Individual de Trabajo (Tiempo determinado)</DropdownMenuItem>
                <DropdownMenuItem>7. Contrato Individual de Trabajo (Indeterminado con tiempo de Prueba)</DropdownMenuItem>
                <DropdownMenuItem>8. Convenio de Terminación General</DropdownMenuItem>
                <DropdownMenuItem>9. Convenio de Terminación Laboral</DropdownMenuItem>
                <DropdownMenuItem>10. Contrato de Préstamo (Obligado Solidario)</DropdownMenuItem>
                <DropdownMenuItem>11. Contrato de Compraventa de Acciones</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <BookCopy className="mr-2 h-4 w-4" /> Servicio Notarial <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>1. Constituir Sociedad</DropdownMenuItem>
                <DropdownMenuItem>2. Otorgar Poder</DropdownMenuItem>
                <DropdownMenuItem>3. Crear Asamblea</DropdownMenuItem>
                <DropdownMenuItem>4. Ratificar documento</DropdownMenuItem>
                <DropdownMenuItem>5. Protocolizar Asamblea</DropdownMenuItem>
                <DropdownMenuItem>6. Otorgar Testamento</DropdownMenuItem>
                <DropdownMenuItem>7. Otros</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
             <Button className="bg-green-600 hover:bg-green-700">
              <Award className="mr-2 h-4 w-4" /> Nueva Marca
            </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Enviar una Solicitud</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Solicitante</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="request-date">Fecha de solicitud</Label>
                        <Input id="request-date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre" />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="department">Unidad de negocio/Departamento</Label>
                        <Input id="department" placeholder="Ej: Ventas, Marketing" />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="email">Correo</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" placeholder="Tu número de teléfono" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Solicitud para servicio legal</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                     <div className="grid gap-2">
                        <Label htmlFor="description">Descripción</Label>
                        <Textarea
                            id="description"
                            placeholder="Por favor describa a detalle el problema para el cual busca consejo legal"
                            className="min-h-[120px]"
                        />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="assistance">Asistencia solicitada</Label>
                        <Textarea
                            id="assistance"
                            placeholder="Por favor describa la solicitud hacia el departamento legal"
                             className="min-h-[120px]"
                        />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="solution">Solución buscada</Label>
                        <Textarea
                            id="solution"
                            placeholder="Porfavor describa la solución buscada"
                             className="min-h-[120px]"
                        />
                    </div>
                </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Riesgo</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                             <Label>Rating</Label>
                             <RadioGroup defaultValue="bajo" className="flex gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="bajo" id="risk-low" />
                                    <Label htmlFor="risk-low">Bajo</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="medio" id="risk-medium" />
                                    <Label htmlFor="risk-medium">Medio</Label>
                                </div>
                                 <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="alto" id="risk-high" />
                                    <Label htmlFor="risk-high">Alto</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="grid gap-2">
                            <Label>Consecuencia/Impacto monetario</Label>
                             <Input id="value" placeholder="Valor $" />
                             <Input id="exposure" placeholder="Exposición $" />
                        </div>
                         <div className="grid gap-2">
                             <Label>Probabilidad de riesgo</Label>
                             <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Bajo, Medio, Alto" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="bajo">Bajo</SelectItem>
                                    <SelectItem value="medio">Medio</SelectItem>
                                    <SelectItem value="alto">Alto</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                             <Label>Habilidad legal para mitigar el riesgo</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Eliminar, Reducir, Sin impacto" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="eliminar">Eliminar</SelectItem>
                                    <SelectItem value="reducir">Reducir</SelectItem>
                                    <SelectItem value="sin-impacto">Sin impacto</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Urgencia</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                             <Label>Rating</Label>
                             <RadioGroup defaultValue="medio" className="flex gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="bajo" id="urgency-low" />
                                    <Label htmlFor="urgency-low">Bajo</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="medio" id="urgency-medium" />
                                    <Label htmlFor="urgency-medium">Medio</Label>
                                </div>
                                 <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="alto" id="urgency-high" />
                                    <Label htmlFor="urgency-high">Alto</Label>
                                </div>
                            </RadioGroup>
                        </div>
                         <div className="grid gap-2">
                            <Label htmlFor="start-date">Fecha de inicio deseada</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Inmediato, ASAP, Flexible" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="inmediato">Inmediato</SelectItem>
                                    <SelectItem value="asap">ASAP</SelectItem>
                                    <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="end-date">Fecha de fin deseada</Label>
                             <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Inmediato, ASAP, Flexible" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="inmediato">Inmediato</SelectItem>
                                    <SelectItem value="asap">ASAP</SelectItem>
                                    <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            </div>

             <div className="grid gap-2">
                <Label>Adjuntos</Label>
                <div className="flex items-center gap-4 rounded-lg border border-dashed p-4">
                    <div className="flex-1">
                        <p className="text-sm text-muted-foreground">Arrastre y suelte archivos aquí o</p>
                    </div>
                    <Button variant="outline" size="sm">
                        <Paperclip className="mr-2 h-4 w-4" />
                        Adjuntar Archivo
                    </Button>
                </div>
             </div>
          </CardContent>
          <CardFooter>
            <Button>Enviar Solicitud</Button>
          </CardFooter>
        </Card>
        <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Mejores Prácticas para Envíos</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Asuntos Claros:</strong> Use un asunto conciso y descriptivo.
                        </li>
                        <li>
                            <strong>Sea Específico:</strong> Proporcione todos los detalles necesarios para evitar demoras.
                        </li>
                        <li>
                            <strong>Adjunte Documentos:</strong> Incluya todos los documentos relevantes.
                        </li>
                         <li>
                            <strong>Establezca la Prioridad:</strong> Use la prioridad para indicar la urgencia. "Urgente" debe reservarse para asuntos críticos.
                        </li>
                    </ul>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Tiempos de Respuesta de SLA</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Baja:</strong> Dentro de 3 días hábiles</p>
                    <p><strong>Normal:</strong> Dentro de 2 días hábiles</p>
                    <p><strong>Alta:</strong> Dentro de 1 día hábil</p>
                    <p><strong>Urgente:</strong> Dentro de 4 horas hábiles</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
