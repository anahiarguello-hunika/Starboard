

'use client';

import {
    LayoutDashboard,
    Map,
    Activity,
    Box,
    Layers,
    Plane,
    BarChart2,
    Award,
    Flag,
    Target,
    Calendar,
    Users,
    ListTree,
    ClipboardList,
    MessageSquare,
    Settings,
    ChevronDown,
    Home,
    Clock,
    Pin,
    ListTodo,
    BookOpenCheck
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";

const planNav = [
    { name: 'Dashboard', href: '#', icon: LayoutDashboard },
    { name: 'Plan de una página', href: '/legal-strategy', icon: Map },
    { name: 'Auditorías Legales', href: '/legal-audits', icon: BookOpenCheck },
];

const executeNav = [
    { name: 'Métricas', href: '#', icon: BarChart2 },
    { name: 'Prioridades Anuales', href: '#', icon: Award },
    { name: 'Prioridades Trimestrales', href: '#', icon: Flag },
    { name: 'Acciones', href: '#', icon: Target },
    { name: 'Reuniones', href: '#', icon: Calendar },
];

const growNav = [
    { name: 'Vista de Equipo', href: '#', icon: Users },
    { name: 'Organigrama de Funciones', href: '#', icon: ListTree },
    { name: 'Tarjetas de Puntuación', href: '#', icon: ClipboardList },
    { name: 'Revisiones', href: '#', icon: MessageSquare },
];

const adminNav = [
    { name: 'Configuración de la Empresa', href: '#', icon: Settings },
    { name: 'Miembros del Equipo', href: '#', icon: Users },
];


export default function LegalStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
                        Planeación
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {planNav.map((item) => (
                            <Link key={item.name} href={item.href || "#"} className={cn(
                                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                                pathname === item.href || (pathname.startsWith('/legal-audits') && item.href === '/legal-audits') ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                            )}>
                                <item.icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </Link>
                        ))}
                       </div>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 mt-4 text-base font-semibold text-foreground">
                        Ejecución
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {executeNav.map((item) => (
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
                        Crecimiento
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                            {growNav.map((item) => (
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
        </div>
        <div className="flex flex-col gap-8">
            {children}
        </div>
    </div>
  );
}
