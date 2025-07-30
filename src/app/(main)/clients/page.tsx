
'use client';

export default function ClientsPage() {
  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Clientes
        </h1>
         <p className="text-muted-foreground">
            Gestiona la información de tus clientes.
        </p>
      </div>
      <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Contenido para Clientes
      </div>
    </div>
  );
}
