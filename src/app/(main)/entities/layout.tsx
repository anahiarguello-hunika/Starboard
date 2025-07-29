

'use client';

import {
  AppWindow,
  ChevronDown,
  ChevronRight,
  Download,
  FilePlus,
  HeartHandshake,
  History,
  Landmark,
  LayoutDashboard,
  Library,
  Link2,
  Scale,
  Settings,
  Siren,
  Users,
  Wallet,
  AreaChart,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const entityNav = [
  { name: 'Dashboard', href: '#', icon: LayoutDashboard },
  { name: 'Resumen', href: '/entities/overview', icon: Users },
  { name: 'Recordatorios', href: '#', icon: Siren },
  { name: 'Gobernanza', href: '#', icon: Scale },
  { name: 'Delegaciones', href: '#', icon: HeartHandshake },
  { name: 'Propiedad', href: '#', icon: Landmark },
  { name: 'Intereses', href: '#', icon: Wallet },
  { name: 'UBO', href: '#', icon: Users },
  { name: 'Organigrama', href: '/entities/org-chart', icon: AreaChart },
  { name: 'Documentos', href: '#', icon: Library },
  { name: 'Financiero', href: '#', icon: Library },
  { name: 'Conexiones', href: '#', icon: Link2 },
  { name: 'Contactos', href: '#', icon: AppWindow },
  { name: 'Configuración', href: '#', icon: Settings },
];

export default function EntitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground font-headline pl-2">
          Acme NV/SA
        </h2>
        <nav className="flex flex-col gap-1">
          {entityNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:bg-muted hover:text-foreground',
                pathname === item.href ? 'bg-primary/10 text-primary' : ''
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
}
