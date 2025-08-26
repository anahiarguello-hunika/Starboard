

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpenCheck,
  Building2,
  CircleUser,
  Crown,
  FileText,
  Folder,
  LayoutDashboard,
  ListTodo,
  Scale,
  Briefcase,
  Sparkles,
  Ticket,
  Landmark,
  UserSearch,
  Users,
  Award,
  BookUser,
  Calendar,
  DollarSign,
  BarChart2,
  Calculator,
  Search,
  History,
  Clock,
  Plus,
  ChevronDown,
  Settings,
  MessageSquare,
  LifeBuoy,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { UserNav } from "./components/user-nav";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/legal-strategy", icon: Sparkles, label: "Estrategia Legal" },
  { href: "/clients", icon: Users, label: "Clientes" },
  { href: "/crm", icon: Users, label: "CRM" },
  { href: "/contracts", icon: FileText, label: "Contratos Activados®" },
  { href: "/fractional-clm", icon: Scale, label: "Fractional CLM®" },
  { href: "/projects", icon: Briefcase, label: "Proyectos Activados®" },
  { href: "/documents", icon: Folder, label: "Gestión del Conocimiento" },
  { href: "/financial-management", icon: DollarSign, label: "Gestión Financiera" },
  { href: "/entities", icon: Building2, label: "Gestión de Sociedades"},
  { href: "/wealth-management", icon: Landmark, label: "Gestión Patrimonial"},
  { href: "/background-check", icon: UserSearch, label: "Background check" },
  { href: "/service-request", icon: Ticket, label: "Solicitud de Servicio" },
  { href: "/comunicaciones", icon: BookUser, label: "Comunicaciones" },
  { href: "/summarize", icon: Sparkles, label: "IA" },
  { href: "/settings", icon: Settings, label: "Configuración" },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const adjustedPathname = pathname === '/' ? '/dashboard' : pathname;
  
  const isLegalStrategyActive = adjustedPathname.startsWith('/legal-strategy') || adjustedPathname.startsWith('/legal-audits');

  return (
    <SidebarProvider>
      <Sidebar side="left" collapsible="icon" variant="sidebar">
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-sidebar-foreground">
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 5.5L15.5 10.5H8.5L12 5.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.5 12L12 18.5L7.5 12H16.5Z"
                    fill="currentColor"
                  />
                   <g clipPath="url(#clip0_1_2)">
                    <path d="M12 2L11.2929 2.70711L12 3.41421L12.7071 2.70711L12 2Z" fill="currentColor"/>
                    <path d="M2 12L2.70711 11.2929L3.41421 12L2.70711 12.7071L2 12Z" fill="currentColor"/>
                    <path d="M12 22L12.7071 21.2929L12 20.5858L11.2929 21.2929L12 22Z" fill="currentColor"/>
                    <path d="M22 12L21.2929 12.7071L20.5858 12L21.2929 11.2929L22 12Z" fill="currentColor"/>
                    <path d="M9.5 18H14.5V16H9.5V18ZM11 7V9H13V7H11ZM11 14V11H13V14H11Z" fill="currentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
            </Button>
            <span className="text-lg font-semibold text-sidebar-foreground font-headline">
              Starboard Central
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  isActive={!item.external && (item.href === '/legal-strategy' ? isLegalStrategyActive : adjustedPathname.startsWith(item.href))}
                  tooltip={item.label}
                >
                  <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
             <SidebarMenu>
                 <SidebarMenuItem>
                     <Button variant="ghost" className="w-full justify-start h-auto py-2 px-3 gap-2">
                        <LifeBuoy />
                        <div className="flex flex-col items-start">
                            <span className="font-semibold">Asistencia Legal</span>
                            <span className="text-xs text-sidebar-foreground/70">Asesoría legal</span>
                        </div>
                    </Button>
                </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between gap-4 border-b bg-sidebar px-4 text-sidebar-foreground sm:px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent md:hidden" />
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
              <Input
                placeholder="Search Starboard Abogados"
                className="pl-10 h-9 bg-sidebar-accent text-sidebar-foreground placeholder:text-sidebar-foreground/80 border-transparent focus-visible:ring-offset-sidebar-background focus-visible:ring-sidebar-ring"
              />
            </div>
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-9 border-sidebar-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                      <History className="mr-2 h-4 w-4" /> Recientes <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Tareas</DropdownMenuItem>
                <DropdownMenuItem>Proyectos</DropdownMenuItem>
                <DropdownMenuItem>Contratos</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/time-entry" className="flex items-center gap-2 text-sm">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-sidebar-accent">
                  <Clock className="h-5 w-5" />
                </Button>
                <span>00:00:00</span>
                 <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-sidebar-accent">
                   <Clock className="h-4 w-4" />
                </Button>
            </Link>
            <div className="h-6 w-px bg-sidebar-border" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                      Create new <Plus className="ml-2 h-4 w-4" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Contacto</DropdownMenuItem>
                <DropdownMenuItem>Carpeta</DropdownMenuItem>
                <DropdownMenuItem>Contrato</DropdownMenuItem>
                <DropdownMenuItem>Evento</DropdownMenuItem>
                <DropdownMenuItem>Mensaje</DropdownMenuItem>
                <DropdownMenuItem>Tarea</DropdownMenuItem>
                <DropdownMenuItem>Proyecto</DropdownMenuItem>
                <DropdownMenuItem>Solicitud</DropdownMenuItem>
                <DropdownMenuItem>Auditoría</DropdownMenuItem>
                <DropdownMenuItem>Encuesta</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserNav />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
