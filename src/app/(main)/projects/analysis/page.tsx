
'use client';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart, ZAxis, Scatter } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const priorityMatrixData = [{ x: 4, y: 3.5, z: 200 }];
const opportunityMatrixData = [{ x: 3.2, y: 2, z: 200 }];

const priorityFactors = [
    { category: 'Prioridad CLOC', factor: 'Importancia para CLOC', value: 'Crítico para el Negocio', points: 4 },
    { category: 'Prioridad CLOC', factor: 'Alineación con Estrategias CLOC', value: 'Coincidencia Directa', points: 4 },
    { category: 'Prioridad CLOC', factor: 'Riesgo/Recompensa para CLOC', value: 'Bajo Riesgo / Alta Recompensa', points: 4 },
    { category: 'Prioridad CLOC', factor: 'Beneficio Financiero Total (Ahorro/Evitación de Costos o Ingresos)', value: '500K - 1M', points: 3 },
    { category: 'Prioridad del Departamento', factor: 'Alineación con Estrategias Legales', value: 'Coincidencia Directa', points: 4 },
    { category: 'Prioridad del Departamento', factor: 'Alineación con Portafolio Legal', value: 'Coincidencia Directa', points: 4 },
    { category: 'Prioridad del Departamento', factor: 'Riesgo/Recompensa para Legal', value: 'Bajo Riesgo / Alta Recompensa', points: 4 },
    { category: 'Prioridad del Departamento', factor: 'Impacto en la Comunidad de Usuarios', value: 'Alto Impacto', points: 4 },
];

const opportunityFactors = [
    { category: 'Complejidad de la Solución', factor: 'Alcance de la Solución Implementada', value: 'Equipo Único', points: 1 },
    { category: 'Complejidad de la Solución', factor: 'Grupos CLOC involucrados en la Solución', value: 'Múltiples Grupos', points: 4 },
    { category: 'Complejidad de la Solución', factor: 'Complejidad de Desarrollo de la Solución', value: 'Reutilización Significativa de Tecnología', points: 1 },
    { category: 'Complejidad de la Solución', factor: 'Complejidad de Integración de la Solución', value: 'Sin Integración', points: 1 },
    { category: 'Posicionamiento Estratégico', factor: 'Medidor "CLOC"', value: 'Beat-up', points: 4 },
    { category: 'Posicionamiento Estratégico', factor: 'Nivel de Estandarización', value: 'Solución "Empresarial"', points: 4 },
    { category: 'Posicionamiento Estratégico', factor: 'Sensibilidad al Riesgo', value: 'Altas Consecuencias para el Negocio', points: 3 },
];

const roiData = [
  { name: 'Q1', inversion: -50, retorno: 0, neto: -50 },
  { name: 'Q2', inversion: -50, retorno: 100, neto: 50 },
  { name: 'Q3', inversion: -60, retorno: 150, neto: 90 },
  { name: 'Q4', inversion: -70, retorno: 200, neto: 130 },
  { name: 'Q5', inversion: -80, retorno: 220, neto: 140 },
  { name: 'Q6', inversion: -90, retorno: 250, neto: 160 },
  { name: 'Q7', inversion: -100, retorno: 280, neto: 180 },
];


const ChartQuadrant = ({ x, y, width, height, fill, label, labelX, labelY }: any) => (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} opacity={0.1} />
      <text x={labelX} y={labelY} fontSize="10" textAnchor="middle" dominantBaseline="middle" fill="hsl(var(--muted-foreground))">
        {label}
      </text>
    </g>
);

const projectManagementData = Array(10).fill({
    priority: '',
    project: '',
    responsible: '',
    process: '',
    progress: [false, false, false, false, false],
    scheduled: '',
    status: '',
});

export default function ProjectAnalysisPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold font-headline">Análisis de Proyectos</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Matriz de Prioridad</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
                                    <CartesianGrid />
                                    <XAxis type="number" dataKey="x" name="Prioridad del Departamento" unit="" domain={[0, 5]} label={{ value: "Prioridad del Departamento", position: "bottom", offset: 15 }} />
                                    <YAxis type="number" dataKey="y" name="Prioridad CLOC" unit="" domain={[0, 5]} label={{ value: "Prioridad CLOC", angle: -90, position: 'insideLeft', offset: -20 }} />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <ZAxis type="number" dataKey="z" range={[100, 1000]} />
                                    <ChartQuadrant x={2.5} y={0} width={2.5} height={2.5} fill="hsl(var(--destructive))" />
                                    <ChartQuadrant x={0} y={2.5} width={2.5} height={2.5} fill="hsl(var(--destructive))" />
                                    <ChartQuadrant x={0} y={0} width={2.5} height={2.5} fill="hsl(var(--destructive))" />
                                    <ChartQuadrant x={2.5} y={2.5} width={2.5} height={2.5} fill="hsl(var(--accent))" label="Alto Potencial de Selección" labelX={3.75} labelY={3.75} />
                                    <Scatter name="Proyectos" data={priorityMatrixData} fill="hsl(var(--primary))" />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Matriz de Caracterización de Oportunidades</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                           <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
                                    <CartesianGrid />
                                    <XAxis type="number" dataKey="x" name="Posicionamiento Estratégico" unit="" domain={[0, 5]} label={{ value: "Posicionamiento Estratégico", position: "bottom", offset: 15 }} />
                                    <YAxis type="number" dataKey="y" name="Complejidad de la Solución" unit="" domain={[0, 5]} label={{ value: "Complejidad de la Solución", angle: -90, position: 'insideLeft', offset: -20 }} />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <ZAxis type="number" dataKey="z" range={[100, 1000]} />
                                    <ChartQuadrant x={2.5} y={2.5} width={2.5} height={2.5} fill="hsl(var(--chart-2))" label="Altamente Complejo y Estratégicamente Alineado" labelX={3.75} labelY={3.75} />
                                    <ChartQuadrant x={2.5} y={0} width={2.5} height={2.5} fill="hsl(var(--accent))" label="Cuadrante Objetivo: Mayor Valor para el Departamento" labelX={3.75} labelY={1.25} />
                                    <Scatter name="Proyectos" data={opportunityMatrixData} fill="hsl(var(--primary))" />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Factores de Prioridad</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Categoría</TableHead>
                                    <TableHead>Factor</TableHead>
                                    <TableHead>Valor</TableHead>
                                    <TableHead>Puntos</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {priorityFactors.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.category}</TableCell>
                                        <TableCell>{item.factor}</TableCell>
                                        <TableCell>{item.value}</TableCell>
                                        <TableCell>{item.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Factores de Oportunidad</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Categoría</TableHead>
                                    <TableHead>Factor</TableHead>
                                    <TableHead>Valor</TableHead>
                                    <TableHead>Puntos</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {opportunityFactors.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.category}</TableCell>
                                        <TableCell>{item.factor}</TableCell>
                                        <TableCell>{item.value}</TableCell>
                                        <TableCell>{item.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Retorno de la Inversión</CardTitle>
                </CardHeader>
                <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={roiData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis unit="K" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="inversion" name="Inversión Acumulada, $K" stackId="a" fill="hsl(var(--destructive))" />
                            <Bar dataKey="retorno" name="Retorno Acumulado, $K" stackId="a" fill="hsl(var(--accent))" />
                            <Bar dataKey="neto" name="Ahorros o Pérdidas Netas/M o Q, $K" fill="hsl(var(--primary))" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notas/Supuestos del ROI</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea 
                        defaultValue="La inversión en la conferencia representa las cinco contribuciones de patrocinadores Platino de $20K. Además, la cuota de participante es de $800 por cada asistente. Los gastos de la conferencia incluyen salas de presentación, comidas y gastos imprevistos."
                        rows={4}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Administrador de Proyectos Legales</CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <div className="flex gap-4">
                        <Table className="w-auto">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="min-w-[100px]">Prioridad</TableHead>
                                    <TableHead className="min-w-[200px]">Proyecto</TableHead>
                                    <TableHead className="min-w-[150px]">Responsable</TableHead>
                                    <TableHead className="min-w-[150px]">Proceso Impactado</TableHead>
                                    <TableHead className="min-w-[250px]">
                                        <div className="text-center border-b pb-1 mb-1">Avance</div>
                                        <div className="grid grid-cols-5 text-center">
                                            <span>0%</span>
                                            <span></span>
                                            <span>50%</span>
                                            <span></span>
                                            <span>100%</span>
                                        </div>
                                    </TableHead>
                                    <TableHead className="min-w-[120px]">Agendado</TableHead>
                                    <TableHead className="min-w-[120px]">Estatus</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projectManagementData.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        <TableCell className="border-r p-1"></TableCell>
                                        <TableCell className="border-r p-1"></TableCell>
                                        <TableCell className="border-r p-1"></TableCell>
                                        <TableCell className="border-r p-1"></TableCell>
                                        <TableCell className="border-r p-0">
                                            <div className="grid grid-cols-5 h-full">
                                                <div className="border-r h-full bg-red-500"></div>
                                                <div className="border-r h-full bg-orange-400"></div>
                                                <div className="border-r h-full bg-yellow-400"></div>
                                                <div className="border-r h-full bg-yellow-600/70"></div>
                                                <div className="h-full bg-green-500"></div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r p-1"></TableCell>
                                        <TableCell className="p-1"></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
