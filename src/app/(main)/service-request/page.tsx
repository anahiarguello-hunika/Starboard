
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
import { Textarea } from "@/components/ui/textarea";
import { Paperclip } from "lucide-react";

export default function ServiceRequestPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Solicitud de Servicio
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Cree un nuevo ticket para solicitar asistencia del equipo legal.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Enviar una Solicitud</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="subject">Asunto</Label>
              <Input id="subject" placeholder="Ej: Revisión de NDA con Acme Corp" />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="type">Tipo de Solicitud</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consulta">Consulta Legal</SelectItem>
                      <SelectItem value="revision">Revisión de Contrato</SelectItem>
                      <SelectItem value="redaccion">Redacción de Documento</SelectItem>
                      <SelectItem value="pi">Asunto de PI</SelectItem>
                       <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="priority">Prioridad</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione la prioridad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baja">Baja</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="alta">Alta</SelectItem>
                      <SelectItem value="urgente">Urgente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                placeholder="Por favor, describa su solicitud en detalle..."
                className="min-h-[150px]"
              />
              <p className="text-xs text-muted-foreground">
                Proporcione todos los detalles relevantes, como nombres de las partes, fechas clave y el resultado deseado.
              </p>
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
