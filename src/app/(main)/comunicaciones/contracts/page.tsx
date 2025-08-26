

'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Search,
  RefreshCw,
  X,
  Plus,
  Eye,
  Pencil,
  Network,
  Paperclip,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Input } from "@/components/ui/input";
import { expiringSoonContracts, type ExpiringContract } from "@/lib/mock-data";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const contractsInProgressData = [
  { name: 'Approved', value: 4, fill: 'hsl(var(--chart-2))' },
  { name: 'Pending Approval', value: 6, fill: 'hsl(var(--chart-1))' },
  { name: 'With Counterparty', value: 7, fill: 'hsl(var(--destructive))' },
  { name: 'Pending Review', value: 1, fill: 'hsl(var(--chart-3))' },
  { name: 'Draft', value: 2, fill: 'hsl(var(--chart-5))' },
];

const upcomingExpirationsData = [
  { name: 'Jul 2024', value: 0 },
  { name: 'Aug 2024', value: 0 },
  { name: 'Sep 2024', value: 200000 },
];

const kpiCards = [
    { title: "Contratos que expiran en 30 días", value: "1" },
    { title: "Contratos que expiran en 90 días", value: "2" },
    { title: "Contratos vencidos en el último año", value: "14" },
    { title: "Borradores de contratos > 1 semana", value: "2" },
    { title: "Contratos pendientes de aprobación", value: "6" },
    { title: "Contratos iniciados en el último año", value: "12" },
];

const contractsData = [
    {
        id: 449,
        diagram: true,
        recordType: 'Enmienda',
        contractTitle: 'test',
        companyName: 'Firmamex',
        status: 'Draft',
        contractManager: 'Agiloft Admin',
        contractAmount: '$1,000',
        endDate: '',
        latestAttachment: 'Contract ID 449 Firmamex SLA Jun 10 2024.docx',
        dateSubmitted: '',
        dateSent: '',
        dateSigned: ''
    },
    {
        id: 383,
        diagram: true,
        recordType: 'Contrato',
        contractTitle: 'Contrato de Arrendamiento de Servicios Legales LLC',
        companyName: 'Inmobiliaria Los Agapantos, S.A.',
        status: 'Pending Review',
        contractManager: 'Agiloft Admin',
        contractAmount: '',
        endDate: '30 abr 2024',
        latestAttachment: 'CBC SOW (40 templates).docx',
        dateSubmitted: '10 abr 2023 09:39',
        dateSent: '',
        dateSigned: ''
    }
]


export default function ContractsDashboardPage() {
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
    <div className="space-y-8">
        <div className="grid grid-cols-[320px_1fr] gap-8 items-start">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold">Panel de Gestión de Contratos</h1>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <Card>
                    <CardContent className="p-4 space-y-4">
                         <div className="relative">
                            <Input placeholder="Departamento" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                         <div className="relative">
                            <Input placeholder="Gerente de Contrato" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                         <div className="relative">
                            <Input placeholder="Tipo de Contrato" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                    {kpiCards.map(kpi => (
                        <Card key={kpi.title} className="text-center">
                            <CardHeader className="p-4">
                               <CardDescription className="text-xs">{kpi.title}</CardDescription>
                            </CardHeader>
                             <CardContent className="p-4 pt-0">
                                <p className="text-2xl font-bold">{kpi.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-start">
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle className="text-base">Contratos en Progreso</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <RefreshCw className="h-4 w-4 cursor-pointer" />
                            <X className="h-4 w-4 cursor-pointer" />
                        </div>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                         <ChartContainer config={{}} className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <ChartTooltip 
                                        content={<ChartTooltipContent 
                                            formatter={(value, name) => <span>{value}</span>}
                                            labelFormatter={(label, payload) => payload?.[0]?.name}
                                        />} 
                                    />
                                    <Pie data={contractsInProgressData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%">
                                        {contractsInProgressData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                    </Pie>
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-foreground">20</text>
                                    <Legend 
                                        iconType="square"
                                        wrapperStyle={{ fontSize: '12px', paddingLeft: '20px' }}
                                        formatter={(value, entry) => <span className="text-muted-foreground">{value}</span>}
                                    />
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
                    <CardContent className="h-[300px]">
                        <ChartContainer config={{}} className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={upcomingExpirationsData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis 
                                        tickFormatter={(value) => value.toLocaleString()} 
                                        tick={{ fontSize: 12 }} 
                                        label={{ value: 'Suma del Monto del Contrato', angle: -90, position: 'insideLeft', offset: -10, style: { fontSize: '12px' } }} 
                                    />
                                    <RechartsTooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                                    <Legend 
                                        iconType="square" 
                                        wrapperStyle={{ fontSize: '12px' }}
                                        formatter={(value, entry) => <span className="text-muted-foreground">{value}</span>}
                                    />
                                    <Bar dataKey="value" name="Monto del Contrato" fill="hsl(var(--chart-3))" />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                     <CardDescription className="text-center text-xs pb-4">
                        Mostrar/Ocultar Leyendas | Haga clic en cualquier segmento para desglosar
                    </CardDescription>
                </Card>
            </div>
        </div>
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Todos los Contratos</h2>
                <p className="text-sm text-muted-foreground">
                  4 registro(s) encontrados, 1 página(s). <span className="text-primary cursor-pointer">Click para detalles...</span> | <span className="text-primary cursor-pointer">Limpiar Todos los Filtros</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" /> Nuevo
                </Button>
                <Button variant="outline">
                  Vistas <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline">Editar Campos</Button>
                <Button variant="outline">
                  Más <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <div className="relative">
                  <Input placeholder="Buscar" className="h-10" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
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
                {contractsData.map((contract) => (
                  <TableRow key={contract.id}>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell><Pencil className="h-4 w-4 cursor-pointer" /></TableCell>
                      <TableCell className="text-primary underline cursor-pointer">{contract.id}</TableCell>
                      <TableCell><Network className="h-4 w-4 text-red-500" /></TableCell>
                      <TableCell>{contract.recordType}</TableCell>
                      <TableCell>{contract.contractTitle}</TableCell>
                      <TableCell>{contract.companyName}</TableCell>
                      <TableCell>{getStatusBadge(contract.status as ExpiringContract['status'])}</TableCell>
                      <TableCell>{contract.contractManager}</TableCell>
                      <TableCell>{contract.contractAmount}</TableCell>
                      <TableCell>{contract.endDate}</TableCell>
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
  );
}
