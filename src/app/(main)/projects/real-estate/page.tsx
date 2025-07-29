
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from '@/components/ui/table';
import { ChevronDown, ChevronLeft, ChevronRight, MoreVertical, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const workflowSteps = [
  { name: '01 - Sale Information', duration: '42 D', active: true },
  { name: '02 - Official Copies' },
  { name: '03 - Mortgage' },
  { name: '04 - Pre-Contract Enquires' },
  { name: '05 - Draft Contract' },
  { name: '06 - Exchange' },
];

const caseManagementTasks = [
    { phase: '01 - Sale Information', task: 'Request Leasehold Management Information' },
    { phase: '01 - Sale Information', task: 'Request particulars of sale' },
    { separator: true },
    { phase: '02 - Official Copies', task: 'Request title deeds' },
    { phase: '02 - Official Copies', task: 'Property is unregistered' },
    { separator: true },
    { phase: '02 - Official Copies', task: 'Order additional official copies' },
    { separator: true },
    { phase: '03 - Mortgage', task: 'Add lender and request initial redemption figure' },
    { separator: true },
    { phase: '04 - Pre-Contract Enquiries', task: 'Send pre-contract enquiries to client' },
    { separator: true },
    { phase: '04 - Pre-Contract Enquiries', task: 'Record indemnity policy' },
    { separator: true },
    { phase: '05 - Draft Contract', task: 'Draft completion statement' },
    { separator: true },
    { phase: '07 - Pre-Completion', task: "Estate agent's account received" },
    { separator: true },
    { phase: '08 - Completion', task: 'Record retention' },
    { separator: true },
    { phase: '08 - Completion', task: 'Return draft transfer with amendments' },
    { separator: true },
    { phase: '08 - Completion', task: 'Prepare invoice' },
    { separator: true },
    { phase: '09 - Post-Completion', task: 'Release retention' },
    { separator: true },
    { phase: 'Shortcuts', task: 'Letter to client' }
];

const activities = [
    { type: 'Process Task', subject: 'Perform land charges search', owner: 'Glen Fredericks', priority: 'Normal' },
    { type: 'Email', subject: 'Email to Client (Draft)', owner: 'Glen Fredericks', priority: 'Normal' },
]

const Step = ({ name, duration, active, first, last }: { name: string, duration?: string, active?: boolean, first?: boolean, last?: boolean }) => (
    <div className="flex items-center gap-2">
        {!first && <div className="w-12 h-px bg-gray-300" />}
        <div className="flex items-center gap-2">
            <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", active ? "border-red-500 bg-red-500" : "border-gray-300 bg-white")}>
              {active && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
            </div>
            <div className="text-xs text-muted-foreground">
                <span className={cn(active && "font-semibold text-foreground")}>{name}</span>
                {duration && <span className="text-gray-400 ml-1">({duration})</span>}
            </div>
        </div>
    </div>
);


export default function RealEstatePage() {
  return (
    <div className="bg-gray-50 p-4 space-y-4">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-lg font-semibold">Property Info (00005/0024) - <span className="text-muted-foreground font-normal">Saved</span></h1>
          <p className="text-sm text-muted-foreground flex items-center">Conveyancing <ChevronDown className="h-4 w-4 ml-1" /> Main Information <ChevronDown className="h-4 w-4 ml-1" /></p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold flex items-center gap-1">00005/0024 - Sale of 1 New Street <ChevronDown className="h-4 w-4" /></p>
          <p className="text-xs text-muted-foreground">Matter</p>
        </div>
      </header>

      <div className="flex items-center justify-between p-2 rounded-md border bg-white">
        <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Peppermint RES - Conve...
            <span className="ml-2 pl-2 border-l border-red-500 text-xs font-normal">Active for 42 days</span>
        </Button>
        <div className="flex items-center">
            <span className="text-xs font-semibold mr-4">Begin Flow</span>
            {workflowSteps.map((step, index) => (
                <Step key={step.name} {...step} first={index === 0} last={index === workflowSteps.length -1} />
            ))}
            <Button variant="ghost" size="icon" className="ml-2">
                <ChevronRight className="h-5 w-5" />
            </Button>
        </div>
      </div>
      
      <Tabs defaultValue="case-management">
        <TabsList>
          <TabsTrigger value="case-management">Case Management</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="title-check">Title Check</TabsTrigger>
          <TabsTrigger value="costs-disbursements">Costs and Disbursements</TabsTrigger>
          <TabsTrigger value="related">Related</TabsTrigger>
        </TabsList>
        <TabsContent value="case-management">
          <div className="grid grid-cols-[300px_1fr] gap-4">
            <Card className="shadow-none">
              <CardContent className="p-2 space-y-1">
                {caseManagementTasks.map((item, index) => (
                    item.separator ? <div key={index} className="flex items-center justify-center h-6"><div className="w-px h-full bg-gray-200" /></div> 
                    : <div key={index} className="grid grid-cols-[110px_1fr] items-center">
                        <span className="text-xs text-muted-foreground pr-2 text-right">{item.phase}</span>
                        <Button variant="default" className="w-full justify-start text-xs h-8 bg-blue-600 hover:bg-blue-700">{item.task}</Button>
                    </div>
                ))}
              </CardContent>
            </Card>
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-blue-800 text-white p-4 text-center">
                        <p className="text-4xl font-bold">2</p>
                        <p className="text-xs">Incomplete Activities</p>
                    </Card>
                    <Card className="bg-blue-800 text-white p-4 text-center">
                         <p className="text-4xl font-bold">1</p>
                        <p className="text-xs">Active Key Dates</p>
                    </Card>
                    <Card className="bg-fuchsia-800 text-white p-4 text-center">
                         <p className="text-4xl font-bold">23</p>
                        <p className="text-xs">Completed Activities</p>
                    </Card>
                </div>
                <Card>
                    <CardContent className="p-2">
                         <div className="flex justify-end items-center mb-2">
                            <Button variant="ghost" size="sm"><Plus className="mr-2 h-4 w-4" />New Activity</Button>
                            <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-8"></TableHead>
                                    <TableHead>Activity Type <ChevronDown className="inline h-3 w-3" /></TableHead>
                                    <TableHead>Subject <ChevronDown className="inline h-3 w-3" /></TableHead>
                                    <TableHead>Owner <ChevronDown className="inline h-3 w-3" /></TableHead>
                                    <TableHead>Due Date <ChevronDown className="inline h-3 w-3" /></TableHead>
                                    <TableHead>Priority</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {activities.map((activity, index) => (
                                    <TableRow key={index}>
                                        <TableCell><div className="w-4 h-4 rounded-full border"></div></TableCell>
                                        <TableCell>{activity.type}</TableCell>
                                        <TableCell className="text-blue-600">{activity.subject}</TableCell>
                                        <TableCell className="text-blue-600">{activity.owner}</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>{activity.priority}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                         <div className="flex justify-end items-center text-xs text-muted-foreground p-2">
                           1-2 of 2
                           <div className="flex items-center ml-4">
                               <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronLeft className="h-4 w-4" /></Button>
                               <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronLeft className="h-4 w-4" /></Button>
                               <span className="px-2">Page 1</span>
                               <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronRight className="h-4 w-4" /></Button>
                               <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronRight className="h-4 w-4" /></Button>
                           </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const Tabs = ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>;
const TabsList = ({ children, ...props }: React.ComponentProps<'div'>) => <div className="flex border-b" {...props}>{children}</div>;
const TabsTrigger = ({ children, value, ...props }: React.ComponentProps<'button'> & { value: string }) => {
    const { defaultValue } = React.useContext(TabsContext);
    const isActive = defaultValue === value;
    return (
        <button {...props} className={cn("px-4 py-2 text-sm", isActive ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-muted-foreground")}>
            {children}
        </button>
    );
};
const TabsContent = ({ children, value, ...props }: React.ComponentProps<'div'> & { value: string }) => {
     const { defaultValue } = React.useContext(TabsContext);
     return defaultValue === value ? <div className="mt-4" {...props}>{children}</div> : null;
};
const TabsContext = React.createContext({ defaultValue: '' });

Tabs.defaultProps = {
    defaultValue: 'case-management'
};
Object.assign(Tabs, {
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
});
