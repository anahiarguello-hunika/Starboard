
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData, type Project } from "@/lib/mock-data";
import { 
  FileText, 
  Folder, 
  PlusCircle,
  LayoutDashboard,
  BarChart2,
  ListTodo,
  File,
  Calendar,
  AlertTriangle,
  BarChart,
  StickyNote,
  History,
  LifeBuoy,
  LayoutGrid,
  List,
  Table as TableIcon
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projectNav = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: '+ Proyecto', icon: PlusCircle, href: "/projects/new-playbook" },
    { name: 'Progreso', icon: BarChart2 },
    { name: 'Tarea', icon: ListTodo },
    { name: 'Documentos', icon: File },
    { name: 'Eventos', icon: Calendar },
    { name: 'Incidencias', icon: AlertTriangle },
    { name: 'Analíticas', icon: BarChart },
    { name: 'Notas', icon: StickyNote },
    { name: 'Actividad', icon: History },
    { name: 'Soporte', icon: LifeBuoy },
];


export default function ProjectsPage() {
  const getStatusVariant = (status: Project["status"]) => {
    switch (status) {
      case "Activo":
        return "default";
      case "En Espera":
        return "secondary";
      case "Cerrado":
        return "outline";
    }
  };

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                 {projectNav.map((item) => (
                    <Link key={item.name} href={item.href || "#"} className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                        item.active ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                    )}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline">
                Proyectos
              </h1>
              <p className="text-muted-foreground">
                Un portafolio de todos sus proyectos y asuntos legales.
              </p>
            </div>
            <div className="flex items-center gap-2">
               <div className="flex items-center gap-1 rounded-md bg-muted p-1">
                  <Button variant="ghost" size="sm" className="bg-background">
                    <LayoutGrid className="h-4 w-4 mr-2" />
                    Kanban
                  </Button>
                   <Button variant="ghost" size="sm">
                    <List className="h-4 w-4 mr-2" />
                    Lista
                  </Button>
                   <Button variant="ghost" size="sm">
                    <TableIcon className="h-4 w-4 mr-2" />
                    Tabla
                  </Button>
               </div>
               <Link href="/projects/new-playbook">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nuevo Proyecto
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-headline text-xl mb-1">{project.name}</CardTitle>
                        <CardDescription>{project.client}</CardDescription>
                      </div>
                       <Badge variant={getStatusVariant(project.status)}
                             className={project.status === 'Activo' ? 'bg-accent text-accent-foreground' : ''}>
                        {project.status}
                      </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-sm text-muted-foreground">
                    <p>Líder: {project.leadAttorney}</p>
                    <p>Abierto: {project.openDate}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                            <Folder className="h-4 w-4 text-muted-foreground" />
                            <span>{project.documentCount} Documentos</span>
                        </div>
                         <div className="flex items-center gap-1.5">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{project.contractCount} Contratos</span>
                        </div>
                    </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.name.includes('Adquisición') ? "/projects/ma-process" : "/projects/six-sigma"}>Ver Proyecto</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
    </div>
  );
}
