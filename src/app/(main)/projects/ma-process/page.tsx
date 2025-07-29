
'use client';

import {
  ChevronDown,
  CheckCircle2,
  Circle,
  MoreVertical,
  Plus,
  FileText,
  AlertCircle,
  Paperclip,
  Users,
  BarChart,
  GitBranch,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import React from "react";

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
        status: 'at_risk_active',
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
        status: 'in_progress_alert',
        summary: 'Technology rather solid for such a small',
        attachments: 1,
        hasIssues: true,
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
            return <div className="h-4 w-4 rounded-full bg-blue-500 border-2 border-blue-500" />;
        case 'pending':
            return <Circle className="h-5 w-5 text-gray-400" />;
        case 'at_risk':
             return <CheckCircle2 className="h-5 w-5 text-green-500" />;
        case 'at_risk_active':
             return <div className="h-4 w-4 rounded-full bg-blue-500 border-2 border-blue-500" />;
        case 'in_progress_alert':
             return <div className="h-4 w-4 rounded-full bg-orange-500 border-2 border-orange-500" />;
        default:
            return <Circle className="h-5 w-5 text-gray-300" />;
    }
}

const TaskRow = ({ task, level = 0 }: { task: any, level?: number }) => (
  <Collapsible asChild defaultOpen={level < 2}>
    <>
      <TableRow className={cn(task.active && 'bg-amber-100/50')}>
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
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <CollapsibleContent asChild>
         <>
          {task.subtasks.map((subtask: any, index: number) => (
            <TaskRow key={index} task={subtask} level={level + 1} />
          ))}
         </>
      </CollapsibleContent>
    </>
  </Collapsible>
);

const GanttBar = ({ startDate, endDate, color, label, top }: { startDate: string, endDate: string, color: string, label: string, top: number }) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const timelineStart = new Date('2015-07-01').getTime();
    const timelineEnd = new Date('2017-06-30').getTime();
    const totalDuration = timelineEnd - timelineStart;

    const left = ((start - timelineStart) / totalDuration) * 100;
    const width = ((end - start) / totalDuration) * 100;

    return (
        <div className="absolute h-6" style={{ top: `${top}px`, left: `${left}%`, width: `${width}%`, backgroundColor: color }}>
            <div className="relative w-full h-full">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white font-medium">{label}</span>
            </div>
        </div>
    );
};

export default function MAProcessPage() {
  return (
    <div className="flex flex-col gap-4 bg-background p-4 rounded-lg border">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Button variant="outline" className="font-semibold bg-white">
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
                FAQS <Badge className="absolute -top-2 -right-4 bg-green-500 text-white rounded-sm text-[8px] px-1 py-0.5">NUEVO</Badge>
            </Link>
             <div className="flex items-center gap-2">
                <span className="font-bold text-sm">Midaxo</span>
                 <Button variant="outline" size="sm" className="bg-white">
                    Gyro <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                 <Button variant="outline" size="icon" className="h-8 w-8 bg-white">
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
                <Button variant="secondary" className="bg-green-600 text-white hover:bg-green-700 h-8 text-xs"><Plus className="mr-2 h-4 w-4" /> TAREA</Button>
                <Button variant="outline" className="h-8 text-xs bg-white">IMPORTAR <ChevronDown className="ml-2 h-4 w-4" /></Button>
                <Button variant="outline" className="h-8 text-xs bg-white">EXPORTAR <ChevronDown className="ml-2 h-4 w-4" /></Button>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitBranch className="h-4 w-4" />
                    <span>TRACK CHANGES</span>
                    <Badge variant="outline" className="bg-gray-200 text-gray-600 border-gray-300">OFF</Badge>
                </div>
            </div>
            <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[45%]">TASKS</TableHead>
                                <TableHead>STATUS</TableHead>
                                <TableHead>SUMMARY</TableHead>
                                <TableHead></TableHead>
                                <TableHead></TableHead>
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
                <div className="flex justify-between items-center h-8">
                    <div className="flex items-center gap-1 rounded-md bg-muted p-1 text-sm">
                        <Button variant="ghost" size="sm" className="h-6">MES</Button>
                        <Button variant="ghost" size="sm" className="bg-white h-6">SEMANA</Button>
                    </div>
                    <TabsList className="bg-transparent border-0 p-0 h-auto">
                        <TabsTrigger value="task_info" className="text-xs p-2 h-auto border-0 rounded-none">INFO DE TAREA</TabsTrigger>
                        <TabsTrigger value="documents" className="text-xs p-2 h-auto border-0 rounded-none">DOCUMENTOS <Badge className="ml-2 bg-green-500 text-white rounded-sm text-[8px] px-1 py-0.5">1</Badge></TabsTrigger>
                        <TabsTrigger value="issues" className="text-xs p-2 h-auto border-0 rounded-none">INCIDENCIAS <Badge variant="destructive" className="ml-2 rounded-sm text-[8px] px-1 py-0.5">2</Badge></TabsTrigger>
                        <TabsTrigger value="events" className="text-xs p-2 h-auto border-0 rounded-none">EVENTOS <Badge className="ml-2 bg-blue-500 text-white rounded-sm text-[8px] px-1 py-0.5">7</Badge></TabsTrigger>
                        <TabsTrigger value="activity" className="text-xs p-2 h-auto border-0 rounded-none">ACTIVIDAD</TabsTrigger>
                        <TabsTrigger value="schedule" className="text-xs p-2 h-auto border-b-2 border-primary text-primary">HORARIO</TabsTrigger>
                    </TabsList>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button>
                </div>
                <TabsContent value="schedule" className="mt-4">
                   <div className="relative w-full overflow-x-auto">
                        <div className="relative h-[600px] min-w-[1200px]">
                            {/* Year Headers */}
                            <div className="flex sticky top-0 bg-background z-10">
                                <div className="w-1/2 flex justify-center items-center border-b border-r"><span className="text-sm font-semibold">2015</span></div>
                                <div className="w-1/2 flex justify-center items-center border-b"><span className="text-sm font-semibold">2016</span></div>
                            </div>
                             {/* Month Headers */}
                            <div className="flex sticky top-6 bg-background z-10">
                                {['7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6'].map(month => (
                                    <div key={month} className="w-[4.1666%] text-center border-b border-r text-sm text-muted-foreground">{month}</div>
                                ))}
                            </div>
                            {/* Grid Lines */}
                            <div className="absolute top-12 left-0 w-full h-[550px]">
                                 {[...Array(24)].map((_, i) => (
                                    <div key={i} className="absolute h-full border-r" style={{ left: `${i * 4.1666}%`, width: '4.1666%' }}></div>
                                ))}
                                <div className="absolute w-px h-full bg-red-500" style={{ left: '25%' }}>
                                    <div className="absolute -top-3 -translate-x-1/2 w-2 h-2 rounded-full bg-red-500"></div>
                                </div>
                            </div>
                            {/* Gantt Bars */}
                            <div className="relative pt-4">
                               <GanttBar top={25} startDate="2015-07-14" endDate="2015-09-13" color="#a6d8a6" label="14 Jul 2015" />
                               <GanttBar top={75} startDate="2015-08-15" endDate="2015-10-31" color="#a6d8a6" label="15 Aug 2015" />
                               <GanttBar top={125} startDate="2015-10-22" endDate="2016-02-19" color="#a6d8a6" label="22 Oct 2015" />
                               <GanttBar top={175} startDate="2015-11-28" endDate="2015-12-26" color="#a6d8a6" label="28 Nov 2015" />
                               <GanttBar top={225} startDate="2015-11-21" endDate="2016-01-15" color="#a6d8a6" label="21 Nov 2015" />
                               <GanttBar top={275} startDate="2015-12-01" endDate="2016-02-29" color="#a6d8a6" label="01 Dec 2015" />
                               <GanttBar top={325} startDate="2015-12-01" endDate="2016-02-15" color="#f5c784" label="01 Dec 2015" />
                               <GanttBar top={475} startDate="2015-12-01" endDate="2016-02-15" color="#f5c784" label="01 Dec 2015" />
                               <GanttBar top={525} startDate="2015-12-01" endDate="2016-02-15" color="#f5c784" label="01 Dec 2015" />
                            </div>
                        </div>
                   </div>
                </TabsContent>
            </Tabs>
        </div>
      </main>
    </div>
  );
}

    