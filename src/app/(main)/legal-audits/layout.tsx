

'use client';

import {
    BookCheck,
    BookCopy,
    ClipboardCheck,
    ClipboardList,
    GraduationCap,
    Scale,
    ChevronRight,
    Activity,
    AlertTriangle,
    Home,
    Clock,
    Pin,
    ChevronDown,
    ListTodo,
    Calendar,
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const auditNav = [
  { name: 'Due Dilligence Básico', href: '/legal-audits/basic-due-diligence', icon: BookCheck },
  { name: 'Due Dilligence Completo', href: '/legal-audits/full-due-diligence', icon: BookCopy },
  { name: 'Madurez Legal', href: '/legal-audits/legal-maturity', icon: GraduationCap },
  { name: 'Madurez Contractual', href: '/legal-audits/contract-maturity', icon: ClipboardList },
  { name: 'Impacto del Consejo', href: '/legal-audits/board-impact', icon: Activity },
  { name: 'Madurez de Gobierno Corporativo', href: '/legal-audits/corporate-governance-maturity', icon: Scale },
  { name: 'Madurez de Cumplimiento', href: '/legal-audits/compliance-maturity', icon: ClipboardCheck },
  { name: 'Riesgos Legales', href: '/legal-audits/legal-risks', icon: AlertTriangle },
];


export default function LegalAuditsLayout({
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
                        Auditorías
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                            {auditNav.map((item, index) => (
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
