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
import { legalTasksData, type LegalTask } from "@/lib/mock-data";
import { ListTodo, User } from "lucide-react";

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
  );
}
