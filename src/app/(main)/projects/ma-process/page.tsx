
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
  Paperclip,
  Users,
  BarChart,
  GitBranch,
  Settings,
  MoreVertical,
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
import { cn } from "@/lib/utils";

const tasks = [
    {
        name: 'Initial study',
        assignees: "Donald, Fethry, Gilbert, Gladstone",
        status: 'completed',
        summary: 'BoD approved',
        attachments: 1,
        subtasks: []
    },
    {
        name: 'Start Negotiations',
        assignees: "+ Assign responsible",
        status: 'completed',
        summary: '',
        attachments: null,
        subtasks: []
    },
    {
        name: 'Due Diligence',
        assignees: 'Gilbert',
        status: 'in_progress',
        summary: 'DD completed.',
        attachments: 1,
        subtasks: [
            {
                name: 'Business Due Diligence',
                assignees: 'Gilbert',
                status: 'completed',
                summary: '',
                attachments: null,
                subtasks: []
            },
            {
                name: 'Financial Due Diligence',
                assignees: 'Ludwig',
                status: 'completed',
                summary: 'Some projections, non-optimistic',
                attachments: 1,
                subtasks: []
            },
            {
                name: 'Legal Due Diligence',
                assignees: 'Goofy',
                status: 'at_risk',
                summary: 'Some IPR disputes have to be mitigated after.',
                attachments: 3,
                hasIssues: true,
                subtasks: []
            },
            {
                name: 'HR Due Diligence',
                assignees: 'Daisy',
                status: 'completed',
                summary: 'Key team members are committed.',
                attachments: null,
                subtasks: []
            },
        ]
    },
    {
        name: 'Commitment of key employees after the deal',
        assignees: 'Daisy',
        status: 'at_risk',
        summary: '',
        attachments: 3,
        hasIssues: true,
        active: true,
        subtasks: []
    },
     {
        name: 'Cultural fit',
        assignees: 'Daisy',
        status: 'pending',
        summary: '',
        attachments: null,
        subtasks: []
    },
     {
        name: 'Compensation policies',
        assignees: 'Daisy',
        status: 'pending',
        summary: '',
        attachments: null,
        subtasks: []
    },
     {
        name: 'Current personnel',
        assignees: 'Daisy',
        status: 'pending',
        summary: '',
        attachments: null,
        subtasks: []
    },
     {
        name: 'Transition to new organization',
        assignees: 'Daisy',
        status: 'pending',
        summary: '',
        attachments: null,
        subtasks: []
    },
     {
        name: 'Technology Assessment',
        assignees: 'Gilbert',
        status: 'in_progress',
        summary: 'Technology rather solid for such a small',
        attachments: 1,
        subtasks: []
    },
     {
        name: 'High-Level Business Plan for the New Entity',
        assignees: 'Gilbert',
        status: 'pending',
        summary: '',
        attachments: 2,
        subtasks: []
    },
     {
        name: 'Final Valuation and Financing Plan',
        assignees: 'Gilbert',
        status: 'pending',
        summary: '',
        attachments: 2,
        subtasks: []
    },
]

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'completed':
            return <CheckCircle2 className="h-5 w-5 text-green-500" />;
        case 'in_progress':
            return <Circle className="h-5 w-5 text-blue-500 fill-current" />;
        case 'pending':
            return <Circle className="h-5 w-5 text-gray-400" />;
        case 'at_risk':
             return <CheckCircle2 className="h-5 w-5 text-green-500" />;
        default:
            return <Circle className="h-5 w-5 text-gray-300" />;
    }
}

const TaskRow = ({ task, level = 0 }: { task: any, level?: number }) => (
  <Collapsible defaultOpen={true}>
    <TableRow className={cn(task.active && 'bg-blue-100/50 border-l-2 border-blue-500')}>
      <TableCell style={{ paddingLeft: `${level * 24 + 16}px` }}>
        <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("h-6 w-6", task.subtasks.length === 0 && "invisible")}>
                    <ChevronRight className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-90" />
                </Button>
            </CollapsibleTrigger>
            <div>
              <span className="font-medium">{task.name}</span>
              <p className={cn("text-xs", task.assignees.startsWith('+') ? "text-blue-500" : "text-muted-foreground")}>{task.assignees}</p>
            </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
            {getStatusIcon(task.status)}
            {task.hasIssues && <AlertCircle className="h-5 w-5 text-red-500" />}
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground text-xs max-w-xs truncate">
        {task.summary}
      </TableCell>
      <TableCell>
         {task.attachments && <div className="flex items-center gap-1.5 text-muted-foreground text-xs border rounded-full px-2 py-0.5 w-fit">
            <Paperclip className="h-3 w-3" />
            <span>{task.attachments}</span>
        </div>}
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

export default function MAProcessPage() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Button variant="outline" className="font-semibold">
                Midaxo <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            <h1 className="text-xl font-semibold font-headline">M&A Process</h1>
        </div>
        <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">PIPELINE</Link>
            <Link href="#" className="text-primary font-semibold hover:text-primary">PROYECTOS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">DATOS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">ANALÍTICAS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">USUARIOS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">SOPORTE</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary relative">
                PREGUNTAS FRECUENTES <Badge className="absolute -top-2 -right-4 bg-green-500 text-white">NUEVO</Badge>
            </Link>
             <div className="flex items-center gap-2">
                <span className="font-bold">Midaxo</span>
                 <Button variant="outline" size="sm">
                    Gyro <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                 <Button variant="outline" size="icon" className="h-8 w-8">
                    <BarChart className="h-4 w-4" />
                </Button>
             </div>
        </div>
      </header>
       <div className="border-b">
         <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <span className="font-bold">lota</span>
                <Link href="#" className="flex items-center gap-1 py-2 hover:text-primary">
                    <Users className="h-4 w-4" /> Visión General
                </Link>
                <Link href="#" className="flex items-center gap-2 py-2 text-primary border-b-2 border-primary font-semibold">
                    <FileText className="h-4 w-4" /> Tareas
                </Link>
                <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                    <AlertCircle className="h-4 w-4" /> Incidencias
                </Link>
                 <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                    <Users className="h-4 w-4" /> Permisos
                </Link>
                <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                    <BarChart className="h-4 w-4" /> Progreso
                </Link>
            </div>
        </nav>
      </div>
      <main className="grid grid-cols-[60fr_40fr] gap-0 items-start">
        <div className="flex flex-col gap-4 border-r pr-4">
            <div className="flex items-center gap-2">
                <Button variant="secondary" className="bg-green-600 text-white hover:bg-green-700"><Plus className="mr-2 h-4 w-4" /> TAREA</Button>
                <Button variant="outline">IMPORTAR <ChevronDown className="ml-2 h-4 w-4" /></Button>
                <Button variant="outline">EXPORTAR <ChevronDown className="ml-2 h-4 w-4" /></Button>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitBranch className="h-4 w-4" />
                    <span>SEGUIMIENTO DE CAMBIOS</span>
                    <Badge variant="outline">OFF</Badge>
                </div>
            </div>
            <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/2">TAREAS</TableHead>
                                <TableHead>ESTADO</TableHead>
                                <TableHead>RESUMEN</TableHead>
                                <TableHead></TableHead>
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
        <div className="pl-4">
             <Tabs defaultValue="schedule">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 rounded-md bg-muted p-1 text-sm">
                        <Button variant="ghost" size="sm">MES</Button>
                        <Button variant="ghost" size="sm" className="bg-background">SEMANA</Button>
                    </div>
                    <TabsList>
                        <TabsTrigger value="task_info">INFO DE TAREA</TabsTrigger>
                        <TabsTrigger value="documents">DOCUMENTOS</TabsTrigger>
                        <TabsTrigger value="issues">INCIDENCIAS <Badge variant="destructive" className="ml-2">2</Badge></TabsTrigger>
                        <TabsTrigger value="events">EVENTOS <Badge className="ml-2 bg-blue-500 text-white">7</Badge></TabsTrigger>
                        <TabsTrigger value="activity">ACTIVIDAD</TabsTrigger>
                        <TabsTrigger value="schedule">HORARIO</TabsTrigger>
                    </TabsList>
                    <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                </div>
                <TabsContent value="schedule" className="mt-4">
                   <div className="w-full h-[600px] bg-muted/50 flex items-center justify-center rounded-lg">
                     <p className="text-muted-foreground">Vista de Horario/Gantt Próximamente</p>
                   </div>
                </TabsContent>
            </Tabs>
        </div>
      </main>
    </div>
  );
}
