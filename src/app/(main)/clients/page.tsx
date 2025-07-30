
'use client';

import {
  Star,
  User,
  MapPin,
  ChevronDown,
  Briefcase,
  Layers,
  FileText,
  DollarSign,
  Users,
  Eye,
  Plus,
  ArrowRight,
  Filter,
  Columns2,
  Ticket,
  Bot,
  MessageSquare,
  Calendar,
  Clock,
  Pencil,
  MoreHorizontal,
  Folder,
  Globe,
  Lock,
  Crown,
  CreditCard,
  ListTodo,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { clientData, type ClientWorkItem } from '@/lib/client-data';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const getStatusBadge = (status: ClientWorkItem['status']) => {
  switch (status) {
    case 'Open':
      return <Badge variant="outline" className="text-green-600 border-green-600"><span className="h-2 w-2 rounded-full bg-green-600 mr-2"></span>{status}</Badge>;
    case 'Quote Requested':
      return <Badge variant="outline" className="text-blue-600 border-blue-600"><span className="h-2 w-2 rounded-full bg-blue-600 mr-2"></span>{status}</Badge>;
    case 'Closing':
      return <Badge variant="outline" className="text-purple-600 border-purple-600"><span className="h-2 w-2 rounded-full bg-purple-600 mr-2"></span>{status}</Badge>;
    case 'Active':
      return <Badge variant="outline" className="text-green-600 border-green-600"><span className="h-2 w-2 rounded-full bg-green-600 mr-2"></span>{status}</Badge>;
    case 'Planned':
      return <Badge variant="outline" className="text-amber-600 border-amber-600"><span className="h-2 w-2 rounded-full bg-amber-600 mr-2"></span>{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const UserAvatar = ({ name }: { name: string }) => (
    <Avatar className="h-6 w-6">
        <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint="person avatar" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
);

const clientNav = [
  { name: 'Información General', icon: User, href: "#", active: true },
  { name: 'Oportunidades', icon: DollarSign, href: "#" },
  { name: 'Proyectos', icon: Briefcase, href: "#" },
  { name: 'Tareas', icon: ListTodo, href: "#" },
  { name: 'Contactos', icon: Users, href: "#" },
  { name: 'Suscripción', icon: Crown, href: "#" },
  { name: 'Solicitudes', icon: Ticket, href: "#" },
  { name: 'Pagos', icon: CreditCard, href: "#" },
];


export default function ClientDetailPage() {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                {clientNav.map((item) => (
                <Link key={item.name} href={item.href || "#"} className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                    item.active ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                )}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                </Link>
            ))}
            </nav>
        </div>
        <div className="flex flex-col gap-6">
        <header>
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <div className="bg-muted p-3 rounded-lg"><Briefcase className="h-8 w-8 text-muted-foreground" /></div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold font-headline">Dynamic Aerotech</h1>
                            <Star className="h-5 w-5 text-amber-400 fill-current" />
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-2"><Badge variant="outline" className="bg-green-100 text-green-700">VIP</Badge></div>
                            <div className="flex items-center gap-2"><User className="h-4 w-4" /> Manager: <strong>Charlotte Giner</strong></div>
                            <div className="flex items-center gap-2"><User className="h-4 w-4" /> Primary Contact: <strong>Tracy McGuire</strong></div>
                            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Location: <strong>Atlanta, GEORGIA, US</strong></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline"><Bot className="h-4 w-4 mr-2" /> Log</Button>
                    <Button variant="outline"><MessageSquare className="h-4 w-4 mr-2" /> Message</Button>
                    <Button variant="outline"><Calendar className="h-4 w-4 mr-2" /> Event</Button>
                    <Button variant="outline"><Clock className="h-4 w-4 mr-2" /> </Button>
                    <Button variant="outline"><Pencil className="h-4 w-4 mr-2" /> </Button>
                    <Button variant="outline">Classic <ChevronDown className="h-4 w-4 ml-2" /></Button>
                    <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                </div>
            </div>
        </header>

        <Tabs defaultValue="overview">
            <TabsList>
            <TabsTrigger value="overview"><Eye className="h-4 w-4 mr-2" />Overview</TabsTrigger>
            <TabsTrigger value="stream"><Layers className="h-4 w-4 mr-2" />Stream</TabsTrigger>
            <TabsTrigger value="billing"><DollarSign className="h-4 w-4 mr-2" />Billing</TabsTrigger>
            <TabsTrigger value="contacts"><Users className="h-4 w-4 mr-2" />Contacts</TabsTrigger>
            <TabsTrigger value="details"><FileText className="h-4 w-4 mr-2" />Details</TabsTrigger>
            <TabsTrigger value="more">More...</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">
                    <div className="flex flex-col gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Current Work</CardTitle>
                                <div>
                                    <Button variant="ghost" size="sm"><Plus className="h-4 w-4 mr-2" /> Create</Button>
                                    <Button variant="ghost" size="sm"><Columns2 className="h-4 w-4 mr-2" /> Collapse All</Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Collapsible defaultOpen>
                                    <CollapsibleTrigger className="w-full">
                                        <div className="flex items-center gap-2 text-sm font-semibold py-2">
                                            <Filter className="h-4 w-4" />
                                            Requests <Badge variant="secondary" className="ml-1">{clientData.requests.length}</Badge>
                                            <ChevronDown className="h-4 w-4 ml-auto" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Title</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Age</TableHead>
                                                    <TableHead>Contact</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {clientData.requests.map((item) => (
                                                    <TableRow key={item.id}>
                                                        <TableCell className="font-medium">{item.title}</TableCell>
                                                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                                                        <TableCell>{item.age}</TableCell>
                                                        <TableCell><div className="flex items-center gap-2"><UserAvatar name={item.contact!} /> {item.contact}</div></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible defaultOpen>
                                    <CollapsibleTrigger className="w-full">
                                        <div className="flex items-center gap-2 text-sm font-semibold py-2">
                                            <DollarSign className="h-4 w-4" />
                                            Sales <Badge variant="secondary" className="ml-1">{clientData.sales.length}</Badge>
                                            <ChevronDown className="h-4 w-4 ml-auto" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Title</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Value</TableHead>
                                                    <TableHead>Salesperson</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {clientData.sales.map((item) => (
                                                    <TableRow key={item.id}>
                                                        <TableCell className="font-medium">{item.title}</TableCell>
                                                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                                                        <TableCell>{item.value}</TableCell>
                                                        <TableCell><div className="flex items-center gap-2"><UserAvatar name={item.salesperson!} /> {item.salesperson}</div></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible defaultOpen>
                                    <CollapsibleTrigger className="w-full">
                                        <div className="flex items-center gap-2 text-sm font-semibold py-2">
                                            <Briefcase className="h-4 w-4" />
                                            Projects <Badge variant="secondary" className="ml-1">{clientData.projects.length}</Badge>
                                            <ChevronDown className="h-4 w-4 ml-auto" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Title</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Budget</TableHead>
                                                    <TableHead>Manager</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {clientData.projects.map((item) => (
                                                    <TableRow key={item.id}>
                                                        <TableCell className="font-medium">{item.title}</TableCell>
                                                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                                                        <TableCell>
                                                            <div className="flex flex-col gap-1">
                                                                <span>{item.budget?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} / {item.budgetTarget?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                                                                <Progress value={(item.budget!/item.budgetTarget!)*100} />
                                                            </div>
                                                        </TableCell>
                                                        <TableCell><div className="flex items-center gap-2"><UserAvatar name={item.manager!} /> {item.manager}</div></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible>
                                    <CollapsibleTrigger className="w-full">
                                        <div className="flex items-center gap-2 text-sm font-semibold py-2">
                                            <Ticket className="h-4 w-4" />
                                            Tickets <Badge variant="secondary" className="ml-1">2</Badge>
                                            <ChevronDown className="h-4 w-4 ml-auto" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <p className="text-muted-foreground p-4 text-center">No tickets to display.</p>
                                    </CollapsibleContent>
                                </Collapsible>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-muted-foreground">A global commercial airline business. This is a VIP customer of ours.</p>
                                <div className="text-sm space-y-2">
                                    <div><strong>Business Size</strong><br />9.9</div>
                                    <div><strong>Services Sold</strong><br /><Badge variant="secondary">Expert Services</Badge></div>
                                    <div><strong>Client Asset Folder</strong><br /><Link href="#" className="text-primary flex items-center gap-1"><Folder className="h-4 w-4"/> https://googledrive.com</Link></div>
                                    <div><strong>Location</strong><br /><Link href="#" className="text-primary flex items-center gap-1"><Globe className="h-4 w-4" /> USA</Link></div>
                                </div>
                                <Button variant="link" size="sm" className="p-0 text-primary">Show more <ChevronDown className="h-4 w-4 ml-1" /></Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex-row items-center justify-between">
                                <CardTitle>Your Privacy</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><Plus className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>WL</AvatarFallback>
                                    </Avatar>
                                    <div>With <strong>Lancaster Tarson</strong> is <Badge variant="outline"><Lock className="h-3 w-3 mr-1" /> Confidential</Badge></div>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>WM</AvatarFallback>
                                    </Avatar>
                                    <div>With <strong>Miguel Cabrera</strong> is <Badge variant="outline"><Lock className="h-3 w-3 mr-1" /> Confidential</Badge></div>
                                </div>
                                <Button variant="link" size="sm" className="p-0 text-primary">View All Company Privacy</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
        </div>
    </div>
  );
}
