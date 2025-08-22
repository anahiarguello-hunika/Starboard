
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
                 <div className="flex justify-end">
                    <Button>Generar Contrato</Button>
                </div>
            </div>
        </div>
    );
}
