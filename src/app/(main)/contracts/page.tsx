
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { 
  FileText, 
  ChevronDown, 
  Search,
  Plus,
  Network,
  Pencil,
  RefreshCw,
  X,
  Eye,
  Paperclip
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const contractsInProgressData = [
  { name: 'Approved', value: 7, fill: '#f97316' },
  { name: 'Pending Approval', value: 4, fill: '#fbbf24' },
  { name: 'With Counterparty', value: 6, fill: '#3b82f6' },
  { name: 'Pending Review', value: 1, fill: '#14b8a6' },
  { name: 'Draft', value: 2, fill: '#a855f7' },
];

const upcomingExpirationsData = [
  { name: 'Jul 2024', value: 0, fill: '#f97316' },
  { name: 'Aug 2024', value: 0, fill: '#3b82f6' },
  { name: 'Sep 2024', value: 200000, fill: '#14b8a6' },
];

const assignedContractsData = [
  {
    id: '449',
    diagram: true,
    recordType: 'Amendment',
    contractTitle: 'test',
    companyName: 'Firmamex',
    status: 'Draft',
    contractManager: 'Agiloft Admin',
    contractAmount: '$1,000',
    contractEndDate: '',
    latestAttachment: 'Contract ID 449 Firmamex SLA Jun 10 2024.docx',
    dateSubmitted: '',
    dateSent: '',
    dateSigned: ''
  },
  {
    id: '383',
    diagram: true,
    recordType: 'Contract',
    contractTitle: 'Legal Services LLC Lease Agreement',
    companyName: 'Inmobiliaria Los Agapantos, S.A.',
    status: 'Pending Review',
    contractManager: 'Agiloft Admin',
    contractAmount: '',
    contractEndDate: 'Apr 30 2024',
    latestAttachment: 'CBC SOW (40 templates).docx',
    dateSubmitted: 'Apr 10 2023 09:39',
    dateSent: '',
    dateSigned: ''
  }
];


export default function ContractsDashboardPage() {

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Draft':
                return <Badge variant="outline">Borrador</Badge>;
            case 'Pending Review':
                 return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Pendiente de Revisión</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };


  return (
    <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold">Panel de Gestión de Contratos</h1>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </div>
        </div>

        <div className="grid grid-cols-[320px_1fr] gap-4">
            <div className="flex flex-col gap-4">
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Departamento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative">
                            <Input placeholder="Buscar..." />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Gerente de Contrato</CardTitle>
                    </CardHeader>
                     <CardContent>
                        <div className="relative">
                            <Input placeholder="Buscar..." />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Tipo de Contrato</CardTitle>
                    </CardHeader>
                     <CardContent>
                        <div className="relative">
                            <Input placeholder="Buscar..." />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>
                 <div className="grid grid-cols-3 gap-2 text-center">
                    <Card className="p-2">
                        <p className="text-xs text-muted-foreground">Contratos que Expiran en 30 Días</p>
                        <p className="text-2xl font-bold">1</p>
                    </Card>
                    <Card className="p-2">
                        <p className="text-xs text-muted-foreground">Contratos que Expiran en 90 Días</p>
                        <p className="text-2xl font-bold">2</p>
                    </Card>
                     <Card className="p-2">
                        <p className="text-xs text-muted-foreground">Contratos Expirados en el Último Año</p>
                        <p className="text-2xl font-bold">14</p>
                    </Card>
                      <Card className="p-2">
                        <p className="text-xs text-muted-foreground">Borradores de Contratos > 1 Semana</p>
                        <p className="text-2xl font-bold">2</p>
                    </Card>
                      <Card className="p-2">
                        <p className="text-xs text-muted-foreground">Contratos Pendientes de Aprobación</p>
                        <p className="text-2xl font-bold">6</p>
                    </Card>
                      <Card className="p-2">
                        <p className="text-xs text-muted-foreground">Contratos Iniciados en el Último Año</p>
                        <p className="text-2xl font-bold">12</p>
                    </Card>
                 </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle className="text-base">Contratos en Progreso</CardTitle>
                             <div className="flex items-center gap-2 text-muted-foreground">
                                <RefreshCw className="h-4 w-4 cursor-pointer" />
                                <X className="h-4 w-4 cursor-pointer" />
                            </div>
                        </CardHeader>
                        <CardContent className="h-[250px]">
                            <ChartContainer config={{}} className="w-full h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                        <Pie data={contractsInProgressData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%">
                                            {contractsInProgressData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                        </Pie>
                                         <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold fill-foreground">20</text>
                                    </PieChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                         <CardDescription className="text-center text-xs pb-4">
                            Mostrar/Ocultar Leyendas | Haga clic en cualquier segmento para desglosar
                        </CardDescription>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle className="text-base">Próximos Vencimientos de Contratos</CardTitle>
                             <div className="flex items-center gap-2 text-muted-foreground">
                                <RefreshCw className="h-4 w-4 cursor-pointer" />
                                <X className="h-4 w-4 cursor-pointer" />
                            </div>
                        </CardHeader>
                         <CardContent className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={upcomingExpirationsData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis tickFormatter={(value) => value.toLocaleString()} tick={{ fontSize: 12 }} />
                                    <RechartsTooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                                    <Bar dataKey="value" name="Monto del Contrato" fill="#14b8a6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                         <CardDescription className="text-center text-xs pb-4">
                            Mostrar/Ocultar Leyendas | Haga clic en cualquier segmento para desglosar
                        </CardDescription>
                    </Card>
                </div>
                 <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <CardTitle className="text-base">Mis Contratos Asignados</CardTitle>
                                <ChevronDown className="h-4 w-4" />
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
                                    <TableHead><Checkbox /></TableHead>
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
                                {assignedContractsData.map((contract) => (
                                    <TableRow key={contract.id}>
                                        <TableCell><Checkbox /></TableCell>
                                        <TableCell><Pencil className="h-4 w-4 cursor-pointer" /></TableCell>
                                        <TableCell className="text-primary underline cursor-pointer">{contract.id}</TableCell>
                                        <TableCell><Network className="h-4 w-4 text-red-500" /></TableCell>
                                        <TableCell>{contract.recordType}</TableCell>
                                        <TableCell>{contract.contractTitle}</TableCell>
                                        <TableCell>{contract.companyName}</TableCell>
                                        <TableCell>{getStatusBadge(contract.status)}</TableCell>
                                        <TableCell>{contract.contractManager}</TableCell>
                                        <TableCell>{contract.contractAmount}</TableCell>
                                        <TableCell>{contract.contractEndDate}</TableCell>
                                        <TableCell className="text-primary underline cursor-pointer flex items-center gap-1"><Paperclip className="h-4 w-4"/> {contract.latestAttachment}</TableCell>
                                        <TableCell>{contract.dateSubmitted}</TableCell>
                                        <TableCell>{contract.dateSent}</TableCell>
                                        <TableCell>{contract.dateSigned}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
