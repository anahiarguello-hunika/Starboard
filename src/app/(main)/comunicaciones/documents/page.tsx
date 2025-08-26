
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
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import React from "react";
import DocumentsDashboardPage from './dashboard/page';

const documentsNav = [
    { name: 'Dashboard', icon: LayoutDashboard, href: "/comunicaciones/documents/dashboard"},
    { name: 'Proyectos (Matters)', icon: Briefcase, href: "#"},
    { 
        name: 'Información Corporativa', 
        icon: Building, 
        href: "/comunicaciones/documents/corporate-information",
    },
    { 
        name: 'Información Financiera', 
        icon: DollarSign, 
        href: "/comunicaciones/documents/financial-information",
    },
    { 
        name: 'Laboral', 
        icon: Users, 
        href: "/comunicaciones/documents/laboral",
    },
    { 
        name: 'Propiedad intelectual', 
        icon: BrainCircuit, 
        href: "/comunicaciones/documents/intellectual-property",
    },
    { 
        name: 'Activos', 
        icon: Package, 
        href: "/comunicaciones/documents/assets",
    },
    { name: 'Contratos', 
        icon: FileText, 
        href: "/comunicaciones/documents/contracts",
    },
    { 
        name: 'Cumplimiento Legal y Regulatorio', 
        icon: ShieldCheck, 
        href: "/comunicaciones/documents/legal-compliance",
    },
    { 
        name: 'Seguros', 
        icon: Landmark, 
        href: "/comunicaciones/documents/insurance",
    },
    { 
        name: 'Sistemas y TI', 
        icon: Server, 
        href: "/comunicaciones/documents/systems-and-it",
    },
    { name: 'Litigios', 
        icon: Scale, 
        href: "/comunicaciones/documents/litigation",
    },
    { name: 'Concesiones', icon: FileCheck, href: "#" },
    { name: 'Formatos', icon: FileType, href: "#" },
    { 
        name: 'Miscelaneos', 
        icon: Book, 
        href: "/comunicaciones/documents/miscellaneous",
    },
    { 
        name: 'Metodologías', 
        icon: FileText, 
        href: "/comunicaciones/documents/methodologies",
    },
    { name: 'Otros', icon: MoreHorizontal, href: "#" },
];

export default function ComunicacionesDocumentsPage() {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex flex-col gap-1 mt-2">
                {documentsNav.map((item, index) => (
                    <Link key={item.name} href={item.href || "#"} className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                        pathname === item.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                    )}>
                        <span className="text-xs w-6 text-right">{String(index+1).padStart(2, '0')}</span>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
                </div>
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            <DocumentsDashboardPage />
        </div>
    </div>
  );
}
