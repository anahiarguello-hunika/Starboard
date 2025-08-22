
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Configuración
        </h1>
        <p className="text-muted-foreground">
          Edita los textos, imágenes y gráficos de cada página.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Contenido Global</CardTitle>
          <CardDescription>
            Estos valores se aplicarán en toda la aplicación.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="appName">Nombre de la Aplicación</Label>
            <Input id="appName" defaultValue="Starboard Central" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo">Logo</Label>
            <Input id="logo" type="file" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Página de Inicio (Dashboard)</CardTitle>
          <CardDescription>
            Personaliza el contenido del dashboard principal.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dashboardTitle">Título del Dashboard</Label>
            <Input id="dashboardTitle" defaultValue="Dashboard Legal" />
          </div>
           <div className="space-y-2">
            <Label htmlFor="dashboardWelcome">Mensaje de Bienvenida</Label>
            <Input id="dashboardWelcome" defaultValue="¡Bienvenido de nuevo! Aquí está tu resumen de hoy." />
          </div>
          <div className="space-y-2">
            <Label>Métricas Legales</Label>
            <div className="grid grid-cols-2 gap-4">
              <Input defaultValue="Satisfacción" />
              <Input defaultValue="Capacidad de Respuesta" />
              <Input defaultValue="Reducción de Riesgo" />
              <Input defaultValue="Eficiencia de Costos" />
            </div>
          </div>
        </CardContent>
      </Card>
       <div className="flex justify-end">
        <Button>Guardar Cambios</Button>
      </div>
    </div>
  );
}
