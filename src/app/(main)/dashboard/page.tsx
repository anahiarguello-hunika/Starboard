
'use client';

import {
  ArrowDown,
  ArrowUp,
  FileText,
  FilePlus2,
  PieChart as PieChartIcon,
  ShieldCheck,
  Ticket,
  TrendingUp,
  ChevronDown,
  Calendar as CalendarIcon,
  Clock,
  DollarSign,
  User,
  Star,
} from 'lucide-react';
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
import Link from 'next/link';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';
import { Calendar } from '@/components/ui/calendar';
import React, { useState, useEffect } from 'react';

const activeProjects = [
  { id: "PROJ-001", name: "Proyecto Alfa", status: "En curso", progress: 75 },
  { id: "PROJ-002", name: "Auditoría de Cumplimiento Q4", status: "En riesgo", progress: 30 },
  { id: "PROJ-003", name: "Revisión de Cartera de PI", status: "En curso", progress: 90 },
  { id: "PROJ-004", name: "Consolidación de Contratos de Proveedores", status: "Necesita revisión", progress: 50 },
];

const projectStatusData = [
  { name: 'En Progreso', count: 2, fill: 'hsl(var(--chart-2))' },
  { name: 'En Pausa', count: 1, fill: 'hsl(var(--chart-3))' },
  { name: 'Completados', count: 3, fill: 'hsl(var(--border))' },
];

const subscriptionsData = [
  { name: 'Fractional Law®', value: 10, fill: 'hsl(var(--chart-1))' },
  { name: 'Portal de Clientes', value: 5, fill: 'hsl(var(--chart-2))' },
  { name: 'Nuevas', value: 3, fill: 'hsl(var(--chart-3))' },
  { name: 'Renovadas', value: 8, fill: 'hsl(var(--chart-4))' },
];
const totalSubscriptions = subscriptionsData.reduce((sum, item) => sum + item.value, 0);


const totalProjects = projectStatusData.reduce((sum, item) => sum + item.count, 0);
const inProgressPercentage = Math.round((projectStatusData.find(p => p.name === 'En Progreso')!.count / totalProjects) * 100);

const NpsScoreIcon = ({ type, colorClass }: { type: 'detractor' | 'passive' | 'promoter', colorClass: string }) => {
  if (type === 'promoter') {
    return <svg className={`w-6 h-6 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12h8m-4 4V8m4-4l-4 4-4-4"/></svg>; // Placeholder
  }
  if (type === 'passive') {
    return <svg className={`w-6 h-6 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12h8"/></svg>;
  }
  // detractor
  return <svg className={`w-6 h-6 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12h8m-4 4V8m4 4l-4-4-4 4"/></svg>; // Placeholder
};


export default function DashboardPage() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [importantDates, setImportantDates] = useState<{ date: Date; description: string }[]>([]);

  useEffect(() => {
    const today = new Date();
    setDate(today);
    setImportantDates([
      { date: today, description: "Reunión de equipo" },
      { date: new Date(new Date().setDate(today.getDate() + 5)), description: "Vencimiento de Contrato X" },
      { date: new Date(new Date().setDate(today.getDate() + 10)), description: "Auditoría interna" },
    ]);
  }, []);

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
            <Link href="/service-request/new">
              <Ticket className="mr-2 h-4 w-4" />
              Solicitud de Servicio
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="text-accent" /> Cumplimiento Legal Total
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
                        <CardTitle className="text-lg font-semibold">NPS Legal: 8</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center">
                            <div className="flex w-full justify-between items-end mb-2">
                                {Array.from({ length: 7 }).map((_, i) => <NpsScoreIcon key={i} type="detractor" colorClass="text-red-500" />)}
                                {Array.from({ length: 2 }).map((_, i) => <NpsScoreIcon key={i} type="passive" colorClass="text-yellow-500" />)}
                                {Array.from({ length: 2 }).map((_, i) => <NpsScoreIcon key={i} type="promoter" colorClass="text-green-500" />)}
                            </div>
                            <div className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
                            <div className="flex w-full justify-between mt-1 text-xs font-bold">
                                {Array.from({ length: 11 }).map((_, i) => <span key={i}>{i}</span>)}
                            </div>
                             <div className="flex w-full justify-between mt-1 text-xs text-muted-foreground">
                                <span className="flex-1 text-center text-red-500">Detractores</span>
                                <span className="flex-1 text-center text-yellow-500">Pasivos</span>
                                 <span className="flex-1 text-center text-green-500">Promotores</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
             </div>
            
            <div className="flex flex-col gap-6">
              <Link href="/projects" className="hover:opacity-80">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                        <PieChartIcon className="text-muted-foreground" />
                        Progreso de Proyectos
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
              </Link>
              <Link href="/contracts" className="hover:opacity-80">
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="text-muted-foreground" />
                        Contratos Activados®
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                <span>Contratos vencidos</span>
                            </div>
                            <span className="font-semibold">20</span>
                        </li>
                        <li className="flex items-center justify-between gap-3">
                             <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                <span>Contratos próximos a vencer (30 días)</span>
                            </div>
                            <span className="font-semibold">10</span>
                        </li>
                        <li className="flex items-center justify-between gap-3">
                             <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                                <span>Vigentes</span>
                            </div>
                             <span className="font-semibold">25</span>
                        </li>
                        <li className="flex items-center justify-between gap-3">
                             <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-chart-4"></span>
                                <span>Contratos trabajados</span>
                            </div>
                             <span className="font-semibold">10</span>
                        </li>
                        <li className="flex items-center justify-between gap-3">
                             <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-gray-400"></span>
                                <span>Contratos en proceso</span>
                            </div>
                             <span className="font-semibold">2</span>
                        </li>
                    </ul>
                </CardContent>
              </Card>
              </Link>
            </div>


            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Proyectos Activados®</CardTitle>
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
                            className={project.status === 'En curso' ? 'bg-blue-100 text-blue-800' : ''}
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
         </div>
         <div className="lg:col-span-1 flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        $ ROI Legal®
                    </CardTitle>
                    <CardDescription>
                        Retorno de la inversión en servicios legales.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex justify-between items-baseline">
                        <div>
                            <p className="text-sm text-muted-foreground">ROI por Suscripción</p>
                            <span className="text-4xl font-bold text-accent">95%</span>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">ROI por Cliente</p>
                            <span className="text-4xl font-bold text-accent">75%</span>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground pt-4">El ROI se calcula en base al retorno de inversión por cada suscripción y por cada Cliente.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <CalendarIcon className="h-5 w-5" />
                        Fechas Importantes
                    </CardTitle>
                    <CardDescription>Eventos y vencimientos próximos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="p-0"
                        month={date}
                        onMonthChange={setDate}
                    />
                    <ul className="mt-4 space-y-2">
                       {importantDates.map(item => (
                           <li key={item.date.toString()} className="text-sm flex items-start gap-3">
                               <div className="font-semibold w-16 text-right">
                                   {item.date.toLocaleDateString('es-ES', { month: 'short', day: 'numeric'})}
                               </div>
                               <div>{item.description}</div>
                           </li>
                       ))}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="text-muted-foreground" />
                        Informe de Suscripciones
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col justify-center gap-2 text-sm">
                            {subscriptionsData.map(item => (
                                <div key={item.name} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                                        <span className="text-muted-foreground">{item.name}</span>
                                    </div>
                                    <span className="font-semibold">{item.value}</span>
                                </div>
                            ))}
                            <div className="text-muted-foreground mt-2">Duración mes: 12 meses</div>
                            <div className="text-muted-foreground">Canceladas: 1</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <ChartContainer config={{}} className="w-full h-[120px]">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Pie
                                    data={subscriptionsData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={35}
                                    outerRadius={50}
                                    strokeWidth={2}
                                >
                                {subscriptionsData.map((entry, index) => (
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
                                    {totalSubscriptions}
                                    </tspan>
                                </text>
                            </PieChart>
                            </ChartContainer>
                        </div>
                    </div>
                </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );

    