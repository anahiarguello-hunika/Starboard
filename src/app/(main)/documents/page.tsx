
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { documentsData, type Document } from "@/lib/mock-data";


export default function DocumentsPage() {
    const getStatusVariant = (status: Document['status']) => {
        switch (status) {
            case 'Aprobado':
                return 'default'
            case 'En Revisión':
                return 'secondary'
            case 'Borrador':
                return 'outline'
        }
    }
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Gestión de Documentos
        </h1>
        <p className="text-muted-foreground">
          Suba, versione y controle sus documentos legales.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Biblioteca de Documentos</CardTitle>
          <CardDescription>
            Todos los documentos almacenados en el sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 font-semibold">Nombre del Documento</th>
                <th className="text-left py-2 px-4 font-semibold">Tipo</th>
                <th className="text-left py-2 px-4 font-semibold">Versión</th>
                <th className="text-left py-2 px-4 font-semibold">Estado</th>
                <th className="text-left py-2 px-4 font-semibold">Última Actualización</th>
              </tr>
            </thead>
            <tbody>
              {documentsData.map((doc) => (
                <tr key={doc.id} className="border-b">
                  <td className="py-2 px-4">{doc.name}</td>
                  <td className="py-2 px-4"><Badge variant="outline">{doc.type}</Badge></td>
                  <td className="py-2 px-4">v{doc.version}.0</td>
                  <td className="py-2 px-4">
                    <Badge variant={getStatusVariant(doc.status)}
                        className={doc.status === 'Aprobado' ? 'bg-accent text-accent-foreground' : ''}>
                       {doc.status}
                    </Badge>
                  </td>
                  <td className="py-2 px-4">{doc.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
