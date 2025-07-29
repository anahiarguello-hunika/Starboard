
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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
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
import React from 'react';


const documentsNav = [
    { name: 'Proyectos (Matters)', icon: Briefcase, href: "#"},
    { 
        name: 'Información Corporativa', 
        icon: Building, 
        href: "#",
        submenu: [
            "Escritura Constitutiva",
            "Libro de Registro de Acciones",
            "Libro de Variaciones del Capital",
            "Libro de Actas de Asamblea",
            "Libro de Actas de Sesiones del Consejo",
            "Títulos accionarios",
            "Contratos de compraventa de acciones",
            "Convenios entre accionistas"
        ]
    },
    { 
        name: 'Información Financiera', 
        icon: DollarSign, 
        href: "#",
        submenu: [
            "Estados Financieros",
            "Reportes de Auditoría",
            "Documentos Fiscales",
            "Préstamos y documentos financieros",
            "Pagarés",
            "Fianzas",
            "Planeación de gastos",
            "Cuentas de administración",
            "Presupuestos y Pronósticos"
        ]
    },
    { 
        name: 'Laboral', 
        icon: Users, 
        href: "#",
        submenu: [
            "Lista de empleados",
            "Contratos con empleados",
            "Políticas y planeación",
            "Litigios laborales"
        ]
    },
    { 
        name: 'Propiedad intelectual', 
        icon: BrainCircuit, 
        href: "#",
        submenu: [
            "Lista de Marcas y Patentes",
            "Listas de Avisos Comerciales",
            "Contratos de Propiedad Intelectual",
            "Registros de Propiedad Intelectual"
        ]
    },
    { 
        name: 'Activos', 
        icon: Package, 
        href: "#",
        submenu: [
            "Inmuebles",
            "Lista de Inmuebles en propiedad",
            "Lista de Inmuebles en renta",
            "Propiedades Arrendadas",
            "Otra documentación de Inmuebles y Activos",
            "Muebles",
            "Equipo y Maquinaria",
            "Otra documentación de Activos"
        ]
    },
    { name: 'Contratos', 
        icon: FileText, 
        href: "#",
        submenu: [
            "Contratos con Clientes",
            "Contratos con Proveedores",
            "Contratos de Fusiones y Adquisiciones",
            "Convenios de Confidencialidad",
            "Contratos de servicio",
            "Contratos de distribución",
            "Contratos de licencia",
            "Términos y condiciones",
            "Aviso de Privacidad",
            "Otros"
        ]
    },
    { 
        name: 'Cumplimiento Legal y Regulatorio', 
        icon: ShieldCheck, 
        href: "#",
        submenu: [
            "Documentos ambientales",
            "Licencias y permisos",
            "Políticas de Cumplimiento",
            "Avisos PLD",
            "Expediente Único",
            "Beneficiario Controlador",
            "Otros"
        ]
    },
    { 
        name: 'Seguros', 
        icon: Landmark, 
        href: "#",
        submenu: [
            "Póliticas de Seguros",
            "Demandas y reclamaciones"
        ]
    },
    { 
        name: 'Sistemas y TI', 
        icon: Server, 
        href: "#",
        submenu: [
            "Descripción General de Infraestructura en Sistemas",
            "Contratos de Licencias de Software",
            "Protección de Datos y Políticas de Privacidad",
            "Otros"
        ]
    },
    { name: 'Litigios', 
        icon: Scale, 
        href: "#",
        submenu: [
            "Civiles",
            "Mercantiles",
            "Penales",
            "Fiscales",
            "Administrativos",
            "Laborales"
        ]
    },
    { name: 'Concesiones', icon: FileCheck, href: "#" },
    { name: 'Formatos', icon: FileType, href: "#" },
    { 
        name: 'Miscelaneos', 
        icon: Book, 
        href: "#",
        submenu: [
            "Propuestas",
            "Presentaciones",
            "Documentos de trabajo",
            "Memoranda",
            "Correos"
        ]
    },
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
    const [activeSubMenu, setActiveSubMenu] = React.useState<string[] | undefined>(undefined);
    const [activeSubMenuItem, setActiveSubMenuItem] = React.useState<string | undefined>(undefined);
    const [activeMainItem, setActiveMainItem] = React.useState<string>("Proyectos (Matters)");

    const handleMainMenuClick = (item: typeof documentsNav[0]) => {
        setActiveMainItem(item.name);
        if (item.submenu) {
            setActiveSubMenu(item.submenu);
            setActiveSubMenuItem(item.submenu[0]);
        } else {
            setActiveSubMenu(undefined);
            setActiveSubMenuItem(undefined);
        }
    };


  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                 {documentsNav.map((item, index) => (
                    <Link key={item.name} href={item.href || "#"} className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                        activeMainItem === item.name ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                    )}
                    onClick={() => handleMainMenuClick(item)}>
                        <span className="text-xs w-6 text-right">{String(index+1).padStart(2, '0')}</span>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight font-headline">
                    Gestión de Documentos
                    </h1>
                    <p className="text-muted-foreground">
                    Suba, versione y controle sus documentos legales.
                    </p>
                </div>
                {activeSubMenu && (
                     <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>{activeSubMenuItem}</MenubarTrigger>
                            <MenubarContent>
                                {activeSubMenu.map((item, index) => (
                                     <React.Fragment key={item}>
                                        <MenubarItem onClick={() => setActiveSubMenuItem(item)}>
                                            {String(index + 1).padStart(2, '0')} {item}
                                        </MenubarItem>
                                        {index < activeSubMenu.length - 1 && <MenubarSeparator />}
                                    </React.Fragment>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                )}
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
