
'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { expiringSoonContracts, type ExpiringContract } from "@/lib/mock-data";
import { FileText, Pencil, Network, Square } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContractsExpiringSoonPage() {

    const getStatusBadge = (status: ExpiringContract['status']) => {
        switch (status) {
            case 'Active':
                return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Activo</Badge>;
            case 'Draft':
                return <Badge variant="outline">Borrador</Badge>;
            case 'Approved':
                 return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Aprobado</Badge>;
            case 'Pending Approval':
                return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendiente de Aprobación</Badge>;
            case 'Pending Review':
                 return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Pendiente de Revisión</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const getDiagramSquareColor = (status: ExpiringContract['status']) => {
        switch (status) {
            case 'Active':
                return 'text-green-500';
            case 'Draft':
                return 'text-yellow-500';
            case 'Approved':
                return 'text-yellow-500';
            case 'Pending Approval':
                return 'text-yellow-500';
            case 'Pending Review':
                return 'text-yellow-500';
            default:
                return 'text-gray-400';
        }
    }


  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Contratos que expiran en 30 días
          </h1>
          <p className="text-muted-foreground">
            38 registro(s) encontrados, 1 página(s).
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText /> Todos los Contratos
          </CardTitle>
          <CardDescription>
            Una lista completa de todos los contratos legales gestionados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"><Checkbox /></TableHead>
                <TableHead className="w-12">Editar</TableHead>
                <TableHead className="w-24">Diagrama</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Título del Contrato</TableHead>
                <TableHead>Tipo de Contrato</TableHead>
                <TableHead>Nombre del Solicitante</TableHead>
                <TableHead>Nombre de la Empresa</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha de Finalización</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expiringSoonContracts.map((contract) => (
                <TableRow key={contract.id}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell><Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button></TableCell>
                    <TableCell>
                        <div className="flex items-center gap-2">
                            <Square className={`h-4 w-4 ${getDiagramSquareColor(contract.status)} fill-current`} />
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500"><Network className="h-4 w-4" /></Button>
                        </div>
                    </TableCell>
                    <TableCell>{contract.id}</TableCell>
                    <TableCell className="font-medium text-primary">
                      {contract.contractTitle}
                    </TableCell>
                    <TableCell>{contract.contractType}</TableCell>
                    <TableCell>{contract.requesterName}</TableCell>
                    <TableCell>{contract.companyName}</TableCell>
                    <TableCell>
                        {getStatusBadge(contract.status)}
                    </TableCell>
                    <TableCell>{contract.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
