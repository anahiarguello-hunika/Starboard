
'use client';

import {
    Home,
    Clock,
    Pin,
    ChevronDown,
    ListTodo,
    Calendar,
    Briefcase,
    Building,
    DollarSign,
    Users,
    BrainCircuit,
    Package,
    FileText,
    ShieldCheck,
    Landmark,
    Server,
    Scale,
    FileCheck,
    FileType,
    Book,
    MoreHorizontal,
    LayoutDashboard
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";

const documentsNav = [
    { name: 'Dashboard', icon: LayoutDashboard, href: "/documents/dashboard"},
    { name: 'Proyectos (Matters)', icon: Briefcase, href: "#"},
    { 
        name: 'Información Corporativa', 
        icon: Building, 
        href: "/documents/corporate-information",
    },
    { 
        name: 'Información Financiera', 
        icon: DollarSign, 
        href: "/documents/financial-information",
    },
    { 
        name: 'Laboral', 
        icon: Users, 
        href: "/documents/laboral",
    },
    { 
        name: 'Propiedad intelectual', 
        icon: BrainCircuit, 
        href: "/documents/intellectual-property",
    },
    { 
        name: 'Activos', 
        icon: Package, 
        href: "/documents/assets",
    },
    { name: 'Contratos', 
        icon: FileText, 
        href: "/documents/contracts",
    },
    { 
        name: 'Cumplimiento Legal y Regulatorio', 
        icon: ShieldCheck, 
        href: "/documents/legal-compliance",
    },
    { 
        name: 'Seguros', 
        icon: Landmark, 
        href: "/documents/insurance",
    },
    { 
        name: 'Sistemas y TI', 
        icon: Server, 
        href: "/documents/systems-and-it",
    },
    { name: 'Litigios', 
        icon: Scale, 
        href: "/documents/litigation",
    },
    { name: 'Concesiones', icon: FileCheck, href: "#" },
    { name: 'Formatos', icon: FileType, href: "#" },
    { 
        name: 'Miscelaneos', 
        icon: Book, 
        href: "/documents/miscellaneous",
    },
    { 
        name: 'Metodologías', 
        icon: FileText, 
        href: "/documents/methodologies",
    },
    { name: 'Otros', icon: MoreHorizontal, href: "#" },
];


export default function WealthManagementLayout({
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
                        Gestión Patrimonial
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {documentsNav.map((item, index) => (
                            <Link key={item.name} href={item.href || "#"} className={cn(
                                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                                pathname.includes(item.href) ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                            )}>
                                <span className="text-xs w-6 text-right">{String(index+1).padStart(2, '0')}</span>
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
