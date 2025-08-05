
'use client';

import {
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronRight,
  Filter,
  Plus,
  Search,
  Users,
  BarChart2,
  Calendar,
  Settings,
  MoreHorizontal,
  LayoutGrid,
  List,
  CalendarDays,
  Columns,
  Presentation,
  User,
  MessageSquare,
  File as FileIcon,
  CalendarIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format, parse } from 'date-fns';
import { cn } from '@/lib/utils';
import React from 'react';

const initialTasks = [
  {
    id: '1',
    number: '1',
    name: 'Depto legal Be IT (Pandotek)',
    area: null,
    assignee: null,
    priority: null,
    status: null,
    startDate: '28/4/2025',
    endDate: '31/7/2025',
    progress: 69,
    isParent: true,
    isComplete: true,
    subtasks: [
      {
        id: '1.1',
        number: '1.1',
        name: 'Realizar assesment inicial (Alberto) Pantotek',
        area: null,
        assignee: null,
        priority: null,
        status: null,
        startDate: null,
        endDate: null,
        progress: 0,
        isParent: false,
        isComplete: false,
      },
      {
        id: '1.2',
        number: '1.2',
        name: 'Revisión de contrato de prestación de servicios',
        area: null,
        assignee: null,
        priority: 'A',
        status: 'En curso',
        startDate: '28/4/2025',
        endDate: '28/4/2025',
        progress: 100,
        isParent: true,
        isComplete: true,
      },
      {
        id: '1.3',
        number: '1.3',
        name: 'Revisión de anexos a contrato de servicios',
        area: '1. Estratégico',
        assignee: null,
        priority: 'B',
        status: 'Pausado',
        startDate: null,
        endDate: null,
        progress: 0,
        isParent: true,
        isComplete: true,
        subtasks: [
           {
            id: '1.3.1',
            number: '1.3.1',
            name: 'Formato general de anexos',
            area: null,
            assignee: { name: 'Elias B', initials: 'EB' },
            priority: 'B',
            status: 'Pausado',
            startDate: null,
            endDate: null,
            progress: 0,
            isParent: false,
            isComplete: false,
          }
        ]
      },
      {
        id: '1.4',
        number: '1.4',
        name: 'Elaboración de propuesta',
        area: '2. Legal Estratégico',
        assignee: null,
        priority: null,
        status: 'En curso',
        startDate: '7/5/2025',
        endDate: '7/5/2025',
        progress: 100,
        isParent: true,
        isComplete: true,
      },
      {
        id: '1.5',
        number: '1.5',
        name: 'Atención de tema de despidos y formalización de contratos l...',
        area: '3. Legal General',
        assignee: null,
        priority: null,
        status: 'Retrasado',
        startDate: '13/6/2025',
        endDate: '13/6/2025',
        progress: 100,
        isParent: true,
        isComplete: true,
      },
      {
        id: '1.6',
        number: '1.6',
        name: 'Reconstrucción de Secretarías Corporativas',
        area: '4. RH',
        assignee: null,
        priority: null,
        status: null,
        startDate: '28/4/2025',
        endDate: '28/7/2025',
        progress: 99,
        isParent: true,
        isComplete: true,
        subtasks: [
          {
            id: '1.6.1',
            number: '1.6.1',
            name: 'Gestión de proyecto',
            area: '5. Administración',
            assignee: { name: 'Elias B', initials: 'EB' },
            priority: null,
            status: 'Terminado',
            startDate: '24/6/2025',
            endDate: '24/6/2025',
            progress: 100,
            isComplete: true,
          },
        ],
      },
    ],
  },
];


const getStatusBadge = (status: string | null) => {
    if (!status) return null;
    switch (status.toLowerCase()) {
        case 'en curso':
            return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{status}</Badge>;
        case 'pausado':
            return <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">{status}</Badge>;
        case 'retrasado':
            return <Badge variant="destructive">{status}</Badge>;
        case 'terminado':
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>;
        default:
            return <Badge variant="secondary">{status}</Badge>;
    }
}

const areaOptions = [
    { name: '1. Estratégico', color: 'bg-blue-800' },
    { name: '2. Legal Estratégico', color: 'bg-orange-600' },
    { name: '3. Legal General', color: 'bg-blue-500' },
    { name: '4. RH', color: 'bg-gray-700' },
    { name: '5. Administración', color: 'bg-green-200' },
    { name: '6. Compras', color: 'bg-red-300' },
    { name: '7. Ventas', color: 'bg-green-700' },
    { name: '8. Marketing', color: 'bg-gray-300' },
];

const AreaBadge = ({ area }: { area: string | null }) => {
    if (!area) return null;
    const currentOption = areaOptions.find(opt => opt.name === area);
    const colorClass = currentOption ? currentOption.color : 'bg-gray-200';
    const textColorClass = ['bg-green-200', 'bg-red-300', 'bg-gray-300'].includes(colorClass) ? 'text-gray-900' : 'text-white';
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Badge className={cn('rounded-md cursor-pointer', colorClass, textColorClass)}>
                    {area} <ChevronDown className="h-3 w-3 ml-1" />
                </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {areaOptions.map(option => (
                    <DropdownMenuItem key={option.name}>
                        <div className={cn('w-3 h-3 rounded-full mr-2', option.color)} />
                        <span>{option.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const priorityOptions = ['A', 'B', 'C', 'D', 'E'];

const PriorityBadge = ({ priority }: { priority: string | null }) => {
    if (!priority) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full justify-start p-1 h-auto font-normal">
                    {priority}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {priorityOptions.map(option => (
                    <DropdownMenuItem key={option}>
                        <span>{option}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const ProgressCell = ({ progress, onProgressChange }: { progress: number | null, onProgressChange: (newProgress: number) => void }) => {
    if (progress === null) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value)) value = 0;
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        onProgressChange(value);
    };

    return (
        <div className="flex items-center gap-2">
            <Progress value={progress} className="w-24 h-2" />
            <div className="flex items-center gap-1">
                <Input
                    type="number"
                    value={progress}
                    onChange={handleChange}
                    className="w-14 h-6 text-xs p-1 text-right"
                    min="0"
                    max="100"
                />
                <span className="text-xs">%</span>
            </div>
        </div>
    );
};

const DateCell = ({ dateStr, isEndDate, onDateChange }: { dateStr: string | null; isEndDate?: boolean; onDateChange: (newDate: Date | undefined) => void }) => {
    if (!dateStr) return null;
    const [open, setOpen] = React.useState(false);
    const date = parse(dateStr, 'd/M/yyyy', new Date());

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[120px] justify-start text-left font-normal h-auto p-1",
                        !date && "text-muted-foreground",
                        isEndDate && new Date() > date ? "bg-destructive/20 border-destructive text-destructive-foreground hover:bg-destructive/30" : ""
                    )}
                >
                    {dateStr}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                        onDateChange(newDate);
                        setOpen(false);
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};


const TaskRow = ({ task, level = 0, onProgressChange, onDateChange }: { task: any, level?: number, onProgressChange: (taskId: string, newProgress: number) => void, onDateChange: (taskId: string, field: 'startDate' | 'endDate', newDate: Date) => void }) => (
  <Collapsible asChild defaultOpen={level < 2}>
    <React.Fragment key={task.id}>
      <TableRow>
        <TableCell style={{ paddingLeft: `${level * 16}px` }}>
          <div className="flex items-center gap-2">
            <Checkbox checked={task.isComplete} />
            <span>{task.number}</span>
            {task.subtasks && task.subtasks.length > 0 ? (
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ChevronRight className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-90" />
                    </Button>
                </CollapsibleTrigger>
            ) : <div className="w-6 h-6"/> }
            <span className={cn(level > 0 && 'font-normal')}>{task.name}</span>
          </div>
        </TableCell>
        <TableCell><AreaBadge area={task.area} /></TableCell>
        <TableCell>
            {task.assignee && (
                <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs bg-red-200 text-red-800">{task.assignee.initials}</AvatarFallback>
                </Avatar>
            )}
        </TableCell>
        <TableCell><PriorityBadge priority={task.priority} /></TableCell>
        <TableCell>{getStatusBadge(task.status)}</TableCell>
        <TableCell>
            <DateCell dateStr={task.startDate} onDateChange={(newDate) => newDate && onDateChange(task.id, 'startDate', newDate)} />
        </TableCell>
        <TableCell>
            <DateCell dateStr={task.endDate} isEndDate onDateChange={(newDate) => newDate && onDateChange(task.id, 'endDate', newDate)} />
        </TableCell>
        <TableCell>
            <ProgressCell progress={task.progress} onProgressChange={(newProgress) => onProgressChange(task.id, newProgress)} />
        </TableCell>
      </TableRow>
      {task.subtasks && task.subtasks.length > 0 && (
        <CollapsibleContent asChild>
            <>
            {task.subtasks.map((subtask: any) => (
                <TaskRow key={subtask.id} task={subtask} level={level + 1} onProgressChange={onProgressChange} onDateChange={onDateChange} />
            ))}
            </>
        </CollapsibleContent>
      )}
    </React.Fragment>
  </Collapsible>
);

export default function GeneralPlaybookPage() {
  const [tasks, setTasks] = React.useState(initialTasks);

  const updateTask = (tasks: any[], taskId: string, field: string, value: any): any[] => {
      return tasks.map(task => {
          if (task.id === taskId) {
              return { ...task, [field]: value };
          }
          if (task.subtasks) {
              return { ...task, subtasks: updateTask(task.subtasks, taskId, field, value) };
          }
          return task;
      });
  };

  const handleProgressChange = (taskId: string, newProgress: number) => {
    setTasks(prevTasks => updateTask(prevTasks, taskId, 'progress', newProgress));
  };

  const handleDateChange = (taskId: string, field: 'startDate' | 'endDate', newDate: Date) => {
      setTasks(prevTasks => updateTask(prevTasks, taskId, field, format(newDate, 'd/M/yyyy')));
  };


  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Depto Legal BeIT (Pandotek)</h1>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost"><LayoutGrid className="mr-2 h-4 w-4" />Cuadrícula</Button>
            <Button variant="ghost" className="text-primary"><List className="mr-2 h-4 w-4"/>Panel</Button>
            <Button variant="ghost"><CalendarDays className="mr-2 h-4 w-4" />Escala de tiempo</Button>
            <Button variant="ghost"><BarChart2 className="mr-2 h-4 w-4" />Reports</Button>
            <Button variant="ghost"><Columns className="mr-2 h-4 w-4" />Gráficos</Button>
            <Button variant="ghost"><Users className="mr-2 h-4 w-4" />Personas</Button>
            <Button variant="ghost"><Presentation className="mr-2 h-4 w-4" />Objetivos</Button>
            <Button variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
            <Button variant="ghost"><User className="mr-2 h-4 w-4" />Copilot</Button>
            <Button><MessageSquare className="mr-2 h-4 w-4" />Compartir</Button>
        </div>
      </header>
      <div className="flex items-center justify-between">
        <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Filtrar por palabra clave" className="pl-10" />
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost"><FileIcon className="mr-2 h-4 w-4" />Línea base</Button>
            <Button variant="ghost"><Filter className="mr-2 h-4 w-4" />Filtros</Button>
            <Button variant="ghost"><Settings className="mr-2 h-4 w-4" />Colores condicionales</Button>
        </div>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Nombre de tarea</TableHead>
                <TableHead>Área de Impa...</TableHead>
                <TableHead>Asignad...</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Inicio</TableHead>
                <TableHead>Finalización</TableHead>
                <TableHead>% ...</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TaskRow key={task.id} task={task} onProgressChange={handleProgressChange} onDateChange={handleDateChange} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Button variant="ghost" className="text-muted-foreground"><Plus className="mr-2 h-4 w-4" /> Agregar nueva tarea</Button>
    </div>
  );
}
