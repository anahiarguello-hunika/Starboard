

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
  ListTodo,
  Plus,
  BookCopy,
  Award,
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const activeProjects = [
  { id: "PROJ-001", name: "Proyecto Alfa", status: "En curso", progress: 75, priority: 1, roi: 85 },
  { id: "PROJ-002", name: "Auditoría de Cumplimiento Q4", status: "En riesgo", progress: 30, priority: 2, roi: 60 },
  { id: "PROJ-003", name: "Revisión de Cartera de PI", status: "En curso", progress: 90, priority: 3, roi: 95 },
  { id: "PROJ-004", name: "Consolidación de Contratos de Proveedores", status: "Necesita revisión", progress: 50, priority: 4, roi: 70 },
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
  { name: 'Canceladas', value: 1, fill: 'hsl(var(--destructive))' },
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

const TodaysAgenda = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);

    if (!isVisible) {
        return (
             <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl font-bold font-headline">Agenda del Día</h2>
                <Button variant="link" onClick={() => setIsVisible(true)} className="p-0 h-auto">(Mostrar)</Button>
            </div>
        )
    }
    
    return (
        <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="text-xl font-bold font-headline">Agenda del Día</h2>
                <Button variant="link" onClick={() => setIsVisible(false)} className="p-0 h-auto text-muted-foreground">(Ocultar)</Button>
            </div>
            <Card>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">
                    <div className="p-4 border-r">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold">2</span>
                                <span className="font-semibold">Tareas para Hoy</span>
                            </div>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => setIsTaskDialogOpen(true)}>Nueva tarea</DropdownMenuItem>
                                <DropdownMenuItem>Nueva cita</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                               <RadioGroup>
                                 <RadioGroupItem value="task1" id="task1" className="mt-1" />
                               </RadioGroup>
                                <Label htmlFor="task1" className="font-normal flex-1">Elaboración de proyecto de contrato de apertura de crédito Corrugados</Label>
                            </div>
                             <div className="flex items-start gap-3">
                                <RadioGroup>
                                  <RadioGroupItem value="task2" id="task2" className="mt-1" />
                                </RadioGroup>
                                <Label htmlFor="task2" className="font-normal flex-1">Revisión de Contrato de SM Cyclo</Label>
                                <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5"></div>
                            </div>
                        </div>
                    </div>
                     <div className="p-4">
                         <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold">2</span>
                                <span className="font-semibold">Eventos del Calendario</span>
                            </div>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => setIsTaskDialogOpen(true)}>Nueva tarea</DropdownMenuItem>
                                <DropdownMenuItem>Nueva cita</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex gap-4">
                                <div className="text-primary font-semibold w-16">17:00 : 17:30</div>
                                <div>Pago tarjeta Platinum Banregio</div>
                            </div>
                            <div className="flex gap-4">
                               <div className="text-primary font-semibold w-16">17:30 : 18:00</div>
                                <div>Starboard | Sesión de seguimiento</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isTaskDialogOpen} onOpenChange={setIsTaskDialogOpen}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Nueva Tarea</DialogTitle>
                  <DialogDescription>
                    Complete los detalles de su nueva tarea.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="task-name" className="text-right">
                      Tarea
                    </Label>
                    <Input id="task-name" placeholder="Nombre de la tarea" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="task-description" className="text-right">
                      Descripción
                    </Label>
                    <Textarea id="task-description" placeholder="Descripción de la tarea" className="col-span-3" />
                  </div>
                   <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="task-date" className="text-right">
                      Fecha
                    </Label>
                    <Input id="task-date" type="date" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsTaskDialogOpen(false)}>Cancelar</Button>
                  <Button type="submit" onClick={() => setIsTaskDialogOpen(false)}>Guardar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

        </div>
    )
}


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
              <DropdownMenuItem asChild>
                <Link href="/contracts/new/service-agreement">1. Contrato de Prestación de Servicios (Cliente)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contracts/new/lease-agreement">2. Contrato de Arrendamiento</Link>
              </DropdownMenuItem>
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
            <Button className="bg-gray-500 hover:bg-gray-600">
              <Award className="mr-2 h-4 w-4" /> Nueva Marca
            </Button>
          <Button variant="outline" asChild>
            <Link href="/service-request/new">
              <Ticket className="mr-2 h-4 w-4" />
              Solicitud de Servicio
            </Link>
          </Button>
        </div>
      </div>
      
      <TodaysAgenda />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                       NPS Legal: 70%
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                     <Progress value={70} aria-label="70% de NPS" />
                     <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Detractores: 20</span>
                        <span>Pasivos: 10</span>
                        <span>Promotores: 70</span>
                     </div>
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
                                <div className="text-muted-foreground">Churn rate: 8%</div>
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
                      <TableHead>Prioridad</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Progreso</TableHead>
                      <TableHead>ROI</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell className="text-center">{project.priority}</TableCell>
                        <TableCell>
                          <Badge
                            variant={project.status === 'En riesgo' ? 'destructive' : project.status === 'Necesita revisión' ? 'secondary' : 'default'}
                            className={project.status === 'En curso' ? 'bg-blue-100 text-blue-800' : ''}
                          >
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{project.progress}%</TableCell>
                        <TableCell>{project.roi}%</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">Ver Proyecto</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
         </div>
         <div className="lg:col-span-1 flex flex-col gap-6">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                        $ ROI Legal®
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="grid grid-cols-3 items-baseline text-center">
                        <div>
                            <p className="text-xs text-muted-foreground">ROI por Suscripción</p>
                            <span className="text-3xl font-bold text-accent">95%</span>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">ROI por Proyecto</p>
                            <span className="text-3xl font-bold text-accent">90%</span>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">ROI por Cliente</p>
                            <span className="text-3xl font-bold text-accent">75%</span>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">El ROI se calcula en base al retorno de inversión por cada suscripción y por cada Cliente.</p>
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
         </div>
      </div>
    </div>
  );

    


