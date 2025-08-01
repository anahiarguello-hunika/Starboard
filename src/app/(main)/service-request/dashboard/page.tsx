
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServiceRequestDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Dashboard de Solicitud de Servicio
        </h1>
        <p className="text-muted-foreground">
          Resumen de sus solicitudes de servicio.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumen</CardTitle>
          <CardDescription>
            Aquí se mostrarán las métricas y el estado de sus solicitudes.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Contenido del dashboard próximamente.</p>
        </CardContent>
      </Card>
    </div>
  );
}
