
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
        options: ['Sí', 'No'],
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
    {
        question: '¿Cómo se actualizan las plantillas contractuales?',
    },
    {
        question: '¿Existen niveles de servicio para que el equipo legal complete la redacción de los contratos?',
    },
    {
        question: '¿Cómo aseguran que se mantengan posiciones consistentes durante las negociaciones?',
    },
    {
        question: '¿Utilizan herramientas de inteligencia artificial (IA) para analizar contratos simples redactados por la contraparte?',
    },
    {
        question: '¿Tienen objetivos de tiempo para que el equipo legal entregue versiones durante una negociación?',
    },
    {
        question: '¿El equipo legal utiliza herramientas de redacción para acelerar las negociaciones contractuales?',
    },
    {
        question: '¿El equipo legal utiliza herramientas de colaboración para facilitar la negociación?',
    },
    {
        question: '¿Cuentan con un proceso formal de aprobación de contratos?',
    },
    {
        question: '¿Utilizan firmas electrónicas?',
    },
    {
        question: '¿Llevan seguimiento del tiempo total que toma cerrar un contrato?',
    },
    {
        question: '¿Dónde y cómo almacenan sus contratos actualmente?',
    },
    {
        question: '¿Cómo gestionan los contratos una vez firmados?',
    },
    {
        question: '¿Cómo dan seguimiento al proceso contractual completo?',
    },
    {
        question: '¿Qué mecanismos utilizan para mejorar continuamente su proceso de contratación?',
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
            <div className="space-y-8">
                {commercialContractQuestions.map((item, index) => (
                    <Card key={index} className="p-4">
                        <CardHeader>
                           <CardTitle className="text-base">{index + 1}. {item.question}</CardTitle>
                        </CardHeader>
                         <CardContent>
                            <RadioGroup className="mb-4 space-y-2">
                                {item.options && item.options.map((option: string) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option.toLowerCase()} id={`q${index}-${option.toLowerCase()}`} />
                                        <Label htmlFor={`q${index}-${option.toLowerCase()}`} className="font-normal">{option}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                             <Textarea placeholder="Escriba su respuesta aquí" />
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                    <Label>¿Tiene algún otro comentario que desee compartir?</Label>
                    <Textarea />
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
