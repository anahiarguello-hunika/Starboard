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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserNav } from "./components/user-nav";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/projects", icon: Briefcase, label: "Proyectos" },
  { href: "/contracts", icon: FileText, label: "Contratos" },
  { href: "/tasks", icon: ListTodo, label: "Tareas" },
  { href: "/documents", icon: Folder, label: "Documentos" },
  { href: "/entities", icon: Building2, label: "Gestión de Entidades"},
  { href: "/wealth-management", icon: Landmark, label: "Gestión Patrimonial Personal"},
  { href: "/summarize", icon: Sparkles, label: "IA" },
  { href: "/legal-audits", icon: BookOpenCheck, label: "Auditorías Legales" },
  { href: "https://backgroundcheck.mx/Dashboard/Home/", icon: UserSearch, label: "Background check", external: true },
  { href: "/service-request", icon: Ticket, label: "Solicitud de Servicio" },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const adjustedPathname = pathname === '/' ? '/dashboard' : pathname;

  return (
    <SidebarProvider>
      <Sidebar side="left" collapsible="icon" variant="sidebar">
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-sidebar-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5.93c.33-.21.71-.35 1.12-.35.91 0 1.65.74 1.65 1.65v1.27c0 .49-.22.95-.59 1.27l-3.3 2.87c-.45.39-.71.96-.71 1.56v.5h2.5v-.5c0-.19.07-.37.2-.51l3.3-2.87c.78-.68 1.25-1.67 1.25-2.74v-1.27c0-1.84-1.49-3.33-3.33-3.33-1.07 0-2.02.51-2.67 1.27l1.24 1.24zm1 10.57c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05z"
                  clipRule="evenodd"
                />
                 <path d="M12 2.5l-1.5 1.5-1-2.5-2.5-1 1.5 1.5-2.5 1 1.5 1.5-1 2.5 2.5 1-1.5-1.5 2.5-1-1.5-1.5zm0 17l1.5-1.5 1 2.5 2.5 1-1.5-1.5 2.5-1-1.5-1.5 1-2.5-2.5-1 1.5 1.5-2.5 1 1.5 1.5zm-8.5-7l-1.5 1.5 2.5 1 1-2.5-1.5-1.5 1-2.5-2.5-1 1.5 1.5zm17 0l1.5-1.5-2.5-1-1 2.5 1.5 1.5-1 2.5 2.5 1-1.5-1.5z" opacity="0.3"/>
                 <path d="M13.62,8.11c0-0.97-0.79-1.76-1.76-1.76c-0.97,0-1.76,0.79-1.76,1.76c0,0.84,0.59,1.54,1.38,1.71l-2.05,2.15 c-0.08,0.08-0.12,0.19-0.12,0.3v1.38h1v-1.21l1.93-2.02c0.23,0.08,0.48,0.12,0.74,0.12c0.97,0,1.76-0.79,1.76-1.76 C14.75,8.7,14.28,8.27,13.62,8.11z M10.53,9.5c0-0.14,0.11-0.25,0.25-0.25s0.25,0.11,0.25,0.25c0,0.14-0.11,0.25-0.25,0.25 S10.53,9.64,10.53,9.5z M11.53,7c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5v1.25h-1V7z M8,13.5c0-1.38,1.12-2.5,2.5-2.5 h1c1.38,0,2.5,1.12,2.5,2.5v1h-6V13.5z M10.5,16h3v-1h-3V16z"/>
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
                  isActive={!item.external && adjustedPathname.startsWith(item.href)}
                  tooltip={item.label}
                >
                  <Link href={item.href} target={item.external ? '_blank' : undefined}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Card className="m-2 bg-sidebar-accent/30 text-sidebar-foreground border-sidebar-border">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Crown className="text-yellow-400" />
                Plan Empresarial
              </CardTitle>
              <CardDescription className="text-sidebar-foreground/80">
                Todas las funciones desbloqueadas.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button size="sm" className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
                Gestionar Suscripción
              </Button>
            </CardContent>
          </Card>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            {/* Can add breadcrumbs or page title here */}
          </div>
          <UserNav />
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
