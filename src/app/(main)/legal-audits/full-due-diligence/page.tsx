
'use client';

import { ChevronRight, FileUp, Folder, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";


const corporateRequirements = [
    "Primer Testimonio del acta constitutiva.",
    "Boleta de inscripción del Acta Constitutiva.",
    "¿Los Estatutos han sufrido alguna modificación?",
    "Libros Corporativos actualizados incluye...",
    "Títulos de acciones representativos del c...",
    "En caso que la Sociedad haya emitido lo...",
    "Resoluciones Unánimes adoptadas fuera...",
    "En caso de contar con Comités Especial...",
    "¿Se han nombrado Apoderados o Repres...",
];

const radioOptions = [
    "Sí, se encuentra actualizado.",
    "Sí, pero no se encuentra actualizado.",
    "Sí",
    "No"
];

const corporateDocumentsRequirements = [
    "Favor de adjuntar Acta Constitutiva incluyendo boleta de inscripción en el Registro Público de Comercio.",
    "Favor de adjuntar Libro de Registro de Accionistas.",
    "Favor de adjuntar Libro de Variaciones del Capital Social.",
    "Favor de adjuntar las Actas de Asambleas de Accionistas y/o las Resoluciones Unánimes adoptadas fuera de asamblea.",
    "Favor de adjuntar Libro de Actas de Sesiones del Consejo de Administración y, en su caso, de los Comités Especiales.",
    "Favor de adjuntar los Títulos Accionarios emitidos.",
];

const corporateGovernanceQuestions = [
    "¿El Consejo de Administración y sus Comités se reúnen al menos 4 veces por año?",
    "¿Existe una agenda u orden del día que se ponga a disposición de los consejeros, previamente a las juntas de consejo ó de los comités?",
    "¿En las juntas se discuten los temas de auditoría, planeación y finanzas?",
    "¿Existe un Director General y/ó funcionarios de alto nivel de la Sociedad nombrados por el Consejo de Administración?",
    "¿El Consejo ó algún Comité en particular evalúan y aprueban periodicamente la gestión del Director General y/ó funcionarios de alto nivel de la Sociedad?",
    "¿Se cuenta con indicadores de desempeño corporativo (financiero y no financiero)?",
    "¿Se realizan evaluaciones periódicas sobre la actividad del Consejo, sus Comités y su Director General?",
    "¿El Consejo de Administración y/o sus Comités cuentan con un calendario anual de actividades?",
    "¿Se cuenta con un Secretario del Consejo de Administración que sea independiente de la Sociedad?",
];

const corporateGovernanceRadioOptions = ["Sí", "No", "No sé"];

const penalComplianceQuestions = [
    "¿Los consejeros y miembros de la Sociedad son conscientes de las responsabilidades y sanciones que se derivan de sus actuaciones dentro de la misma?",
    "¿La sociedad tiene identificados los delitos penales o sanciones aplicables a sus actividades, giro del negocio u objeto social?",
    "¿La Sociedad ha designado un Órgano de Control u Oficial de Cumplimiento que supervise la ejecución de los Protocolos y/o Manuales Internos?",
    "En caso de contar con Manuales y/o Protocolos, ¿éstos fueron aprobados por el Consejo de Administración?",
    "¿La Sociedad ha implementado un canal de denuncias interno entre los miembros o trabajadores de la empresa ante el conocimiento de hechos ilícitos?",
    "¿El Órgano de Control u Oficial de Cumplimiento informa al Consejo de Administración sobre la implementación de los Protocolos y/o Manuales Internos?",
];

const penalComplianceRadioOptions = ["Sí", "No", "No sé"];

const intellectualPropertyQuestions = [
    "¿La Sociedad cuenta con Propiedad Intelectual y/o Industrial?",
    "¿La Sociedad cuenta con Propiedad Intelectual y/o Industrial registrada en el extranjero?",
    "¿La Sociedad ha tenido o tiene procedimientos en contra por violación de derechos de Propiedad Intelectual y/o Industrial?",
];

const intellectualPropertyRadioOptions = ["Sí", "No", "No sé"];

const laborQuestions = [
    "¿La Sociedad emplea directamente a sus empleados?",
    "¿La Sociedad emplea a sus trabajadores por medio de outsourcing?",
    "¿La Sociedad se encuentra al corriente de los pagos de IMSS, Infonavit, etc.?",
    "¿La Sociedad cuenta con trabajadores sindicalizados?",
    "¿La Sociedad tiene litigios pendientes de carácter laboral?",
    "¿La Sociedad realiza el Reparto de Utilidades?",
    "¿Todos los trabajadores han firmado su contrato laboral con la Sociedad?",
    "¿La Sociedad emite recibos para el pago de prima vacacional , nóminas, aguinaldo, etc?",
    "¿La Sociedad archiva los expedientes de los trabajadores, nóminas, contratos, etc. por un periodo de 5 años?",
    "En caso de que la Sociedad haya celebrado Contrato Colectivos de Trabajo ¿realizan revisiones al mismo cada dos años?",
    "¿La Sociedad tiene Constancia de Empleador actualizada ante el Instituto de Migración para emplear extranjeros?",
];

const laborRadioOptions = ["Sí", "No", "No sé"];

const privacyNoticeQuestions = [
    "¿La Sociedad cuenta con Aviso de Privacidad?",
    "En caso de contar con página web, ¿el Aviso de Privacidad se encuentra visible?",
    "¿Actualmente el Aviso de Privacidad ha sido firmado por todos los empleados, clientes y proveedores de la Sociedad?",
];

const privacyNoticeRadioOptions = ["Sí", "No"];


const pldActivities = [
    "La Sociedad no realiza ninguna de las actividades descritas.",
    "Las vinculadas a la práctica de juegos con apuesta, concursos o sorteos",
    "La emisión o comercialización de tarjetas de servicios, de crédito, de tarjetas prepagadas o con valor monetario que no sean emitidas o comercializadas por Entidades Financieras.",
    "La emisión y comercialización habitual o profesional de cheques de viajero distinta a la realizada por las Entidades Financieras.",
    "Ofrecimiento de operaciones de mutuo, de garantía, de otorgamiento de préstamos o créditos, por parte de sujetos distintos a las Entidades Financieras.",
    "Servicios de construcción o desarrollo de bienes inmuebles.",
    "Comercialización o intermediación de Metales Preciosos, Piedras Preciosas, joyas o relojes.",
    "Subasta o comercialización de obras de arte, compra o venta con valor a 2,410 veces el salario mínimo vigente.",
    "Comercialización o distribución de vehículos, aéreos, marítimos o terrestres con valor 3,210 veces el salario mínimo vigente",
    "Servicios de blindaje de vehículos terrestres o de bienes inmuebles, con valor de 2,410 veces el salario mínimo vigente.",
    "Servicios de traslado o custodia de dinero o valores, con excepción del Banco de México y las instituciones dedicadas al depósito de valores",
    "La compraventa de bienes inmuebles o la cesión de derechos sobre estos;",
    "La administración y manejo de recursos, valores o cualquier otro activo de sus clientes",
    "El manejo de cuentas bancarias, de ahorro o de valores;",
    "La organización de aportaciones de capital o recursos para las sociedades mercantiles.",
    "La constitución, escisión, fusión, operación y administración de personas morales o vehículos corporativos",
    "La prestación de servicios de fe pública",
    "La recepción de donativos, por parte de las AC y sociedades sin lucro, con valor de 1,605 veces el salario mínimo vigente.",
    "La prestación de servicios de comercio exterior como agente o apoderado aduanal",
    "La constitución de derechos personales de uso o goce de bienes inmuebles por un valor mensual 1705 veces el salario mínimo vigente."
];


export default function FullDueDiligencePage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Auditorías Legales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Due Dilligence Completo</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Due Dilligence Completo
        </h1>
         <p className="text-muted-foreground">
            La evaluación que a continuación se presenta es una herramienta de diagnóstico sobre la situación actual de su empresa (sociedad o compañía) con el fin de determinar las áreas susceptibles a ser mejoradas dentro de la misma.
        </p>
      </div>
      <Card>
        <CardContent className="p-6 space-y-6">
            <div>
                <p className="text-sm text-muted-foreground">Se registrarán el nombre, la foto y el correo electrónico asociados con tu Cuenta de Google cuando subas archivos y envíes este formulario.</p>
            </div>
            <Separator />
            <div>
                <p className="text-sm text-destructive">* Indica que la pregunta es obligatoria</p>
            </div>
             <div className="space-y-4 rounded-lg border p-6">
                <Label htmlFor="email" className="text-base font-semibold">Correo electrónico <span className="text-destructive">*</span></Label>
                <Input id="email" placeholder="Tu dirección de correo electrónico" required />
            </div>
             <div className="space-y-4 rounded-lg border p-6">
                <Label className="text-base font-semibold">Mencione si la Sociedad cuenta con los siguientes requerimientos: <span className="text-destructive">*</span></Label>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            {radioOptions.map((option) => (
                                <TableHead key={option} className="text-center">{option}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         {corporateRequirements.map((req, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{index + 1}. {req}</TableCell>
                                {radioOptions.map((option) => (
                                    <TableCell key={option} className="text-center">
                                        <RadioGroup>
                                            <RadioGroupItem value={`${req}-${option}`} id={`${req}-${option}`}/>
                                        </RadioGroup>
                                    </TableCell>
                                ))}
                            </TableRow>
                         ))}
                    </TableBody>
                </Table>
            </div>
            <div className="space-y-6">
                {corporateDocumentsRequirements.map((req, index) => (
                    <div key={index} className="space-y-4 rounded-lg border p-6">
                        <Label className="text-base">{req}</Label>
                        <div className="flex items-center justify-between mt-4">
                            <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                            <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                                    <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                                    <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                                    <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                                </svg>
                                Ver carpeta
                            </Link>
                        </div>
                    </div>
                ))}
             </div>
             <div className="space-y-4 rounded-lg border p-6">
                <Label className="text-base">En su caso, favor de adjuntar el Acta o Actas de Asamblea donde conste la modificación de los Estatutos, incluyendo su boleta de inscripción en el Registro Público de Comercio.</Label>
                 <div className="flex items-center justify-between mt-4">
                    <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                            <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                            <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                            <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                        </svg>
                        Ver carpeta
                    </Link>
                </div>
            </div>
            <div className="space-y-4 rounded-lg border p-6">
                <Label className="text-base">En su caso, favor de adjuntar el Acta o Actas de Asamblea donde conste la modificación de los Estatutos, incluyendo su boleta de inscripción en el Registro Público de Comercio.</Label>
                <div className="flex items-center justify-between mt-4">
                    <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                            <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                            <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                            <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                        </svg>
                        Ver carpeta
                    </Link>
                </div>
            </div>
             <div className="space-y-4 rounded-lg border p-6">
                <Label className="text-base">Favor de adjuntar la escritura pública que contenga el nombramiento de Apoderados y Representantes Legales y en su caso la boleta de inscripción en el Registro Público de Comercio (SOLO si no fueron otorgados en el Acta Constitutiva, Asamblea de Accionistas y/o Resoluciones Unánimes).</Label>
                <div className="flex items-center justify-between mt-4">
                    <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                            <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                            <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                            <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                        </svg>
                        Ver carpeta
                    </Link>
                </div>
            </div>

            <div className="space-y-4 rounded-lg border p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Sección 2 de 14: Datos de miembros de la Sociedad.</CardTitle>
                    <CardDescription>Favor de adjuntar y/o mencionar los datos solicitados, según se indique. Si los apoderados o miembros del Consejo de Administración son accionistas y la información ya se adjuntó no es necesario repetirla.</CardDescription>
                </CardHeader>
                
                <div className="space-y-2">
                    <Label>Favor de asentar los siguientes datos respecto de cada accionista:<br/>- Nombre completo; - Lugar y fecha de nacimiento; - Profesión, ocupación o giro del negocio al que se dedique;<br/>- Domicilio;- Estado civil (en caso de estar casado(a), mencione el régimen);</Label>
                    <Textarea placeholder="Texto de respuesta largo" />
                </div>
                
                <div className="space-y-2">
                    <Label>Anexar la identificación oficial de cada accionista.<br/>(Puede ser la credencial para votar, pasaporte, licencia de conducir o Forma Migratoria en caso de extranjeros)</Label>
                    <div className="flex items-center justify-between mt-2">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                        <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                                <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                                <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                                <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                            </svg>
                            Ver carpeta
                        </Link>
                    </div>
                </div>

                 <div className="space-y-2">
                    <Label>Anexar la Cédula de Identificación fiscal expedida por el SAT de cada accionista.</Label>
                    <div className="flex items-center justify-between mt-2">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                        <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                                <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                                <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                                <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                            </svg>
                            Ver carpeta
                        </Link>
                    </div>
                </div>
                
                 <div className="space-y-2">
                    <Label>Favor de asentar los siguientes datos respecto de cada apoderado o representante legal:<br/>- Nombre completo; - Lugar y fecha de nacimiento; - Profesión, ocupación o giro del negocio al que se dedique;<br/>- Domicilio;- Estado civil (en caso de estar casado(a), mencione el régimen);</Label>
                    <Textarea placeholder="Texto de respuesta largo" />
                </div>

                 <div className="space-y-2">
                    <Label>Favor de asentar los siguientes datos respecto de cada miembro del Consejo de Administración/Administrador Único.<br/>- Nombre completo; - Lugar y fecha de nacimiento; - Profesión, ocupación o giro del negocio al que se dedique;<br/>- Domicilio;- Estado civil (en caso de estar casado(a), mencione el régimen);</Label>
                    <Textarea placeholder="Texto de respuesta largo" />
                </div>

                <div className="space-y-2">
                    <Label>Anexar la identificación oficial de cada Apoderado/Representante Legal, integrantes del Consejo de Administración y Comisario (solo si no son accionistas y ya se adjuntó)<br/>(Puede ser la credencial para votar, pasaporte, licencia de conducir o Forma Migratoria en caso de extranjeros)</Label>
                    <div className="flex items-center justify-between mt-2">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                        <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                                <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                                <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                                <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                            </svg>
                            Ver carpeta
                        </Link>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Anexar la Cédula de Identificación fiscal expedida por el SAT de cada Apoderado/Representante Legal, integrantes del Consejo de Administración y Comisario (solo si no son accionistas y ya se adjuntó).</Label>
                    <div className="flex items-center justify-between mt-2">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                        <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.20312 20.7891L10.0781 15.6562H15.8281L13.5938 19.5L10.7188 24.6328L7.20312 20.7891Z" fill="#0066DA" />
                                <path d="M10.7188 0L7.20312 3.84375L10.0781 8.97656L16.5938 8.97656L23.1094 8.97656L10.7188 0Z" fill="#00A9F4" />
                                <path d="M16.5938 8.97656L10.0781 8.97656L3.46875 20.0625L7.20312 20.7891L13.5938 19.5L16.5938 8.97656Z" fill="#00C973" />
                                <path d="M0 16.5938L3.46875 20.0625L10.0781 8.97656H3.46875L0 16.5938Z" fill="#FFC700" />
                            </svg>
                            Ver carpeta
                        </Link>
                    </div>
                </div>
            </div>
            <div className="space-y-4 rounded-lg border p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Sección 3 de 14: Funcionamiento del Gobierno Corporativo.</CardTitle>
                    <CardDescription>Lea con atención y responda las siguientes preguntas:</CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            {corporateGovernanceRadioOptions.map((option) => (
                                <TableHead key={option} className="text-center">{option}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {corporateGovernanceQuestions.map((question, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{question}</TableCell>
                                {corporateGovernanceRadioOptions.map((option) => (
                                    <TableCell key={option} className="text-center">
                                        <RadioGroup>
                                            <RadioGroupItem value={`${index}-${option}`} id={`${index}-${option}`} />
                                        </RadioGroup>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="space-y-4 rounded-lg border p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Sección 4 de 14: Compliance Penal</CardTitle>
                    <CardDescription>Lea con atención y responda lo siguiente:</CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            {penalComplianceRadioOptions.map((option) => (
                                <TableHead key={option} className="text-center">{option}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {penalComplianceQuestions.map((question, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{question}</TableCell>
                                {penalComplianceRadioOptions.map((option) => (
                                    <TableCell key={option} className="text-center">
                                        <RadioGroup>
                                            <RadioGroupItem value={`penal-${index}-${option}`} id={`penal-${index}-${option}`} />
                                        </RadioGroup>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Favor de adjuntar el Manual, Protocolo o Políticas Internas para la prevención delictiva, en caso de contar con él.</Label>
                    <p className="text-sm text-muted-foreground">Sube 1 archivo compatible. El tamaño máximo es de 10 GB.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Mencione el nombre completo de las personas que conforman el Órgano de Control u Oficial de Cumplimiento.</Label>
                    <Textarea placeholder="Tu respuesta" />
                </div>
            </div>
            <div className="space-y-4 rounded-lg border p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Sección 5 de 14: Propiedad Intelectual e Industrial.</CardTitle>
                    <CardDescription>
                        Para efectos de este formulario, en esta sección se utilizarán las siguientes definiciones:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Propiedad Intelectual: comprende las obras literarias, caricaturas, programas de radio, bases de datos, programa de cómputo.</li>
                            <li>Propiedad Industrial: tales como las marcas, patentes, dibujos industriales, modelos de utilidad, y frases comerciales.</li>
                            <li>IMPI: Instituto Mexicano de la Propiedad Industrial.</li>
                            <li>INDAUTOR: Instituto Nacional del Derecho de Autor.</li>
                        </ul>
                    </CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Lea con atención y responda lo siguiente:</TableHead>
                            {intellectualPropertyRadioOptions.map((option) => (
                                <TableHead key={option} className="text-center">{option}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {intellectualPropertyQuestions.map((question, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{question}</TableCell>
                                {intellectualPropertyRadioOptions.map((option) => (
                                    <TableCell key={option} className="text-center">
                                        <RadioGroup>
                                            <RadioGroupItem value={`ip-${index}-${option}`} id={`ip-${index}-${option}`} />
                                        </RadioGroup>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="space-y-2 rounded-lg border p-6 mt-6">
                    <Label>Mencione toda la Propiedad Intelectual y/o Industrial que la Sociedad utilice y especifique si se encuentra o no inscrita en el IMPI, INDAUTOR o el extranjero.</Label>
                    <Textarea placeholder="Tu respuesta" />
                </div>

                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Favor de anexar los títulos de registro o evidencia de la Propiedad Intelectual y/o Industrial que se encuentra inscrita en el IMPI e INDAUTOR.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 10 GB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>

                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Favor de anexar los convenios, contratos y sus reformas que conceden a la Sociedad el uso de cualquier patente o marca y documentos que amparen el registro de los mismos ante el IMPI (incluyendo licencias por el uso de software).</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles: PDF o document. El tamaño máximo es de 10 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
                
                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Favor de anexar los documentos relativos a los procedimientos o reclamaciones que existan en contra de la Sociedad por el incumplimiento o violación de derechos de Propiedad Intelectual y/o Industrial.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 10 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>

                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Favor de anexar los documentos que amparen el pago de regalías con relación a licencias de marcas y otra Propiedad Industrial.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 10 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
            </div>

            <div className="space-y-4 rounded-lg border p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Sección 6 de 14: Materia Laboral.</CardTitle>
                    <CardDescription>
                        Favor de anexar los documentos que se solicitan en caso de ser aplicable para la Sociedad.
                    </CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Lea con atención y responda lo siguiente:</TableHead>
                            {laborRadioOptions.map((option) => (
                                <TableHead key={option} className="text-center">{option}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {laborQuestions.map((question, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{question}</TableCell>
                                {laborRadioOptions.map((option) => (
                                    <TableCell key={option} className="text-center">
                                        <RadioGroup>
                                            <RadioGroupItem value={`labor-${index}-${option}`} id={`labor-${index}-${option}`} />
                                        </RadioGroup>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="space-y-2 rounded-lg border p-6 mt-6">
                    <Label>Mencione el nombre completo de los empleados de la sociedad, la fecha de ingreso y el sueldo, así como si son empleados directamente por la empresa o por medio de outsourcing.</Label>
                    <Textarea placeholder="Tu respuesta" />
                </div>
                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Adjuntar el formato del Contrato Individual de Trabajo que la sociedad utiliza con los empleados.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 10 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Adjuntar los formatos de documentos laborales tales como carta de renuncia, finiquitos y convenios de terminación.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 10 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
                 <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Anexar todos los contratos de outsourcing que la Sociedad haya celebrado.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 100 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Adjuntar los contratos colectivos de trabajo y cualquier otro tipo de contrato celebrado por la Sociedad con algún sindicato, junto con la evidencia de su depósito y admisión ante la Junta de Conciliación y Arbitraje respectiva y sus revisiones.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 10 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
                <div className="space-y-2 rounded-lg border p-6 mt-6">
                    <Label>Mencione los litigios pendientes (o probables) de carácter laboral y/o de seguridad social, ya sean de naturaleza individual o colectiva, incluyendo el nombre del actor y del demandando, autoridad encargada del asunto, fecha de inicio, contingencia a la fecha y estado procesal actual.</Label>
                    <Textarea placeholder="Tu respuesta" />
                </div>
                <div className="space-y-2 rounded-lg border p-6 mt-6">
                    <Label>Favor de adjuntar la Constancia de Empleador para emplear extranjeros, en caso de contar con ella.</Label>
                    <Textarea placeholder="Tu respuesta" />
                </div>
            </div>
            <div className="space-y-4 rounded-lg border p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Sección 7 de 14: Aviso de Privacidad</CardTitle>
                    <CardDescription>
                        El Aviso de Privacidad es un documento (en cualquier formato), a través del cual el responsable informa al titular sobre la existencia y características principales del tratamiento al que serán sometidos sus datos personales. Todo responsable que trate datos personales, sin importar la actividad que realice o si se trata de una persona física o moral, requiere elaborar y poner a disposición su aviso de privacidad.
                    </CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Lea con atención y conteste lo siguiente:</TableHead>
                            {privacyNoticeRadioOptions.map((option) => (
                                <TableHead key={option} className="text-center">{option}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {privacyNoticeQuestions.map((question, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{question}</TableCell>
                                {privacyNoticeRadioOptions.map((option) => (
                                    <TableCell key={option} className="text-center">
                                        <RadioGroup>
                                            <RadioGroupItem value={`privacy-${index}-${option}`} id={`privacy-${index}-${option}`} />
                                        </RadioGroup>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="space-y-4 rounded-lg border p-6 mt-6">
                    <Label className="text-base">Adjuntar el Aviso de Privacidad de la Sociedad, en caso de contar con el.</Label>
                    <p className="text-sm text-muted-foreground">Sube hasta 10 archivos compatibles. El tamaño máximo es de 100 MB por archivo.</p>
                    <div className="flex items-center justify-between mt-4">
                        <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Agregar archivo</Button>
                    </div>
                </div>
            </div>
             <div className="space-y-4 rounded-lg border p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Sección 8 de 14: Prevención de Lavado de dinero</CardTitle>
                    <CardDescription>
                        La <a href="#" className="text-primary underline">Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita</a> establece los lineamientos para identificar los actos u operaciones que involucren recursos de procedencia ilícita. Debido a esto, toda Sociedad que realice Actividades Vulnerables se encuentra obligada a realizar la identificación de Clientes y Usuarios, Avisos e informes por conducto del SAT, entre otros.
                    </CardDescription>
                </CardHeader>
                 <div className="space-y-2">
                    <Label className="font-semibold">Seleccione la(s) Actividad(es) Vulnerable(s) que realiza la Sociedad.</Label>
                     <div className="space-y-2 pt-2">
                        {pldActivities.map((activity, index) => (
                             <div key={index} className="flex items-center space-x-2">
                                <Checkbox id={`pld-${index}`} />
                                <Label htmlFor={`pld-${index}`} className="font-normal">{activity}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

    