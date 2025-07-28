import {
  AlertCircle,
  CheckCircle2,
  FilePlus2,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const activeProjects = [
  { id: "PROJ-001", name: "Project Alpha", status: "On Track", progress: 75 },
  { id: "PROJ-002", name: "Q4 Compliance Audit", status: "At Risk", progress: 30 },
  { id: "PROJ-003", name: "IP Portfolio Review", status: "On Track", progress: 90 },
  { id: "PROJ-004", name: "Vendor Contract Consolidation", status: "Needs Review", progress: 50 },
];

const alerts = [
    { id: "ALRT-001", title: "Contract Renewal Due", description: "MSA with Innovate Inc. expires in 30 days.", level: "warning" },
    { id: "ALRT-002", title: "New Regulation", description: "Data Privacy Act update effective Oct 1.", level: "info" },
    { id: "ALRT-003", title: "Task Overdue", description: "Review of vendor agreement is 3 days overdue.", level: "error" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Legal Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your summary for today.
        </p>
      </div>

      <Tabs defaultValue="general_counsel">
        <TabsList>
          <TabsTrigger value="general_counsel">General Counsel</TabsTrigger>
          <TabsTrigger value="paralegal">Paralegal</TabsTrigger>
          <TabsTrigger value="business_user">Business User</TabsTrigger>
        </TabsList>
        <TabsContent value="general_counsel" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="text-accent" /> Compliance Meter
                </CardTitle>
                <CardDescription>
                  Overall organizational compliance status.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-accent">92%</span>
                    <span className="text-sm text-green-600 font-semibold">+2% this month</span>
                </div>
                <Progress value={92} aria-label="92% compliant" />
                <p className="text-xs text-muted-foreground">All departments reporting normal parameters.</p>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>
                  Key legal projects currently in flight.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>
                          <Badge
                            variant={project.status === 'At Risk' ? 'destructive' : project.status === 'Needs Review' ? 'secondary' : 'default'}
                            className={project.status === 'On Track' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{project.progress}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Recent Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {alerts.map(alert => (
                        <Alert key={alert.id} variant={alert.level === 'error' ? 'destructive' : 'default'}>
                            {alert.level === 'error' ? <AlertCircle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                            <AlertTitle>{alert.title}</AlertTitle>
                            <AlertDescription>{alert.description}</AlertDescription>
                        </Alert>
                    ))}
                </CardContent>
            </Card>

            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button>
                  <FilePlus2 className="mr-2 h-4 w-4" /> New Contract
                </Button>
                <Button variant="secondary">Request Legal Review</Button>
                <Button variant="ghost" className="justify-start">Generate Report</Button>
              </CardContent>
            </Card>
            
          </div>
        </TabsContent>
        <TabsContent value="paralegal">
            <p className="text-muted-foreground p-4 text-center">Paralegal dashboard coming soon.</p>
        </TabsContent>
        <TabsContent value="business_user">
            <p className="text-muted-foreground p-4 text-center">Business user dashboard coming soon.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
