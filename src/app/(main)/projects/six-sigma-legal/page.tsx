
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
  Home,
  Check,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

const tasks = [
  {
    name: 'Initiate',
    assignees: '+ Assign responsible',
    status: 'completed',
    summary: null,
    attachments: 4,
    subtasks: [],
  },
  {
    name: 'Define',
    assignees: '+ Assign responsible',
    status: 'completed',
    summary: null,
    attachments: 1,
    subtasks: [],
  },
  {
    name: 'Measure',
    assignees: '+ Assign responsible',
    status: 'in_progress',
    summary: null,
    attachments: 2,
    subtasks: [
      {
        name: 'Tollgate 4 - Identify Performance Indicators',
        assignees: 'Assign responsible',
        status: 'in_progress_alert',
        summary: null,
        attachments: 1,
        subtasks: [],
      },
      {
        name: 'Document Key Performance Indicators',
        assignees: 'Assign responsible',
        status: 'completed',
        summary: null,
        attachments: 2,
        subtasks: [
            {
                name: 'Create detailed process map',
                assignees: '+ Assign responsible',
                status: 'active',
                summary: null,
                attachments: 2,
                subtasks: [],
            },
            {
                name: 'Review process map for areas of improvement',
                assignees: '+ Assign responsible',
                status: 'completed',
                summary: null,
                attachments: 2,
                subtasks: [],
            },
            {
                name: 'Review CTQ Tree',
                assignees: 'Assign responsible',
                status: 'completed',
                summary: null,
                attachments: 1,
                subtasks: [],
            },
             {
                name: 'Determine the key dependent variables',
                assignees: 'Assign responsible',
                status: 'completed',
                summary: null,
                attachments: 2,
                subtasks: [],
            }
        ],
      },
      {
        name: 'Conduct Tollgate 4 Review Meeting',
        assignees: '+ Assign responsible',
        status: 'at_risk',
        summary: null,
        attachments: 8,
        subtasks: [
             {
                name: 'Schedule meeting with Sponsor',
                assignees: '+ Assign responsible',
                status: 'completed',
                summary: null,
                attachments: null,
                subtasks: [],
            },
            {
                name: 'Prepare Tollgate Review Memo',
                assignees: '+ Assign responsible',
                status: 'completed',
                summary: null,
                attachments: 1,
                subtasks: [],
            },
            {
                name: 'Send Sponsor supporting material',
                assignees: '+ Assign responsible',
                status: 'completed',
                summary: null,
                attachments: null,
                subtasks: [],
            },
             {
                name: 'Prepare the team members attending the meeting',
                assignees: '+ Assign responsible',
                status: 'completed',
                summary: null,
                attachments: null,
                subtasks: [],
            },
             {
                name: 'Conduct meeting',
                assignees: '+ Assign responsible',
                status: 'completed',
                summary: null,
                attachments: null,
                subtasks: [],
            },
        ],
      },
    ],
  },
  {
    name: 'Tollgate 5 - Data Collection Plan',
    assignees: 'Assign responsible',
    status: 'pending',
    summary: null,
    attachments: null,
    subtasks: [],
  },
];


const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case 'in_progress':
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case 'pending':
      return <Circle className="h-5 w-5 text-gray-300" />;
    case 'at_risk':
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case 'active':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case 'in_progress_alert':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    default:
      return <Circle className="h-5 w-5 text-gray-300" />;
  }
};

const TaskRow = ({ task, level = 0 }: { task: any; level?: number }) => (
    <TableRow className={cn(task.status === 'active' && 'bg-gray-300/80')}>
        <TableCell style={{ paddingLeft: `${level * 24 + 16}px` }}>
            <div className="flex items-center gap-2">
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn("h-6 w-6", !task.subtasks || task.subtasks.length === 0 ? "invisible" : "")}>
                        <ChevronRight className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-90" />
                    </Button>
                </CollapsibleTrigger>
                <div className="flex-1">
                    <span className={cn("font-medium", task.status === 'active' && 'text-gray-800')}>{task.name}</span>
                    <p className={cn("text-xs", task.assignees.startsWith('+') ? "text-blue-500" : "text-muted-foreground")}>{task.assignees}</p>
                </div>
            </div>
        </TableCell>
        <TableCell className="w-24">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
                {getStatusIcon(task.status)}
                Set duration
            </div>
        </TableCell>
        <TableCell className="w-24">
            <div className="w-full h-8 border-dashed border-b-2" />
        </TableCell>
        <TableCell className="w-16 text-right">
            {task.attachments && (
                <div className="flex items-center justify-end gap-1.5 text-muted-foreground text-xs">
                    <Paperclip className="h-4 w-4" />
                    <span>{task.attachments}</span>
                </div>
            )}
        </TableCell>
    </TableRow>
);

const TaskCollapsible = ({ task, level = 0 }: { task: any; level?: number }) => (
    <Collapsible asChild defaultOpen={level < 2 || task.name === 'Measure'}>
      <React.Fragment>
        <TaskRow task={task} level={level} />
        {task.subtasks && task.subtasks.length > 0 && (
          <CollapsibleContent asChild>
           <React.Fragment>
            {task.subtasks.map((subtask: any, index: number) => (
                <TaskCollapsible key={index} task={subtask} level={level + 1} />
            ))}
           </React.Fragment>
          </CollapsibleContent>
        )}
      </React.Fragment>
    </Collapsible>
);

export default function SixSigmaLegalPage() {
  return (
    <div className="flex flex-col gap-4 bg-zinc-50 p-4 rounded-lg border">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="font-semibold bg-white">
            Midaxo M&amp;A Academy <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="outline" className="font-semibold bg-white">
            NEW SIX SIGMA (JASON) <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#" className="text-muted-foreground hover:text-primary">PIPELINE</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">PROJECTS</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">DATA</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">WIDGETS</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">ANALYTICS</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">USERS</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">SUPPORT</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary relative">
            FAQS
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-white">
              MIDAXO ADMIN <ChevronDown className="h-4 w-4 ml-2" />
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
            <span className="font-bold">xServe NPS Improvement</span>
            <Link href="#" className="flex items-center gap-1 py-2 hover:text-primary">
              <Home className="h-4 w-4" /> Overview
            </Link>
            <Link href="#" className="flex items-center gap-2 py-2 text-primary border-b-2 border-primary font-semibold">
              <Check className="h-4 w-4" /> Tasks
            </Link>
            <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
              <AlertCircle className="h-4 w-4" /> Issues
            </Link>
            <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
              <Users className="h-4 w-4" /> Permissions
            </Link>
            <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary">
              <BarChart className="h-4 w-4" /> Progress
            </Link>
          </div>
        </nav>
      </div>
      <main className="grid grid-cols-[60fr_40fr] gap-0 items-start">
        <div className="flex flex-col gap-4 border-r pr-4">
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="bg-green-600 text-white hover:bg-green-700 h-8 text-xs">
              <Plus className="mr-2 h-4 w-4" /> TASK
            </Button>
            <Button variant="outline" className="h-8 text-xs bg-white">REORDER TASKS</Button>
            <Button variant="outline" className="h-8 text-xs bg-white">
              IMPORT <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-8 text-xs bg-white">
              EXPORT <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[60%]">Tasks</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Summary</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task, index) => (
                    <TaskCollapsible key={index} task={task} />
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="pl-4">
          <Tabs defaultValue="task_info">
            <div className="flex justify-between items-center h-8">
               <div />
              <TabsList className="bg-transparent border-0 p-0 h-auto">
                <TabsTrigger value="task_info" className="text-xs p-2 h-auto border-b-2 border-gray-600 text-gray-600">TASK INFO</TabsTrigger>
                <TabsTrigger value="documents" className="text-xs p-2 h-auto border-0 rounded-none">DOCUMENTS <Badge className="ml-2 bg-green-500 text-white rounded-sm text-[8px] px-1 py-0.5">2</Badge></TabsTrigger>
                <TabsTrigger value="issues" className="text-xs p-2 h-auto border-0 rounded-none">ISSUES <Badge variant="destructive" className="ml-2 rounded-sm text-[8px] px-1 py-0.5">1</Badge></TabsTrigger>
                <TabsTrigger value="events" className="text-xs p-2 h-auto border-0 rounded-none">EVENTS <Badge className="ml-2 bg-blue-500 text-white rounded-sm text-[8px] px-1 py-0.5">0</Badge></TabsTrigger>
                <TabsTrigger value="activity" className="text-xs p-2 h-auto border-0 rounded-none">ACTIVITY</TabsTrigger>
                <TabsTrigger value="schedule" className="text-xs p-2 h-auto border-0 rounded-none">SCHEDULE</TabsTrigger>
              </TabsList>
              <div />
            </div>
            <TabsContent value="task_info" className="mt-4">
              <Card>
                <CardHeader>
                    <CardTitle>Create detailed process map</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between py-3">
                            <CardTitle className="text-base">Deal Notes / Goals</CardTitle>
                            <Button variant="outline" size="sm">EDIT</Button>
                        </CardHeader>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between py-3">
                            <CardTitle className="text-base">Dependencies</CardTitle>
                            <Button variant="outline" size="sm"><Plus className="mr-2 h-4 w-4" /> DEPENDENCY</Button>
                        </CardHeader>
                        <CardContent>
                           <div className="p-4 bg-blue-100/50 border border-blue-200 rounded-md">
                             <a href="#" className="text-blue-600 underline">Click here</a> to learn more about the Task Dependencies.
                           </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between py-3">
                            <CardTitle className="text-base">Guide</CardTitle>
                            <Button variant="outline" size="sm">EDIT</Button>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-4">
                           <p>Build a more detailed version of the process map developed in the Define phase. Focus on building a comprehensive view of the as-is model. This will likely require some participation from employees with expertise in the process. Often the view employees that interact with the process have varies greatly from official documentation or what leadership 'thinks' the process is. Build an accurate picture of how the process really functions.</p>
                           <p>The process drawing(s) at this stage should include decisions and process branching and swim lanes to indicate the parties responsible for each activity. No longer is only the 'happy path' depicted but error conditions, rework and waste patterns are clearly shown. In the end, the team, including process experts, should agree that the process is as depicted. If there is uncertainty, test the drawing by observing the process in action if possible with the diagram handy for reference.</p>
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
