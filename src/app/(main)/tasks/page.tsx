
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { legalTasksData, type LegalTask } from "@/lib/mock-data";
import { 
  Home, 
  Clock, 
  Pin, 
  ChevronDown, 
  LayoutDashboard,
  CalendarX,
  Users,
  ClipboardList,
  UserCheck,
  PieChart,
  Timer,
  BadgeCheck,
  BookUser,
  ShieldCheck,
  GanttChartSquare,
  Network,
  ListChecks,
  SlidersHorizontal,
  Briefcase,
  Award,
  ListTodo,
  User,
} from "lucide-react";

const myWorkNav = [
    { name: 'Dashboards', icon: LayoutDashboard },
    { name: 'Mi No Trabajo...', icon: CalendarX },
    { name: 'Empleado Directo...', icon: Users },
    { name: 'Solicitudes de Tareas', icon: ClipboardList },
    { name: 'Mis Tareas', icon: UserCheck },
    { name: 'Mi Utilización', icon: PieChart },
    { name: 'Mis Tiempos de Tarea', icon: Timer },
    { name: 'Mis Controles de Calidad', icon: BadgeCheck },
    { name: 'Tareas de Mis Equipos', icon: BookUser, active: true },
    { name: "SLA's de Mis Equipos", icon: ShieldCheck },
    { name: 'Utilización de Mis Equipos', icon: GanttChartSquare },
    { name: 'Tiempos de Tarea de Mis Equipos', icon: Network },
];

const adminNav = [
    { name: 'Servicios', icon: Briefcase },
    { name: 'Tareas de Gestión de Trabajo', icon: ListChecks },
    { name: 'Control de Calidad', icon: SlidersHorizontal },
    { name: 'Niveles de Competencia', icon: Award },
    { name: 'Empleados', icon: Users },
    { name: 'Compe de Empleado...', icon: UserCheck },
];


export default function TasksPage() {
    const getStatusVariant = (status: LegalTask['status']) => {
        switch (status) {
            case 'Hecho':
                return 'default'
            case 'En Progreso':
                return 'secondary'
            case 'Por Hacer':
                return 'outline'
            case 'Bloqueado':
                return 'destructive'
        }
    }
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-foreground hover:bg-muted">
                    <Home className="h-5 w-5" />
                    <span>Inicio</span>
                </a>
                <a href="#" className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                     <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5" />
                        <span>Reciente</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                </a>
                 <a href="#" className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                     <div className="flex items-center gap-3">
                        <Pin className="h-5 w-5" />
                        <span>Fijado</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                </a>
                <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base font-semibold text-foreground">
                        Mi Trabajo
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {myWorkNav.map((item) => (
                            <a key={item.name} href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${item.active ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'}`}>
                                <item.icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 mt-4 text-base font-semibold text-foreground">
                        Administración
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                         <div className="flex flex-col gap-1 mt-2">
                            {adminNav.map((item) => (
                                <a key={item.name} href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                Gestión de Tareas Legales
                </h1>
                <p className="text-muted-foreground">
                Cree y gestione tareas legales, y rastree asignaciones por vertical.
                </p>
            </div>

            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ListTodo /> Tareas Activas
                </CardTitle>
                <CardDescription>
                    Todas las tareas legales en curso y próximas.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Tarea</TableHead>
                        <TableHead>Asignado A</TableHead>
                        <TableHead>Vertical</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Fecha de Vencimiento</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {legalTasksData.map((task) => (
                        <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.taskName}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={task.assignedTo.avatar} data-ai-hint="person avatar" />
                                <AvatarFallback><User size={16} /></AvatarFallback>
                            </Avatar>
                            <span>{task.assignedTo.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>{task.vertical}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(task.status)}
                                className={task.status === 'En Progreso' ? 'bg-blue-100 text-blue-800' : task.status === 'Hecho' ? 'bg-accent text-accent-foreground' : ''}>
                            {task.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
