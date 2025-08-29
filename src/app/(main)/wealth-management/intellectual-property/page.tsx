

'use client';

import { Folder, ChevronRight, FileUp, Link as LinkIcon, Download, Search, LayoutGrid, List, MoreVertical, Pencil, Trash2, Flag, Move, Copy, FileImage, Lock, Share2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const intellectualPropertyFolders = [
    { name: '01 Lista de Marcas y Patentes', size: '1.8 MB', modified: '2024-05-20' },
    { name: '02 Listas de Avisos Comerciales', size: '500 KB', modified: '2024-04-15' },
    { name: '03 Contratos de Propiedad Intelectual', size: '8.9 MB', modified: '2024-05-01' },
    { name: '04 Registros de Propiedad Intelectual', size: '3.2 MB', modified: '2024-03-22' },
];


export default function IntellectualPropertyPage() {
    const [view, setView] = React.useState<'grid' | 'list'>('grid');

    const GridView = () => (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {intellectualPropertyFolders.map((folder) => (
                <div key={folder.name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted cursor-pointer text-center">
                    <Folder className="h-16 w-16 text-primary" />
                    <span className="text-sm font-medium">{folder.name}</span>
                </div>
            ))}
        </div>
    );

    const ListView = () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"><Checkbox /></TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Tamaño</TableHead>
                    <TableHead>Fecha de modificación</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {intellectualPropertyFolders.map((folder) => (
                    <TableRow key={folder.name} className="hover:bg-muted/50 cursor-pointer">
                        <TableCell><Checkbox /></TableCell>
                        <TableCell className="flex items-center gap-2">
                           <Folder className="h-5 w-5 text-primary" />
                           <span className="font-medium">{folder.name}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{folder.size}</TableCell>
                        <TableCell className="text-muted-foreground">{folder.modified}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Button variant="ghost" size="icon" className="h-8 w-8"><Lock className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" /> Modificar</DropdownMenuItem>
                                        <DropdownMenuItem><Trash2 className="mr-2 h-4 w-4" /> Eliminar</DropdownMenuItem>
                                        <DropdownMenuItem><Flag className="mr-2 h-4 w-4" /> Seguir</DropdownMenuItem>
                                        <DropdownMenuItem><Move className="mr-2 h-4 w-4" /> Mover</DropdownMenuItem>
                                        <DropdownMenuItem><Copy className="mr-2 h-4 w-4" /> Copiar</DropdownMenuItem>
                                        <DropdownMenuItem><FileImage className="mr-2 h-4 w-4" /> Marca de agua</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <div className="space-y-8">
            <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>Documentos</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-foreground">Propiedad Intelectual</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                    05 Propiedad intelectual
                </h1>
            </div>
             <div className="flex items-center justify-between gap-4">
                <div className="relative flex-grow max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar en esta carpeta" className="pl-10" />
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Nueva carpeta</Button>
                    <Button>Subir archivo</Button>
                     <div className="flex items-center gap-1 rounded-md bg-muted p-1 ml-4">
                        <Button variant={view === 'grid' ? 'ghost' : 'ghost'} size="icon" className={cn("h-8 w-8", view === 'grid' && 'bg-background shadow-sm')} onClick={() => setView('grid')}>
                            <LayoutGrid className="h-4 w-4" />
                        </Button>
                        <Button variant={view === 'list' ? 'ghost' : 'ghost'} size="icon" className={cn("h-8 w-8", view === 'list' && 'bg-background shadow-sm')} onClick={() => setView('list')}>
                            <List className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <Card>
                <CardContent className="p-4">
                   {view === 'grid' ? <GridView /> : <ListView />}
                </CardContent>
            </Card>
        </div>
    );
}
