
'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { serviceRequestsData, type ServiceRequest } from "@/lib/mock-data";
import { 
  ChevronDown, 
  Search,
  RefreshCw,
  X,
  LayoutGrid,
  List,
  Table as TableIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, Bar } from 'recharts';

const requestsInProgressData = [
  { name: 'Activo', value: 2, fill: 'hsl(var(--chart-1))' },
  { name: 'En Espera', value: 1, fill: 'hsl(var(--chart-3))' },
  { name: 'En Riesgo', value: 1, fill: 'hsl(var(--destructive))' },
  { name: 'Cerrado', value: 1, fill: 'hsl(var(--chart-5))' },
];

const requestsByMonthData = [
  { name: 'May 2024', value: 1 },
  { name: 'Jul 2024', value: 2 },
  { name: 'Aug 2024', value: 2 },
];

const kpiCards = [
    { title: "Solicitudes en riesgo", value: "1" },
    { title: "Solicitudes en espera", value: "1" },
    { title: "Solicitudes vencidas", value: "0" },
    { title: "Borradores de solicitudes", value: "0" },
    { title: "Solicitudes activas", value: "2" },
    { title: "Solicitudes iniciadas este mes", value: "4" },
];

export default function ServiceRequestDashboardPage() {
  const [view, setView] = React.useState<'kanban' | 'list' | 'table'>('table');

  const getStatusVariant = (status: ServiceRequest["status"]) => {
    switch (status) {
      case "Activo":
        return "default";
      case "En Espera":
        return "secondary";
      case "Cerrado":
        return "outline";
      case "En Riesgo":
        return "destructive";
    }
  };

  const KanbanView = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceRequestsData.map((request) => (
          <Card key={request.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-xl mb-1">{request.name}</CardTitle>
                    <CardDescription>{request.client}</CardDescription>
                  </div>
                   <Badge variant={getStatusVariant(request.status)}
                         className={request.status === 'Activo' ? 'bg-accent text-accent-foreground' : ''}>
                    {request.status}
                  </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-sm text-muted-foreground">
                <p>Solicitante: {request.requester}</p>
                <p>Abierto: {request.openDate}</p>
              </div>
            </CardContent>
            <CardHeader className="flex flex-row justify-end">
                <Button variant="outline" size="sm">Ver Solicitud</Button>
            </CardHeader>
          </Card>
        ))}
      </div>
  );

  const ListView = () => (
    <div className="flex flex-col gap-4">
        {serviceRequestsData.map((request) => (
            <Card key={request.id}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-xl mb-1">{request.name}</CardTitle>
                            <CardDescription>{request.client}</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant={getStatusVariant(request.status)}
                                className={request.status === 'Activo' ? 'bg-accent text-accent-foreground' : ''}>
                                {request.status}
                            </Badge>
                            <Button variant="outline" size="sm">Ver Solicitud</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground">
                        <p>Solicitante: {request.requester}</p>
                        <p>Abierto: {request.openDate}</p>
                    </div>
                </CardContent>
            </Card>
        ))}
    </div>
  );

  const TableView = () => (
    <Card>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre de la Solicitud</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Solicitante</TableHead>
                    <TableHead>Fecha de Apertura</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {serviceRequestsData.map((request) => (
                    <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.name}</TableCell>
                        <TableCell>{request.client}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(request.status)}
                                className={request.status === 'Activo' ? 'bg-accent text-accent-foreground' : ''}>
                                {request.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{request.requester}</TableCell>
                        <TableCell>{request.openDate}</TableCell>
                        <TableCell>
                            <Button variant="outline" size="sm">Ver</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>
  );

  return (
    <div className="flex flex-col gap-8">
        <div className="grid grid-cols-[320px_1fr] gap-8 items-start">
            <div className="flex flex-col gap-8">
                 <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold">Panel de Gestión de Solicitudes</h1>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        <div className="relative">
                            <Input placeholder="Departamento" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Solicitante" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Tipo de Solicitud" className="h-8" />
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
                        <CardTitle className="text-base">Solicitudes en Progreso</CardTitle>
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
                                    <Pie data={requestsInProgressData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%">
                                        {requestsInProgressData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                    </Pie>
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-foreground">5</text>
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
                        <CardTitle className="text-base">Solicitudes por Mes</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <RefreshCw className="h-4 w-4 cursor-pointer" />
                            <X className="h-4 w-4 cursor-pointer" />
                        </div>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ChartContainer config={{}} className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RechartsBarChart data={requestsByMonthData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis 
                                        allowDecimals={false}
                                        tickFormatter={(value) => value.toLocaleString()} 
                                        tick={{ fontSize: 12 }} 
                                        label={{ value: 'Número de Solicitudes', angle: -90, position: 'insideLeft', offset: -10, style: { fontSize: '12px' } }} 
                                    />
                                    <RechartsTooltip formatter={(value: number) => value.toLocaleString()} />
                                    <Legend 
                                        iconType="square" 
                                        wrapperStyle={{ fontSize: '12px' }}
                                        formatter={(value, entry) => <span className="text-muted-foreground">{value}</span>}
                                    />
                                    <Bar dataKey="value" name="Solicitudes" fill="hsl(var(--chart-2))" />
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
        
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                Gestión de Solicitudes
                </h1>
                <p className="text-muted-foreground">
                Visualice y gestione sus solicitudes de servicio.
                </p>
            </div>
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
        </div>
        
        {view === 'kanban' && <KanbanView />}
        {view === 'list' && <ListView />}
        {view === 'table' && <TableView />}
    </div>
  );
}
