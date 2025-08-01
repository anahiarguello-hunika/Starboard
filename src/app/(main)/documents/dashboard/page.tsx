

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
  X
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
  { name: 'Aprobado', value: 3, fill: '#14b8a6' },
  { name: 'En Revisión', value: 1, fill: '#f97316' },
  { name: 'Borrador', value: 1, fill: '#3b82f6' },
];

const documentsByMonthData = [
  { name: 'May 2024', value: 1, fill: '#14b8a6' },
  { name: 'Jun 2024', value: 1, fill: '#14b8a6' },
  { name: 'Jul 2024', value: 1, fill: '#14b8a6' },
  { name: 'Aug 2024', value: 2, fill: '#14b8a6' },
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
  
    const TableView = () => (
        <Card>
          <Table>
            <TableHeader>
                <TableRow>
                <th className="text-left py-2 px-4 font-semibold">Nombre del Documento</th>
                <th className="text-left py-2 px-4 font-semibold">Tipo</th>
                <th className="text-left py-2 px-4 font-semibold">Versión</th>
                <th className="text-left py-2 px-4 font-semibold">Estado</th>
                <th className="text-left py-2 px-4 font-semibold">Última Actualización</th>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentsData.map((doc) => (
                <TableRow key={doc.id} className="border-b">
                  <TableCell className="py-2 px-4">{doc.name}</TableCell>
                  <TableCell className="py-2 px-4"><Badge variant="outline">{doc.type}</Badge></TableCell>
                  <TableCell className="py-2 px-4">v{doc.version}.0</TableCell>
                  <TableCell className="py-2 px-4">
                    <Badge variant={getStatusVariant(doc.status)}
                        className={doc.status === 'Aprobado' ? 'bg-accent text-accent-foreground' : ''}>
                       {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-2 px-4">{doc.lastUpdated}</TableCell>
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
                                    <Bar dataKey="value" name="Documentos" fill="#14b8a6" />
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
                <Button variant="ghost" size="sm" className={cn(view === 'kanban' && 'bg-background')} onClick={() => setView('kanban')}>
                    <LayoutGrid className="h-4 w-4 mr-2" />
                    Kanban
                </Button>
                <Button variant="ghost" size="sm" className={cn(view === 'list' && 'bg-background')} onClick={() => setView('list')}>
                    <List className="h-4 w-4 mr-2" />
                    Lista
                </Button>
                <Button variant="ghost" size="sm" className={cn(view === 'table' && 'bg-background')} onClick={() => setView('table')}>
                    <TableIcon className="h-4 w-4 mr-2" />
                    Tabla
                </Button>
            </div>
        </div>

        <TableView />
    </div>
  );
}
