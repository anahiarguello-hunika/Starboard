
'use client';

import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  MoreHorizontal,
  Plus,
  FileText,
  AlertCircle,
  Calendar,
  Paperclip
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from 'next/link';

const tasks = [
    {
        name: 'Iniciar',
        status: 'Establecer duración',
        summary: [4,1],
        subtasks: []
    },
    {
        name: 'Definir',
        status: 'Establecer duración',
        summary: [1],
        subtasks: []
    },
    {
        name: 'Medir',
        status: 'Establecer duración',
        summary: [2],
        subtasks: [
            {
                name: 'Tollgate 4 - Identificar Indicadores de Desempeño',
                status: 'Establecer duración',
                summary: [8,1],
                subtasks: [
                    {
                        name: 'Documentar Indicadores Clave de Desempeño',
                        status: 'Establecer duración',
                        summary: [2],
                        subtasks: [
                            { name: 'Crear mapa de proceso detallado', status: 'Establecer duración', summary: [2], active: true },
                            { name: 'Revisar mapa de proceso para áreas de mejora', status: 'Establecer duración', summary: [2] },
                            { name: 'Revisar Árbol CTQ', status: 'Establecer duración', summary: [1] },
                            { name: 'Determinar las variables dependientes clave', status: 'Establecer duración', summary: [2] },
                        ]
                    },
                ]
            },
            {
                name: 'Realizar Reunión de Revisión de Tollgate 4',
                status: 'Establecer duración',
                summary: [8],
                subtasks: [
                    { name: 'Programar reunión con el Patrocinador', status: 'Establecer duración', summary: [] },
                    { name: 'Preparar Memo de Revisión de Tollgate', status: 'Establecer duración', summary: [1] },
                    { name: 'Enviar material de apoyo al Patrocinador', status: 'Establecer duración', summary: [] },
                    { name: 'Preparar a los miembros del equipo que asisten a la reunión', status: 'Establecer duración', summary: [] },
                    { name: 'Realizar la reunión', status: 'Establecer duración', summary: [] },
                ]
            },
            {
                name: 'Tollgate 5 - Plan de Recolección de Datos',
                status: 'Establecer duración',
                summary: [],
                subtasks: []
            },
        ]
    }
]

const TaskRow = ({ task, level = 0 }: { task: any, level?: number }) => (
  <Collapsible defaultOpen={level < 2}>
    <TableRow className={cn(task.active && 'bg-blue-100')}>
      <TableCell style={{ paddingLeft: `${level * 24 + 16}px` }}>
        <div className="flex items-center gap-2">
            {task.subtasks.length > 0 && <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ChevronRight className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-90" />
                </Button>
            </CollapsibleTrigger>}
             {task.subtasks.length === 0 && <span className="w-6 h-6 inline-block" />}

          <span className="font-medium">{task.name}</span>
        </div>
        <p className="text-xs text-muted-foreground ml-8">+ Asignar responsable</p>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span className="text-muted-foreground text-xs">{task.status}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1.5">
            {task.summary.map((s: number, i: number) => (
                <div key={i} className="flex items-center gap-1 text-muted-foreground text-xs border rounded-full px-2 py-0.5">
                    <Paperclip className="h-3 w-3" />
                    <span>{s}</span>
                </div>
            ))}
        </div>
      </TableCell>
    </TableRow>
    {task.subtasks.length > 0 && <CollapsibleContent asChild>
       <>
        {task.subtasks.map((subtask: any, index: number) => (
          <TaskRow key={index} task={subtask} level={level + 1} />
        ))}
       </>
    </CollapsibleContent>}
  </Collapsible>
);

export default function SixSigmaProjectPage() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">NUEVO SEIS SIGMA (JASON)</Badge>
            <h1 className="text-2xl font-bold font-headline">Mejora de NPS de xServe</h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">PIPELINE</Link>
            <Link href="#" className="text-primary font-semibold hover:text-primary">PROYECTOS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">DATOS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">WIDGETS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">ANALÍTICAS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">USUARIOS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">SOPORTE</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">PREGUNTAS FRECUENTES</Link>
        </div>
      </header>

       <div className="border-b">
         <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="flex items-center gap-2 py-2 text-primary border-b-2 border-primary">
                <FileText className="h-4 w-4" /> Tareas
            </Link>
             <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                <AlertCircle className="h-4 w-4" /> Incidencias
            </Link>
             <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                <FileText className="h-4 w-4" /> Documentos
            </Link>
              <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                <Calendar className="h-4 w-4" /> Eventos
            </Link>
        </nav>
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Button><Plus className="mr-2 h-4 w-4" /> Tarea</Button>
                <Button variant="outline">Reordenar Tareas</Button>
                <Button variant="outline">Importar <ChevronDown className="ml-2 h-4 w-4" /></Button>
                <Button variant="outline">Exportar <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </div>
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tareas</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead>Resumen</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map((task, index) => (
                                <TaskRow key={index} task={task} />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1 space-y-6">
            <Tabs defaultValue="task_info">
                <TabsList>
                    <TabsTrigger value="task_info">Info de Tarea</TabsTrigger>
                    <TabsTrigger value="documents">Documentos <Badge className="ml-2">2</Badge></TabsTrigger>
                    <TabsTrigger value="issues">Incidencias <Badge variant="destructive" className="ml-2">0</Badge></TabsTrigger>
                    <TabsTrigger value="events">Eventos <Badge className="ml-2">0</Badge></TabsTrigger>
                    <TabsTrigger value="activity">Actividad</TabsTrigger>
                    <TabsTrigger value="schedule">Horario</TabsTrigger>
                </TabsList>
                <TabsContent value="task_info" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Crear mapa de proceso detallado</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                           <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-base">Notas / Objetivos del Trato</CardTitle>
                                    <Button variant="secondary" size="sm">Editar</Button>
                                </CardHeader>
                           </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-base">Dependencias</CardTitle>
                                    <Button variant="secondary" size="sm"><Plus className="mr-2 h-4 w-4" /> Dependencia</Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                                        <Link href="#" className="text-blue-600 underline">Haga clic aquí</Link> para obtener más información sobre las Dependencias de Tareas.
                                    </div>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-base">Guía</CardTitle>
                                     <Button variant="secondary" size="sm">Editar</Button>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground space-y-4">
                                    <p>
                                        Construya una versión más detallada del mapa de procesos desarrollado en la fase de Definición. Concéntrese en construir una vista integral del modelo actual. Esto probablemente requerirá la participación de empleados con experiencia en el proceso. A menudo, la visión que tienen los empleados que interactúan con el proceso varía mucho de la documentación oficial o de lo que el liderazgo "cree" que es el proceso. Construya una imagen precisa de cómo funciona realmente el proceso.
                                    </p>
                                    <p>
                                        Los dibujos del proceso en esta etapa deben incluir decisiones y ramificaciones del proceso y carriles para indicar a las partes responsables de cada actividad. Ya no solo se representa el "camino feliz", sino que se muestran claramente las condiciones de error, el retrabajo y los patrones de desperdicio. Al final, el equipo, incluidos los expertos en procesos, debe estar de acuerdo en que el proceso es como se representa. Si hay incertidumbre, pruebe el diagrama observando el proceso en acción si es posible con el diagrama a mano como referencia.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Recursos:</h4>
                                        <p>Descripción de los documentos y enlaces adjuntos en la pestaña Documentos.</p>
                                        <ul className="list-disc pl-5 mt-2">
                                            <li>Todos Deberían Aprender BPMN - La Notación de Modelado de Procesos de Negocio (BPMN) es un estándar de diagramación regido por el Object Management Group (OMG). Es una notación poderosa, compacta y precisa, pero puede requerir un poco de trabajo para dominarla.</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
      </main>
    </div>
  );
}
