
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarIcon, Play, HelpCircle, X } from "lucide-react";

export default function TimeEntryPage() {
  return (
    <div className="flex justify-center items-start py-8">
      <Card className="w-full max-w-4xl">
        <CardHeader className="flex flex-row justify-between items-center">
            <div>
                <CardTitle className="text-xl font-headline">Editar entrada de tiempo</CardTitle>
            </div>
            <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
            </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="duration" className="flex items-center gap-1">
                        Duración <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </Label>
                    <div className="flex items-center gap-2">
                        <Input id="duration" defaultValue="0.0003h" />
                        <Button variant="outline" className="bg-white">
                            <Play className="h-4 w-4 mr-2" /> 00:00:01
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="activity-category">Categoría de actividad</Label>
                    <Select>
                        <SelectTrigger id="activity-category">
                            <SelectValue placeholder="Encuentra una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="reunion">Reunión</SelectItem>
                            <SelectItem value="redaccion">Redacción</SelectItem>
                            <SelectItem value="investigacion">Investigación</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea id="description" rows={11} />
                </div>
            </div>
            
            <div className="space-y-6">
                 <div className="space-y-2">
                    <Label htmlFor="matter">Proyecto</Label>
                    <Select>
                        <SelectTrigger id="matter">
                            <SelectValue placeholder="Encuentra un proyecto" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="proj-1">Proyecto Alfa</SelectItem>
                            <SelectItem value="proj-2">Proyecto Beta</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                 <div className="space-y-2">
                    <Label htmlFor="date">Fecha <span className="text-destructive">*</span></Label>
                    <div className="relative">
                        <Input id="date" type="text" defaultValue="19/08/2025" />
                        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                </div>
                
                 <div className="space-y-2">
                    <Label htmlFor="firm-user">Usuario de la firma <span className="text-destructive">*</span></Label>
                     <Select defaultValue="elias">
                        <SelectTrigger id="firm-user">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="elias">Elias Bardawil</SelectItem>
                             <SelectItem value="juan">Juan Perez</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                 <div className="space-y-2">
                    <Label htmlFor="rate" className="flex items-center gap-1">
                        Tarifa <span className="text-destructive">*</span> <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </Label>
                    <div className="flex items-center gap-2">
                        <Input id="rate" defaultValue="300.00" />
                        <span className="text-sm text-muted-foreground whitespace-nowrap">/ hr</span>
                        <Button variant="outline" size="sm" className="bg-white">Tarifa por defecto</Button>
                    </div>
                </div>
                
                <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2">
                         <Checkbox id="non-billable" />
                        <Label htmlFor="non-billable" className="font-normal flex items-center gap-1">
                            No facturable <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="show-on-bill" />
                        <Label htmlFor="show-on-bill" className="font-normal">Mostrar esta entrada en la factura</Label>
                    </div>
                </div>
            </div>

        </CardContent>
        <CardFooter className="flex justify-end gap-2">
            <Button>Guardar entrada</Button>
            <Button variant="outline" className="bg-white">Guardar y crear otra</Button>
            <Button variant="outline" className="bg-white">Guardar y duplicar</Button>
            <Button variant="outline" className="bg-white">Cancelar</Button>
            <Button variant="destructive">Eliminar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
