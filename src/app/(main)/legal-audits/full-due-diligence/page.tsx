
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
];

const penalComplianceRadioOptions = ["Sí", "No", "No sé"];


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
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
