
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
    PlusCircle
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";

const serviceRequestNav = [
  { name: 'Dashboard', href: '/service-request', icon: LayoutDashboard },
  { name: 'Nueva Solicitud', href: '/service-request/new', icon: PlusCircle },
];


export default function ServiceRequestLayout({
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
                        {serviceRequestNav.map((item, index) => (
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
        </div>
        <div className="flex flex-col gap-8">
            {children}
        </div>
    </div>
  );
}
