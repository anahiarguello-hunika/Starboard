
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Info, Upload, User, Building, CalendarIcon, PlusCircle, Trash2 } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from 'next/link';

const FormSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

export default function NewPersonPage() {

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Nuevo Contacto</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                   <FormSection title="Información de contacto">
                        <div className="flex justify-between items-start">
                            <div>
                                <Label>¿Es este contacto una persona o una empresa?</Label>
                                <RadioGroup defaultValue="person" className="flex mt-2">
                                    <Button variant="outline" className="bg-muted"><User className="mr-2 h-4 w-4"/> Persona</Button>
                                    <Button variant="ghost"><Building className="mr-2 h-4 w-4"/> Empresa</Button>
                                </RadioGroup>
                            </div>
                            <div>
                                <Label className="flex items-center gap-1">Foto de perfil <Info className="h-3 w-3" /></Label>
                                <Button variant="outline" className="mt-2"><Upload className="mr-2 h-4 w-4"/> Subir foto</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                            <div className="space-y-1">
                                <Label htmlFor="prefix">Prefijo</Label>
                                <Input id="prefix" />
                            </div>
                             <div className="md:col-span-2 space-y-1">
                                <Label htmlFor="first-name">Nombre <span className="text-destructive">*</span></Label>
                                <Input id="first-name" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-1">
                                <Label htmlFor="middle-name">Segundo nombre</Label>
                                <Input id="middle-name" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="last-name">Apellido <span className="text-destructive">*</span></Label>
                                <Input id="last-name" />
                            </div>
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-1">
                                <Label htmlFor="company-name">Empresa</Label>
                                <Select>
                                    <SelectTrigger><SelectValue placeholder="¿Cuál es el nombre de la empresa?" /></SelectTrigger>
                                    <SelectContent></SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="title">Cargo</Label>
                                <Input id="title" />
                            </div>
                        </div>
                         <div className="space-y-1 mt-4">
                            <Label htmlFor="dob">Fecha de Nacimiento</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        dd/mm/yyyy
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar mode="single" />
                                </PopoverContent>
                            </Popover>
                        </div>
                   </FormSection>

                   <FormSection title="Email">
                        <div className="space-y-4">
                            <div className="flex items-end gap-4">
                                <div className="flex-grow space-y-1">
                                    <Label htmlFor="email-address">Dirección de correo electrónico</Label>
                                    <Input id="email-address" />
                                </div>
                                 <div className="space-y-1">
                                    <Label htmlFor="email-type">Tipo</Label>
                                    <Select defaultValue="work">
                                        <SelectTrigger id="email-type" className="w-32"><SelectValue /></SelectTrigger>
                                        <SelectContent><SelectItem value="work">Trabajo</SelectItem></SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center gap-2 pb-2">
                                    <RadioGroup defaultValue="primary"><RadioGroupItem value="primary" id="email-primary" /></RadioGroup>
                                    <Label htmlFor="email-primary" className="font-normal">Principal</Label>
                                </div>
                                 <Button variant="ghost" className="text-primary hover:text-primary">Eliminar</Button>
                            </div>
                             <Button variant="link" className="p-0"><PlusCircle className="mr-2 h-4 w-4"/> Agregar dirección de correo electrónico</Button>
                        </div>
                   </FormSection>

                    <FormSection title="Teléfono">
                        <div className="space-y-4">
                            <div className="flex items-end gap-4">
                                <div className="flex-grow space-y-1">
                                    <Label htmlFor="phone-number">Número de teléfono</Label>
                                    <Input id="phone-number" />
                                </div>
                                 <div className="space-y-1">
                                    <Label htmlFor="phone-type">Tipo</Label>
                                    <Select defaultValue="work">
                                        <SelectTrigger id="phone-type" className="w-32"><SelectValue /></SelectTrigger>
                                        <SelectContent><SelectItem value="work">Trabajo</SelectItem></SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center gap-2 pb-2">
                                    <RadioGroup defaultValue="primary"><RadioGroupItem value="primary" id="phone-primary" /></RadioGroup>
                                    <Label htmlFor="phone-primary" className="font-normal">Principal</Label>
                                </div>
                                 <Button variant="ghost" className="text-primary hover:text-primary">Eliminar</Button>
                            </div>
                             <Button variant="link" className="p-0"><PlusCircle className="mr-2 h-4 w-4"/> Agregar número de teléfono</Button>
                        </div>
                   </FormSection>

                    <FormSection title="Website">
                        <div className="space-y-4">
                            <div className="flex items-end gap-4">
                                <div className="flex-grow space-y-1">
                                    <Label htmlFor="web-address">Dirección web</Label>
                                    <Input id="web-address" />
                                </div>
                                 <div className="space-y-1">
                                    <Label htmlFor="web-type">Tipo</Label>
                                    <Select defaultValue="work">
                                        <SelectTrigger id="web-type" className="w-32"><SelectValue /></SelectTrigger>
                                        <SelectContent><SelectItem value="work">Trabajo</SelectItem></SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center gap-2 pb-2">
                                    <RadioGroup defaultValue="primary"><RadioGroupItem value="primary" id="web-primary" /></RadioGroup>
                                    <Label htmlFor="web-primary" className="font-normal">Principal</Label>
                                </div>
                                 <Button variant="ghost" className="text-primary hover:text-primary">Eliminar</Button>
                            </div>
                             <Button variant="link" className="p-0"><PlusCircle className="mr-2 h-4 w-4"/> Agregar website</Button>
                        </div>
                   </FormSection>

                    <FormSection title="Dirección">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <Label htmlFor="street">Calle</Label>
                                <Input id="street" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="city">Ciudad</Label>
                                    <Input id="city" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="state">Estado/Provincia</Label>
                                    <Input id="state" />
                                </div>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="zip">Código Postal</Label>
                                    <Input id="zip" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="country">País</Label>
                                    <Select defaultValue="mexico">
                                        <SelectTrigger id="country"><SelectValue /></SelectTrigger>
                                        <SelectContent><SelectItem value="mexico">México</SelectItem></SelectContent>
                                    </Select>
                                </div>
                                 <div className="space-y-1">
                                    <Label htmlFor="address-type">Tipo</Label>
                                    <Select defaultValue="work">
                                        <SelectTrigger id="address-type"><SelectValue /></SelectTrigger>
                                        <SelectContent><SelectItem value="work">Trabajo</SelectItem></SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Button variant="link" className="p-0"><PlusCircle className="mr-2 h-4 w-4"/> Agregar dirección</Button>
                        </div>
                   </FormSection>

                   <FormSection title="Etiquetas">
                       <div className="flex justify-end">
                           <Button variant="outline">Administrar etiquetas</Button>
                       </div>
                       <Alert className="mt-4">
                           <Info className="h-4 w-4" />
                           <AlertDescription>
                                Agregue hasta 50 etiquetas a un contacto para facilitar la búsqueda, el filtrado y la categorización. Las etiquetas aparecerán en el dashboard de un contacto, la sección de contactos relacionados en el dashboard de un asunto y los menús desplegables del selector de contactos.
                           </AlertDescription>
                       </Alert>
                       <div className="mt-4 space-y-1">
                           <Label htmlFor="contact-tags">Etiquetas de contacto</Label>
                           <Input id="contact-tags" placeholder="Buscar etiquetas de contacto" />
                       </div>
                   </FormSection>

                </div>

                <div className="lg:col-span-1 space-y-6">
                   <FormSection title="Campos personalizados">
                        <p className="text-sm text-muted-foreground mb-4">Acelere su flujo de trabajo creando conjuntos de campos personalizados para campos personalizados de uso frecuente.</p>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Agregar un campo personalizado..." /></SelectTrigger>
                            <SelectContent></SelectContent>
                        </Select>
                   </FormSection>
                    <FormSection title="Preferencias de facturación">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <Label htmlFor="payment-profile" className="flex items-center gap-1">Perfil de pago <Info className="h-3 w-3" /></Label>
                                <Select defaultValue="default">
                                    <SelectTrigger id="payment-profile"><SelectValue /></SelectTrigger>
                                    <SelectContent><SelectItem value="default">Default</SelectItem></SelectContent>
                                </Select>
                                <p className="text-xs text-muted-foreground">Período de gracia de 10 días, Sin descuento, 2.5% de interés anual cobrado cada 30 días.</p>
                            </div>
                            <div className="space-y-2">
                               <h3 className="font-semibold">Facturación por hora</h3>
                                <Button variant="link" className="p-0"><PlusCircle className="mr-2 h-4 w-4"/> Agregar una tarifa personalizada</Button>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="ledes-id" className="flex items-center gap-1">ID de cliente LEDES <Info className="h-3 w-3" /></Label>
                                <Input id="ledes-id" />
                            </div>
                        </div>
                   </FormSection>
                </div>
            </div>
             <div className="flex justify-end gap-2 mt-6">
                <Button>Guardar contacto</Button>
                <Button variant="secondary">Guardar y crear nuevo asunto</Button>
                <Link href="/clients/contacts">
                    <Button variant="ghost">Cancelar</Button>
                </Link>
            </div>
        </div>
    );
}
