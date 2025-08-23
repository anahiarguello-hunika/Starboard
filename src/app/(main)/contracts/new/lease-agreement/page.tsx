
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
                 <div className="flex justify-end">
                    <Button>Generar Contrato</Button>
                </div>
            </div>
        </div>
    );
}
