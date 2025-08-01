

'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData, type Project } from "@/lib/mock-data";
import { 
  FileText, 
  Folder, 
  PlusCircle,
  LayoutDashboard,
  BarChart2,
  ListTodo,
  File,
  Calendar,
  AlertTriangle,
  BarChart,
  StickyNote,
  History,
  LifeBuoy,
  LayoutGrid,
  List,
  Table as TableIcon,
  Home,
  Clock,
  Pin,
  ChevronDown,
  Search,
  RefreshCw,
  X
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';

const projectNav = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true, href: "/projects" },
    { name: '+ Proyecto', icon: PlusCircle, href: "/projects/new-playbook" },
    { name: 'Progreso', icon: BarChart2, href: "#" },
    { name: 'Tarea', icon: ListTodo, href: "#" },
    { name: 'Documentos', icon: File, href: "#" },
    { name: 'Eventos', icon: Calendar, href: "#" },
    { name: 'Incidencias', icon: AlertTriangle, href: "#" },
    { name: 'Analíticas', icon: BarChart, href: "#" },
    { name: 'Notas', icon: StickyNote, href: "#" },
    { name: 'Actividad', icon: History, href: "#" },
    { name: 'Soporte', icon: LifeBuoy, href: "#" },
];

const projectsInProgressData = [
  { name: 'Activo', value: 4, fill: '#3b82f6' },
  { name: 'En Espera', value: 1, fill: '#f97316' },
  { name: 'En Riesgo', value: 1, fill: '#ef4444' },
  { name: 'Completado', value: 1, fill: '#14b8a6' },
];

const projectsByMonthData = [
  { name: 'Jun 2024', value: 1, fill: '#14b8a6' },
];

const kpiCards = [
    { title: "Proyectos en riesgo", value: "1" },
    { title: "Proyectos en espera", value: "1" },
    { title: "Proyectos vencidos", value: "0" },
    { title: "Borradores de proyectos", value: "0" },
    { title: "Proyectos activos", value: "3" },
    { title: "Proyectos iniciados este mes", value: "0" },
];

export default function ProjectsPage() {
  const [view, setView] = React.useState<'kanban' | 'list' | 'table'>('kanban');

  const getStatusVariant = (status: Project["status"]) => {
    switch (status) {
      case "Activo":
        return "default";
      case "En Espera":
        return "secondary";
      case "Cerrado":
        return "outline";
    }
  };

  const KanbanView = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-xl mb-1">{project.name}</CardTitle>
                    <CardDescription>{project.client}</CardDescription>
                  </div>
                   <Badge variant={getStatusVariant(project.status)}
                         className={project.status === 'Activo' ? 'bg-accent text-accent-foreground' : ''}>
                    {project.status}
                  </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-sm text-muted-foreground">
                <p>Líder: {project.leadAttorney}</p>
                <p>Abierto: {project.openDate}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                        <Folder className="h-4 w-4 text-muted-foreground" />
                        <span>{project.documentCount} Documentos</span>
                    </div>
                     <div className="flex items-center gap-1.5">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{project.contractCount} Contratos</span>
                    </div>
                </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={"/projects/ma-process"}>Ver Proyecto</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
  );

  const ListView = () => (
    <div className="flex flex-col gap-4">
        {projectsData.map((project) => (
            <Card key={project.id}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-xl mb-1">{project.name}</CardTitle>
                            <CardDescription>{project.client}</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant={getStatusVariant(project.status)}
                                className={project.status === 'Activo' ? 'bg-accent text-accent-foreground' : ''}>
                                {project.status}
                            </Badge>
                            <Button variant="outline" size="sm" asChild>
                                <Link href={"/projects/ma-process"}>Ver Proyecto</Link>
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground">
                        <p>Líder: {project.leadAttorney}</p>
                        <p>Abierto: {project.openDate}</p>
                    </div>
                </CardContent>
                 <CardFooter>
                    <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                            <Folder className="h-4 w-4 text-muted-foreground" />
                            <span>{project.documentCount} Documentos</span>
                        </div>
                            <div className="flex items-center gap-1.5">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{project.contractCount} Contratos</span>
                        </div>
                    </div>
                 </CardFooter>
            </Card>
        ))}
    </div>
  );

  const TableView = () => (
    <Card>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre del Proyecto</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Líder</TableHead>
                    <TableHead>Fecha de Apertura</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projectsData.map((project) => (
                    <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>{project.client}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(project.status)}
                                className={project.status === 'Activo' ? 'bg-accent text-accent-foreground' : ''}>
                                {project.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{project.leadAttorney}</TableCell>
                        <TableCell>{project.openDate}</TableCell>
                        <TableCell>
                            <Button variant="outline" size="sm" asChild>
                                <Link href={"/projects/ma-process"}>Ver</Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>
  );

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-foreground hover:bg-muted">
                    <Home className="h-5 w-5" />
                    <span>Inicio</span>
                </a>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                     <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5" />
                        <span>Reciente</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {/* Contenido Reciente aquí */}
                  </CollapsibleContent>
                </Collapsible>
                 <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                       <div className="flex items-center gap-3">
                          <Pin className="h-5 w-5" />
                          <span>Fijado</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {/* Contenido Fijado aquí */}
                    </CollapsibleContent>
                </Collapsible>
                 <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 mt-4 text-base font-semibold text-foreground">
                        Mi Trabajo
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {projectNav.map((item) => (
                           <Link key={item.name} href={item.href || "#"} className={cn(
                               'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                               item.active ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                           )}>
                               <item.icon className="h-5 w-5" />
                               <span>{item.name}</span>
                           </Link>
                       ))}
                       </div>
                    </CollapsibleContent>
                </Collapsible>
            </nav>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-[320px_1fr] gap-8 items-start">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold">Panel de Gestión de Proyectos</h1>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        <div className="relative">
                            <Input placeholder="Cliente" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Líder del Proyecto" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Tipo de Proyecto" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                    {kpiCards.map(kpi => (
                        <Card key={kpi.title} className="text-center">
                            <CardHeader className="p-4">
                            <CardDescription className="text-xs">{kpi.title}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-2xl font-bold">{kpi.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-start">
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle className="text-base">Proyectos en Progreso</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <RefreshCw className="h-4 w-4 cursor-pointer" />
                            <X className="h-4 w-4 cursor-pointer" />
                        </div>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ChartContainer config={{}} className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <ChartTooltip 
                                        content={<ChartTooltipContent 
                                            formatter={(value) => <span>{value}</span>}
                                            labelFormatter={(label, payload) => payload?.[0]?.name}
                                        />} 
                                    />
                                    <Pie data={projectsInProgressData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%">
                                        {projectsInProgressData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                    </Pie>
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-foreground">7</text>
                                    <Legend 
                                        iconType="square"
                                        wrapperStyle={{ fontSize: '12px', paddingLeft: '20px' }}
                                        formatter={(value) => <span className="text-muted-foreground">{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                    <CardDescription className="text-center text-xs pb-4">
                        Mostrar/Ocultar Leyendas | Haga clic en cualquier segmento para desglosar
                    </CardDescription>
                </Card>
                    <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle className="text-base">Proyectos por Mes</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <RefreshCw className="h-4 w-4 cursor-pointer" />
                            <X className="h-4 w-4 cursor-pointer" />
                        </div>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ChartContainer config={{}} className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RechartsBarChart data={projectsByMonthData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis 
                                        tickFormatter={(value) => value.toLocaleString()} 
                                        tick={{ fontSize: 12 }} 
                                        label={{ value: 'Número de Proyectos', angle: -90, position: 'insideLeft', offset: -10, style: { fontSize: '12px' } }} 
                                    />
                                    <RechartsTooltip formatter={(value: number) => value.toLocaleString()} />
                                    <Legend 
                                        iconType="square" 
                                        wrapperStyle={{ fontSize: '12px' }}
                                        formatter={(value) => <span className="text-muted-foreground">{value}</span>}
                                    />
                                    <Bar dataKey="value" name="Proyectos" fill="#14b8a6" />
                                </RechartsBarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                    <CardDescription className="text-center text-xs pb-4">
                        Mostrar/Ocultar Leyendas | Haga clic en cualquier segmento para desglosar
                    </CardDescription>
                </Card>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 rounded-md bg-muted p-1">
              <Button variant="ghost" size="sm" className={cn(view === 'kanban' && 'bg-background')} onClick={() => setView('kanban')}>
                <LayoutGrid className="h-4 w-4 mr-2" />
                Kanban
              </Button>
               <Button variant="ghost" size="sm" className={cn(view === 'list' && 'bg-background')} onClick={() => setView('list')}>
                <List className="h-4 w-4 mr-2" />
                Lista
              </Button>
               <Button variant="ghost" size="sm" className={cn(view === 'table' && 'bg-background')} onClick={() => setView('table')}>
                <TableIcon className="h-4 w-4 mr-2" />
                Tabla
              </Button>
            </div>
            <Link href="/projects/new-playbook">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Nuevo Proyecto
              </Button>
            </Link>
          </div>
          
          {view === 'kanban' && <KanbanView />}
          {view === 'list' && <ListView />}
          {view === 'table' && <TableView />}
        </div>
    </div>
  );
}
