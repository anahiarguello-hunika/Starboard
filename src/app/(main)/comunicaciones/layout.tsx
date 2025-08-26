

'use client';

import {
    Home,
    Clock,
    Pin,
    ChevronDown,
    LayoutDashboard,
    ListTodo,
    Calendar,
    FileText,
    Briefcase,
    Folder,
    DollarSign,
    Building2,
    Landmark,
    BookOpenCheck,
    UserSearch,
    Ticket,
    MessageSquare
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";

const clientNav = [
  { name: 'Dashboard', href: '/comunicaciones', icon: LayoutDashboard },
  { name: 'Contratos Activados®', href: '/comunicaciones/contracts', icon: FileText },
  { name: 'Proyectos Activados®', href: '/comunicaciones/projects', icon: Briefcase },
  { name: 'Gestión de Documentos', href: '/comunicaciones/documents', icon: Folder },
  { name: 'Gestión Financiera', href: '/comunicaciones/financial-management', icon: DollarSign },
  { name: 'Gestión de Sociedades', href: '/comunicaciones/entities', icon: Building2 },
  { name: 'Gestión Patrimonial', href: '/comunicaciones/wealth-management', icon: Landmark },
  { name: 'Auditorías Legales', href: '/comunicaciones/legal-audits', icon: BookOpenCheck },
  { name: 'Background Check', href: '/background-check', icon: UserSearch },
  { name: 'Solicitud de Servicio', href: '/comunicaciones/service-request', icon: Ticket },
];


export default function ComunicacionesLayout({
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
                        Portal de Clientes
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {clientNav.map((item) => (
                            <Link key={item.name} href={item.href || "#"} className={cn(
                                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                                pathname === item.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                            )}>
                                <item.icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </Link>
                        ))}
                       </div>
                    </CollapsibleContent>
                </Collapsible>
            </nav>
            <nav className="flex flex-col gap-1 text-sm text-muted-foreground pb-4">
                <Link href="/chat" className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted',
                    pathname.startsWith('/chat') ? 'bg-primary/10 text-primary font-semibold' : ''
                )}>
                    <MessageSquare className="h-5 w-5" />
                    <span>Chat</span>
                </Link>
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            {children}
        </div>
    </div>
  );
}
