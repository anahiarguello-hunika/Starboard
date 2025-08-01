

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
  ListTodo,
  User,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, BarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Bar } from 'recharts';
import { Input } from "@/components/ui/input";
import { legalTasksData, type LegalTask } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const tasksInProgressData = [
  { name: 'Hecho', value: 1, fill: '#14b8a6' },
  { name: 'En Progreso', value: 2, fill: '#3b82f6' },
  { name: 'Bloqueado', value: 1, fill: '#ef4444' },
  { name: 'Por Hacer', value: 1, fill: '#a855f7' },
];

const tasksByMonthData = [
  { name: 'Aug 2024', value: 1 },
  { name: 'Sep 2024', value: 3 },
  { name: 'Oct 2024', value: 1 },
];

const kpiCards = [
    { title: "Tareas en riesgo", value: "1" },
    { title: "Tareas en espera", value: "1" },
    { title: "Tareas vencidas", value: "2" },
    { title: "Borradores de tareas", value: "0" },
    { title: "Tareas activas", value: "2" },
    { title: "Tareas iniciadas este mes", value: "5" },
];


export default function TasksDashboardPage() {
    const getStatusVariant = (status: LegalTask['status']) => {
        switch (status) {
            case 'Hecho':
                return 'default'
            case 'En Progreso':
                return 'secondary'
            case 'Por Hacer':
                return 'outline'
            case 'Bloqueado':
                return 'destructive'
        }
    }

  return (
    <div className="flex flex-col gap-8">
        <div className="grid grid-cols-[320px_1fr] gap-8 items-start">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold">Panel de Gestión de Tareas</h1>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        <div className="relative">
                            <Input placeholder="Asignado a" className="h-8" />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Vertical" className="h-8" />
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
                        <CardTitle className="text-base">Tareas en Progreso</CardTitle>
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
                                    <Pie data={tasksInProgressData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%">
                                        {tasksInProgressData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
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
                        <CardTitle className="text-base">Tareas por Mes</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <RefreshCw className="h-4 w-4 cursor-pointer" />
                            <X className="h-4 w-4 cursor-pointer" />
                        </div>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ChartContainer config={{}} className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={tasksByMonthData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis 
                                        tickFormatter={(value) => value.toLocaleString()} 
                                        tick={{ fontSize: 12 }} 
                                        label={{ value: 'Número de Tareas', angle: -90, position: 'insideLeft', offset: -10, style: { fontSize: '12px' } }} 
                                    />
                                    <RechartsTooltip formatter={(value: number) => value.toLocaleString()} />
                                    <Legend 
                                        iconType="square" 
                                        wrapperStyle={{ fontSize: '12px' }}
                                        formatter={(value) => <span className="text-muted-foreground">{value}</span>}
                                    />
                                    <Bar dataKey="value" name="Tareas" fill="#14b8a6" />
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
            <CardTitle className="flex items-center gap-2">
                <ListTodo /> Tareas Activas
            </CardTitle>
            <CardDescription>
                Todas las tareas legales en curso y próximas.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Tarea</TableHead>
                    <TableHead>Asignado A</TableHead>
                    <TableHead>Vertical</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Fecha de Vencimiento</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {legalTasksData.map((task) => (
                    <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.taskName}</TableCell>
                    <TableCell>
                        <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={task.assignedTo.avatar} data-ai-hint="person avatar" />
                            <AvatarFallback><User size={16} /></AvatarFallback>
                        </Avatar>
                        <span>{task.assignedTo.name}</span>
                        </div>
                    </TableCell>
                    <TableCell>{task.vertical}</TableCell>
                    <TableCell>
                        <Badge variant={getStatusVariant(task.status)}
                            className={task.status === 'En Progreso' ? 'bg-blue-100 text-blue-800' : task.status === 'Hecho' ? 'bg-accent text-accent-foreground' : ''}>
                        {task.status}
                        </Badge>
                    </TableCell>
                    <TableCell>{task.dueDate}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
    </div>
  );
}
