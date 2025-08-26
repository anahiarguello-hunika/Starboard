

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
import { documentsData, type Document } from "@/lib/mock-data";
import { 
  FileText, 
  Folder, 
  PlusCircle,
  LayoutDashboard,
  BarChart2,
  ListTodo,
  File,
  Calendar,
  AlertTriangle,
  BarChart,
  StickyNote,
  History,
  LifeBuoy,
  LayoutGrid,
  List,
  Table as TableIcon,
  Home,
  Clock,
  Pin,
  ChevronDown,
  Search,
  RefreshCw,
  X,
  User,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, Bar } from 'recharts';

const documentsStatusData = [
  { name: 'Aprobado', value: 3, fill: 'hsl(var(--chart-2))' },
  { name: 'En Revisión', value: 1, fill: 'hsl(var(--chart-3))' },
  { name: 'Borrador', value: 1, fill: 'hsl(var(--foreground))' },
];

const documentsByMonthData = [
  { name: 'May 2024', value: 1 },
  { name: 'Jun 2024', value: 1 },
  { name: 'Jul 2024', value: 1 },
  { name: 'Aug 2024', value: 2 },
];

const kpiCards = [
    { title: "Documentos en revisión", value: "1" },
    { title: "Documentos en borrador", value: "1" },
    { title: "Documentos vencidos", value: "0" },
    { title: "Documentos por aprobar", value: "2" },
    { title: "Documentos activos", value: "3" },
    { title: "Documentos creados este mes", value: "2" },
];

export default function DocumentsDashboardPage() {
    const [view, setView] = React.useState<'kanban' | 'list' | 'table'>('table');

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
  
    const KanbanView = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(documentsData.reduce((acc, doc) => {
                if (!acc[doc.status]) {
                    acc[doc.status] = [];
                }
                acc[doc.status].push(doc);
                return acc;
            }, {} as Record<Document['status'], Document[]>)).map(([status, docs]) => (
                <Card key={status} className="bg-muted/30">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span className="text-base">{status}</span>
                            <span className="text-sm font-normal bg-muted px-2 py-1 rounded-md">{docs.length}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {docs.map(doc => (
                            <Card key={doc.id}>
                                <CardContent className="p-4 space-y-2">
                                    <p className="font-semibold">{doc.name}</p>
                                    <p className="text-xs text-muted-foreground">{doc.type} - v{doc.version}.0</p>
                                    <div className="flex items-center justify-between pt-2">
                                        <Badge variant={getStatusVariant(doc.status)} className={doc.status === 'Aprobado' ? 'bg-accent text-accent-foreground' : ''}>{doc.status}</Badge>
                                        <span className="text-xs text-muted-foreground">Actualizado: {doc.lastUpdated}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
  
    const ListView = () => (
        <div className="flex flex-col gap-4">
            {documentsData.map((doc) => (
                <Card key={doc.id}>
                    <CardContent className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <FileText className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <p className="font-semibold">{doc.name}</p>
                                <p className="text-sm text-muted-foreground">{doc.type} - v{doc.version}.0 - Actualizado: {doc.lastUpdated}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Badge variant={getStatusVariant(doc.status)}
                                className={doc.status === 'Aprobado' ? 'bg-accent text-accent-foreground' : ''}>
                                {doc.status}
                            </Badge>
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
                <TableHead>Nombre del Documento</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Versión</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Última Actualización</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentsData.map((doc) => (
                <TableRow key={doc.id} className="border-b">
                  <TableCell>{doc.name}</TableCell>
                  <TableCell><Badge variant="outline">{doc.type}</Badge></TableCell>
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
        </Card>
      );

  return (
    <div className="space-y-8">
        <div className="grid grid-cols-[320px_1fr] gap-8 items-start">
            <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold">Panel de Gestión de Documentos</h1>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        <div className="relative">
                            <Input placeholder="Tipo de Documento" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Responsable" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Estado" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-4">
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
                        <CardTitle className="text-base">Documentos por Estado</CardTitle>
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
                                    <Pie data={documentsStatusData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%">
                                        {documentsStatusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
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
                        <CardTitle className="text-base">Documentos por Mes</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <RefreshCw className="h-4 w-4 cursor-pointer" />
                            <X className="h-4 w-4 cursor-pointer" />
                        </div>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ChartContainer config={{}} className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RechartsBarChart data={documentsByMonthData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis 
                                        tickFormatter={(value) => value.toLocaleString()} 
                                        tick={{ fontSize: 12 }} 
                                        label={{ value: 'Número de Documentos', angle: -90, position: 'insideLeft', offset: -10, style: { fontSize: '12px' } }} 
                                    />
                                    <RechartsTooltip formatter={(value: number) => value.toLocaleString()} />
                                    <Legend 
                                        iconType="square" 
                                        wrapperStyle={{ fontSize: '12px' }}
                                        formatter={(value, entry) => <span className="text-muted-foreground">{value}</span>}
                                    />
                                    <Bar dataKey="value" name="Documentos" fill="hsl(var(--chart-2))" />
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
                Gestión de Documentos y Contratos
                </h1>
                <p className="text-muted-foreground">
                Visualice y gestione sus documentos y contratos legales.
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

        <div className="flex items-center justify-between gap-4">
            <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar en esta carpeta" className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline">Nuevo Documento</Button>
                <Button>Subir archivo</Button>
            </div>
        </div>

        {view === 'kanban' && <KanbanView />}
        {view === 'list' && <ListView />}
        {view === 'table' && <TableView />}
    </div>
  );
}
