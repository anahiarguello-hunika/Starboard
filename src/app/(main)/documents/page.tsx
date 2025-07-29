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
import { documentsData, type Document } from "@/lib/mock-data";
import { Folder } from "lucide-react";

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
    <div className="flex flex-col gap-8">
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
          <CardTitle className="flex items-center gap-2">
            <Folder /> Biblioteca de Documentos
          </CardTitle>
          <CardDescription>
            Todos los documentos almacenados en el sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre del Documento</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Versión</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Última Actualización</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentsData.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{doc.type}</Badge>
                  </TableCell>
                  <TableCell>v{doc.version}.0</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(doc.status)}
                           className={doc.status === 'Aprobado' ? 'bg-accent text-accent-foreground' : ''}>
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{doc.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
