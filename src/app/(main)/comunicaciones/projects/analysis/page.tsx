
'use client';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart, ZAxis, Scatter } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format, parseISO } from 'date-fns';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const priorityMatrixData = [{ x: 4, y: 3.5, z: 200 }];
const opportunityMatrixData = [{ x: 3.2, y: 2, z: 200 }];

const priorityFactors = [
    { category: 'Prioridad CLOC', factor: 'Importancia para CLOC', value: 'Crítico para el Negocio', points: 4 },
    { category: 'Prioridad CLOC', factor: 'Alineación con Estrategias CLOC', value: 'Coincidencia Directa', points: 4 },
    { category: 'Prioridad CLOC', factor: 'Riesgo/Recompensa para CLOC', value: 'Bajo Riesgo / Alta Recompensa', points: 4 },
    { category: 'Prioridad CLOC', factor: 'Beneficio Financiero Total (Ahorro/Evitación de Costos o Ingresos)', value: '500K - 1M', points: 3 },
    { category: 'Prioridad del Departamento', factor: 'Alineación con Estrategias Legales', value: 'Coincidencia Directa', points: 4 },
    { category: 'Prioridad del Departamento', factor: 'Alineación con Portafolio Legal', value: 'Coincidencia Directa', points: 4 },
    { category: 'Prioridad del Departamento', factor: 'Riesgo/Recompensa para Legal', value: 'Bajo Riesgo / Alta Recompensa', points: 4 },
    { category: 'Prioridad del Departamento', factor: 'Impacto en la Comunidad de Usuarios', value: 'Alto Impacto', points: 4 },
];

const opportunityFactors = [
    { category: 'Complejidad de la Solución', factor: 'Alcance de la Solución Implementada', value: 'Equipo Único', points: 1 },
    { category: 'Complejidad de la Solución', factor: 'Grupos CLOC involucrados en la Solución', value: 'Múltiples Grupos', points: 4 },
    { category: 'Complejidad de la Solución', factor: 'Complejidad de Desarrollo de la Solución', value: 'Reutilización Significativa de Tecnología', points: 1 },
    { category: 'Complejidad de la Solución', factor: 'Complejidad de Integración de la Solución', value: 'Sin Integración', points: 1 },
    { category: 'Posicionamiento Estratégico', factor: 'Medidor "CLOC"', value: 'Beat-up', points: 4 },
    { category: 'Posicionamiento Estratégico', factor: 'Nivel de Estandarización', value: 'Solución "Empresarial"', points: 4 },
    { category: 'Posicionamiento Estratégico', factor: 'Sensibilidad al Riesgo', value: 'Altas Consecuencias para el Negocio', points: 3 },
];

const roiData = [
  { name: 'Q1', inversion: -50, retorno: 0, neto: -50 },
  { name: 'Q2', inversion: -50, retorno: 100, neto: 50 },
  { name: 'Q3', inversion: -60, retorno: 150, neto: 90 },
  { name: 'Q4', inversion: -70, retorno: 200, neto: 130 },
  { name: 'Q5', inversion: -80, retorno: 220, neto: 140 },
  { name: 'Q6', inversion: -90, retorno: 250, neto: 160 },
  { name: 'Q7', inversion: -100, retorno: 280, neto: 180 },
];

const initialProjectManagementData = Array(10).fill({}).map((_, index) => ({
    id: index,
    priority: '',
    project: '',
    responsible: '',
    process: '',
    progress: 50,
    scheduled: null,
    status: '',
}));

const priorityOptions = ['Alta', 'Media', 'Baja'];
const statusOptions = ['En Progreso', 'Completado', 'En Espera', 'Cancelado'];

const impactedProcessOptions = [
    { name: '1. Estratégico', color: 'bg-blue-800' },
    { name: '2. Legal Estratégico', color: 'bg-orange-600' },
    { name: '3. Legal Gral.', color: 'bg-blue-500' },
    { name: '4. RH', color: 'bg-gray-700' },
    { name: '5. Administración', color: 'bg-green-200' },
    { name: '6. Compras', color: 'bg-red-300' },
    { name: '7. Ventas', color: 'bg-green-700' },
    { name: '8. Marketing', color: 'bg-gray-300' },
];

const ImpactedProcessCell = ({ value, onValueChange }: { value: string, onValueChange: (newValue: string) => void }) => {
    const currentOption = impactedProcessOptions.find(opt => opt.name === value);
    const colorClass = currentOption ? currentOption.color : 'bg-transparent';
    const textColorClass = ['bg-green-200', 'bg-red-300', 'bg-gray-300'].includes(colorClass) ? 'text-gray-900' : 'text-white';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", currentOption && colorClass, currentOption && textColorClass)}>
                    {value || 'Seleccionar...'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {impactedProcessOptions.map(option => (
                    <DropdownMenuItem key={option.name} onSelect={() => onValueChange(option.name)}>
                        <div className={cn('w-3 h-3 rounded-full mr-2', option.color)} />
                        <span>{option.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};


const ChartQuadrant = ({ x, y, width, height, fill, label, labelX, labelY }: any) => (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} opacity={0.1} />
      <text x={labelX} y={labelY} fontSize="10" textAnchor="middle" dominantBaseline="middle" fill="hsl(var(--muted-foreground))">
        {label}
      </text>
    </g>
);

const ProgressCell = ({ progress, onProgressChange }: { progress: number, onProgressChange: (newProgress: number) => void }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value)) value = 0;
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        onProgressChange(value);
    };

    return (
        <div className="flex items-center gap-2">
            <Progress value={progress} className="w-24 h-4" />
            <div className="flex items-center gap-1">
                <Input
                    type="number"
                    value={progress}
                    onChange={handleChange}
                    className="w-16 h-8 text-xs p-1 text-right"
                    min="0"
                    max="100"
                />
                <span className="text-xs">%</span>
            </div>
        </div>
    );
};

const DatePickerCell = ({ date, onDateChange }: { date: Date | null, onDateChange: (newDate: Date | undefined) => void }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Elige una fecha</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date || undefined}
                    onSelect={(d) => {
                        onDateChange(d);
                        setOpen(false);
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};

export default function ProjectAnalysisPage() {
    const [projectManagementData, setProjectManagementData] = React.useState(initialProjectManagementData);

    const handleCellChange = (rowIndex: number, field: string, value: any) => {
        setProjectManagementData(prevData => {
            const newData = [...prevData];
            newData[rowIndex] = { ...newData[rowIndex], [field]: value };
            return newData;
        });
    };
    
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Administrador de Proyectos Legales</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Prioridad</TableHead>
                                <TableHead>Proyecto</TableHead>
                                <TableHead>Responsable</TableHead>
                                <TableHead>Proceso Impactado</TableHead>
                                <TableHead>Avance</TableHead>
                                <TableHead>Agendado</TableHead>
                                <TableHead>Estatus</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projectManagementData.map((row, rowIndex) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Select value={row.priority} onValueChange={(value) => handleCellChange(rowIndex, 'priority', value)}>
                                            <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                                            <SelectContent>
                                                {priorityOptions.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell><Input value={row.project} onChange={(e) => handleCellChange(rowIndex, 'project', e.target.value)} /></TableCell>
                                    <TableCell><Input value={row.responsible} onChange={(e) => handleCellChange(rowIndex, 'responsible', e.target.value)} /></TableCell>
                                    <TableCell>
                                         <ImpactedProcessCell 
                                            value={row.process}
                                            onValueChange={(value) => handleCellChange(rowIndex, 'process', value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <ProgressCell
                                            progress={row.progress}
                                            onProgressChange={(newProgress) => handleCellChange(rowIndex, 'progress', newProgress)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <DatePickerCell 
                                            date={row.scheduled}
                                            onDateChange={(newDate) => handleCellChange(rowIndex, 'scheduled', newDate)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Select value={row.status} onValueChange={(value) => handleCellChange(rowIndex, 'status', value)}>
                                            <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                                            <SelectContent>
                                                {statusOptions.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
