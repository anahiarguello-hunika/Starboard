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
              <Scale />
            </Button>
            <span className="text-lg font-semibold text-sidebar-foreground font-headline">
              Stbd Law
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={adjustedPathname.startsWith(item.href)}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
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
