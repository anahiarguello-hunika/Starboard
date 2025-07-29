
'use client';

import {
  MoreHorizontal,
  Plus,
  FileText,
  Clock,
  CheckCircle,
  BarChart,
  ChevronDown,
  Activity,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
import { cn } from '@/lib/utils';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';


const caseNav = [
  { name: 'Due diligence', active: false },
  { name: 'Closing documents', active: true, count: 2 },
  { name: 'Closing checklist', active: false },
  { name: 'Closing', active: false },
  { name: 'Post-closing', active: false },
  { name: 'Internal', active: false },
];

const activities = [
  {
    user: { name: 'Gustavo Fring', avatar: 'https://placehold.co/100x100' },
    action: 'changed the status of',
    task: 'Letter of Intent',
    from: 'In progress',
    to: 'Done',
    time: '2 hours ago',
  },
  {
    user: { name: 'Mike Ehrmantraut', avatar: 'https://placehold.co/100x100' },
    action: 'added a new document to',
    task: 'Closing documents',
    details: 'Closing statement.pdf',
    time: '3 hours ago',
  },
  {
    user: { name: 'Kim Wexler', avatar: 'https://placehold.co/100x100' },
    action: 'sent a message in',
    task: 'Letter of Intent',
    time: '4 hours ago',
  },
];

export default function RealEstatePage() {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Xt</h2>
            <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
        </div>
        <nav className="flex flex-col gap-1 text-sm">
          {caseNav.map((item) => (
            <div
              key={item.name}
              className={cn(
                'flex items-center justify-between px-3 py-2 rounded-lg transition-colors cursor-pointer',
                item.active
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'hover:bg-muted'
              )}
            >
              <span>{item.name}</span>
              {item.count && <Badge variant="secondary" className="h-5">{item.count}</Badge>}
            </div>
          ))}
          <Button variant="ghost" className="justify-start text-muted-foreground"><Plus className="mr-2 h-4 w-4" /> Add phase</Button>
        </nav>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Case Management
          </h1>
          <p className="text-muted-foreground">
            Manage your real estate cases with ease.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-muted-foreground">in 3 categories</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Time entries</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12h 45m</div>
              <p className="text-xs text-muted-foreground">in 4 activities</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Case status</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Active</div>
              <p className="text-xs text-muted-foreground">since 4 weeks</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Activity
                </div>
                <Button variant="outline" size="sm">
                    Reports <BarChart className="ml-2 h-4 w-4" />
                </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {activities.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={activity.user.avatar} data-ai-hint="person avatar" />
                          <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {activity.user.name}{' '}
                            <span className="text-muted-foreground font-normal">
                              {activity.action}
                            </span>{' '}
                            {activity.task}
                          </p>
                           {activity.details ? 
                           <p className="text-sm text-muted-foreground bg-muted p-2 rounded-md mt-1">{activity.details}</p> :
                           activity.from ? 
                           <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                <Badge variant="outline">{activity.from}</Badge>
                                &rarr;
                                <Badge className="bg-green-100 text-green-800">{activity.to}</Badge>
                           </div>
                           : null}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {activity.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

