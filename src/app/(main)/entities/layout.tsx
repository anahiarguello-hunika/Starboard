

'use client';

import {
  AppWindow,
  ChevronDown,
  ChevronRight,
  Download,
  FilePlus,
  HeartHandshake,
  History,
  Landmark,
  LayoutDashboard,
  Library,
  Link2,
  Scale,
  Settings,
  Siren,
  Users,
  Wallet,
  AreaChart,
  Home,
  Clock,
  Pin,
  ListTodo,
  Calendar,
  LifeBuoy
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";
import { Button } from '@/components/ui/button';

const entityNav = [
  { name: 'Dashboard', href: '#', icon: LayoutDashboard },
  { name: 'Resumen', href: '/entities/overview', icon: Users },
  { name: 'Recordatorios', href: '#', icon: Siren },
  { name: 'Gobernanza', href: '#', icon: Scale },
  { name: 'Delegaciones', href: '#', icon: HeartHandshake },
  { name: 'Propiedad', href: '#', icon: Landmark },
  { name: 'Intereses', href: '#', icon: Wallet },
  { name: 'UBO', href: '#', icon: Users },
  { name: 'Organigrama', href: '/entities/org-chart', icon: AreaChart },
  { name: 'Documentos', href: '#', icon: Library },
  { name: 'Financiero', href: '#', icon: Library },
  { name: 'Conexiones', href: '#', icon: Link2 },
  { name: 'Contactos', href: '#', icon: AppWindow },
  { name: 'Configuración', href: '#', icon: Settings },
];

export default function EntitiesLayout({
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
                        Clientes
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <h2 className="text-lg font-semibold text-foreground font-headline pl-2 mt-4">
                        Acme NV/SA
                      </h2>
                      <nav className="flex flex-col gap-1 mt-2">
                        {entityNav.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:bg-muted hover:text-foreground',
                              pathname === item.href ? 'bg-primary/10 text-primary' : ''
                            )}
                          >
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </nav>
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

      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
}
