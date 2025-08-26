

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
  Settings,
  HelpCircle,
  Eye,
  ChevronDown,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const billableHoursData = [
    { name: 'Horas Facturadas', value: 3.3, fill: 'hsl(var(--primary))' },
    { name: 'Restantes', value: 6.7, fill: 'hsl(var(--muted))' }
];

const todayData = [{ name: 'Hoy', real: 500, esperado: 800, objetivo: 1000 }];
const thisWeekData = [{ name: 'Esta Semana', real: 2500, esperado: 4000, objetivo: 5000 }];
const thisMonthData = [{ name: 'Este Mes', real: 15000, esperado: 20000, objetivo: 25000 }];
const thisYearData = [{ name: 'Este Año', real: 180000, esperado: 220000, objetivo: 250000 }];

const annualReportData = [
  { name: '01/2025', objetivo: 20000, real: 15000 },
  { name: '02/2025', objetivo: 40000, real: 30000 },
  { name: '03/2025', objetivo: 60000, real: 45000 },
  { name: '04/2025', objetivo: 80000, real: 60000 },
  { name: '05/2025', objetivo: 100000, real: 75000 },
  { name: '06/2025', objetivo: 120000, real: 90000 },
  { name: '07/2025', objetivo: 140000, real: 105000 },
  { name: '08/2025', objetivo: 160000, real: 120000 },
  { name: '09/2025', objetivo: 180000, real: 135000 },
  { name: '10/2025', objetivo: 200000, real: 150000 },
  { name: '11/2025', objetivo: 220000, real: 165000 },
  { name: '12/2025', objetivo: 250000, real: 180000 },
];

const BarChartComponent = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={150}>
        <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" tick={false} />
            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
            <RechartsTooltip formatter={(value:number) => `$${value.toLocaleString()}`} />
            <Bar dataKey="real" name="Real" fill="hsl(var(--chart-1))" />
            <Bar dataKey="esperado" name="Esperado" fill="hsl(var(--chart-2))" />
            <Bar dataKey="objetivo" name="Objetivo" fill="hsl(var(--chart-3))" />
        </RechartsBarChart>
    </ResponsiveContainer>
);


export default function FinancialManagementPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
            Gestión Financiera
        </h1>
        <p className="text-muted-foreground">
          Supervise y gestione las finanzas de su departamento legal.
        </p>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">Métricas de: 
                             <Select defaultValue="elias">
                                <SelectTrigger className="w-[180px] h-8 text-base font-bold border-0 shadow-none -ml-2 focus:ring-0">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="elias">Elias Bardawil</SelectItem>
                                    <SelectItem value="juan">Juan Perez</SelectItem>
                                </SelectContent>
                            </Select>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="today">
                             <div className="flex items-center justify-between">
                                <CardTitle>Objetivos de facturación</CardTitle>
                                <TabsList>
                                    <TabsTrigger value="today">Hoy</TabsTrigger>
                                    <TabsTrigger value="this_week">Esta Semana</TabsTrigger>
                                    <TabsTrigger value="this_month">Este Mes</TabsTrigger>
                                    <TabsTrigger value="this_year">Este Año</TabsTrigger>
                                </TabsList>
                            </div>
                            <div className="grid grid-cols-2 gap-8 items-center mt-6">
                                <div className="relative flex items-center justify-center">
                                    <ChartContainer config={{}} className="w-full h-[200px]">
                                        <PieChart>
                                            <Pie 
                                                data={billableHoursData} 
                                                dataKey="value" 
                                                nameKey="name" 
                                                innerRadius={60} 
                                                outerRadius={80} 
                                                startAngle={90}
                                                endAngle={-270}
                                            >
                                                {billableHoursData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                            </Pie>
                                             <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold fill-foreground">0 Horas</text>
                                             <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="text-lg fill-muted-foreground">3.3 Horas</text>
                                        </PieChart>
                                    </ChartContainer>
                                </div>
                                <TabsContent value="today">
                                   <BarChartComponent data={todayData} />
                                </TabsContent>
                                <TabsContent value="this_week">
                                   <BarChartComponent data={thisWeekData} />
                                </TabsContent>
                                <TabsContent value="this_month">
                                   <BarChartComponent data={thisMonthData} />
                                </TabsContent>
                                <TabsContent value="this_year">
                                   <BarChartComponent data={thisYearData} />
                                </TabsContent>
                            </div>
                        </Tabs>
                         <Button variant="link" className="p-0 text-primary">
                            <Settings className="h-4 w-4 mr-2"/>
                            Configuración de rendimiento personal
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-1 space-y-6">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">Métricas de Facturación de la Firma <HelpCircle className="h-4 w-4 text-muted-foreground" /></CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm">Facturas Borrador</p>
                                <p className="text-2xl font-bold">0</p>
                                <Link href="#" className="text-sm text-primary underline">Crear nuevas facturas</Link>
                            </div>
                             <Button variant="ghost" size="icon"><Eye className="h-4 w-4 text-muted-foreground" /></Button>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm">Facturas Impagas</p>
                                <p className="text-2xl font-bold">2</p>
                            </div>
                             <Button variant="ghost" size="icon"><Eye className="h-4 w-4 text-muted-foreground" /></Button>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm">Facturas Vencidas</p>
                                <p className="text-2xl font-bold">2</p>
                            </div>
                             <Button variant="ghost" size="icon"><Eye className="h-4 w-4 text-muted-foreground" /></Button>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t">
                            <div>
                                <p className="text-sm">Total en Borrador</p>
                                <p className="text-xl font-bold">-</p>
                            </div>
                             <Button variant="ghost" size="icon"><Eye className="h-4 w-4 text-muted-foreground" /></Button>
                        </div>
                         <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm">Total Impago</p>
                                <p className="text-xl font-bold text-blue-600">$4,130.68</p>
                            </div>
                             <Button variant="ghost" size="icon"><Eye className="h-4 w-4 text-muted-foreground" /></Button>
                        </div>
                         <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm">Total Vencido</p>
                                <p className="text-xl font-bold text-red-600">$4,130.68</p>
                            </div>
                             <Button variant="ghost" size="icon"><Eye className="h-4 w-4 text-muted-foreground" /></Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
       </div>

        <Card>
            <CardHeader>
                <CardTitle>Informe Anual Detallado</CardTitle>
                <CardDescription>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 bg-foreground/50"></div>
                            <span>Objetivo</span>
                        </div>
                         <div className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 bg-primary"></div>
                            <span>Real</span>
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={annualReportData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
                        <RechartsTooltip formatter={(value:number) => `$${value.toLocaleString()}`} />
                        <Line type="monotone" dataKey="objetivo" strokeWidth={2} stroke="hsl(var(--foreground))" dot={false} />
                        <Line type="monotone" dataKey="real" strokeWidth={2} stroke="hsl(var(--primary))" dot={{ r: 4, fill: 'hsl(var(--primary))' }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    </div>
  );
}
