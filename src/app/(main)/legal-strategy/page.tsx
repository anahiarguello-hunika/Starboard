

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
            {items.map((item, index) => <Input key={index} placeholder={item} className="h-7 text-xs" />)}
        </div>
    </div>
);

const AccountabilityItem = ({ number, text }: { number: number, text: string }) => (
    <div className="flex items-center gap-2">
        <AlignLeft className="h-4 w-4 text-muted-foreground" />
        <span className="font-bold">{number}</span>
        <div className="flex-grow">
            <Input placeholder={text} className="h-7 text-xs" />
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

const SwotItem = ({ number, text }: { number: number, text: string }) => (
     <div className="flex items-center gap-2">
        <AlignLeft className="h-4 w-4 text-muted-foreground" />
        <span className="font-bold">{number}</span>
        <div className="flex-grow">
            <Input placeholder={text} className="h-7 text-xs" />
        </div>
    </div>
);

export default function LegalStrategyPage() {
    return (
        <div className="bg-background text-foreground mx-auto p-4 font-sans text-sm">
            <div className="grid grid-cols-12 gap-2">
                
                {/* Top bar sections */}
                <div className="col-span-2"><MiniSection title="EMPLEADOS" items={["", "", ""]} /></div>
                <div className="col-span-2"><MiniSection title="CLIENTE" items={["", "", ""]} /></div>
                <div className="col-span-2"><MiniSection title="ACCIONISTAS" items={["", "", ""]} /></div>
                <div className="col-span-2"><MiniSection title="HACER/COMPRAR" items={["", "", ""]} /></div>
                <div className="col-span-2"><MiniSection title="VENDER" items={["", "", ""]} /></div>
                <div className="col-span-2"><MiniSection title="MANTENIMIENTO DE REGISTROS" items={["", "", ""]} /></div>

                {/* Left column */}
                <div className="col-span-3 space-y-2">
                    <Section title="Valores/Creencias Fundamentales (Debería/No Debería)">
                        <Textarea rows={30} className="text-xs" placeholder=""/>
                    </Section>
                </div>
                
                {/* Center Content */}
                <div className="col-span-6 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                        <Section title="Metas (3 años)">
                            <Textarea rows={2} placeholder=""/>
                        </Section>
                        <Section title="Objetivos (1 año)">
                             <Textarea rows={2} placeholder=""/>
                             <Input placeholder="" />
                        </Section>
                        <Section title="Acciones (QTR)">
                             <Textarea rows={2} placeholder=""/>
                             <Input placeholder="" />
                        </Section>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Section title="Propósito (Por qué)">
                            <Textarea rows={3} placeholder=""/>
                        </Section>
                         <Section title="Iniciativas Clave (Prioridades a 1 Año)">
                            <Input placeholder="" className="h-8"/>
                            <Input placeholder="" className="h-8"/>
                            <Input placeholder="" className="h-8"/>
                        </Section>
                    </div>
                     <div className="grid grid-cols-2 gap-2">
                         <Section title="Acciones (Para Vivir Valores, Propósito, BHAG)">
                            <Textarea rows={5} placeholder=""/>
                        </Section>
                         <Section title="Rocas (Prioridades Trimestrales)">
                            <Input placeholder="" className="h-8"/>
                            <Input placeholder="" className="h-8"/>
                            <Input placeholder="" className="h-8"/>
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
                                <Textarea rows={4} placeholder=""/>
                            </Section>
                            <Section title="Promesas de Marca">
                                <Textarea rows={3} placeholder=""/>
                            </Section>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Section title="BHAG">
                           <Textarea rows={4} placeholder=""/>
                        </Section>
                         <Section title="Promesas de Marca">
                           <Textarea rows={4} placeholder=""/>
                        </Section>
                    </div>
                    <Section title="Lista de Responsabilidades">
                        <AccountabilityItem number={1} text="" />
                        <AccountabilityItem number={2} text="" />
                        <AccountabilityItem number={3} text="" />
                        <AccountabilityItem number={4} text="" />
                        <AccountabilityItem number={5} text="" />
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
                         <Textarea rows={2} placeholder=""/>
                         <Input placeholder="" />
                         <Input placeholder=""/>
                         <Input placeholder=""/>
                    </Section>
                    <Section title="Rocas Trimestrales Individuales">
                        <Input placeholder=""/>
                        <Input placeholder=""/>
                        <Input placeholder=""/>
                        <Input placeholder=""/>
                        <Input placeholder=""/>
                        <Input placeholder=""/>
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
                 {/* Bottom bar sections */}
                 <div className="col-span-12 grid grid-cols-4 gap-2">
                    <Section title="Fortalezas/Competencias Clave">
                        <SwotItem number={1} text="" />
                        <SwotItem number={2} text="" />
                        <SwotItem number={3} text="" />
                    </Section>
                    <Section title="Debilidades">
                        <SwotItem number={1} text="" />
                        <SwotItem number={2} text="" />
                        <SwotItem number={3} text="" />
                    </Section>
                    <Section title="Tendencias">
                        <SwotItem number={1} text="" />
                        <SwotItem number={2} text="" />
                        <SwotItem number={3} text="" />
                    </Section>
                    <Section title="Tendencias: (continuación 4-6)">
                         <SwotItem number={1} text="" />
                         <SwotItem number={2} text="" />
                         <SwotItem number={3} text="" />
                    </Section>
                </div>
            </div>
        </div>
    );
}
