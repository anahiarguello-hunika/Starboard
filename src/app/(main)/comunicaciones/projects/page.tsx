
'use client';

import {
    LayoutDashboard,
    PlusCircle,
    BarChart2,
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import React from "react";
import ProjectsDashboardPage from './dashboard/page';

const projectsNav = [
  { name: 'Dashboard', href: '/comunicaciones/projects/dashboard', icon: LayoutDashboard },
  { name: '+ Proyecto', href: '/comunicaciones/projects/new-playbook', icon: PlusCircle },
  { name: 'Informe de Proyecto', href: '/comunicaciones/projects/report', icon: BarChart2 },
  { name: 'Análisis de Proyectos', href: '/comunicaciones/projects/analysis', icon: BarChart2 },
];

export default function ComunicacionesProjectsPage() {
  const pathname = usePathname();

  // This is a simple router. In a real app, you'd want something more robust.
  // For this prototype, we'll just render the dashboard content.
  // A proper implementation would use a layout and child pages.
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex flex-col gap-1 mt-2">
                {projectsNav.map((item) => (
                    <Link key={item.name} href={item.href || "#"} className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                        pathname === item.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                    )}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
                </div>
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            <ProjectsDashboardPage />
        </div>
    </div>
  );
}
