

'use client';

import {
    LayoutDashboard,
    Home,
    Clock,
    Pin,
    ChevronDown,
    ListTodo,
    Calendar,
    PlusCircle,
    BarChart2,
    Users,
    UserCheck,
    PieChart,
    Timer,
    BadgeCheck,
    BookUser,
    ShieldCheck,
    GanttChartSquare,
    Network,
    Briefcase,
    ListChecks,
    SlidersHorizontal,
    Award,
    CalendarX,
    ClipboardList,
    LifeBuoy
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";
import { Button } from "@/components/ui/button";

const myProjectNav = [
    { name: 'Mi No Proyecto...', href: '#', icon: CalendarX },
    { name: 'Empleado Directo...', href: '#', icon: Users },
    { name: 'Solicitud de Proyectos', href: '#', icon: ClipboardList },
    { name: 'Mis Proyectos', href: '#', icon: UserCheck },
    { name: 'Mi Utilización', href: '#', icon: PieChart },
    { name: 'Mis tiempos de Proyecto', href: '#', icon: Timer },
    { name: 'Mis Controles de Calidad', href: '#', icon: BadgeCheck },
    { name: 'Proyectos de mis Equipos', href: '#', icon: BookUser },
    { name: "SLA's de Mis Equipos", href: '#', icon: ShieldCheck },
    { name: 'Utilización de Mis Equipos', href: '#', icon: GanttChartSquare },
    { name: 'Tiempos de Proyectos de mis Equipos', href: '#', icon: Network },
];

const adminNav = [
    { name: 'Servicios', href: '#', icon: Briefcase },
    { name: 'Tareas de Gestión de Proyecto', href: '#', icon: ListChecks },
    { name: 'Control de Calidad', href: '#', icon: SlidersHorizontal },
    { name: 'Niveles de Competencia', href: '#', icon: Award },
    { name: 'Empleados', href: '#', icon: Users },
    { name: 'Compe de Empleado...', href: '#', icon: UserCheck },
];


export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col justify-between h-full">
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
                <Link href="/tasks" className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted',
                    pathname.startsWith('/tasks') ? 'bg-primary/10 text-primary font-semibold' : ''
                )}>
                    <ListTodo className="h-5 w-5" />
                    <span>Tareas</span>
                </Link>
                <Link href="/calendar" className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted',
                    pathname.startsWith('/calendar') ? 'bg-primary/10 text-primary font-semibold' : ''
                )}>
                    <Calendar className="h-5 w-5" />
                    <span>Calendario</span>
                </Link>
                <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 mt-4 text-base font-semibold text-foreground">
                        Mi Proyecto
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        <Link href={'/projects'} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg transition-colors', pathname === '/projects' || pathname.startsWith('/projects/general') || pathname.startsWith('/projects/ma-process') || pathname.startsWith('/projects/six-sigma-legal') || pathname.startsWith('/projects/real-estate') ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted' )}>
                            <LayoutDashboard className="h-5 w-5" />
                            <span>Dashboard</span>
                        </Link>
                        <Link href={'/projects/new-playbook'} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg transition-colors', 'hover:bg-muted' )}>
                            <PlusCircle className="h-5 w-5" />
                            <span>+ Proyecto</span>
                        </Link>
                        <Link href={'/projects/analysis'} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg transition-colors', pathname.startsWith('/projects/analysis') ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted' )}>
                            <BarChart2 className="h-5 w-5" />
                            <span>Análisis de Proyectos</span>
                        </Link>
                        {myProjectNav.map((item) => (
                           <Link key={item.name} href={item.href || "#"} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg transition-colors', 'hover:bg-muted')}>
                               <item.icon className="h-5 w-5" />
                               <span>{item.name}</span>
                           </Link>
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
                           <Link key={item.name} href={item.href || "#"} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg transition-colors', 'hover:bg-muted')}>
                               <item.icon className="h-5 w-5" />
                               <span>{item.name}</span>
                           </Link>
                       ))}
                       </div>
                    </CollapsibleContent>
                </Collapsible>
            </nav>
            <nav className="flex flex-col gap-1 text-sm text-muted-foreground pb-4">
                 <Button variant="ghost" className="w-full justify-start h-auto py-2 px-3 gap-2">
                    <LifeBuoy />
                    <span className="font-semibold">Asistencia Legal</span>
                </Button>
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            {children}
        </div>
    </div>
  );
}
