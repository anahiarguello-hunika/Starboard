
'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ChevronDown,
  Edit,
  FileText,
  Star,
  RefreshCw,
  BarChart,
  Users,
  Tag,
  List,
  GripHorizontal,
  Settings,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const memberData = [
  { name: 'Elias Bardawil', value: 45.73, fill: 'hsl(var(--chart-2))' },
  { name: 'Andrea Torres', value: 28.07, fill: 'hsl(var(--chart-3))' },
  { name: 'Stephany', value: 26.2, fill: 'hsl(var(--chart-5))' },
];

const memberTime = [
    { name: 'Elias Bardawil', time: '6:31', percentage: '45.73%' },
    { name: 'Andrea Torres', time: '4:00', percentage: '28.07%' },
    { name: 'Stephany', time: '3:44', percentage: '26.20%' },
];

const phaseData = [
  { name: 'Inicio (Planeación)', value: 70.29, fill: 'hsl(var(--chart-4))' },
  { name: 'Ejecución', value: 29.71, fill: 'hsl(var(--muted-foreground))' },
];

const phaseTime = [
    { name: '1. Inicio (Planeación)', time: '10:01', percentage: '70.29%' },
    { name: '2. Ejecución', time: '4:14', percentage: '29.71%' },
];

const tagData = [
    { name: 'Untagged', value: 100, fill: 'hsl(var(--chart-4))' },
];

const tagTime = [
    { name: 'Untagged', time: '14:15', percentage: '100.00%' },
];

const teamMembers = [
    { name: 'Elias Bardawil', totalTime: '6:31', totalCost: 'US$651.67' },
    { name: 'Andrea Torres', totalTime: '4:00', totalCost: 'US$200.00' },
    { name: 'Stephany', totalTime: '3:44', totalCost: 'US$224.00' },
];


const KpiCard = ({ title, value, children }: { title: string, value: string, children: React.ReactNode }) => (
    <Card className="flex-1">
        <CardHeader className="pb-2">
            <CardDescription>{title}</CardDescription>
            <CardTitle className="text-2xl">{value}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const LegendItem = ({ color, name, time, percentage }: { color: string, name: string, time: string, percentage: string }) => (
    <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
            <span className="h-3 w-3" style={{ backgroundColor: color }}></span>
            <span>{name}</span>
        </div>
        <span>{time} ({percentage})</span>
    </div>
)

export default function FinancialManagementPage() {
  return (
    <div className="space-y-6">
        <header className="bg-primary/90 text-primary-foreground -mx-8 -mt-8 px-8 py-4">
            <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/80">
                        <ArrowLeft />
                    </Button>
                    <div className="w-8 h-8 rounded-full bg-orange-400" />
                    <div>
                        <h1 className="text-xl font-bold font-headline flex items-center gap-2">
                            Actualización Corporativa Purity <Star className="h-4 w-4" />
                        </h1>
                        <p className="text-sm text-primary-foreground/80">Conos para Nieve Purity, SA de CV</p>
                    </div>
                </div>
                 <div className="flex items-center gap-2 text-sm">
                    <span>Last sync 2025-08-28 04:35:22</span>
                    <Button variant="ghost" className="bg-white/20 hover:bg-white/30 text-white">
                        <RefreshCw className="mr-2 h-4 w-4" /> Sync Microsoft Planner data
                    </Button>
                     <Button variant="secondary" className="bg-green-500 hover:bg-green-600 text-white">
                        <BarChart className="mr-2 h-4 w-4" /> Report
                    </Button>
                    <Button variant="outline" className="bg-transparent border-white/50 hover:bg-white/10">
                        <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                </div>
            </div>
             <Tabs defaultValue="overview" className="mt-4">
                <TabsList className="border-0 p-0 h-auto bg-transparent">
                    <TabsTrigger value="overview" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Resumen</TabsTrigger>
                    <TabsTrigger value="team" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Equipo</TabsTrigger>
                    <TabsTrigger value="phases" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Fases</TabsTrigger>
                    <TabsTrigger value="tags" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Etiquetas</TabsTrigger>
                    <TabsTrigger value="tasks" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Tareas</TabsTrigger>
                </TabsList>
                 <TabsContent value="overview" className="pt-6">
                    <div className="flex justify-end">
                        <Button variant="outline" className="bg-transparent text-primary-foreground/80 border-primary-foreground/50 hover:bg-primary/80 hover:text-primary-foreground">Todo el tiempo</Button>
                    </div>
                     <div className="flex gap-4 mt-4">
                        <KpiCard title="Presupuesto" value="14h de 13h">
                            <Progress value={100} className="h-2 bg-red-200 [&>div]:bg-red-500" />
                            <p className="text-sm font-semibold text-red-600 mt-1">110%</p>
                        </KpiCard>
                        <KpiCard title="Tiempo total" value="14:15">
                            <div className="text-xs text-primary-foreground/80 space-y-1">
                                <div className="flex justify-between"><span>Tiempo facturable</span><span>14:15</span></div>
                                <div className="flex justify-between"><span>Tiempo no facturable</span><span>0:00</span></div>
                            </div>
                        </KpiCard>
                        <KpiCard title="Costos internos" value="US$1,075.67">
                            <div className="text-xs text-primary-foreground/80 space-y-1">
                                <div className="flex justify-between"><span>Costos laborales</span><span>US$1,075.67</span></div>
                                <div className="flex justify-between"><span>Gastos</span><span>US$0.00</span></div>
                            </div>
                        </KpiCard>
                        <KpiCard title="Dinero facturado" value="US$0.00">
                             <div className="text-xs text-primary-foreground/80 space-y-1">
                                <div className="flex justify-between"><span>Trabajo facturado</span><span>US$0.00</span></div>
                                <div className="flex justify-between"><span>Gastos facturados</span><span>US$0.00</span></div>
                            </div>
                        </KpiCard>
                        <KpiCard title="Dinero no facturado" value="US$3,181.66">
                             <div className="text-xs text-primary-foreground/80 space-y-1">
                                <div className="flex justify-between"><span>Trabajo no facturado</span><span>US$3,181.66</span></div>
                                <div className="flex justify-between"><span>Gastos no facturados</span><span>US$0.00</span></div>
                            </div>
                        </KpiCard>
                    </div>
                     <Card className="mt-6 bg-card/80">
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>Resumen</CardTitle>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Métrica:</span>
                                <Select defaultValue="time">
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="time">Tiempo</SelectItem>
                                        <SelectItem value="cost">Costo</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="font-semibold mb-4">Miembro <ChevronDown className="inline h-4 w-4" /></h3>
                                <ChartContainer config={{}} className="h-[200px] w-full">
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie data={memberData} dataKey="value" nameKey="name" innerRadius="70%" outerRadius="100%">
                                                {memberData.map(entry => <Cell key={entry.name} fill={entry.fill} />)}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                                <div className="mt-4 space-y-2 text-left">
                                    {memberTime.map((item, index) => (
                                        <LegendItem key={item.name} color={memberData[index].fill} name={item.name} time={item.time} percentage={item.percentage} />
                                    ))}
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-4">Fase <ChevronDown className="inline h-4 w-4" /></h3>
                                <ChartContainer config={{}} className="h-[200px] w-full">
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie data={phaseData} dataKey="value" nameKey="name" innerRadius="70%" outerRadius="100%">
                                                {phaseData.map(entry => <Cell key={entry.name} fill={entry.fill} />)}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                                <div className="mt-4 space-y-2 text-left">
                                    {phaseTime.map((item, index) => (
                                        <LegendItem key={item.name} color={phaseData[index].fill} name={item.name} time={item.time} percentage={item.percentage} />
                                    ))}
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-4">Etiqueta <ChevronDown className="inline h-4 w-4" /></h3>
                                <ChartContainer config={{}} className="h-[200px] w-full">
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie data={tagData} dataKey="value" nameKey="name" innerRadius="70%" outerRadius="100%">
                                                {tagData.map(entry => <Cell key={entry.name} fill={entry.fill} />)}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                                <div className="mt-4 space-y-2 text-left">
                                    {tagTime.map((item, index) => (
                                        <LegendItem key={item.name} color={tagData[index].fill} name={item.name} time={item.time} percentage={item.percentage} />
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="team" className="pt-6">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div>
                                    <Select defaultValue="member">
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="member">Mostrar: Miembro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center gap-2">
                                     <Select defaultValue="none">
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Desglose por: Ninguno"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">Ninguno</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="ghost" size="icon"><Settings className="h-5 w-5 text-muted-foreground" /></Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead className="text-right">Tiempo total</TableHead>
                                        <TableHead className="text-right">Costo total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {teamMembers.map((member) => (
                                        <TableRow key={member.name}>
                                            <TableCell className="font-medium">{member.name}</TableCell>
                                            <TableCell className="text-right flex justify-end items-center gap-2">
                                                {member.totalTime}
                                                <Button variant="ghost" size="icon" className="h-6 w-6"><GripHorizontal className="h-4 w-4 text-muted-foreground" /></Button>
                                            </TableCell>
                                            <TableCell className="text-right">{member.totalCost}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="flex justify-end mt-4">
                                <Button><Edit className="mr-2 h-4 w-4" /> Editar equipo</Button>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="mt-6">
                        <CardHeader className="flex flex-row justify-end items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Métrica:</span>
                                <Select defaultValue="time">
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="time">Tiempo</SelectItem>
                                        <SelectItem value="cost">Costo</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-6 items-center">
                             <ChartContainer config={{}} className="h-[250px] w-full">
                                <ResponsiveContainer>
                                    <PieChart>
                                        <ChartTooltip
                                            content={<ChartTooltipContent 
                                                formatter={(value, name) => `${name}: ${value}%`}
                                            />} 
                                        />
                                        <Pie data={memberData} dataKey="value" nameKey="name" innerRadius="70%" outerRadius="100%" cx="50%" cy="50%">
                                            {memberData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} />
                                            ))}
                                        </Pie>
                                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold fill-foreground">14:15</text>
                                    </PieChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                            <div className="space-y-2 text-left">
                                {memberTime.map((item, index) => (
                                    <LegendItem key={item.name} color={memberData[index].fill} name={item.name} time={item.time} percentage={item.percentage} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </header>
    </div>
  );
}
