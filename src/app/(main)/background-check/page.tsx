
'use client';

import {
    ChevronRight
} from "lucide-react";


export default function BackgroundCheckPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Background check</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Background check
        </h1>
         <p className="text-muted-foreground">
            Realice verificaciones de antecedentes de personas y empresas.
        </p>
      </div>
      <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Contenido para Background check
      </div>
    </div>
  );
}
