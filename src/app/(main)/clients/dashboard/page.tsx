
'use client';

import React from 'react';
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
  Users,
  Building,
  DollarSign,
  LayoutGrid,
  List,
  Table as TableIcon
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import Link from 'next/link';

const clientsByIndustryData = [
  { name: 'Tecnología', value: 8, fill: '#3b82f6' },
  { name: 'Finanzas', value: 5, fill: '#f97316' },
  { name: 'Salud', value: 4, fill: '#14b8a6' },
  { name: 'Retail', value: 3, fill: '#a855f7' },
];

const newClientsByMonthData = [
    { name: 'Ene', value: 2 },
    { name: 'Feb', value: 3 },
    { name: 'Mar', value: 1 },
    { name: 'Abr', value: 4 },
    { name: 'May', value: 2 },
    { name: 'Jun', value: 5 },
];

const kpiCards = [
    { title: "Clientes nuevos este mes", value: "5" },
    { title: "Clientes activos", value: "20" },
    { title: "Clientes en riesgo", value: "3" },
    { title: "Oportunidades abiertas", value: "8" },
    { title: "Proyectos activos", value: "15" },
    { title: "Facturación pendiente", value: "$120K" },
];

const clientsData = [
    { id: 'CLI-001', name: 'Innovate Inc.', industry: 'Tecnología', primaryContact: 'Alex L', status: 'Activo', openDate: '2023-01-15' },
    { id: 'CLI-002', name: 'Tech Solutions LLC', industry: 'Tecnología', primaryContact: 'Drew B', status: 'Activo', openDate: '2022-11-20' },
    { id: 'CLI-003', name: 'Capital Group', industry: 'Finanzas', primaryContact: 'Siobhan C', status: 'Activo', openDate: '2023-05-10' },
    { id: 'CLI-004', name: 'HealthWell Corp', industry: 'Salud', primaryContact: 'En Riesgo', openDate: '2021-08-01' },
    { id: 'CLI-005', name: 'Retail Giant', industry: 'Retail', primaryContact: 'Ade A', status: 'Inactivo', openDate: '2020-03-25' },
]

export default function ClientsDashboardPage() {
  const [view, setView] = React.useState<'kanban' | 'list' | 'table'>('table');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Activo':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>;
      case 'En Riesgo':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{status}</Badge>;
      case 'Inactivo':
        return <Badge variant="outline">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const KanbanView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clientsData.map((client) => (
        <Card key={client.id}>
          <CardHeader>
            <CardTitle>{client.name}</CardTitle>
            <CardDescription>{client.industry}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
                <p><strong>Contacto:</strong> {client.primaryContact}</p>
                <p><strong>Alta:</strong> {client.openDate}</p>
                <div>{getStatusBadge(client.status)}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="flex flex-col gap-4">
      {clientsData.map((client) => (
        <Card key={client.id}>
            <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Building className="h-8 w-8 text-muted-foreground" />
                    <div>
                        <p className="font-semibold">{client.name}</p>
                        <p className="text-sm text-muted-foreground">{client.industry} - Contacto: {client.primaryContact}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {getStatusBadge(client.status)}
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">Ver Cliente</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
      ))}
    </div>
  );

  const TableView = () => (
     <Table>
        <TableHeader>
            <TableRow>
                <TableHead>ID de Cliente</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Industria</TableHead>
                <TableHead>Contacto Principal</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha de Alta</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {clientsData.map((client) => (
                <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.id}</TableCell>
                    <TableCell>{client.name}</TableCell>
                    <TableCell><Badge variant="outline">{client.industry}</Badge></TableCell>
                    <TableCell>{client.primaryContact}</TableCell>
                    <TableCell>{getStatusBadge(client.status)}</TableCell>
                    <TableCell>{client.openDate}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  );


  return (
    <div className="space-y-8">
      <div className="grid grid-cols-[320px_1fr] gap-8 items-start">
          <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold">Panel de Gestión de Clientes</h1>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <Card>
                  <CardContent className="p-4 space-y-4">
                       <div className="relative">
                          <Input placeholder="Industria" className="h-8" />
                          <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                       <div className="relative">
                          <Input placeholder="Responsable" className="h-8" />
                          <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                       <div className="relative">
                          <Input placeholder="Tipo de Cliente" className="h-8" />
                          <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                  </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                  {kpiCards.map(kpi => (
                      <Card key={kpi.title} className="text-center">
                          <CardHeader className="p-4">
                             <CardDescription className="text-xs h-8">{kpi.title}</CardDescription>
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
                      <CardTitle className="text-base">Clientes por Industria</CardTitle>
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
                                          formatter={(value) => <span>{value}</span>}
                                          labelFormatter={(label, payload) => payload?.[0]?.name}
                                      />} 
                                  />
                                  <Pie data={clientsByIndustryData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%">
                                      {clientsByIndustryData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                  </Pie>
                                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-foreground">20</text>
                                  <Legend 
                                      iconType="square"
                                      wrapperStyle={{ fontSize: '12px', paddingLeft: '20px' }}
                                      formatter={(value) => <span className="text-muted-foreground">{value}</span>}
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
                      <CardTitle className="text-base">Nuevos Clientes por Mes</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                          <RefreshCw className="h-4 w-4 cursor-pointer" />
                          <X className="h-4 w-4 cursor-pointer" />
                      </div>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                      <ChartContainer config={{}} className="w-full h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                              <RechartsBarChart data={newClientsByMonthData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                  <YAxis 
                                      allowDecimals={false}
                                      tickFormatter={(value) => value.toLocaleString()} 
                                      tick={{ fontSize: 12 }} 
                                      label={{ value: 'Número de Clientes', angle: -90, position: 'insideLeft', offset: 10, style: { fontSize: '12px' } }} 
                                  />
                                  <RechartsTooltip formatter={(value: number) => value.toLocaleString()} />
                                  <Bar dataKey="value" name="Clientes" fill="#14b8a6" />
                              </RechartsBarChart>
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
        <CardHeader className="flex justify-between items-center">
            <CardTitle>Lista de Clientes</CardTitle>
            <div className="flex items-center gap-1 rounded-md bg-muted p-1">
                <Button variant={view === 'kanban' ? 'ghost' : 'ghost'} size="sm" className={cn(view === 'kanban' && 'bg-background')} onClick={() => setView('kanban')}>
                    <LayoutGrid className="h-4 w-4 mr-2" />
                    Kanban
                </Button>
                <Button variant={view === 'list' ? 'ghost' : 'ghost'} size="sm" className={cn(view === 'list' && 'bg-background')} onClick={() => setView('list')}>
                    <List className="h-4 w-4 mr-2" />
                    Lista
                </Button>
                <Button variant={view === 'table' ? 'ghost' : 'ghost'} size="sm" className={cn(view === 'table' && 'bg-background')} onClick={() => setView('table')}>
                    <TableIcon className="h-4 w-4 mr-2" />
                    Tabla
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            {view === 'kanban' && <KanbanView />}
            {view === 'list' && <ListView />}
            {view === 'table' && <TableView />}
        </CardContent>
      </Card>
    </div>
  );
}
