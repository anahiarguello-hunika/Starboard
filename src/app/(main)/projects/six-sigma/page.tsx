
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
        name: 'Initiate',
        status: 'Set duration',
        summary: [4,1],
        subtasks: []
    },
    {
        name: 'Define',
        status: 'Set duration',
        summary: [1],
        subtasks: []
    },
    {
        name: 'Measure',
        status: 'Set duration',
        summary: [2],
        subtasks: [
            {
                name: 'Tollgate 4 - Identify Performance Indicators',
                status: 'Set duration',
                summary: [8,1],
                subtasks: [
                    {
                        name: 'Document Key Performance Indicators',
                        status: 'Set duration',
                        summary: [2],
                        subtasks: [
                            { name: 'Create detailed process map', status: 'Set duration', summary: [2], active: true },
                            { name: 'Review process map for areas of improvement', status: 'Set duration', summary: [2] },
                            { name: 'Review CTQ Tree', status: 'Set duration', summary: [1] },
                            { name: 'Determine the key dependent variables', status: 'Set duration', summary: [2] },
                        ]
                    },
                ]
            },
            {
                name: 'Conduct Tollgate 4 Review Meeting',
                status: 'Set duration',
                summary: [8],
                subtasks: [
                    { name: 'Schedule meeting with Sponsor', status: 'Set duration', summary: [] },
                    { name: 'Prepare Tollgate Review Memo', status: 'Set duration', summary: [1] },
                    { name: 'Send Sponsor supporting material', status: 'Set duration', summary: [] },
                    { name: 'Prepare the team members attending the meeting', status: 'Set duration', summary: [] },
                    { name: 'Conduct meeting', status: 'Set duration', summary: [] },
                ]
            },
            {
                name: 'Tollgate 5 - Data Collection Plan',
                status: 'Set duration',
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
        <p className="text-xs text-muted-foreground ml-8">+ Assign responsible</p>
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
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">NEW SIX SIGMA (JASON)</Badge>
            <h1 className="text-2xl font-bold font-headline">xServe NPS Improvement</h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">PIPELINE</Link>
            <Link href="#" className="text-primary font-semibold hover:text-primary">PROJECTS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">DATA</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">WIDGETS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">ANALYTICS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">USERS</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">SUPPORT</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">FAQS</Link>
        </div>
      </header>

       <div className="border-b">
         <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="flex items-center gap-2 py-2 text-primary border-b-2 border-primary">
                <FileText className="h-4 w-4" /> Tasks
            </Link>
             <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                <AlertCircle className="h-4 w-4" /> Issues
            </Link>
             <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                <FileText className="h-4 w-4" /> Documents
            </Link>
              <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
                <Calendar className="h-4 w-4" /> Events
            </Link>
        </nav>
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Button><Plus className="mr-2 h-4 w-4" /> Task</Button>
                <Button variant="outline">Reorder Tasks</Button>
                <Button variant="outline">Import <ChevronDown className="ml-2 h-4 w-4" /></Button>
                <Button variant="outline">Export <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </div>
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tasks</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Summary</TableHead>
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
                    <TabsTrigger value="task_info">Task Info</TabsTrigger>
                    <TabsTrigger value="documents">Documents <Badge className="ml-2">2</Badge></TabsTrigger>
                    <TabsTrigger value="issues">Issues <Badge variant="destructive" className="ml-2">0</Badge></TabsTrigger>
                    <TabsTrigger value="events">Events <Badge className="ml-2">0</Badge></TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                <TabsContent value="task_info" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create detailed process map</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                           <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-base">Deal Notes / Goals</CardTitle>
                                    <Button variant="secondary" size="sm">Edit</Button>
                                </CardHeader>
                           </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-base">Dependencies</CardTitle>
                                    <Button variant="secondary" size="sm"><Plus className="mr-2 h-4 w-4" /> Dependency</Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                                        <Link href="#" className="text-blue-600 underline">Click here</Link> to learn more about the Task Dependencies.
                                    </div>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-base">Guide</CardTitle>
                                     <Button variant="secondary" size="sm">Edit</Button>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground space-y-4">
                                    <p>
                                        Build a more detailed version of the process map developed in the Define phase. Focus on building a comprehensive view of the as-is model. This will likely require some participation from employees with expertise in the process. Often the view employees that interact with the process have varies greatly from official documentation or what leadership `thinks` the process is. Build an accurate picture of how the process really functions.
                                    </p>
                                    <p>
                                        The process drawing(s) at this stage should include decisions and process branching and swim lanes to indicate the parties responsible for each activity. No longer is only the `happy path` depicted but error conditions, rework and waste patterns are clearly shown. In the end, the team, including process experts, should agree that the process is as depicted. If there is uncertainty, test the drawing by observing the process in action if possible with the diagram handy for reference.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Resources:</h4>
                                        <p>Description of attached documents and links in the Documents tab.</p>
                                        <ul className="list-disc pl-5 mt-2">
                                            <li>Everyone Should Learn BPMN - Business Process Modeling Notation (BPMN) is a diagraming standard governed by the Object Management Group (OMG). It is a powerful, compact and precise notation but can take a little work to master.</li>
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
