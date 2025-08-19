
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

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/clients", icon: Users, label: "Clientes" },
  { href: "/crm", icon: Users, label: "CRM" },
  { href: "/contracts", icon: FileText, label: "Contratos Activados®" },
  { href: "/fractional-clm", icon: Scale, label: "Fractional CLM®" },
  { href: "/projects", icon: Briefcase, label: "Proyectos Activados®" },
  { href: "/tasks", icon: ListTodo, label: "Tareas" },
  { href: "/calendar", icon: Calendar, label: "Calendario" },
  { href: "/documents", icon: Folder, label: "Gestión del Conocimiento" },
  { href: "/financial-management", icon: DollarSign, label: "Gestión Financiera" },
  { href: "/entities", icon: Building2, label: "Gestión de Sociedades"},
  { href: "/wealth-management", icon: Landmark, label: "Gestión Patrimonial"},
  { href: "/trademarks", icon: Award, label: "Marcas y Patentes"},
  { href: "/legal-audits", icon: BookOpenCheck, label: "Auditorías Legales" },
  { href: "/legal-data-and-metrics", icon: BarChart2, label: "Datos y Métricas Legales" },
  { href: "/background-check", icon: UserSearch, label: "Background check", external: true },
  { href: "/service-request", icon: Ticket, label: "Solicitud de Servicio" },
  { href: "/customer-portal", icon: BookUser, label: "Portal de Clientes" },
  { href: "/summarize", icon: Sparkles, label: "IA" },
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
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="white"
                  />
                  <path
                    d="M12 5.5L15.5 10.5H8.5L12 5.5Z"
                    fill="white"
                  />
                  <path
                    d="M16.5 12L12 18.5L7.5 12H16.5Z"
                    fill="white"
                  />
                   <g clipPath="url(#clip0_1_2)">
                    <path d="M12 2L11.2929 2.70711L12 3.41421L12.7071 2.70711L12 2Z" fill="white"/>
                    <path d="M2 12L2.70711 11.2929L3.41421 12L2.70711 12.7071L2 12Z" fill="white"/>
                    <path d="M12 22L12.7071 21.2929L12 20.5858L11.2929 21.2929L12 22Z" fill="white"/>
                    <path d="M22 12L21.2929 12.7071L20.5858 12L21.2929 11.2929L22 12Z" fill="white"/>
                    <path d="M9.5 18H14.5V16H9.5V18ZM11 7V9H13V7H11ZM11 14V11H13V14H11Z" fill="white"/>
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
                  isActive={!item.external && adjustedPathname.startsWith(item.href)}
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
