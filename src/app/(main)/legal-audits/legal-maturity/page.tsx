
'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const strategicPlanningQuestions = [
    {
        question: '¿El área legal tiene un plan estratégico formal alineado al negocio?',
        pain: 'Legal no contribuye al crecimiento',
        okr: 'Crecimiento',
    },
    {
        question: '¿Se definen OKRs o KPIs específicos para el área legal?',
        pain: 'Sin rumbo ni medición',
        okr: 'Crecimiento',
    },
    {
        question: '¿Legal participa en decisiones de negocio con impacto estratégico?',
        pain: 'Aislamiento legal',
        okr: 'Crecimiento',
    },
    {
        question: '¿Se actualiza periódicamente el plan legal con base en cambios regulatorios?',
        pain: 'Reacción tardía',
        okr: 'Riesgo',
    },
    {
        question: '¿Existe una cultura de medición de resultados dentro del área legal?',
        pain: 'Falta de accountability',
        okr: 'Ambos',
    },
    {
        question: '¿Cómo se alinea hoy su área legal con la estrategia del negocio?',
        pain: '',
        okr: '',
    },
];

export default function LegalMaturityPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Madurez Legal</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Diagnóstico de madurez legal
        </h1>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Cuestionario de Madurez Legal</CardTitle>
            <CardDescription>
                A continuación presentamos un cuestionario de diagnóstico de madurez legal de un departamento legal basado en el Legal Operations Maturity Model de CLOC® (Corporate Legal Operations Consortium). Está diseñado para que conocer el grado de madurez legal de nuestros clientes, mediante sesiones de diagnóstico o auditorías internas y medirlos en función de una métrica específica en cada una de las 12 funciones clave de las operaciones legales de un departamento legal.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold">Objetivo</h2>
                <p className="text-muted-foreground">Diagnosticar el nivel de madurez en operaciones legales y diseñar un plan de mejora continua para crecimiento y reducción de riesgos legales.</p>
            </div>
            <div>
                 <p className="text-muted-foreground">Cada función se evalúa con 5 preguntas cerradas (escala del 1 al 5), más 1 pregunta abierta para explorar contexto. La escala está alineada con los niveles de madurez de CLOC:</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">ESCALA DE MADUREZ CLOC</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                    <li><strong className="text-foreground">1 = Ad Hoc:</strong> No existe un proceso formal</li>
                    <li><strong className="text-foreground">2 = Emergente:</strong> Existe intención, pero no hay sistematización</li>
                    <li><strong className="text-foreground">3 = Definido:</strong> Hay un proceso establecido, pero no se mide ni mejora</li>
                    <li><strong className="text-foreground">4 = Gestionado:</strong> Se ejecuta, se mide y mejora</li>
                    <li><strong className="text-foreground">5 = Optimizado:</strong> Es excelente, digitalizado, y crea ventaja estratégica</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h2 className="text-xl font-bold">1. Planeación Estratégica Legal</h2>
                <p><strong className="text-foreground">Dolor asociado:</strong> El área legal no contribuye al crecimiento del negocio ni anticipa riesgos relevantes.</p>
                <p><strong className="text-foreground">Objetivo:</strong> Integrar el área legal a la planeación estratégica corporativa de la empresa.</p>
                <Card>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50%]">Pregunta</TableHead>
                                <TableHead>Dolor</TableHead>
                                <TableHead>OKR</TableHead>
                                <TableHead>Valor (1-5)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {strategicPlanningQuestions.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.question}</TableCell>
                                    <TableCell>{item.pain}</TableCell>
                                    <TableCell>{item.okr}</TableCell>
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
