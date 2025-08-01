

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
    MoreHorizontal
} from "lucide-react";
import Link from 'next/link';

const documentsNav = [
    { name: 'Proyectos (Matters)', icon: Briefcase, href: "#"},
    { 
        name: 'Información Corporativa', 
        icon: Building, 
        href: "#",
    },
    { 
        name: 'Información Financiera', 
        icon: DollarSign, 
        href: "#",
    },
    { 
        name: 'Laboral', 
        icon: Users, 
        href: "#",
    },
    { 
        name: 'Propiedad intelectual', 
        icon: BrainCircuit, 
        href: "#",
    },
    { 
        name: 'Activos', 
        icon: Package, 
        href: "#",
    },
    { name: 'Contratos', 
        icon: FileText, 
        href: "#",
    },
    { 
        name: 'Cumplimiento Legal y Regulatorio', 
        icon: ShieldCheck, 
        href: "#",
    },
    { 
        name: 'Seguros', 
        icon: Landmark, 
        href: "#",
    },
    { 
        name: 'Sistemas y TI', 
        icon: Server, 
        href: "#",
    },
    { name: 'Litigios', 
        icon: Scale, 
        href: "#",
    },
    { name: 'Concesiones', icon: FileCheck, href: "#" },
    { name: 'Formatos', icon: FileType, href: "#" },
    { 
        name: 'Miscelaneos', 
        icon: Book, 
        href: "#",
    },
    { 
        name: 'Metodologías', 
        icon: FileText, 
        href: "#",
    },
    { name: 'Otros', icon: MoreHorizontal, href: "#" },
];


export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                 {documentsNav.map((item, index) => (
                    <Link key={item.name} href={item.href || "#"} className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                        <span className="text-xs w-6 text-right">{String(index+1).padStart(2, '0')}</span>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            {children}
        </div>
    </div>
  );
}
