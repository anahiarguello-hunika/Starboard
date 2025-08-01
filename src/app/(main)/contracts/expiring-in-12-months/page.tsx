
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
import { FileText, Pencil, Network, Square, Plus, Search, Eye, Paperclip } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";


export default function ContractsExpiringIn12MonthsPage() {

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


  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Contratos que expiran en 12 meses
          </h1>
          <p className="text-muted-foreground">
            38 registro(s) encontrados, 1 página(s).
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <CardTitle className="text-base">Mis Contratos Asignados</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm"><Plus className="h-4 w-4 mr-2" /> Nuevo</Button>
                  <Button variant="outline" size="sm">Guardar Cambios</Button>
                  <Button variant="outline" size="sm">Cancelar Cambios</Button>
                  <Button variant="outline" size="sm">Vistas <Eye className="h-4 w-4 ml-2" /></Button>
              </div>
          </div>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
                  <div className="relative">
                      <Input placeholder="Buscar" className="h-8" />
                      <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm" className="h-8">
                      <Plus className="h-4 w-4 mr-2" /> Añadir filtros
                  </Button>
              </div>
              <p className="text-xs text-muted-foreground">4 registro(s) encontrados, 1 página(s). <span className="text-primary cursor-pointer">Click para detalles...</span> | <span className="text-primary cursor-pointer">Limpiar Todos los Filtros</span></p>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"><Checkbox /></TableHead>
                <TableHead>Editar</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Diagrama</TableHead>
                <TableHead>Tipo de Registro</TableHead>
                <TableHead>Título del Contrato</TableHead>
                <TableHead>Nombre de la Empresa</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Gerente de Contrato</TableHead>
                <TableHead>Monto del Contrato</TableHead>
                <TableHead>Fecha de Finalización</TableHead>
                <TableHead>Último Adjunto</TableHead>
                <TableHead>Fecha de Envío</TableHead>
                <TableHead>Fecha de Envío para Firma</TableHead>
                <TableHead>Fecha de Firma</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expiringSoonContracts.map((contract) => (
                <TableRow key={contract.id}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell><Pencil className="h-4 w-4 cursor-pointer" /></TableCell>
                    <TableCell className="text-primary underline cursor-pointer">{contract.id}</TableCell>
                    <TableCell><Network className="h-4 w-4 text-red-500" /></TableCell>
                    <TableCell>{contract.contractType}</TableCell>
                    <TableCell>{contract.contractTitle}</TableCell>
                    <TableCell>{contract.companyName}</TableCell>
                    <TableCell>{getStatusBadge(contract.status)}</TableCell>
                    <TableCell>{contract.requesterName}</TableCell>
                    <TableCell>$1,000</TableCell>
                    <TableCell>{contract.endDate}</TableCell>
                    <TableCell className="text-primary underline cursor-pointer flex items-center gap-1"><Paperclip className="h-4 w-4"/> Contract ID {contract.id}.docx</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
