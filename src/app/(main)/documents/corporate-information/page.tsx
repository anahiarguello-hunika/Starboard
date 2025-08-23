
'use client';

import { Folder, ChevronRight, FileUp, Link as LinkIcon, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const corporateFolders = [
    { name: '01 Escritura Constitutiva' },
    { name: '02 Libro de Registro de Acciones' },
    { name: '03 Libro de Variaciones del Capital' },
    { name: '04 Libro de Actas de Asamblea' },
    { name: '05 Libro de Actas de Sesiones del Consejo' },
    { name: '06 Títulos accionarios' },
    { name: '07 Contratos de compraventa de acciones' },
    { name: '08 Convenios entre accionistas' },
];


export default function CorporateInformationPage() {
    return (
        <div className="space-y-8">
            <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>Documentos</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-foreground">Información Corporativa</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                    01 Secretaría Corporativa
                </h1>
            </div>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Carpetas</CardTitle>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm"><FileUp className="mr-2 h-4 w-4" /> Cargar</Button>
                            <Button variant="outline" size="sm"><LinkIcon className="mr-2 h-4 w-4" /> Compartir</Button>
                            <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Descargar</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {corporateFolders.map((folder) => (
                        <div key={folder.name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                            <Folder className="h-16 w-16 text-primary" />
                            <span className="text-sm text-center font-medium">{folder.name}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
