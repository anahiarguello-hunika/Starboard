
'use client';

import { DollarSign } from "lucide-react";

export default function FinancialManagementPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
            <DollarSign className="h-8 w-8" />
            Gestión Financiera
        </h1>
        <p className="text-muted-foreground">
          Supervise y gestione las finanzas de su departamento legal.
        </p>
      </div>
       <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Contenido para Gestión Financiera
      </div>
    </div>
  );
}
