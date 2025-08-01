
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
  { href: "/projects", icon: Briefcase, label: "Proyectos" },
  { href: "/contracts", icon: FileText, label: "Contratos" },
  { href: "/fractional-clm", icon: Scale, label: "Fractional CLM®" },
  { href: "/tasks", icon: ListTodo, label: "Tareas" },
  { href: "/documents", icon: Folder, label: "Gestión del Conocimiento" },
  { href: "/calendar", icon: Calendar, label: "Calendario" },
  { href: "/financial-management", icon: DollarSign, label: "Gestión Financiera" },
  { href: "/entities", icon: Building2, label: "Gestión de Sociedades"},
  { href: "/wealth-management", icon: Landmark, label: "Gestión Patrimonial"},
  { href: "/trademarks", icon: Award, label: "Marcas y Patentes"},
  { href: "/legal-audits", icon: BookOpenCheck, label: "Auditorías Legales" },
  { href: "/legal-data-and-metrics", icon: BarChart2, label: "Datos y Métricas Legales" },
  { href: "/background-check", icon: UserSearch, label: "Background check", external: true },
  { href: "/service-request", icon: Ticket, label: "Solicitud de Servicio" },
  { href: "/summarize", icon: Sparkles, label: "IA" },
  { href: "/customer-portal", icon: BookUser, label: "Portal de Clientes" },
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
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M50,5C25.1,5,5,25.1,5,50s20.1,45,45,45s45-20.1,45-45S74.9,5,50,5z M50,11.5l10.5,12.5l-2,6.5L50,28l-8.5,2.5l-2-6.5 L50,11.5z M31.1,28.3L28,30.5l-4.5-5.3l-2.4-0.4l3.1-6.2l6.2-3.1l2.4,0.4l4.5,5.3L31.1,28.3z M69,28.3l6.2-6.2l-3.1-6.2 l-2.4,0.4L64.5,25l-6.2,3.1l-2.4-0.4l-4.5-5.3L69,28.3z M81.5,41.4l-3.8-1.9L73.2,35l-9.1-4.5l-0.4-2.4l5.3-4.5l6.2-3.1 l3.1,6.2l0.4,2.4L81.5,41.4z M18.5,41.4l3.1-6.2l-6.2-3.1l-5.3,4.5l0.4,2.4l9.1-4.5l4.5,4.5L18.5,41.4z M50,88.5 c-21.3,0-38.5-17.2-38.5-38.5S28.7,11.5,50,11.5s38.5,17.2,38.5,38.5S71.3,88.5,50,88.5z" />
                  <path d="M60.4,35.3c-2.3-1.6-5.1-2.5-8.1-2.5c-7.2,0-13,5.8-13,13c0,3.1,1,6,2.8,8.4l-2,2.8h2.3l11.4-9.9 c-0.6-0.6-1-1.3-1-2.2c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3c0,0.9-0.4,1.7-1,2.2l-11.4,9.9h2.3l2-2.8c1.8,2.4,4.7,4,7.8,4 c7.2,0,13-5.8,13-13C73.4,41.2,67.6,36.9,60.4,35.3z M43,59.3c-0.6-0.9-0.9-2-0.9-3.1c0-3.3,2.7-6,6-6s6,2.7,6,6 c0,1.1-0.3,2.1-0.9,3.1H43z" />
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
