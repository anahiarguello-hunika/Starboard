
'use client';

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { documentsData, type Document } from "@/lib/mock-data";
import { 
    Folder,
    Briefcase,
    Building,
    DollarSign,
    Users,
    BrainCircuit,
    Package,
    FileText,
    ShieldCheck,
    Landmark,
    Server,
    Scale,
    FileCheck,
    FileType,
    Book,
    MoreHorizontal
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";


const documentsNav = [
    { name: 'Proyectos (Matters)', icon: Briefcase, href: "#"},
    { name: 'Información Corporativa', icon: Building, href: "#"},
    { name: 'Información Financiera', icon: DollarSign, href: "#"},
    { name: 'Laboral', icon: Users, href: "#" },
    { name: 'Propiedad intelectual', icon: BrainCircuit, href: "#"},
    { name: 'Activos', icon: Package, href: "#" },
    { name: 'Contratos', icon: FileText, href: "#" },
    { name: 'Cumplimiento Legal y Regulatorio', icon: ShieldCheck, href: "#"},
    { name: 'Seguros', icon: Landmark, href: "#" },
    { name: 'Sistemas y TI', icon: Server, href: "#" },
    { name: 'Litigios', icon: Scale, href: "#" },
    { name: 'Concesiones', icon: FileCheck, href: "#" },
    { name: 'Formatos', icon: FileType, href: "#" },
    { name: 'Miscelaneos', icon: Book, href: "#" },
    { name: 'Metodologías', icon: FileText, href: "#" },
    { name: 'Otros', icon: MoreHorizontal, href: "#" },
];


export default function DocumentsPage() {
    const getStatusVariant = (status: Document['status']) => {
        switch (status) {
            case 'Aprobado':
                return 'default'
            case 'En Revisión':
                return 'secondary'
            case 'Borrador':
                return 'outline'
        }
    }

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                 {documentsNav.map((item, index) => (
                    <Link key={item.name} href={item.href || "#"} className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                        'hover:bg-muted'
                    )}>
                        <span className="text-xs w-6 text-right">{String(index+1).padStart(2, '0')}</span>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                Gestión de Documentos
                </h1>
                <p className="text-muted-foreground">
                Suba, versione y controle sus documentos legales.
                </p>
            </div>
            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Folder /> Biblioteca de Documentos
                </CardTitle>
                <CardDescription>
                    Todos los documentos almacenados en el sistema.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Nombre del Documento</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Versión</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Última Actualización</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {documentsData.map((doc) => (
                        <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.name}</TableCell>
                        <TableCell>
                            <Badge variant="outline">{doc.type}</Badge>
                        </TableCell>
                        <TableCell>v{doc.version}.0</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(doc.status)}
                                className={doc.status === 'Aprobado' ? 'bg-accent text-accent-foreground' : ''}>
                            {doc.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{doc.lastUpdated}</TableCell>
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
