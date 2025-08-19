

'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Clock, AlignLeft } from "lucide-react";

const Section = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
    <div className={`border border-foreground/20 rounded-sm ${className}`}>
        <h2 className="bg-foreground/5 px-2 py-1 text-sm font-bold text-center">{title}</h2>
        <div className="p-2 space-y-2">{children}</div>
    </div>
);

const Field = ({ label, children, labelClassName }: { label: string, children: React.ReactNode, labelClassName?: string }) => (
    <div className="flex items-start gap-2">
        <label className={`w-1/3 pt-1 text-xs font-semibold text-right ${labelClassName}`}>{label}</label>
        <div className="w-2/3">{children}</div>
    </div>
);

const MiniSection = ({ title, items }: { title: string, items: string[] }) => (
    <div className="border border-foreground/20 rounded-sm">
        <h3 className="bg-foreground/5 px-2 py-1 text-xs font-bold text-center">{title}</h3>
        <div className="p-1 space-y-1">
            {items.map((item, index) => <Input key={index} defaultValue={item} className="h-7 text-xs" />)}
        </div>
    </div>
);

const AccountabilityItem = ({ number, text }: { number: number, text: string }) => (
    <div className="flex items-center gap-2">
        <AlignLeft className="h-4 w-4 text-muted-foreground" />
        <span className="font-bold">{number}</span>
        <div className="flex-grow">
            <Input defaultValue={text} className="h-7 text-xs" />
            <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Asignar</span>
                </div>
                 <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Fecha</span>
                </div>
            </div>
        </div>
    </div>
);

const CriticalNumberItem = ({ color }: { color: string }) => (
    <div className="flex items-center gap-2">
        <AlignLeft className="h-4 w-4 text-muted-foreground" />
        <div className={`w-4 h-4 rounded-sm ${color}`} />
        <Input className="h-7 text-xs flex-grow" />
        <span className="text-xs text-muted-foreground">...</span>
    </div>
);

export default function LegalStrategyPage() {
    return (
        <div className="bg-background text-foreground mx-auto p-4 font-sans text-sm">
            <div className="grid grid-cols-12 gap-2">
                
                {/* Top bar sections */}
                <div className="col-span-2"><MiniSection title="EMPLEADOS" items={["1 Elias B.", "2 Fany G. y Andrea", "3 Selene M."]} /></div>
                <div className="col-span-2"><MiniSection title="CLIENTE" items={["1 Real Estate: desarrolladores inmobiliarios.", "2 M&A", "3 Tecnología"]} /></div>
                <div className="col-span-2"><MiniSection title="ACCIONISTAS" items={["1 Elias Bardawil", "2", "3"]} /></div>
                <div className="col-span-2"><MiniSection title="HACER/COMPRAR" items={["1", "2", "3"]} /></div>
                <div className="col-span-2"><MiniSection title="VENDER" items={["1 Suscripción Fractional Law®", "2 Suscripción Contracts Activation®", "3 Proyectos legales"]} /></div>
                <div className="col-span-2"><MiniSection title="MANTENIMIENTO DE REGISTROS" items={["1 Implementar cargo automático Stripe", "2 Vender suscripciones anuales pero a meses.", "3"]} /></div>

                {/* Left column */}
                <div className="col-span-3 space-y-2">
                    <Section title="Valores/Creencias Fundamentales (Debería/No Debería)">
                        <Textarea rows={30} className="text-xs" defaultValue={`Servicio y protección
Nos mueve el propósito de servir y proteger a nuestros clientes, viéndolos como una extensión de nuestros negocios y familia.

Crecimiento y mejora continua.
Buscamos la perfección en todo lo que hacemos; continuamente nos esforzamos por mejorar y premiamos en función del mérito.

Integridad para generar confianza duradera.
Actuar siempre de acuerdo a estándares éticos con honestidad, sinceridad y veracidad en la palabra procurando relaciones ganar-ganar, en donde se privilegie la asistencia estable así como el equilibrio en el largo plazo.

Conocimiento profundo de nuestra práctica.
Dominio de nuestras habilidades y prácticas mediante la especialización, actualización y constante estudio, que genere experiencia diaria.

Mentalidad empresarial sustentable.
Apasionados por los negocios, nos orientamos al crecimiento y al logro mediante un emprendimiento constante, siempre buscando entregar valor al Cliente.

Colaboración efectiva.
Encontramos diversas maneras de colaborar con nuestros Clientes mediante una comunicación efectiva, siendo logrando ser transparentes y eficientes en nuestras intervenciones.

Trabajo en equipo.
Nos gusta encontrar, conectar y proveer a la persona correcta para agregar valor.`}/>
                    </Section>
                </div>
                
                {/* Center Content */}
                <div className="col-span-6 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                        <Section title="Metas (3 años)">
                            <Textarea rows={2} defaultValue="No se encontraron métricas de la compañía en FY2027"/>
                        </Section>
                        <Section title="Objetivos (1 año)">
                             <Textarea rows={2} defaultValue="FY2025 (Termina Dic 31, 2025)"/>
                             <Input defaultValue="Venta de suscripciones anuales -- / 3" />
                        </Section>
                        <Section title="Acciones (QTR)">
                             <Textarea rows={2} defaultValue="FY2025-Q1 (Termina Mar 31, 2025)"/>
                             <Input defaultValue="Venta de suscripciones anuales -- / 3" />
                        </Section>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Section title="Propósito (Por qué)">
                            <Textarea rows={3} defaultValue="Ayudar a las personas a cumplir su propósito."/>
                        </Section>
                         <Section title="Iniciativas Clave (Prioridades a 1 Año)">
                            <Input defaultValue="1 Fortalecer Estructura Organizacional (Personas)" className="h-8"/>
                            <Input defaultValue="2 Integración de tecnología simple (sistemas y procesos)" className="h-8"/>
                            <Input defaultValue="3 Mejorar oferta de valor" className="h-8"/>
                        </Section>
                    </div>
                     <div className="grid grid-cols-2 gap-2">
                         <Section title="Acciones (Para Vivir Valores, Propósito, BHAG)">
                            <Textarea rows={5} defaultValue={`1 Ser una legaltech (ExO) suscripciones accesibles, masificables.
2 Integrar equipo adecuado
3 Detallar KPI para medir satisfacción de clientes y eficiencia operativa
4 Automatizar intake de clientes
5 Oferta de valor integral`}/>
                        </Section>
                         <Section title="Rocas (Prioridades Trimestrales)">
                            <Input defaultValue="1 Simplificar propuesta de valor de suscripciones" className="h-8"/>
                            <Input defaultValue="2 16 entrevistas con prospectos calificados..." className="h-8"/>
                            <Input defaultValue="3 Implementar CLM en Stbd y diseñar MVP..." className="h-8"/>
                        </Section>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                             <Section title="Sandbox">
                                <Textarea rows={7} placeholder="Enter text here..."/>
                            </Section>
                            <Section title="Profit por X">
                                <Input placeholder="Por Suscripción mensual"/>
                            </Section>
                        </div>
                        <div className="space-y-2">
                             <Section title="Impulsos/Capacidades Clave (Prioridades de 3-5 Años)">
                                <Textarea rows={4} defaultValue={`250 suscripciones nuevas al mes (12 por año).
Modelo de pricing por suscripción legal.
Tecnologia (herramienta, posición interna, usability).`}/>
                            </Section>
                            <Section title="Promesas de Marca">
                                <Textarea rows={3} defaultValue={`Convertirnos en un aliado estratégico de nuestros clientes, eliminando las fricciones entre clientes y abogados, siendo su departamento legal y asesor de confianza, habilitados con las personas, tecnología y procesos necesarios.`}/>
                            </Section>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Section title="BHAG">
                           <Textarea rows={4} defaultValue="Blindar el patrimonio de 20,000 dueños de negocios para que cumplan su propósito."/>
                        </Section>
                         <Section title="Promesas de Marca">
                           <Textarea rows={4} defaultValue="Convertirnos en un aliado estratégico de nuestros clientes, eliminando las fricciones entre clientes y abogados, siendo su departamento legal y asesor de confianza, habilitados con las personas, tecnología y procesos necesarios."/>
                        </Section>
                    </div>
                    <Section title="Lista de Responsabilidades">
                        <AccountabilityItem number={1} text="Fortalecer Estructura Organizacional (Personas)" />
                        <AccountabilityItem number={2} text="Integración de tecnología simple (sistemas y procesos)." />
                        <AccountabilityItem number={3} text="Mejorar oferta de valor" />
                        <AccountabilityItem number={4} text="Estrategia de pricing" />
                        <AccountabilityItem number={5} text="Extracción y uso de datos legales" />
                    </Section>
                </div>

                {/* Right Column */}
                <div className="col-span-3 space-y-2">
                     <Section title="Tema (QTR/ANUAL)">
                         <div className="space-y-2">
                             <Field label="Fecha Límite" labelClassName="w-2/5"><Input className="h-7"/></Field>
                             <Field label="Meta Medible/Crítica #" labelClassName="w-2/5"><Input className="h-7"/></Field>
                         </div>
                         <div className="border border-foreground/20 rounded-sm mt-4">
                            <h3 className="bg-foreground/5 px-2 py-1 text-xs font-bold text-center">TEMA</h3>
                             <div className="p-2 space-y-2">
                                <h4 className="text-center font-semibold">Diseño del Marcador</h4>
                                 <Textarea rows={4} placeholder="Celebración..."/>
                             </div>
                         </div>
                     </Section>
                     <Section title="KPIs Trimestrales Individuales (Quién/Cuándo)">
                         <Textarea rows={2} defaultValue="FY2025-Q1 (Termina Mar 31, 2025)"/>
                         <Input defaultValue="Venta de suscripciones anuales --/3/3" />
                         <Input defaultValue="Implementación de estrategia Legaltech --/75/75"/>
                         <Input defaultValue="Retención y recompra --/--/--"/>
                    </Section>
                    <Section title="Rocas Trimestrales Individuales">
                        <Input defaultValue="EB #1 Simplificar propuesta de valor..."/>
                        <Input defaultValue="EB #2 16 entrevistas con prospectos..."/>
                        <Input defaultValue="EB #3 Implementar CLM en Stbd..."/>
                        <Input defaultValue="EB #4 Terminar herramienta tecnológica..."/>
                        <Input defaultValue="EB #5 Integrar a un Project Manager..."/>
                        <Input defaultValue="EB #6 Integración de Administradora..."/>
                    </Section>
                    <Section title="Número Crítico: Personas o B/S">
                        <CriticalNumberItem color="bg-green-600" />
                        <CriticalNumberItem color="bg-lime-500" />
                        <CriticalNumberItem color="bg-yellow-400" />
                        <CriticalNumberItem color="bg-red-600" />
                    </Section>
                    <Section title="Número Crítico: Proceso o P/L">
                        <CriticalNumberItem color="bg-green-600" />
                        <CriticalNumberItem color="bg-lime-500" />
                        <CriticalNumberItem color="bg-yellow-400" />
                        <CriticalNumberItem color="bg-red-600" />
                    </Section>
                </div>
            </div>
        </div>
    );
}
