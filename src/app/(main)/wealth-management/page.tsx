
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WealthManagementPage() {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                Gestión Patrimonial Personal
                </h1>
                <p className="text-muted-foreground">
                Suba, versione y controle sus documentos legales.
                </p>
            </div>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Subcategorías</CardTitle>
            <CardDescription>
                Seleccione una subcategoría para ver documentos.
            </CardDescription>
            </CardHeader>
            <CardContent>
            {/* Aquí se mostraría el contenido de la subcategoría */}
            <p className="text-muted-foreground">Seleccione un elemento del menú de la izquierda.</p>
            </CardContent>
        </Card>
    </div>
  );
}
