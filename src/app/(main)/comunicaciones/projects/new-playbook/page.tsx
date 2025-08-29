
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { ArrowRight, LayoutGrid, List, Table as TableIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const playbooks = [
    { title: "General", description: "Un playbook de propósito general para cualquier asunto legal.", href: "/projects/general" },
    { title: "Due Dilligence", description: "Un proceso estructurado para llevar a cabo una diligencia debida exhaustiva.", href: "/projects" },
    { title: "Proceso de M&A", description: "Gestione fusiones y adquisiciones de principio a fin.", href: "/projects/ma-process" },
    { title: "Legal Six Sigma", description: "Un playbook para gestionar proyectos de mejora de procesos legales.", href: "/projects/six-sigma-legal" },
    { title: "Creación de Fondos", description: "Agilice el proceso de creación de un nuevo fondo de inversión.", href: "/projects" },
    { title: "Tecnología", description: "Maneje asuntos legales relacionados con la tecnología como PI y licencias.", href: "/projects" },
    { title: "Transformación de Sociedades", description: "Guíe a su organización a través de importantes transformaciones legales.", href: "/projects" },
    { title: "Contratos", description: "Un playbook dedicado a la gestión del ciclo de vida de los contratos.", href: "/projects" },
    { title: "Bienes Raíces", description: "Gestione transacciones y asuntos de bienes raíces.", href: "/projects/real-estate" },
    { title: "Fraccional Law", description: "Gestione servicios legales para múltiples clientes como abogado fraccional.", href: "/projects" },
]

export default function NewPlaybookPage() {
  const router = useRouter();
  const [view, setView] = React.useState<'kanban' | 'list' | 'table'>('kanban');

  const KanbanView = () => (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playbooks.map((playbook) => (
            <Card key={playbook.title} className="flex flex-col">
                <CardHeader>
                    <CardTitle>{playbook.title}</CardTitle>
                    <CardDescription>{playbook.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-end">
                    <Button variant="outline" size="sm" asChild>
                       <Link href={playbook.href}>
                        Seleccionar <ArrowRight className="ml-2 h-4 w-4" />
                       </Link>
                     </Button>
                </CardContent>
            </Card>
        ))}
      </div>
  );

  const ListView = () => (
      <div className="flex flex-col gap-4">
        {playbooks.map((playbook) => (
            <Card key={playbook.title}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>{playbook.title}</CardTitle>
                            <CardDescription>{playbook.description}</CardDescription>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                           <Link href={playbook.href}>
                            Seleccionar <ArrowRight className="ml-2 h-4 w-4" />
                           </Link>
                         </Button>
                    </div>
                </CardHeader>
            </Card>
        ))}
    </div>
  );

  const TableView = () => (
    <Card>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Título del Playbook</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {playbooks.map((playbook) => (
                    <TableRow key={playbook.title}>
                        <TableCell className="font-medium">{playbook.title}</TableCell>
                        <TableCell>{playbook.description}</TableCell>
                        <TableCell className="text-right">
                             <Button variant="outline" size="sm" asChild>
                                <Link href={playbook.href}>
                                    Seleccionar <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                             </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>
  );


  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
       <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">
              Crear Nuevo Proyecto
            </h1>
            <p className="text-muted-foreground">
              Seleccione un playbook para comenzar con un nuevo proyecto.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-md bg-muted p-1">
              <Button variant="ghost" size="sm" className={cn(view === 'kanban' && 'bg-background')} onClick={() => setView('kanban')}>
                <LayoutGrid className="h-4 w-4 mr-2" />
                Kanban
              </Button>
              <Button variant="ghost" size="sm" className={cn(view === 'list' && 'bg-background')} onClick={() => setView('list')}>
                <List className="h-4 w-4 mr-2" />
                Lista
              </Button>
              <Button variant="ghost" size="sm" className={cn(view === 'table' && 'bg-background')} onClick={() => setView('table')}>
                <TableIcon className="h-4 w-4 mr-2" />
                Tabla
              </Button>
            </div>
          </div>
       </div>

        {view === 'kanban' && <KanbanView />}
        {view === 'list' && <ListView />}
        {view === 'table' && <TableView />}

       <div className="flex justify-start">
            <Button variant="outline" onClick={() => router.back()}>Cancelar</Button>
       </div>
    </div>
  );
}
