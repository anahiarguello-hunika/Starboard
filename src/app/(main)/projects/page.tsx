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
  MessageSquare,
  Paperclip,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const tasks = [
    {
      name: "COMPREHENSIVE ACQUISITION AND DUE DILIGENCE PLAYBOOK",
      status: null,
      summary: { comments: 0, attachments: 1 },
      children: [
        { name: "DISCLAIMER", status: null, summary: {}, children: [] },
        { name: "USER NOTES", status: null, summary: {}, children: [] },
      ],
    },
    { name: "1. PROSPECT", status: null, summary: {}, children: [] },
    { name: "2. INITIAL ANALYSIS", status: null, summary: {}, children: [] },
    { name: "3. LIGHT DILIGENCE", status: null, summary: {}, children: [] },
    { name: "4. TRANSACTION SENSE-CHECK", status: null, summary: {}, children: [] },
    { name: "5. COMMERCIAL", status: null, summary: {}, children: [] },
    { name: "6. FINANCIAL", status: null, summary: {}, children: [] },
    { name: "7. TAX", status: null, summary: {}, children: [] },
    { name: "8. LEGAL", status: null, summary: {}, children: [] },
    {
      name: "9. HR",
      status: null,
      summary: {},
      children: [
        { name: "Workstream Charter", status: null, summary: {}, children: [] },
        { name: "Background", status: null, summary: {}, children: [] },
        {
          name: "Employment - Organization",
          status: null,
          summary: {},
          children: [
            { name: "Organization chart", status: 'active', summary: {}, children: [] },
            { name: "Key people", status: null, summary: {}, children: [] },
            { name: "Employment agreements", status: null, summary: {}, children: [] },
            { name: "Confidentiality & non-solicitation", status: null, summary: {}, children: [] },
            { name: "Salary arrangements", status: null, summary: {}, children: [] },
          ],
        },
        { name: "Cultural Diagnostic", status: null, summary: {}, children: [] },
        { name: "Bonuses & Equity Incentives", status: null, summary: {}, children: [] },
        { name: "Employee Benefits", status: null, summary: {}, children: [] },
      ],
    },
  ];

const TaskItem = ({ task, level = 0 }: { task: any; level?: number }) => (
  <div style={{ paddingLeft: `${level * 20}px` }} className={`border-b border-gray-200 last:border-b-0 ${task.status === 'active' ? 'bg-orange-100' : ''}`}>
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2 flex-1">
        {task.children.length > 0 ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4 text-transparent" />
        )}
        <span className="flex-1">{task.name}</span>
         {level > 0 && <span className="text-xs text-muted-foreground">+ Assign responsible</span>}
      </div>
      <div className="flex items-center gap-4 w-40 justify-end">
        {level > 0 && <span className="text-xs text-muted-foreground">Set duration</span>}
        <div className="flex items-center gap-2 text-xs text-muted-foreground w-12 justify-end">
            {task.summary?.comments > 0 && <div className="flex items-center gap-1"><MessageSquare className="h-4 w-4" /> {task.summary.comments}</div>}
            {task.summary?.attachments > 0 && <div className="flex items-center gap-1"><Paperclip className="h-4 w-4" /> {task.summary.attachments}</div>}
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
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Acquisition and Due Diligence (all work...</h1>
          
        </div>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        {/* Left column */}
        <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Button className="bg-green-500 text-white hover:bg-green-600">
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
            <CardHeader className="flex flex-row justify-between items-center bg-gray-50 p-2 border-b">
              <CardTitle className="text-sm font-semibold pl-8">Tasks</CardTitle>
              <div className="flex gap-8 text-sm font-semibold pr-2 w-40 justify-end">
                <span>Status</span>
                <span>Summary</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
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
                <TabsTrigger value="documents">DOCUMENTS <Badge className="ml-2">0</Badge></TabsTrigger>
                <TabsTrigger value="issues">ISSUES <Badge variant="destructive" className="ml-2">0</Badge></TabsTrigger>
                <TabsTrigger value="events">EVENTS</TabsTrigger>
                <TabsTrigger value="activity">ACTIVITY</TabsTrigger>
                <TabsTrigger value="schedule">SCHEDULE</TabsTrigger>
              </TabsList>
              <TabsContent value="task_info" className="mt-4 flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Organization chart</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Card>
                        <CardHeader className="flex-row items-center justify-between p-4">
                            <CardTitle className="text-base">Notes</CardTitle>
                            <Button variant="secondary" size="sm">EDIT</Button>
                        </CardHeader>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center justify-between p-4">
                            <CardTitle className="text-base">Dependencies</CardTitle>
                             <Button variant="secondary" size="sm"><Plus className="mr-2 h-4 w-4" />DEPENDENCY</Button>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                                <a href="#" className="text-blue-600 underline">Click here to learn more about the Task Dependencies.</a>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center justify-between p-4">
                            <CardTitle className="text-base">Guide</CardTitle>
                            <Button variant="secondary" size="sm">EDIT</Button>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-4 p-4 pt-0">
                           <p>Review an organization chart of all employees (including number of employees and location) and information regarding organizational changes of the work force within the last five years (including list of employees on maternity/paternity leave, leaves of absence etc.).</p>
                           <p>Further to the above, obtain details of the numbers and types of employees together with details of their full name, sex, age, date of commencement of service, number of years continuous employment, place of employment, (and mobility clauses) notice period, remuneration, annual leave, and all other benefits (in each case whether contractual or otherwise).</p>
                        </CardContent>
                    </Card>
                    <div className="p-2 bg-gray-100 rounded-md text-sm text-muted-foreground">
                        Task ID: 2798
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  );
}
