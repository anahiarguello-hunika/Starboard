
'use client';

import {
    LayoutDashboard,
    FileClock,
    UserCheck,
    FileCheck2,
    FileSignature,
    FileX2,
    Scale,
    ThumbsUp,
    ChevronDown,
    Home,
    Clock,
    Pin,
    CalendarX,
    Users,
    ClipboardList,
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
    Award
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";

const contractsNav = [
  { name: 'Dashboard', href: '/contracts', icon: LayoutDashboard },
  {
    name: 'Vencimientos',
    icon: FileClock,
    submenu: [
      { name: 'Expiran en 30 días', href: '/contracts/expiring-soon' },
      { name: 'Expiran en 90 días', href: '/contracts/expiring-in-90-days' },
      { name: 'Expiran en 12 meses', href: '/contracts/expiring-in-12-months' },
      { name: 'Expiran en más de 12 meses', href: '/contracts/expiring-in-more-than-12-months' },
    ]
  },
  { name: 'Contratos Asignados a mí', href: '#', icon: UserCheck },
  { name: 'Aprobaciones', href: '#', icon: ThumbsUp },
  { name: 'Contratos por firmar', href: '#', icon: FileSignature },
  { name: 'Contratos Firmados', href: '#', icon: FileCheck2 },
  { name: 'Contratos Cancelados', href: '#', icon: FileX2 },
  { name: 'Contratos en litigio', href: '#', icon: Scale },
];

const myContractsNav = [
    { name: 'Mi No Contrato...', href: '#', icon: CalendarX },
    { name: 'Empleado Directo...', href: '#', icon: Users },
    { name: 'Solicitudes de Contratos', href: '#', icon: ClipboardList },
    { name: 'Mis Contratos', href: '#', icon: UserCheck },
    { name: 'Mi Utilización', href: '#', icon: PieChart },
    { name: 'Mis Tiempos de Contrato', href: '#', icon: Timer },
    { name: 'Mis Controles de Calidad', href: '#', icon: BadgeCheck },
    { name: 'Contratos de mis Equipos', href: '#', icon: BookUser },
    { name: "SLA's de Mis Equipos", href: '#', icon: ShieldCheck },
    { name: 'Utilización de Mis Equipos', href: '#', icon: GanttChartSquare },
    { name: 'Tiempos de Contrato de mis Equipos', href: '#', icon: Network },
];

const adminNav = [
    { name: 'Servicios', href: '#', icon: Briefcase },
    { name: 'Tareas de Gestión de Trabajo', href: '#', icon: ListChecks },
    { name: 'Control de Calidad', href: '#', icon: SlidersHorizontal },
    { name: 'Niveles de Competencia', href: '#', icon: Award },
    { name: 'Empleados', href: '#', icon: Users },
    { name: 'Compe de Empleado...', href: '#', icon: UserCheck },
];


export default function ContractsLayout({
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
                 <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 mt-4 text-base font-semibold text-foreground">
                        Mi Trabajo
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {contractsNav.map((item, index) => (
                            item.submenu ? (
                                <Collapsible defaultOpen={true} key={item.name}>
                                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                                        <div className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.name}</span>
                                        </div>
                                        <ChevronDown className="h-4 w-4" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="pl-8">
                                        <div className="flex flex-col gap-1 mt-1">
                                            {item.submenu.map(subItem => (
                                                <Link key={subItem.name} href={subItem.href || "#"} className={cn(
                                                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-xs',
                                                    pathname === subItem.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                                                )}>
                                                    <span>{subItem.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            ) : (
                                <Link key={item.name} href={item.href || "#"} className={cn(
                                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                                    pathname === item.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                                )}>
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </Link>
                            )
                        ))}
                       </div>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible defaultOpen={true}>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                            {myContractsNav.map((item) => (
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
