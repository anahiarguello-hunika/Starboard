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
  { id: "PROJ-001", name: "Proyecto Alfa", status: "En curso", progress: 75 },
  { id: "PROJ-002", name: "Auditoría de Cumplimiento Q4", status: "En riesgo", progress: 30 },
  { id: "PROJ-003", name: "Revisión de Cartera de PI", status: "En curso", progress: 90 },
  { id: "PROJ-004", name: "Consolidación de Contratos de Proveedores", status: "Necesita revisión", progress: 50 },
];

const alerts = [
    { id: "ALRT-001", title: "Vencimiento de Renovación de Contrato", description: "El MSA con Innovate Inc. vence en 30 días.", level: "warning" },
    { id: "ALRT-002", title: "Nueva Regulación", description: "Actualización de la Ley de Privacidad de Datos efectiva el 1 de octubre.", level: "info" },
    { id: "ALRT-003", title: "Tarea Vencida", description: "La revisión del acuerdo de proveedor está vencida por 3 días.", level: "error" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Dashboard Legal
        </h1>
        <p className="text-muted-foreground">
          ¡Bienvenido de nuevo! Aquí está tu resumen de hoy.
        </p>
      </div>

      <Tabs defaultValue="general_counsel">
        <TabsList>
          <TabsTrigger value="general_counsel">Consejero General</TabsTrigger>
          <TabsTrigger value="paralegal">Paralegal</TabsTrigger>
          <TabsTrigger value="business_user">Usuario de Negocio</TabsTrigger>
        </TabsList>
        <TabsContent value="general_counsel" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="text-accent" /> Medidor de Cumplimiento
                </CardTitle>
                <CardDescription>
                  Estado general de cumplimiento de la organización.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-accent">92%</span>
                    <span className="text-sm text-green-600 font-semibold">+2% este mes</span>
                </div>
                <Progress value={92} aria-label="92% de cumplimiento" />
                <p className="text-xs text-muted-foreground">Todos los departamentos reportan parámetros normales.</p>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Proyectos Activos</CardTitle>
                <CardDescription>
                  Proyectos legales clave actualmente en curso.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Proyecto</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Progreso</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>
                          <Badge
                            variant={project.status === 'En riesgo' ? 'destructive' : project.status === 'Necesita revisión' ? 'secondary' : 'default'}
                            className={project.status === 'En curso' ? 'bg-green-100 text-green-800' : ''}
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
                    <CardTitle>Alertas Recientes</CardTitle>
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
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button>
                  <FilePlus2 className="mr-2 h-4 w-4" /> Nuevo Contrato
                </Button>
                <Button variant="secondary">Solicitar Revisión Legal</Button>
                <Button variant="ghost" className="justify-start">Generar Informe</Button>
              </CardContent>
            </Card>
            
          </div>
        </TabsContent>
        <TabsContent value="paralegal">
            <p className="text-muted-foreground p-4 text-center">Dashboard de Paralegal próximamente.</p>
        </TabsContent>
        <TabsContent value="business_user">
            <p className="text-muted-foreground p-4 text-center">Dashboard de Usuario de Negocio próximamente.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
