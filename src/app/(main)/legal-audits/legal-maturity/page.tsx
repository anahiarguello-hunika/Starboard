
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

const financialManagementQuestions = [
    {
        question: '¿Cuentan con un presupuesto legal anual aprobado y monitoreado?',
        pain: 'Gasto imprevisible',
        okr: 'Riesgo',
    },
    {
        question: '¿Se utilizan herramientas de seguimiento de gastos y ROI legal?',
        pain: 'Costos sin justificación',
        okr: 'Riesgo',
    },
    {
        question: '¿Existe una política clara de compras y selección de proveedores legales?',
        pain: 'Desorden del proveedor',
        okr: 'Riesgo',
    },
    {
        question: '¿Se controlan y negocian los honorarios de despachos externos?',
        pain: 'Poca eficiencia',
        okr: 'Riesgo',
    },
    {
        question: '¿Se comparan métricas de costo por tipo de asunto o servicio?',
        pain: 'Ineficiencia',
        okr: 'Riesgo',
    },
    {
        question: '¿Cómo monitorean actualmente su gasto legal?',
        pain: '',
        okr: '',
    },
];

const legalProvidersManagementQuestions = [
    {
        question: '¿Tienen criterios formales para seleccionar y evaluar despachos externos?',
        pain: 'Proveedores mal elegidos',
        okr: 'Riesgo',
    },
    {
        question: '¿Utilizan métricas o encuestas de desempeño de proveedores legales?',
        pain: 'Sin accountability',
        okr: 'Riesgo',
    },
    {
        question: '¿Tienen acuerdos de servicio (SLAs) claros con cada proveedor legal?',
        pain: 'Tiempos impredecibles',
        okr: 'Riesgo',
    },
    {
        question: '¿Revisan periódicamente contratos marco o tarifas negociadas?',
        pain: 'Términos caducos',
        okr: 'Riesgo',
    },
    {
        question: '¿Utilizan alguna herramienta digital para gestionar a estos proveedores?',
        pain: 'Desorganización',
        okr: 'Riesgo',
    },
    {
        question: '¿Qué procesos tienen para elegir o cambiar de despacho?',
        pain: '',
        okr: '',
    },
];

const legalTechnologyQuestions = [
    {
        question: '¿Cuentan con una herramienta para administrar contratos como un CLM (Contract Lifecycle Management)?',
        pain: 'Contratos dispersos',
        okr: 'Riesgo',
    },
    {
        question: '¿Tienen una base de datos de contratos centralizada y analizable?',
        pain: 'No se encuentran',
        okr: 'Riesgo',
    },
    {
        question: '¿Automatizan tareas repetitivas o documentos legales estándar?',
        pain: 'Pérdida de tiempo',
        okr: 'Crecimiento',
    },
    {
        question: '¿Integran soluciones legales con herramientas de uso ordinario como Microsoft?',
        pain: 'Silos de información',
        okr: 'Crecimiento',
    },
    {
        question: '¿Usan analítica legal para tomar decisiones informadas?',
        pain: 'Decisión sin evidencia',
        okr: 'Ambos',
    },
    {
        question: '¿Qué herramientas tecnológicas usan hoy en la empresa para los temas legales?',
        pain: '',
        okr: '',
    },
];

const legalSupportModelsQuestions = [
    {
        question: '¿Usan proveedores alternativos de servicios legales para tareas operativas?',
        pain: 'Carga operativa',
        okr: 'Crecimiento',
    },
    {
        question: '¿Tienen acuerdos con firmas especializadas en ciertos temas legales?',
        pain: 'Falta de especialización',
        okr: 'Crecimiento',
    },
    {
        question: '¿Han tercerizado la revisión de contratos, due diligence u otros procesos?',
        pain: 'Estructura costosa',
        okr: 'Riesgo',
    },
    {
        question: '¿Evalúan costo-beneficio entre hacerlo internamente contra tercerizar la función legal integralmente?',
        pain: 'Descontrol financiero',
        okr: 'Riesgo',
    },
    {
        question: '¿Se tiene claridad sobre qué funciones deben mantenerse internas?',
        pain: 'Recursos mal usados',
        okr: 'Ambos',
    },
    {
        question: '¿Cómo definen qué tareas delegan o tercerizan?',
        pain: '',
        okr: '',
    },
];

const legalProjectManagementQuestions = [
    {
        question: '¿Asignan un project manager (interno o externo) a proyectos legales clave?',
        pain: 'Desorden legal',
        okr: 'Riesgo',
    },
    {
        question: '¿Usan herramientas de seguimiento de proyectos?',
        pain: 'Sin trazabilidad',
        okr: 'Riesgo',
    },
    {
        question: '¿Definen objetivos, tiempos y entregables claros por proyecto legal?',
        pain: 'Dilación de asuntos',
        okr: 'Riesgo',
    },
    {
        question: '¿Se hacen reuniones de seguimiento legales?',
        pain: 'Inercia y atraso',
        okr: 'Riesgo',
    },
    {
        question: '¿Miden resultados legales por proyecto?',
        pain: 'Sin impacto medido',
        okr: 'Ambos',
    },
    {
        question: '¿Qué metodología usan para gestionar asuntos legales?',
        pain: '',
        okr: '',
    },
];

const legalProcessOptimizationQuestions = [
    {
        question: '¿Han mapeado sus flujos legales críticos (ej. Onboarding de trabajadores, o procesos de contratos más recurrentes)?',
        pain: 'Flujo caótico',
        okr: 'Riesgo',
    },
    {
        question: '¿Se han identificado cuellos de botella o áreas repetitivas?',
        pain: 'Pérdida de eficiencia',
        okr: 'Riesgo',
    },
    {
        question: '¿Usan herramientas para automatizar tareas?',
        pain: 'Uso ineficiente de talento',
        okr: 'Riesgo',
    },
    {
        question: '¿Han implementado estándares de calidad legal?',
        pain: 'Variabilidad y errores',
        okr: 'Riesgo',
    },
    {
        question: '¿Monitorean el tiempo promedio por tipo de proyecto legal?',
        pain: 'Desconocimiento de performance',
        okr: 'Crecimiento',
    },
    {
        question: '¿Qué procesos legales considera que deben mejorarse?',
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
             <div className="space-y-4">
                <h2 className="text-xl font-bold">2. Gestión Financiera Legal</h2>
                <p><strong className="text-foreground">Dolor asociado:</strong> Gasto legal descontrolado, falta de presupuestos o visibilidad de costos del área.</p>
                <p><strong className="text-foreground">Objetivo:</strong> Controlar, predecir y optimizar el gasto legal de la empresa.</p>
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
                            {financialManagementQuestions.map((item, index) => (
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
             <div className="space-y-4">
                <h2 className="text-xl font-bold">3. Gestión de Proveedores Legales</h2>
                <p><strong className="text-foreground">Dolor asociado:</strong> Proveedores legales mal evaluados, sin métricas ni alineación estratégica con la empresa.</p>
                <p><strong className="text-foreground">Objetivo:</strong> Maximizar valor y desempeño de proveedores legales.</p>
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
                            {legalProvidersManagementQuestions.map((item, index) => (
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
            <div className="space-y-4">
                <h2 className="text-xl font-bold">4. Uso de Tecnología Legal</h2>
                <p><strong className="text-foreground">Dolor asociado:</strong> Procesos manuales, contratos desorganizados, falta de sistema de reporteo y control de contratos.</p>
                <p><strong className="text-foreground">Objetivo:</strong> Digitalizar y automatizar funciones legales clave en la empresa.</p>
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
                            {legalTechnologyQuestions.map((item, index) => (
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
             <div className="space-y-4">
                <h2 className="text-xl font-bold">5. Modelos Alternativos de Apoyo Legal</h2>
                <p><strong className="text-foreground">Dolor asociado:</strong> Personal interno sobrecargados con tareas legales de bajo valor.</p>
                <p><strong className="text-foreground">Objetivo:</strong> Externalizar o delegar funciones legales no estratégicas.</p>
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
                            {legalSupportModelsQuestions.map((item, index) => (
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
            <div className="space-y-4">
                <h2 className="text-xl font-bold">7. Gestión de Proyectos Legales</h2>
                <p><strong className="text-foreground">Dolor asociado:</strong> Asuntos legales desorganizados, sin fechas claras ni responsables.</p>
                <p><strong className="text-foreground">Objetivo:</strong> Ejecutar proyectos legales con enfoque ágil y trazable.</p>
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
                            {legalProjectManagementQuestions.map((item, index) => (
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
            <div className="space-y-4">
                <h2 className="text-xl font-bold">8. Optimización de Procesos Legales</h2>
                <p><strong className="text-foreground">Dolor asociado:</strong> Asuntos legales desorganizados, sin fechas claras ni responsables.</p>
                <p><strong className="text-foreground">Objetivo:</strong> Ejecutar proyectos legales con enfoque ágil y trazable.</p>
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
                            {legalProcessOptimizationQuestions.map((item, index) => (
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
