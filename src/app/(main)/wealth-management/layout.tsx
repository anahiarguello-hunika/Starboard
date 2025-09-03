

'use client';

import {
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
    LayoutDashboard,
    Home,
    Clock,
    Pin,
    ChevronDown,
    ListTodo,
    Calendar,
    LifeBuoy,
    Siren
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import React from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const wealthManagementNav = [
    { name: 'Dashboard', icon: LayoutDashboard, href: "/wealth-management/dashboard", number: "01"},
    { name: 'Proyectos (Matters)', icon: Briefcase, href: "#", number: "02"},
    { 
        name: 'Inversiones en Sociedades', 
        icon: Building, 
        href: "/wealth-management/corporate-information",
        number: "03"
    },
    { 
        name: 'Información Financiera', 
        icon: DollarSign, 
        href: "/wealth-management/financial-information",
        number: "04"
    },
    { 
        name: 'Empleados', 
        icon: Users, 
        href: "/wealth-management/laboral",
        number: "05"
    },
    { 
        name: 'Marcas y Propiedad Intelectual', 
        icon: BrainCircuit, 
        href: "/wealth-management/intellectual-property",
        number: "06"
    },
    { 
        name: 'Activos', 
        icon: Package, 
        href: "/wealth-management/assets",
        number: "07"
    },
    { name: 'Contratos', 
        icon: FileText, 
        href: "/wealth-management/contracts",
        number: "08"
    },
    { 
        name: 'Cumplimiento Legal', 
        icon: ShieldCheck, 
        href: "/wealth-management/legal-compliance",
        number: "09"
    },
    { 
        name: 'Seguros', 
        icon: Landmark, 
        href: "/wealth-management/insurance",
        number: "10"
    },
    {
        name: 'Testamento',
        icon: FileText,
        href: '/wealth-management/testamento',
        number: '11',
    },
    { 
        name: 'Sistemas', 
        icon: Server, 
        href: "/wealth-management/systems-and-it",
        number: "12"
    },
    { name: 'Litigios', 
        icon: Scale, 
        href: "/wealth-management/litigation",
        number: "13"
    },
    { name: 'Concesiones', icon: FileCheck, href: "/wealth-management/concessions", number: "14" },
    { name: 'Formatos', icon: FileType, href: "/wealth-management/formats", number: "15" },
    { 
        name: 'Miscelaneos', 
        icon: Book, 
        href: "/wealth-management/miscellaneous",
        number: "16"
    },
    { 
        name: 'Metodologías', 
        icon: FileText, 
        href: "/wealth-management/methodologies",
        number: "17"
    },
    { name: 'Otros', icon: MoreHorizontal, href: "/wealth-management/others", number: "18" },
];

export default function WealthManagementLayout({
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
                <Link href="#" className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted'
                )}>
                    <Siren className="h-5 w-5" />
                    <span>Recordatorios</span>
                </Link>
                <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 mt-4 text-base font-semibold text-foreground">
                        Gestión Patrimonial
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                            {wealthManagementNav.map((item, index) => (
                                <Link key={item.name} href={item.href || "#"} className={cn(
                                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                                    pathname === item.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                                )}>
                                    <span className="text-xs w-6 text-right">{item.number}</span>
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
