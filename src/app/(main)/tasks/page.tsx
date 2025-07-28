
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { legalTasksData, type LegalTask } from "@/lib/mock-data";
import { 
  Home, 
  Clock, 
  Pin, 
  ChevronDown, 
  LayoutDashboard,
  CalendarX,
  Users,
  ClipboardList,
  UserCheck,
  PieChart,
  Timer,
  BadgeCheck,
  BookUser,
  ShieldCheck,
  GanttChartSquare,
  Network,
  ListChecks,
  SlidersHorizontal,
  Briefcase,
  Award,
  ListTodo,
  User,
} from "lucide-react";

const myWorkNav = [
    { name: 'Dashboards', icon: LayoutDashboard },
    { name: 'My Non Working...', icon: CalendarX },
    { name: 'Direct Employee...', icon: Users },
    { name: 'Task Requests', icon: ClipboardList },
    { name: 'My Tasks', icon: UserCheck },
    { name: 'My Utilisation', icon: PieChart },
    { name: 'My Task Times', icon: Timer },
    { name: 'My Quality Checks', icon: BadgeCheck },
    { name: 'My Teams Tasks', icon: BookUser, active: true },
    { name: "My Teams SLA's", icon: ShieldCheck },
    { name: 'My Teams Utilisation', icon: GanttChartSquare },
    { name: 'My Teams Task Times', icon: Network },
];

const adminNav = [
    { name: 'Services', icon: Briefcase },
    { name: 'Work Mgmt Tasks', icon: ListChecks },
    { name: 'Quality Control', icon: SlidersHorizontal },
    { name: 'Competency Levels', icon: Award },
    { name: 'Employees', icon: Users },
    { name: 'Employee Compe...', icon: UserCheck },
];


export default function TasksPage() {
    const getStatusVariant = (status: LegalTask['status']) => {
        switch (status) {
            case 'Done':
                return 'default'
            case 'In Progress':
                return 'secondary'
            case 'To Do':
                return 'outline'
            case 'Blocked':
                return 'destructive'
        }
    }
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-foreground hover:bg-muted">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                </a>
                <a href="#" className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                     <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5" />
                        <span>Recent</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                </a>
                 <a href="#" className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                     <div className="flex items-center gap-3">
                        <Pin className="h-5 w-5" />
                        <span>Pinned</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                </a>
                <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base font-semibold text-foreground">
                        My Work
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                        <div className="flex flex-col gap-1 mt-2">
                        {myWorkNav.map((item) => (
                            <a key={item.name} href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${item.active ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'}`}>
                                <item.icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 mt-4 text-base font-semibold text-foreground">
                        Administration
                        <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                         <div className="flex flex-col gap-1 mt-2">
                            {adminNav.map((item) => (
                                <a key={item.name} href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                Legal Task Management
                </h1>
                <p className="text-muted-foreground">
                Create and manage legal tasks, and track assignments by vertical.
                </p>
            </div>

            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ListTodo /> Active Tasks
                </CardTitle>
                <CardDescription>
                    All ongoing and upcoming legal tasks.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Task</TableHead>
                        <TableHead>Assigned To</TableHead>
                        <TableHead>Vertical</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Due Date</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {legalTasksData.map((task) => (
                        <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.taskName}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={task.assignedTo.avatar} data-ai-hint="person avatar" />
                                <AvatarFallback><User size={16} /></AvatarFallback>
                            </Avatar>
                            <span>{task.assignedTo.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>{task.vertical}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(task.status)}
                                className={task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : task.status === 'Done' ? 'bg-accent text-accent-foreground' : ''}>
                            {task.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
