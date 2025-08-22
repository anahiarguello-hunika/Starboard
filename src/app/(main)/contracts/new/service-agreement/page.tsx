
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import React from "react";

const InputField = ({ label, tooltip }: { label: string; tooltip: string; }) => (
    <div className="space-y-1">
        <Label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="flex items-center gap-1 text-xs text-muted-foreground">
            {label} <Info className="h-3 w-3" />
        </Label>
        <Input id={label.toLowerCase().replace(/\s/g, '-')} />
    </div>
);

export default function ServiceAgreementPage() {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 font-headline">Contrato de Prestación de Servicios (Cliente)</h1>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Sección 1</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InputField label="NOMBRE CLIENTE" tooltip="Nombre completo del cliente." />
                        <InputField label="REPRESENTANTE LEGAL CLIENTE" tooltip="Nombre del representante legal del cliente." />
                        <InputField label="NOMBRE PROVEEDOR" tooltip="Nombre completo del proveedor." />
                        <InputField label="REPRESENTANTE LEGAL PROVEEDOR" tooltip="Nombre del representante legal del proveedor." />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Sección 2</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
                        {/* Column 1 */}
                        <InputField label="Número Escritura Pública Constitutiva Cliente" tooltip="Número de la escritura pública constitutiva del cliente." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Constitutiva Cliente" tooltip="Ciudad y estado donde ejerce el notario de la constitutiva del cliente." />
                        <InputField label="Fecha Escritura Pública Apoderado Legal Cliente" tooltip="Fecha de la escritura pública del apoderado legal del cliente." />
                        <InputField label="Fecha Folio Mercantil Electrónico Escritura Pública Apoderado Legal Cliente" tooltip="Fecha del folio mercantil electrónico de la escritura del apoderado legal del cliente." />
                        <InputField label="Nombre Notario Constitutiva Proveedor" tooltip="Nombre del notario de la constitutiva del proveedor." />
                        <InputField label="Fecha Folio Mercantil Electrónico Constitutiva Proveedor" tooltip="Fecha del folio mercantil electrónico de la constitutiva del proveedor." />
                        <InputField label="Número Notaría Escritura Pública Apoderado Legal Proveedor" tooltip="Número de notaría de la escritura del apoderado legal del proveedor." />
                        
                        {/* Column 2 */}
                        <InputField label="Fecha Constitutiva Cliente" tooltip="Fecha de la constitutiva del cliente." />
                        <InputField label="Folio Mercantil Electrónico Cliente" tooltip="Folio mercantil electrónico del cliente." />
                        <InputField label="Nombre Notario Escritura Pública Apoderado Legal Cliente" tooltip="Nombre del notario de la escritura del apoderado legal del cliente." />
                        <InputField label="RFC Cliente" tooltip="RFC del cliente." />
                        <InputField label="Número Notaría Constitutiva Proveedor" tooltip="Número de notaría de la constitutiva del proveedor." />
                        <InputField label="Número Escritura Pública Apoderado Legal Proveedor" tooltip="Número de la escritura pública del apoderado legal del proveedor." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Escritura Pública Apoderado Legal Proveedor" tooltip="Ciudad y estado donde ejerce el notario de la escritura del apoderado legal del proveedor." />

                        {/* Column 3 */}
                        <InputField label="Nombre Notario Constitutiva Cliente" tooltip="Nombre del notario de la constitutiva del cliente." />
                        <InputField label="Fecha Folio Mercantil Electrónico Constitutiva Cliente" tooltip="Fecha del folio mercantil electrónico de la constitutiva del cliente." />
                        <InputField label="Número Notaría Escritura Pública Apoderado Legal Cliente" tooltip="Número de notaría de la escritura del apoderado legal del cliente." />
                        <InputField label="Número Escritura Pública Constitutiva Proveedor" tooltip="Número de la escritura pública constitutiva del proveedor." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Constitutiva Proveedor" tooltip="Ciudad y estado donde ejerce el notario de la constitutiva del proveedor." />
                        <InputField label="Fecha Escritura Pública Apoderado Legal Proveedor" tooltip="Fecha de la escritura pública del apoderado legal del proveedor." />
                        <InputField label="Fecha Folio Mercantil Electrónico Proveedor" tooltip="Fecha del folio mercantil electrónico del proveedor." />

                        {/* Column 4 */}
                        <InputField label="Número Notaría Constitutiva Cliente" tooltip="Número de notaría de la constitutiva del cliente." />
                        <InputField label="Número Escritura Pública Apoderado Legal Cliente" tooltip="Número de la escritura pública del apoderado legal del cliente." />
                        <InputField label="Ciudad y Estado Ejercicio Notario Escritura Pública Apoderado Legal Cliente" tooltip="Ciudad y estado donde ejerce el notario de la escritura del apoderado legal del cliente." />
                        <InputField label="Fecha Constitutiva Proveedor" tooltip="Fecha de la constitutiva del proveedor." />
                        <InputField label="Folio Mercantil Electrónico Proveedor" tooltip="Folio mercantil electrónico del proveedor." />
                        <InputField label="Nombre Notario Escritura Pública Apoderado Legal Proveedor" tooltip="Nombre del notario de la escritura del apoderado legal del proveedor." />
                        <InputField label="RFC Proveedor" tooltip="RFC del proveedor." />
                    </CardContent>
                </Card>
                 <div className="flex justify-end">
                    <Button>Generar Contrato</Button>
                </div>
            </div>
        </div>
    );
}
