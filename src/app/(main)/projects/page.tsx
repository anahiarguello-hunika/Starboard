
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData, type Project } from "@/lib/mock-data";
import { 
  FileText, 
  Folder, 
  PlusCircle,
  LayoutDashboard,
  BarChart2,
  ListTodo,
  File,
  Calendar,
  AlertTriangle,
  BarChart,
  StickyNote,
  History,
  LifeBuoy
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projectNav = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: '+ Project', icon: PlusCircle },
    { name: 'Progress', icon: BarChart2 },
    { name: 'Task', icon: ListTodo },
    { name: 'Documents', icon: File },
    { name: 'Events', icon: Calendar },
    { name: 'Issues', icon: AlertTriangle },
    { name: 'Analytics', icon: BarChart },
    { name: 'Notes', icon: StickyNote },
    { name: 'Activity', icon: History },
    { name: 'Support', icon: LifeBuoy },
];


export default function ProjectsPage() {
  const getStatusVariant = (status: Project["status"]) => {
    switch (status) {
      case "Active":
        return "default";
      case "On Hold":
        return "secondary";
      case "Closed":
        return "outline";
    }
  };

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                 {projectNav.map((item) => (
                    <a key={item.name} href="#" className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                        item.active ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                    )}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline">
                Projects
              </h1>
              <p className="text-muted-foreground">
                A portfolio of all your legal projects and matters.
              </p>
            </div>
            <div>
              <Link href="/projects/new-playbook">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-headline text-xl mb-1">{project.name}</CardTitle>
                        <CardDescription>{project.client}</CardDescription>
                      </div>
                       <Badge variant={getStatusVariant(project.status)}
                             className={project.status === 'Active' ? 'bg-accent text-accent-foreground' : ''}>
                        {project.status}
                      </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-sm text-muted-foreground">
                    <p>Lead: {project.leadAttorney}</p>
                    <p>Opened: {project.openDate}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                            <Folder className="h-4 w-4 text-muted-foreground" />
                            <span>{project.documentCount} Docs</span>
                        </div>
                         <div className="flex items-center gap-1.5">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{project.contractCount} Contracts</span>
                        </div>
                    </div>
                  <Button variant="outline" size="sm">
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
    </div>
  );
}
