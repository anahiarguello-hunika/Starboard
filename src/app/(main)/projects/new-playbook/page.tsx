
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ArrowRight, LayoutGrid, List, Table as TableIcon } from "lucide-react";

const playbooks = [
    { title: "General", description: "Un playbook de propósito general para cualquier asunto legal." },
    { title: "Diligencia Debida", description: "Un proceso estructurado para llevar a cabo una diligencia debida exhaustiva." },
    { title: "Proceso de M&A", description: "Gestione fusiones y adquisiciones de principio a fin." },
    { title: "Inmobiliario General", description: "Un playbook estándar para transacciones inmobiliarias." },
    { title: "Creación de Fondos", description: "Agilice el proceso de creación de un nuevo fondo de inversión." },
    { title: "Seis Sigma Legal", description: "Aplique los principios de Seis Sigma para optimizar los procesos legales." },
    { title: "Tecnología", description: "Maneje asuntos legales relacionados con la tecnología como PI y licencias." },
    { title: "Transformación", description: "Guíe a su organización a través de importantes transformaciones legales." },
    { title: "Contratos", description: "Un playbook dedicado a la gestión del ciclo de vida de los contratos." },
    { title: "Derecho Fraccional", description: "Gestione servicios legales para múltiples clientes como abogado fraccional." },
]

export default function NewPlaybookPage() {
  const router = useRouter();

  const handleSelect = () => {
    // For now, just navigates back to the projects page.
    // In the future, this would handle playbook selection.
    router.push('/projects');
  };

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
          </div>
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playbooks.map((playbook) => (
            <Card key={playbook.title} className="flex flex-col">
                <CardHeader>
                    <CardTitle>{playbook.title}</CardTitle>
                    <CardDescription>{playbook.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-end">
                     <Button variant="outline" size="sm" onClick={handleSelect}>
                        Seleccionar <ArrowRight className="ml-2 h-4 w-4" />
                     </Button>
                </CardContent>
            </Card>
        ))}
      </div>
       <div className="flex justify-start">
            <Button variant="outline" onClick={() => router.back()}>Cancelar</Button>
       </div>
    </div>
  );
}
