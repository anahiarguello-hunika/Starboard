
'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Users,
  Building,
  ChevronDown,
  ArrowUpDown
} from "lucide-react";
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const contactsData = [
  { name: 'Abastecimientos Industriales GH,...', tags: [], email: '', phone: '', address: '—', dob: '—' },
  { name: 'Aceros de Escobedo S.A. de C.V.', tags: ['ExUdem', 'Liceo'], email: 'b@acerosescobedo.com', phone: '+52(818)058-1150', address: 'Ceramica 101, Parque Industrial Esco...', dob: '—' },
  { name: 'ACTINVER', tags: [], email: '', phone: '', address: '—', dob: '—' },
  { name: 'Adhere, SAPI de CV', tags: ['Client'], email: '', phone: '', address: '—', dob: '—' },
  { name: 'Aisen Construcciones, SA de CV', tags: [], email: 'eduardofigueroa@grupoaisen.com', phone: '81 8653 9083', address: '—', dob: '—' },
  { name: 'Aisen Construcciones, SA de CV', tags: ['Client'], email: 'eduardofigueroa@grupoaisen.com', phone: '+52(818)653-9083', address: '—', dob: '—' },
  { name: 'Alfatau S.A de C.V.', tags: [], email: '', phone: '', address: '—', dob: '—' },
  { name: 'Alvatrix Global Services, SA de C...', tags: ['Client', 'Ipade', 'Liceo'], email: 'jorge.delagarza@alvatrix.com', phone: '', address: '—', dob: '—' },
  { name: 'AMI International S.A.P.I. de C.V....', tags: [], email: '', phone: '', address: '—', dob: '—' },
  { name: 'Ankar Solutions, S.A. de C.V.', tags: [], email: '', phone: '', address: '—', dob: '—' },
  { name: 'Antonio Perales Parts', tags: [], email: '', phone: '', address: '—', dob: '—' },
  { name: 'Asesores Unidos del Norte, SA de...', tags: ['Old transaction'], email: 'jorge.lozano@apasesores.mx', phone: '+52 81 1977 5455', address: '—', dob: '—' },
  { name: 'AUNA', tags: ['Old transaction', 'Rotario'], email: 'jorge.pena@auna.org', phone: '+52(818)259-4708', address: '—', dob: '—' },
];

const tagColors: Record<string, string> = {
    'ExUdem': 'bg-blue-100 text-blue-800',
    'Liceo': 'bg-green-100 text-green-800',
    'Client': 'bg-purple-100 text-purple-800',
    'Ipade': 'bg-yellow-100 text-yellow-800',
    'Old transaction': 'bg-gray-200 text-gray-800',
    'Rotario': 'bg-indigo-100 text-indigo-800',
};

export default function ContactsPage() {
  const [activeTab, setActiveTab] = React.useState('all');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Contactos</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Administrar etiquetas</Button>
          <Button variant="outline">Nueva persona</Button>
          <Button>Nueva empresa</Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 bg-muted p-1 rounded-md">
            <Button variant={activeTab === 'all' ? 'ghost' : 'ghost'} size="sm" className={activeTab === 'all' ? 'bg-background shadow' : ''} onClick={() => setActiveTab('all')}>Todos</Button>
            <Button variant={activeTab === 'people' ? 'ghost' : 'ghost'} size="sm" className={activeTab === 'people' ? 'bg-background shadow' : ''} onClick={() => setActiveTab('people')}><Users className="h-4 w-4 mr-2" /> Personas</Button>
            <Button variant={activeTab === 'companies' ? 'ghost' : 'ghost'} size="sm" className={activeTab === 'companies' ? 'bg-background shadow' : ''} onClick={() => setActiveTab('companies')}><Building className="h-4 w-4 mr-2" /> Empresas</Button>
        </div>
        <div className="flex items-center gap-2">
            <Input placeholder="Filtrar por palabra clave" className="w-64" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Columnas <ChevronDown className="h-4 w-4 ml-2" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/* Column options */}
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Filtros <ChevronDown className="h-4 w-4 ml-2" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                     {/* Filter options */}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"><Checkbox /></TableHead>
                <TableHead className="w-24">Acciones</TableHead>
                <TableHead>
                    <Button variant="ghost" size="sm" className="px-2 py-1">
                        Nombre <ArrowUpDown className="h-3 w-3 ml-1" />
                    </Button>
                </TableHead>
                <TableHead>Etiquetas</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Teléfono</TableHead>
                <TableHead>Dirección</TableHead>
                <TableHead>Fecha de Nacimiento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contactsData.map((contact, index) => (
                <TableRow key={index}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-8">Editar <ChevronDown className="h-4 w-4 ml-1" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Modificar</DropdownMenuItem>
                                <DropdownMenuItem>Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                    <TableCell>
                        <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{contact.name}</span>
                        </Link>
                    </TableCell>
                    <TableCell>
                        <div className="flex flex-wrap gap-1">
                            {contact.tags.map(tag => (
                                <Badge key={tag} className={`${tagColors[tag] || 'bg-gray-100 text-gray-800'} font-normal rounded-sm`}>
                                   {tag === 'Client' || tag === 'Old transaction' || tag === 'Rotario' || tag === 'Ipade' || tag === 'ExUdem' || tag === 'Liceo' ? "" : <div className="h-1.5 w-1.5 rounded-full bg-current mr-1"></div>}
                                   {tag}
                                </Badge>
                            ))}
                        </div>
                    </TableCell>
                    <TableCell>
                        {contact.email && <Link href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</Link>}
                    </TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>{contact.address}</TableCell>
                    <TableCell>{contact.dob}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <p>1-13 de 242</p>
        <div className="flex items-center gap-2">
            <Select defaultValue="50">
                <SelectTrigger className="w-20 h-8">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                </SelectContent>
            </Select>
            <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Button>
            </div>
             <div className="flex items-center gap-2">
                <Checkbox id="expand-rows" />
                <label htmlFor="expand-rows">Expandir filas</label>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="outline">Exportar</Button>
        </div>
      </div>
    </div>
  );
}
