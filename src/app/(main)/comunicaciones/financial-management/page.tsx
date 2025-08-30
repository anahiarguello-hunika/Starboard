
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
                    <TabsTrigger value="overview" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Overview</TabsTrigger>
                    <TabsTrigger value="team" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Team</TabsTrigger>
                    <TabsTrigger value="phases" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Phases</TabsTrigger>
                    <TabsTrigger value="tags" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Tags</TabsTrigger>
                    <TabsTrigger value="tasks" className="text-primary-foreground/80 data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground rounded-t-md px-4 pb-2 pt-1 border-b-2 border-transparent data-[state=active]:border-primary-foreground">Tasks</TabsTrigger>
                </TabsList>
            </Tabs>
        </header>

      <div className="flex justify-end">
        <Button variant="outline">All time</Button>
      </div>

      <div className="flex gap-4">
            <KpiCard title="Budget" value="14h out of 13h">
                <Progress value={100} className="h-2 bg-red-200 [&>div]:bg-red-500" />
                <p className="text-sm font-semibold text-red-600 mt-1">110%</p>
            </KpiCard>
            <KpiCard title="Total time" value="14:15">
                <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between"><span>Billable time</span><span>14:15</span></div>
                    <div className="flex justify-between"><span>Not billable time</span><span>0:00</span></div>
                </div>
            </KpiCard>
             <KpiCard title="Internal costs" value="US$1,075.67">
                <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between"><span>Labour costs</span><span>US$1,075.67</span></div>
                    <div className="flex justify-between"><span>Expenses</span><span>US$0.00</span></div>
                </div>
            </KpiCard>
             <KpiCard title="Billed money" value="US$0.00">
                <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between"><span>Billed labor</span><span>US$0.00</span></div>
                    <div className="flex justify-between"><span>Billed expenses</span><span>US$0.00</span></div>
                </div>
            </KpiCard>
             <KpiCard title="Unbilled money" value="US$3,181.66">
                <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between"><span>Unbilled labor</span><span>US$3,181.66</span></div>
                    <div className="flex justify-between"><span>Unbilled expenses</span><span>US$0.00</span></div>
                </div>
            </KpiCard>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Overview</CardTitle>
            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Metric:</span>
                <Select defaultValue="time">
                    <SelectTrigger className="w-[120px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="time">Time</SelectItem>
                        <SelectItem value="cost">Cost</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
                <h3 className="font-semibold mb-4">Member <ChevronDown className="inline h-4 w-4" /></h3>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={memberData} dataKey="value" nameKey="name" innerRadius="70%" outerRadius="100%">
                                {memberData.map(entry => <Cell key={entry.name} fill={entry.fill} />)}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2 text-left">
                     {memberTime.map((item, index) => (
                        <LegendItem key={item.name} color={memberData[index].fill} name={item.name} time={item.time} percentage={item.percentage} />
                     ))}
                </div>
            </div>
            <div className="text-center">
                <h3 className="font-semibold mb-4">Phase <ChevronDown className="inline h-4 w-4" /></h3>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={phaseData} dataKey="value" nameKey="name" innerRadius="70%" outerRadius="100%">
                                {phaseData.map(entry => <Cell key={entry.name} fill={entry.fill} />)}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                 <div className="mt-4 space-y-2 text-left">
                     {phaseTime.map((item, index) => (
                        <LegendItem key={item.name} color={phaseData[index].fill} name={item.name} time={item.time} percentage={item.percentage} />
                     ))}
                </div>
            </div>
            <div className="text-center">
                <h3 className="font-semibold mb-4">Tag <ChevronDown className="inline h-4 w-4" /></h3>
                <div className="h-[200px] w-full">
                     <ResponsiveContainer>
                        <PieChart>
                            <Pie data={tagData} dataKey="value" nameKey="name" innerRadius="70%" outerRadius="100%">
                                {tagData.map(entry => <Cell key={entry.name} fill={entry.fill} />)}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                 <div className="mt-4 space-y-2 text-left">
                     {tagTime.map((item, index) => (
                        <LegendItem key={item.name} color={tagData[index].fill} name={item.name} time={item.time} percentage={item.percentage} />
                     ))}
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
