
'use client';

import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const ReportInputCell = ({ label }: { label: string }) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-muted-foreground">{label}</label>
        <Input className="h-8"/>
    </div>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="border border-foreground/30">
        <h2 className="bg-foreground/10 px-2 py-1 text-sm font-bold">{title}</h2>
        <div className="p-2 space-y-2">{children}</div>
    </div>
);

export default function ProjectReportPage() {
    return (
        <div className="bg-background text-foreground max-w-5xl mx-auto p-8 font-sans">
            <header className="text-center mb-6">
                 <h1 className="text-2xl font-bold font-headline text-primary">Plantilla de Gestión del Ciclo de Vida del Proyecto</h1>
                 <h2 className="text-xl font-semibold font-headline text-muted-foreground">Informe de Estado del Proyecto</h2>
                 <p className="text-sm mt-2 text-muted-foreground">
                    El Informe de Estado del Proyecto presenta las mediciones, fuentes e indicadores de progreso utilizados en el seguimiento y evaluación del estado del proyecto, el éxito y la presentación de informes de rendimiento a las partes interesadas. Se genera antes de las reuniones periódicas de estado del proyecto como un medio para alinear expectativas e identificar (y apoyar) cualquier necesidad de cambio.
                </p>
            </header>

            <div className="space-y-4">
                <Section title="DETALLES DEL CLIENTE Y PROYECTO">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <ReportInputCell label="Nombre del Proyecto"/>
                            <ReportInputCell label="No. de Proyecto"/>
                        </div>
                         <div className="grid grid-cols-2 gap-4">
                            <ReportInputCell label="Abogado Responsable"/>
                            <ReportInputCell label="Fecha del Informe"/>
                            <ReportInputCell label="Proyecto Tipo/Subtipo"/>
                            <ReportInputCell label="Fecha de Apertura"/>
                        </div>
                    </div>
                </Section>
                
                <Section title="PROGRESO DESDE EL ÚLTIMO INFORME">
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>[Liste brevemente las tareas completadas y los resultados logrados desde el último informe]</li>
                        <li>[Identifique cualquier problema/cambio que haya ocurrido desde el último informe]</li>
                    </ul>
                    <Textarea className="w-full" rows={4} />
                </Section>

                <Section title="PROGRESO PLANIFICADO PARA EL PRÓXIMO INFORME">
                     <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>[Liste brevemente las tareas que se completarán o en las que se trabajará desde ahora hasta el próximo informe]</li>
                    </ul>
                    <Textarea className="w-full" rows={4} />
                </Section>
                
                <Section title="HITOS">
                    <Table>
                        <TableHeader className="bg-foreground/5">
                            <TableRow>
                                <TableHead className="w-1/2 font-bold text-foreground">Nombre</TableHead>
                                <TableHead className="font-bold text-foreground">Fecha de Vencimiento</TableHead>
                                <TableHead className="font-bold text-foreground">Fecha de Finalización</TableHead>
                                <TableHead className="font-bold text-foreground">Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell><Input placeholder="Listar hitos críticos del camino" className="h-8"/></TableCell>
                                <TableCell><Input type="date" className="h-8"/></TableCell>
                                <TableCell><Input type="date" className="h-8"/></TableCell>
                                <TableCell className="bg-green-500 text-white text-center font-bold">Completo</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell><Input className="h-8"/></TableCell>
                                <TableCell><Input type="date" className="h-8"/></TableCell>
                                <TableCell><Input type="date" className="h-8"/></TableCell>
                                <TableCell className="bg-yellow-500 text-white text-center font-bold">En progreso</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell><Input className="h-8"/></TableCell>
                                <TableCell><Input type="date" className="h-8"/></TableCell>
                                <TableCell><Input type="date" className="h-8"/></TableCell>
                                <TableCell className="bg-red-500 text-white text-center font-bold">Retrasado</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Section>

                <Section title="FINANZAS">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-bold">Estimación de Honorarios</TableCell>
                                <TableCell className="text-right">100,000</TableCell>
                                <TableCell className="w-1/2">% del Estimado de Honorarios Alcanzado:</TableCell>
                                <TableCell className="bg-yellow-500 text-white text-center font-bold w-16">90%</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-bold">Total de Honorarios Facturados [insertar rango de fechas]</TableCell>
                                <TableCell className="text-right">25,000</TableCell>
                                <TableCell>Total de Honorarios no Facturados [insertar rango de fechas]</TableCell>
                                <TableCell className="w-16">65,000</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-bold">% de proyecto previsto para ser completado</TableCell>
                                <TableCell className="text-right">75%</TableCell>
                                <TableCell>% de proyecto realmente completado</TableCell>
                                <TableCell className="w-16">55%</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-bold align-top">Comentarios:</TableCell>
                                <TableCell colSpan={3}><Textarea rows={2}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Section>
                
                 <Section title="SE REQUIERE ACCIÓN/SOLICITUD DE CAMBIO">
                    <Table>
                        <TableHeader className="bg-foreground/5">
                            <TableRow>
                                <TableHead className="font-bold text-foreground">Fase/Tarea</TableHead>
                                <TableHead className="w-1/2 font-bold text-foreground">Acción o Cambio Requerido</TableHead>
                                <TableHead className="font-bold text-foreground">Asignado A</TableHead>
                                <TableHead className="font-bold text-foreground">Fecha de Vencimiento</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3].map((item) => (
                                <TableRow key={item}>
                                    <TableCell><Input className="h-8"/></TableCell>
                                    <TableCell><Textarea placeholder="describa cualquier evento que necesite acción, y especifique si necesita ser abordado desde una perspectiva legal o de gestión" rows={2}/></TableCell>
                                    <TableCell><Input className="h-8"/></TableCell>
                                    <TableCell><Input type="date" className="h-8"/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Section>
            </div>
        </div>
    );
}
