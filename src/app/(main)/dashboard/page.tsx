
'use client';

import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  FileText,
  FilePlus2,
  PieChart as PieChartIcon,
  ShieldCheck,
  Ticket,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';
import { cn } from '@/lib/utils';

const activeProjects = [
  { id: "PROJ-001", name: "Proyecto Alfa", status: "En curso", progress: 75 },
  { id: "PROJ-002", name: "Auditoría de Cumplimiento Q4", status: "En riesgo", progress: 30 },
  { id: "PROJ-003", name: "Revisión de Cartera de PI", status: "En curso", progress: 90 },
  { id: "PROJ-004", name: "Consolidación de Contratos de Proveedores", status: "Necesita revisión", progress: 50 },
];

const alerts = [
    { id: "ALRT-001", title: "Vencimiento de Renovación de Contrato", description: "El MSA con Innovate Inc. vence en 30 días.", level: "warning" },
    { id: "ALRT-002", title: "Nueva Regulación", description: "Actualización de la Ley de Privacidad de Datos efectiva el 1 de octubre.", level: "info" },
    { id: "ALRT-003", title: "Tarea Vencida", description: "La revisión del acuerdo de proveedor está vencida por 3 días.", level: "error" },
]

const projectStatusData = [
  { name: 'En Progreso', count: 2, fill: 'hsl(var(--chart-2))' },
  { name: 'En Pausa', count: 1, fill: 'hsl(var(--chart-4))' },
  { name: 'Completados', count: 3, fill: 'hsl(var(--border))' },
];

const totalProjects = projectStatusData.reduce((sum, item) => sum + item.count, 0);
const inProgressPercentage = Math.round((projectStatusData.find(p => p.name === 'En Progreso')!.count / totalProjects) * 100);

const keyMetrics = [
  { name: 'Satisfacción', value: '80%', trend: 'up' },
  { name: 'Capacidad de Respuesta', value: '87%', trend: 'down' },
  { name: 'Reducción de Riesgo', value: '75%', trend: 'down' },
  { name: 'Eficiencia de Costos', value: '33%', trend: 'up' },
];


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Dashboard Legal
          </h1>
          <p className="text-muted-foreground">
            ¡Bienvenido de nuevo! Aquí está tu resumen de hoy.
          </p>
        </div>
        <div className="flex gap-2">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <FilePlus2 className="mr-2 h-4 w-4" /> Nuevo Contrato{" "}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                1. Contrato de Prestación de Servicios (Cliente)
              </DropdownMenuItem>
              <DropdownMenuItem>2. Contrato de Arrendamiento</DropdownMenuItem>
              <DropdownMenuItem>3. Contrato de Subarrendamiento</DropdownMenuItem>
              <DropdownMenuItem>
                4. Contrato de Prestación de Servicio (Prestador)
              </DropdownMenuItem>
              <DropdownMenuItem>5. Contrato de Confidencialidad</DropdownMenuItem>
              <DropdownMenuItem>
                6. Contrato Individual de Trabajo (Tiempo determinado)
              </DropdownMenuItem>
              <DropdownMenuItem>
                7. Contrato Individual de Trabajo (Indeterminado con tiempo de
                Prueba)
              </DropdownMenuItem>
              <DropdownMenuItem>
                8. Convenio de Terminación General
              </DropdownMenuItem>
              <DropdownMenuItem>
                9. Convenio de Terminación Laboral
              </DropdownMenuItem>
              <DropdownMenuItem>
                10. Contrato de Préstamo (Obligado Solidario)
              </DropdownMenuItem>
              <DropdownMenuItem>
                11. Contrato de Compraventa de Acciones
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" asChild>
            <Link href="/service-request">
              <Ticket className="mr-2 h-4 w-4" />
              Solicitud de Servicio
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general_counsel">
        <TabsList>
          <TabsTrigger value="general_counsel">Consejero General</TabsTrigger>
          <TabsTrigger value="paralegal">Paralegal</TabsTrigger>
          <TabsTrigger value="business_user">Usuario de Negocio</TabsTrigger>
        </TabsList>
        <TabsContent value="general_counsel" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
             <div className="lg:col-span-1 flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="text-accent" /> Medidor de Cumplimiento
                    </CardTitle>
                    <CardDescription>
                      Estado general de cumplimiento de la organización.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-5xl font-bold text-accent">92%</span>
                        <span className="text-sm text-green-600 font-semibold">+2% este mes</span>
                    </div>
                    <Progress value={92} aria-label="92% de cumplimiento" />
                    <p className="text-xs text-muted-foreground">Todos los departamentos reportan parámetros normales.</p>
                  </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Métricas Clave</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {keyMetrics.map(metric => (
                                <li key={metric.name} className="flex justify-between items-center text-sm">
                                    <span>{metric.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">{metric.value}</span>
                                        {metric.trend === 'up' ?
                                            <ArrowUp className="h-4 w-4 text-green-500" /> :
                                            <ArrowDown className="h-4 w-4 text-red-500" />
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
             </div>
            
            <div className="lg:col-span-1 flex flex-col gap-6">
              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                      <PieChartIcon className="text-muted-foreground" />
                      Resumen de Proyectos
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col justify-center gap-2">
                          {projectStatusData.map(item => (
                              <div key={item.name} className="flex items-center justify-between text-sm">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                                      <span className="text-muted-foreground">{item.name}</span>
                                  </div>
                                  <span className="font-semibold">{item.count}</span>
                              </div>
                          ))}
                      </div>
                      <div className="flex items-center justify-center">
                        <ChartContainer config={{}} className="w-full h-[120px]">
                          <PieChart>
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                            <Pie
                              data={projectStatusData}
                              dataKey="count"
                              nameKey="name"
                              innerRadius={35}
                              outerRadius={50}
                              strokeWidth={2}
                            >
                              {projectStatusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Pie>
                             <text
                                  x="50%"
                                  y="50%"
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  className="fill-foreground text-center"
                              >
                                  <tspan x="50%" y="52%" className="text-xl font-bold">
                                  {inProgressPercentage}%
                                  </tspan>
                              </text>
                          </PieChart>
                        </ChartContainer>
                      </div>
                      </div>
                  </CardContent>
              </Card>
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="text-muted-foreground" />
                        Resumen de Contratos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="h-3 w-3 rounded-full bg-red-500"></span>
                            <span>Contratos vencidos</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span>Contratos próximos a vencer (30 días)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-3 w-3 rounded-full bg-green-500"></span>
                            <span>Vigentes</span>
                        </li>
                    </ul>
                </CardContent>
              </Card>
            </div>


            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Proyectos Activos</CardTitle>
                <CardDescription>
                  Proyectos legales clave actualmente en curso.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Proyecto</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Progreso</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>
                          <Badge
                            variant={project.status === 'En riesgo' ? 'destructive' : project.status === 'Necesita revisión' ? 'secondary' : 'default'}
                            className={project.status === 'En curso' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{project.progress}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="lg:col-span-1 flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Solicitudes de Servicio</CardTitle>
                     <CardDescription>Últimos 30 días</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
                      <div className="space-y-2">
                        <p className="text-4xl font-bold">33</p>
                        <p className="text-sm text-muted-foreground">Servicios Abiertos</p>
                      </div>
                       <div className="space-y-2">
                        <p className="text-4xl font-bold">25</p>
                        <p className="text-sm text-muted-foreground">Servicios Cerrados</p>
                      </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Trimestre Fiscal Actual a la Fecha</CardTitle>
                     <CardDescription>Q1 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
                      <div className="space-y-2">
                        <p className="text-4xl font-bold">14</p>
                        <p className="text-sm text-muted-foreground">Servicios Abiertos</p>
                      </div>
                       <div className="space-y-2">
                        <p className="text-4xl font-bold">3</p>
                        <p className="text-sm text-muted-foreground">Servicios Cerrados</p>
                      </div>
                  </CardContent>
                </Card>
            </div>


            <Card className="lg:col-span-4">
                <CardHeader>
                    <CardTitle>Alertas Recientes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {alerts.map(alert => (
                        <Alert key={alert.id} variant={alert.level === 'error' ? 'destructive' : 'default'}>
                            {alert.level === 'error' ? <AlertCircle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                            <AlertTitle>{alert.title}</AlertTitle>
                            <AlertDescription>{alert.description}</AlertDescription>
                        </Alert>
                    ))}
                </CardContent>
            </Card>
            
          </div>
        </TabsContent>
        <TabsContent value="paralegal">
            <p className="text-muted-foreground p-4 text-center">Dashboard de Paralegal próximamente.</p>
        </TabsContent>
        <TabsContent value="business_user">
            <p className="text-muted-foreground p-4 text-center">Dashboard de Usuario de Negocio próximamente.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
