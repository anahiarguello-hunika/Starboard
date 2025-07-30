

'use client';

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const radioOptions = ["No implementado", "Planeado", "En desarrollo", "Implementado", "Optimizado"];

const pillars = [
    {
        name: "Cultura",
        questions: [
            "La empresa tiene definidos y comunicados su misión, visión y valores, y son la base para la toma de decisiones.",
            "La empresa promueve activamente una cultura de cumplimiento y gestión de riesgos en todos los niveles.",
            "Existe un proceso formal para la toma de decisiones estratégicas, que considera aspectos legales y de cumplimiento.",
            "La empresa fomenta la colaboración y comunicación efectiva entre el área legal y las demás áreas de la empresa.",
            "La empresa invierte en la capacitación y desarrollo de su personal en temas legales y de cumplimiento.",
        ]
    },
    {
        name: "Personas",
        questions: [
            "El área legal cuenta con el personal suficiente y con las competencias necesarias para atender las necesidades de la empresa.",
            "Existen planes de desarrollo y capacitación para el personal del área legal.",
            "Se han definido claramente los roles y responsabilidades del personal del área legal.",
            "El área legal participa activamente en la definición de las políticas y procedimientos de la empresa."
        ]
    },
    {
        name: "Procesos",
        questions: [
            "Se han identificado, documentado y estandarizado los procesos legales clave de la empresa.",
            "Existen indicadores de desempeño (KPIs) para medir la eficiencia y efectividad de los procesos legales.",
            "Se realiza un seguimiento y monitoreo continuo de los procesos legales para identificar oportunidades de mejora.",
            "Se han implementado herramientas y tecnologías para automatizar y optimizar los procesos legales.",
            "Existe un proceso formal para la gestión de contratos, desde su elaboración hasta su terminación.",
            "Se cuenta con un sistema para la gestión de litigios y controversias, que permite un seguimiento puntual de cada caso."
        ]
    },
    {
        name: "Tecnología",
        questions: [
            "El área legal cuenta con las herramientas y tecnologías necesarias para realizar su trabajo de manera eficiente.",
            "Se utiliza un sistema de gestión documental para la administración de los documentos legales de la empresa.",
            "Se han implementado herramientas para la automatización de tareas y procesos legales.",
            "La empresa utiliza herramientas de análisis de datos para la toma de decisiones en el área legal.",
            "Se cuenta con políticas y procedimientos para garantizar la seguridad de la información legal de la empresa."
        ]
    },
    {
        name: "Datos",
        questions: [
            "El área legal tiene acceso a la información y datos necesarios para la toma de decisiones.",
            "Se cuenta con un sistema para la gestión y análisis de datos legales.",
            "Se utilizan herramientas de visualización de datos para la presentación de informes y resultados del área legal.",
            "Se han definido políticas y procedimientos para garantizar la calidad y confiabilidad de los datos legales.",
            "Se realiza un análisis periódico de los datos legales para identificar tendencias y patrones."
        ]
    },
]


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
          Madurez Legal
        </h1>
         <p className="text-muted-foreground">
            Complete el siguiente cuestionario.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Cuestionario de Madurez Legal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle className="text-xl">Metodología</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                    <p>El Nivel de Madurez se determinará con base en las respuestas que se proporcionen al presente cuestionario, donde cada respuesta tiene un valor asignado, como sigue:</p>
                    <ul className="list-disc pl-6">
                        <li>No implementado = 1</li>
                        <li>Planeado = 2</li>
                        <li>En desarrollo = 3</li>
                        <li>Implementado = 4</li>
                        <li>Optimizado = 5</li>
                    </ul>
                    <p>El Nivel de Madurez (por pilar y general) se calculará con la siguiente fórmula: <br/> <code className="font-semibold text-foreground text-base">Suma de los valores de las respuestas / Total de preguntas</code></p>
                    <Separator />
                    <h3 className="text-lg font-semibold text-foreground">Niveles de Madurez</h3>
                    <ul className="list-disc pl-6">
                        <li><span className="font-semibold text-foreground">1.00 - 1.80:</span> Inicial</li>
                        <li><span className="font-semibold text-foreground">1.81 - 2.60:</span> En Desarrollo</li>
                        <li><span className="font-semibold text-foreground">2.61 - 3.40:</span> Definido</li>
                        <li><span className="font-semibold text-foreground">3.41 - 4.20:</span> Gestionado</li>
                        <li><span className="font-semibold text-foreground">4.21 - 5.00:</span> Optimizado</li>
                    </ul>
                </CardContent>
            </Card>
            
            {pillars.map((pillar) => (
                <div key={pillar.name} className="space-y-4 rounded-lg border p-6">
                    <CardHeader className="px-0 pt-0">
                        <CardTitle>{pillar.name}</CardTitle>
                    </CardHeader>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/2"></TableHead>
                                {radioOptions.map((option) => (
                                    <TableHead key={option} className="text-center">{option}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pillar.questions.map((question, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{index + 1}. {question}</TableCell>
                                    {radioOptions.map((option) => (
                                        <TableCell key={option} className="text-center">
                                            <RadioGroup>
                                                <div className="flex justify-center">
                                                    <RadioGroupItem value={`${pillar.name}-${index}-${option}`} id={`${pillar.name}-${index}-${option}`}/>
                                                </div>
                                            </RadioGroup>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}

