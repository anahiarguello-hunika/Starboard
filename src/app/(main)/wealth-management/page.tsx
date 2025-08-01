
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
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

const documentsNav = [
    { name: 'Proyectos (Matters)', icon: Briefcase },
    { 
        name: 'Información Corporativa', 
        icon: Building, 
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
        submenu: [
            "Póliticas de Seguros",
            "Demandas y reclamaciones"
        ]
    },
    { 
        name: 'Sistemas y TI', 
        icon: Server, 
        submenu: [
            "Descripción General de Infraestructura en Sistemas",
            "Contratos de Licencias de Software",
            "Protección de Datos y Políticas de Privacidad",
            "Otros"
        ]
    },
    { name: 'Litigios', 
        icon: Scale, 
        submenu: [
            "Civiles",
            "Mercantiles",
            "Penales",
            "Fiscales",
            "Administrativos",
            "Laborales"
        ]
    },
    { name: 'Concesiones', icon: FileCheck },
    { name: 'Formatos', icon: FileType },
    { 
        name: 'Miscelaneos', 
        icon: Book, 
        submenu: [
            "Propuestas",
            "Presentaciones",
            "Documentos de trabajo",
            "Memoranda",
            "Correos"
        ]
    },
    { 
        name: 'Metodologías', 
        icon: FileText, 
        submenu: [
            "Cultura",
            "Personas",
            "Procesos",
            "Tecnología",
            "Data"
        ] 
    },
    { name: 'Otros', icon: MoreHorizontal },
];


export default function WealthManagementPage() {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                 {documentsNav.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                        <span className="text-xs w-6 text-right">{String(index+1).padStart(2, '0')}</span>
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight font-headline">
                    Gestión Patrimonial Personal
                    </h1>
                    <p className="text-muted-foreground">
                    Suba, versione y controle sus documentos legales.
                    </p>
                </div>
            </div>
            <Card>
                <CardHeader>
                <CardTitle>Subcategorías</CardTitle>
                <CardDescription>
                    Seleccione una subcategoría para ver documentos.
                </CardDescription>
                </CardHeader>
                <CardContent>
                {/* Aquí se mostraría el contenido de la subcategoría */}
                <p className="text-muted-foreground">Seleccione un elemento del menú de la izquierda.</p>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
