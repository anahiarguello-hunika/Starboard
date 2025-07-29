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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { contractsData, type Contract } from "@/lib/mock-data";
import { FileText, FilePlus2, ChevronDown } from "lucide-react";

export default function ContractsPage() {
  const getStatusVariant = (status: Contract["status"]) => {
    switch (status) {
      case "Activo":
        return "default";
      case "Borrador":
        return "secondary";
      case "Expirado":
        return "outline";
      case "Terminado":
        return "destructive";
    }
  };

  const getRiskVariant = (risk: Contract["riskLevel"]) => {
    switch (risk) {
      case "Bajo":
        return "default";
      case "Medio":
        return "secondary";
      case "Alto":
        return "destructive";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Gestión de Contratos
          </h1>
          <p className="text-muted-foreground">
            Rastree estados, identifique riesgos y monitoree fechas clave para
            todos sus contratos.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <FilePlus2 className="mr-2 h-4 w-4" /> Nuevo Contrato{" "}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              1. Contrato de Prestación de Servicios (Cliente)
            </DropdownMenuItem>
            <DropdownMenuItem>2. Contrato de Arrendamiento</DropdownMenuItem>
            <DropdownMenuItem>3. Contrato de Subarrendamiento</DropdownMenuItem>
            <DropdownMenuItem>
              4. Contrato de Prestación de Servicio (Prestador)
            </DropdownMenuItem>
            <DropdownMenuItem>5. Contrato de Confidencialidad</DropdownMenuItem>
            <DropdownMenuItem>
              6. Contrato Individual de Trabajo (Tiempo determinado)
            </DropdownMenuItem>
            <DropdownMenuItem>
              7. Contrato Individual de Trabajo (Indeterminado con tiempo de
              Prueba)
            </DropdownMenuItem>
            <DropdownMenuItem>
              8. Convenio de Terminación General
            </DropdownMenuItem>
            <DropdownMenuItem>
              9. Convenio de Terminación Laboral
            </DropdownMenuItem>
            <DropdownMenuItem>
              10. Contrato de Préstamo (Obligado Solidario)
            </DropdownMenuItem>
            <DropdownMenuItem>
              11. Contrato de Compraventa de Acciones
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
                <TableHead>Nombre del Contrato</TableHead>
                <TableHead>Contraparte</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Nivel de Riesgo</TableHead>
                <TableHead>Fecha de Renovación</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contractsData.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell className="font-medium">
                    {contract.name}
                  </TableCell>
                  <TableCell>{contract.counterparty}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusVariant(contract.status)}
                      className={
                        contract.status === "Activo"
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }
                    >
                      {contract.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRiskVariant(contract.riskLevel)}>
                      {contract.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>{contract.renewalDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
