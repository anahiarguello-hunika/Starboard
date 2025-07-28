import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  ArrowUpDown,
  Upload,
  Download,
  CheckCircle2,
  Circle,
  MessageSquare,
  Paperclip,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tasks = [
  {
    name: "Initiate",
    status: "complete",
    summary: { comments: 4, attachments: 2 },
    children: [],
  },
  {
    name: "Define",
    status: "complete",
    summary: { comments: 1, attachments: 1 },
    children: [],
  },
  {
    name: "Measure",
    status: "complete",
    summary: { comments: 2, attachments: 2 },
    children: [],
  },
  {
    name: "Tollgate 4 - Identify Performance Indicators",
    status: "complete",
    summary: { comments: 0, attachments: 0 },
    children: [
      {
        name: "Document Key Performance Indicators",
        status: "complete",
        summary: { comments: 2, attachments: 2 },
        children: [
          {
            name: "Create detailed process map",
            status: "active",
            summary: { comments: 0, attachments: 0 },
            children: [],
          },
          {
            name: "Review process map for areas of improvement",
            status: "complete",
            summary: { comments: 2, attachments: 1 },
            children: [],
          },
          {
            name: "Review CTQ Tree",
            status: "complete",
            summary: { comments: 0, attachments: 2 },
            children: [],
          },
          {
            name: "Determine the key dependent variables",
            status: "complete",
            summary: { comments: 8, attachments: 2 },
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: "Conduct Tollgate 4 Review Meeting",
    status: "in_progress",
    summary: { comments: 0, attachments: 0 },
    children: [
      {
        name: "Schedule meeting with Sponsor",
        status: "complete",
        summary: { comments: 0, attachments: 0 },
        children: [],
      },
      {
        name: "Prepare Tollgate Review Memo",
        status: "complete",
        summary: { comments: 1, attachments: 0 },
        children: [],
      },
      {
        name: "Send Sponsor supporting material",
        status: "complete",
        summary: { comments: 0, attachments: 0 },
        children: [],
      },
      {
        name: "Prepare the team members attending the meeting",
        status: "complete",
        summary: { comments: 0, attachments: 0 },
        children: [],
      },
       {
        name: "Conduct meeting",
        status: "complete",
        summary: { comments: 0, attachments: 0 },
        children: [],
      },
    ],
  },
  {
    name: "Tollgate 5 - Data Collection Plan",
    status: "complete",
    summary: { comments: 8, attachments: 0 },
    children: [],
  },
];

const TaskItem = ({ task, level = 0 }: { task: any; level?: number }) => (
  <div style={{ paddingLeft: `${level * 20}px` }}>
    <div className={`flex items-center justify-between p-2 rounded-md ${task.status === 'active' ? 'bg-orange-100' : ''}`}>
      <div className="flex items-center gap-2">
        {task.children.length > 0 ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4 text-transparent" />
        )}
        <span>{task.name}</span>
        <span className="text-xs text-muted-foreground">+ Assign responsible</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          {task.status === 'complete' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
          {task.status === 'in_progress' && <Circle className="h-5 w-5 text-yellow-500" />}
          <span className="text-xs text-muted-foreground">Set duration</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground w-20">
            {task.summary.comments > 0 && <div className="flex items-center gap-1"><MessageSquare className="h-4 w-4" /> {task.summary.comments}</div>}
            {task.summary.attachments > 0 && <div className="flex items-center gap-1"><Paperclip className="h-4 w-4" /> {task.summary.attachments}</div>}
        </div>
      </div>
    </div>
    {task.children.length > 0 && (
      <div className="mt-1">
        {task.children.map((child: any, index: number) => (
          <TaskItem key={index} task={child} level={level + 1} />
        ))}
      </div>
    )}
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight">xServe NPS Improvement</h1>
        <Tabs defaultValue="tasks" className="mt-2">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="issues">Issues</TabsTrigger>
                <TabsTrigger value="permissions">Permissions</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>
        </Tabs>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {/* Left column */}
        <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
                    <Plus className="mr-2 h-4 w-4" /> TASK
                </Button>
                 <Button variant="outline">
                    <ArrowUpDown className="mr-2 h-4 w-4" /> REORDER TASKS
                </Button>
                 <Button variant="outline">
                    IMPORT <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                 <Button variant="outline">
                    EXPORT <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
          <Card className="flex-1">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Tasks</CardTitle>
              <div className="flex gap-8 text-sm font-semibold">
                <span>Status</span>
                <span className="w-20">Summary</span>
              </div>
            </CardHeader>
            <CardContent>
              {tasks.map((task, index) => (
                <TaskItem key={index} task={task} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-1 flex flex-col">
            <Tabs defaultValue="task_info" className="flex-1">
              <TabsList>
                <TabsTrigger value="task_info">TASK INFO</TabsTrigger>
                <TabsTrigger value="documents">DOCUMENTS <Badge className="ml-2">2</Badge></TabsTrigger>
                <TabsTrigger value="issues">ISSUES <Badge variant="destructive" className="ml-2">0</Badge></TabsTrigger>
                <TabsTrigger value="events">EVENTS <Badge variant="destructive" className="ml-2">0</Badge></TabsTrigger>
                <TabsTrigger value="activity">ACTIVITY</TabsTrigger>
                <TabsTrigger value="schedule">SCHEDULE</TabsTrigger>
              </TabsList>
              <TabsContent value="task_info" className="mt-4 flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Create detailed process map</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Card>
                        <CardHeader className="flex-row items-center justify-between">
                            <CardTitle className="text-base">Deal Notes / Goals</CardTitle>
                            <Button variant="secondary" size="sm">EDIT</Button>
                        </CardHeader>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center justify-between">
                            <CardTitle className="text-base">Dependencies</CardTitle>
                             <Button variant="secondary" size="sm"><Plus className="mr-2 h-4 w-4" />DEPENDENCY</Button>
                        </CardHeader>
                        <CardContent>
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                                <a href="#" className="text-blue-600 underline">Click here to learn more about the Task Dependencies.</a>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center justify-between">
                            <CardTitle className="text-base">Guide</CardTitle>
                            <Button variant="secondary" size="sm">EDIT</Button>
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
      </div>
    </div>
  );
}
