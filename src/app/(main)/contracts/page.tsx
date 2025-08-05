
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
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Input } from "@/components/ui/input";

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


export default function ContractsDashboardPage() {

  return (
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
  );
}
