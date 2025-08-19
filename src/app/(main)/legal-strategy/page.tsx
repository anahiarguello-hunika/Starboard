

'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="border border-foreground/30">
        <h2 className="bg-foreground/10 px-2 py-1 text-sm font-bold">{title}</h2>
        <div className="p-4 space-y-4">{children}</div>
    </div>
);

const Field = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <label className="w-1/4 pt-2 text-sm font-semibold text-right">{label}</label>
        <div className="w-3/4">{children}</div>
    </div>
);

export default function LegalStrategyPage() {
    return (
        <div className="bg-background text-foreground max-w-7xl mx-auto p-8 font-sans">
             <header className="text-center mb-8">
                 <h1 className="text-3xl font-bold font-headline text-primary">Estrategia Legal</h1>
                 <p className="text-muted-foreground mt-2">
                    Defina y gestione la estrategia legal de su organización.
                </p>
            </header>

            <div className="space-y-6">
                <Section title="Estrategia y Objetivos">
                    <Field label="Visión del Departamento Legal">
                        <Textarea rows={3} placeholder="Describa la visión a largo plazo del departamento legal..." />
                    </Field>
                    <Field label="Misión">
                        <Textarea rows={3} placeholder="Defina el propósito central y la función del departamento legal..." />
                    </Field>
                    <Field label="Objetivos Estratégicos (3-5 años)">
                        <Textarea rows={4} placeholder="Enumere los principales objetivos estratégicos..." />
                    </Field>
                    <Field label="Iniciativas Clave del Año">
                        <Textarea rows={4} placeholder="Enumere las iniciativas específicas para el año en curso..." />
                    </Field>
                </Section>
                
                <Section title="Métricas y KPIs">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                         <Field label="Reducción de Riesgos (%)">
                            <Input type="number" placeholder="%" />
                        </Field>
                        <Field label="Ahorro de Costos (%)">
                            <Input type="number" placeholder="%" />
                        </Field>
                        <Field label="Tiempo de Ciclo de Contratos (días)">
                            <Input type="number" placeholder="Días" />
                        </Field>
                        <Field label="Satisfacción del Cliente Interno (1-5)">
                            <Input type="number" placeholder="1-5" />
                        </Field>
                        <Field label="KPI Personalizado 1">
                            <Input placeholder="Definir KPI..." />
                        </Field>
                         <Field label="Meta KPI 1">
                            <Input placeholder="Establecer meta..." />
                        </Field>
                    </div>
                </Section>
                
                <Section title="Gestión de Riesgos">
                    <Field label="Top 5 Riesgos Legales">
                        <Textarea rows={5} placeholder="1. ...&#10;2. ...&#10;3. ..." />
                    </Field>
                    <Field label="Planes de Mitigación">
                         <Textarea rows={5} placeholder="Describa las estrategias para mitigar los riesgos principales..." />
                    </Field>
                     <Field label="Apetito de Riesgo">
                        <Input placeholder="Bajo / Medio / Alto" />
                    </Field>
                </Section>

                <Section title="Personas y Estructura">
                    <Field label="Estructura del Equipo">
                        <Textarea rows={3} placeholder="Describa la estructura actual del equipo (organigrama)..." />
                    </Field>
                    <Field label="Necesidades de Contratación">
                        <Textarea rows={3} placeholder="Especifique los roles a contratar en los próximos 12 meses..." />
                    </Field>
                    <Field label="Plan de Desarrollo Profesional">
                        <Textarea rows={4} placeholder="Detalle las iniciativas de capacitación y desarrollo..." />
                    </Field>
                </Section>

                <Section title="Tecnología y Procesos">
                    <Field label="Hoja de Ruta Tecnológica">
                        <Textarea rows={3} placeholder="Enumere las herramientas tecnológicas a implementar (ej. CLM, e-billing)..." />
                    </Field>
                    <Field label="Iniciativas de Mejora de Procesos">
                        <Textarea rows={3} placeholder="Describa los procesos a optimizar este año..." />
                    </Field>
                </Section>

                <Section title="Presupuesto y Recursos">
                     <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                         <Field label="Presupuesto Operativo Anual">
                            <Input type="text" placeholder="$" />
                        </Field>
                        <Field label="Gasto en Firmas Externas">
                            <Input type="text" placeholder="$" />
                        </Field>
                         <Field label="Gasto en Tecnología Legal">
                            <Input type="text" placeholder="$" />
                        </Field>
                        <Field label="Justificación de Recursos Adicionales">
                            <Textarea rows={3} placeholder="Si se necesitan recursos adicionales, justifíquelos aquí..." />
                        </Field>
                    </div>
                </Section>
            </div>
        </div>
    );
}
