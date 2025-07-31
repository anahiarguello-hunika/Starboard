
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const commercialContractQuestions = [
    {
        question: '¿Cuáles son los tipos más comunes de contratos comerciales que celebra su empresa?',
    },
    {
        question: '¿A qué área del negocio se refieren sus respuestas? (por ejemplo: toda la empresa, una unidad específica, etc.)',
    },
    {
        question: '¿Cuántos abogados forman parte del equipo legal interno?',
    },
    {
        question: '¿Cómo se gestionan internamente los contratos comerciales en su empresa?',
    },
    {
        question: '¿Cómo seleccionan a las firmas de abogados externas?',
    },
    {
        question: '¿Utilizan algún proveedor de servicios legales gestionados (managed legal services) o un centro de servicios offshore/nearshore para contratos simples de alto volumen?',
    },
    {
        question: '¿Usted y sus proveedores comparten conocimientos y participan en una gobernanza conjunta?',
    },
    {
        question: '¿Ofrecen recursos en línea (como plantillas o guías) accesibles al equipo de negocio a través de un portal?',
    },
    {
        question: '¿Brindan capacitación a los equipos de negocio sobre la gestión de contratos?',
    },
    {
        question: '¿El equipo de negocio cuenta con plantillas para contratos simples que puedan generar por sí mismos?',
    },
    {
        question: '¿Los contratos generados por el equipo de negocio están automatizados para facilitar su creación rápida?',
    },
    {
        question: '¿Existen sistemas para aprobar contratos de alto riesgo generados por el negocio?',
    },
    {
        question: '¿Tienen un programa activo para migrar trabajo legal tradicional hacia un modelo de autoservicio?',
    },
    {
        question: '¿Cómo se envían actualmente las solicitudes de apoyo al equipo legal?',
    },
    {
        question: '¿Existen niveles de servicio (SLAs) para que el equipo legal reconozca y responda a dichas solicitudes?',
    },
    {
        question: '¿Cómo manejan los picos de demanda o solicitudes masivas?',
    },
    {
        question: '¿Qué plantillas contractuales estándar tiene disponible el equipo legal?',
    },
    {
        question: '¿Las plantillas del equipo legal están automatizadas para acelerar la creación de contratos?',
    },
    {
        question: '¿El equipo legal utiliza una guía de estilo de redacción?',
    },
];

export default function ContractMaturityPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Madurez Contractual</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Madurez Contractual
        </h1>
         <p className="text-muted-foreground">
            Complete el siguiente cuestionario.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Cuestionario sobre la Gestión de Contratos Comerciales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-4 rounded-lg border p-6">
                 <div className="space-y-2">
                    <Label>¿Cuál es el número aproximado de contratos comerciales que firma su empresa al año?</Label>
                    <Input type="number" />
                </div>
                 <div className="space-y-2">
                    <Label>Nombre completo:</Label>
                    <Input />
                </div>
                 <div className="space-y-2">
                    <Label>Correo electrónico:</Label>
                    <Input type="email" />
                </div>
                 <div className="space-y-2">
                    <Label>Cargo o posición:</Label>
                    <Input />
                </div>
                <div className="space-y-2">
                    <Label>Nombre de la empresa:</Label>
                    <Input />
                </div>
            </div>
            <div className="space-y-4">
                <Card>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80%]">Pregunta</TableHead>
                                <TableHead>Valor (1-5)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {commercialContractQuestions.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.question}</TableCell>
                                    <TableCell><Input type="number" min="1" max="5" className="w-20" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
