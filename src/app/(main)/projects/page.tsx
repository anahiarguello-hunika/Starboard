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
import { projectsData, type Project } from "@/lib/mock-data";
import { Briefcase, FileText, Folder } from "lucide-react";

export default function ProjectsPage() {
  const getStatusVariant = (status: Project["status"]) => {
    switch (status) {
      case "Active":
        return "default";
      case "Closed":
        return "secondary";
      case "On Hold":
        return "outline";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Projects
        </h1>
        <p className="text-muted-foreground">
          A central place for all your legal projects.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase /> All Projects
          </CardTitle>
          <CardDescription>
            A complete list of all active and closed projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project Name</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Lead Attorney</TableHead>
                <TableHead>Open Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectsData.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(project.status)}
                           className={project.status === 'Active' ? 'bg-accent text-accent-foreground' : ''}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{project.leadAttorney}</TableCell>
                  <TableCell>{project.openDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
