
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const InputField = ({ label, tooltip, className }: { label: string; tooltip: string; className?: string }) => (
    <div className={cn("space-y-1", className)}>
        <Label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="flex items-center gap-1 text-xs text-muted-foreground">
            {label} <Info className="h-3 w-3" />
        </Label>
        <Input id={label.toLowerCase().replace(/\s/g, '-')} />
    </div>
);

export default function LeaseAgreementPage() {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 font-headline">Contrato de Arrendamiento</h1>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Sección 1</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InputField label="NOMBRE ARRENDADOR" tooltip="Nombre completo del arrendador." />
                        <InputField label="REPRESENTANTE LEGAL ARRENDADOR" tooltip="Nombre del representante legal del arrendador." />
                        <InputField label="NOMBRE ARRENDATARIO" tooltip="Nombre completo del arrendatario." />
                        <InputField label="REPRESENTANTE LEGAL ARRENDATARIO" tooltip="Nombre del representante legal del arrendatario." />
                    </CardContent>
                     <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-0">
                         <div className="lg:col-span-2">
                             <InputField label="NOMBRE FIADOR Y OBLIGADO SOLIDARIO" tooltip="Nombre del fiador y obligado solidario." />
                         </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Sección 2</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
                        {/* Arrendador */}
                        <InputField label="Número Constitutiva Arrendador" tooltip="Número de la escritura pública constitutiva del arrendador." />
                        <InputField label="Fecha Constitutiva Arrendador" tooltip="Fecha de la escritura pública constitutiva del arrendador." />
                        <InputField label="Nombre Notario Constitutiva Arrendador" tooltip="Nombre del notario que dio fe de la escritura pública constitutiva del arrendador." />
                        <InputField label="Número Notaría Constitutiva Arrendador" tooltip="Número de la notaría donde se otorgó la escritura pública constitutiva del arrendador." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Constitutiva Arrendador" tooltip="Ciudad y estado donde ejerce el notario que dio fe de la escritura pública constitutiva del arrendador." />
                        <InputField label="Ciudad Registro Público de Comercio Constitutiva Arrendador" tooltip="Ciudad donde se encuentra la oficina registral donde se inscribió la escritura pública constitutiva del arrendador." />
                        <InputField label="Folio Mercantil Electrónico Arrendador" tooltip="Folio mercantil electrónico con el que quedó registrada la escritura pública constitutiva del arrendador." />
                        <InputField label="Fecha Folio Mercantil Electrónico Constitutiva Arrendador" tooltip="Fecha en que quedó registrada la escritura pública constitutiva del arrendador." />

                        <InputField label="Número Escritura Pública Apoderado Legal Arrendador" tooltip="Número de la escritura pública donde constan las facultades del apoderado legal del arrendador." />
                        <InputField label="Fecha Escritura Pública Apoderado Legal Arrendador" tooltip="Fecha de la escritura pública donde constan las facultades del apoderado legal del arrendador." />
                        <InputField label="Nombre Notario Escritura Pública Apoderado Legal Arrendador" tooltip="Nombre del notario que dio fe de la escritura pública donde constan las facultades del apoderado legal del arrendador." />
                        <InputField label="Número Notaría Escritura Pública Apoderado Legal Arrendador" tooltip="Número de la notaría donde se otorgó la escritura pública donde constan las facultades del apoderado legal del arrendador." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Escritura Pública Apoderado Legal Arrendador" tooltip="Ciudad y estado donde ejerce el notario que dio fe de la escritura pública donde constan las facultades del apoderado legal del arrendador." />
                        <InputField label="Ciudad Registro Público de Comercio Escritura Pública Apoderado Legal Arrendador" tooltip="Ciudad donde se encuentra la oficina registral donde se inscribió la escritura pública donde constan las facultades del apoderado legal del arrendador." />
                        <InputField label="Fecha Folio Mercantil Electrónico Escritura Pública Apoderado Legal Arrendador" tooltip="Fecha en que quedó registrada la escritura pública donde constan las facultades del apoderado legal del arrendador." />

                        {/* Inmueble */}
                        <InputField label="Domicilio Inmueble" tooltip="Domicilio completo del inmueble objeto del arrendamiento." />
                        <InputField label="Número Predial Inmueble" tooltip="Número de cuenta predial del inmueble." />
                        
                        <div className="lg:col-span-2"></div> {/* Spacer */}

                        {/* Arrendatario */}
                        <InputField label="Número Escritura Pública Constitutiva Arrendatario" tooltip="Número de la escritura pública constitutiva del arrendatario." />
                        <InputField label="Fecha Constitutiva Arrendatario" tooltip="Fecha de la escritura pública constitutiva del arrendatario." />
                        <InputField label="Nombre Notario Constitutiva Arrendatario" tooltip="Nombre del notario que dio fe de la escritura pública constitutiva del arrendatario." />
                        <InputField label="Número Notaría Constitutiva Arrendatario" tooltip="Número de la notaría donde se otorgó la escritura pública constitutiva del arrendatario." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Constitutiva Arrendatario" tooltip="Ciudad y estado donde ejerce el notario que dio fe de la escritura pública constitutiva del arrendatario." />
                        <InputField label="Ciudad Registro Público de Comercio Constitutiva Arrendatario" tooltip="Ciudad donde se encuentra la oficina registral donde se inscribió la escritura pública constitutiva del arrendatario." />
                        <InputField label="Folio Mercantil Electrónico Arrendatario" tooltip="Folio mercantil electrónico con el que quedó registrada la escritura pública constitutiva del arrendatario." />
                        <InputField label="Fecha Folio Mercantil Electrónico Constitutiva Arrendatario" tooltip="Fecha en que quedó registrada la escritura pública constitutiva del arrendatario." />

                        <InputField label="Número Escritura Pública Apoderado Legal Arrendatario" tooltip="Número de la escritura pública donde constan las facultades del apoderado legal del arrendatario." />
                        <InputField label="Fecha Escritura Pública Apoderado Legal Arrendatario" tooltip="Fecha de la escritura pública donde constan las facultades del apoderado legal del arrendatario." />
                        <InputField label="Nombre Notario Escritura Pública Apoderado Legal Arrendatario" tooltip="Nombre del notario que dio fe de la escritura pública donde constan las facultades del apoderado legal del arrendatario." />
                        <InputField label="Número Notaría Escritura Pública Apoderado Legal Arrendatario" tooltip="Número de la notaría donde se otorgó la escritura pública donde constan las facultades del apoderado legal del arrendatario." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Escritura Pública Apoderado Legal Arrendatario" tooltip="Ciudad y estado donde ejerce el notario que dio fe de la escritura pública donde constan las facultades del apoderado legal del arrendatario." />
                        <InputField label="Ciudad Registro Público de Comercio Apoderado Legal Arrendatario" tooltip="Ciudad donde se encuentra la oficina registral donde se inscribió la escritura pública donde constan las facultades del apoderado legal del arrendatario." />
                        <InputField label="Fecha Folio Mercantil Electrónico Escritura Pública Apoderado Legal Arrendatario" tooltip="Fecha en que quedó registrada la escritura pública donde constan las facultades del apoderado legal del arrendatario." />
                        
                        <div className="lg:col-span-2"></div> {/* Spacer */}

                        {/* Fiador */}
                        <InputField label="RFC Fiador y Obligado Solidario" tooltip="RFC del fiador y obligado solidario." />
                        <InputField label="CURP Fiador y Obligado Solidario" tooltip="CURP del fiador y obligado solidario." />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Sección 3</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InputField label="Cantidad Renta En Número" tooltip="Monto de la renta en número." />
                        <InputField label="Centavos Renta En Número" tooltip="Centavos de la renta en número." />
                        <InputField label="Cantidad Renta En Letra" tooltip="Monto de la renta en letra." />
                        <InputField label="Día Del Mes Pago Renta En Número" tooltip="Día del mes para el pago de la renta en número." />
                        <InputField label="Día Del Mes Pago Renta En Letra" tooltip="Día del mes para el pago de la renta en letra." />
                        <InputField label="Fecha Inicio de Pago Renta" tooltip="Fecha de inicio para el pago de la renta." />
                        <InputField label="Número Cuenta Bancaria Arrendador" tooltip="Número de cuenta bancaria del arrendador." />
                        <InputField label="CLABE Arrendador" tooltip="CLABE interbancaria del arrendador." />
                        <InputField label="Nombre Banco Arrendador" tooltip="Nombre del banco del arrendador." />
                        <InputField label="Correo Electrónico Arrendatario Para Facturas" tooltip="Correo electrónico del arrendatario para facturas." />
                        <InputField label="Cantidad Penalización Por Falta De Pago En Número" tooltip="Monto de la penalización por falta de pago en número." />
                        <InputField label="Centavos Penalización Por Falta De Pago En Número" tooltip="Centavos de la penalización por falta de pago en número." />
                        <InputField label="Cantidad Penalización Por Falta De Pago En Letra" tooltip="Monto de la penalización por falta de pago en letra." />
                        <InputField label="Vigencia Arrendamiento En Número" tooltip="Vigencia del arrendamiento en número." />
                        <InputField label="Vigencia Arrendamiento En Letra" tooltip="Vigencia del arrendamiento en letra." />
                        <InputField label="Duración Arrendamiento Días/Meses/Años" tooltip="Duración del arrendamiento en días, meses o años." />
                        <InputField label="Fecha Inicio Contrato" tooltip="Fecha de inicio del contrato." />
                        <InputField label="Fecha Terminación Contrato" tooltip="Fecha de terminación del contrato." />
                        <InputField label="Número De Meses Renta Para Depósito En Garantía" tooltip="Número de meses de renta para depósito en garantía." />
                        <InputField label="Cantidad Depósito En Garantía En Número" tooltip="Cantidad del depósito en garantía en número." />
                        <InputField label="Centavos Depósito En Garantía En Número" tooltip="Centavos del depósito en garantía en número." />
                        <InputField label="Cantidad Depósito En Garantía En Letra" tooltip="Cantidad del depósito en garantía en letra." />
                        <InputField label="Domicilio Para Notificaciones Arrendador" tooltip="Domicilio para notificaciones del arrendador." />
                        <InputField label="Nombre Contacto Para Notificaciones Arrendador" tooltip="Nombre del contacto para notificaciones del arrendador." />
                        <InputField label="Correo Electrónico Para Notificaciones Arrendador" tooltip="Correo electrónico para notificaciones del arrendador." />
                        <InputField label="Teléfono Para Notificaciones Arrendador" tooltip="Teléfono para notificaciones del arrendador." />
                        <InputField label="Domicilio Para Notificaciones Arrendatario" tooltip="Domicilio para notificaciones del arrendatario." />
                        <InputField label="Nombre Contacto Para Notificaciones Arrendatario" tooltip="Nombre del contacto para notificaciones del arrendatario." />
                        <InputField label="Correo Electrónico Para Notificaciones Arrendatario" tooltip="Correo electrónico para notificaciones del arrendatario." />
                        <InputField label="Teléfono Para Notificaciones Arrendatario" tooltip="Teléfono para notificaciones del arrendatario." />
                        <InputField label="Nombres De Representantes Revocables" tooltip="Nombres de los representantes revocables." />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Sección 4</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InputField label="Lugar De Firma" tooltip="Lugar donde se firma el contrato." />
                        <InputField label="Fecha De Firma" tooltip="Fecha de firma del contrato." />
                    </CardContent>
                </Card>
                 <div className="flex justify-end">
                    <Button>Generar Contrato</Button>
                </div>
            </div>
        </div>
    );
}
