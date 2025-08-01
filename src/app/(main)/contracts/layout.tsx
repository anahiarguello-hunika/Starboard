
'use client';

import {
    LayoutDashboard,
    FileClock,
    UserCheck,
    FileCheck2,
    FileSignature,
    FileX2,
    Scale,
    ThumbsUp,
    ChevronDown
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React from "react";

const contractsNav = [
  { name: 'Dashboard', href: '/contracts', icon: LayoutDashboard },
  {
    name: 'Vencimientos',
    icon: FileClock,
    submenu: [
      { name: 'Expiran en 30 días', href: '/contracts/expiring-soon' },
      { name: 'Expiran en 90 días', href: '#' },
      { name: 'Expiran en 12 meses', href: '#' },
      { name: 'Expiran en más de 12 meses', href: '#' },
    ]
  },
  { name: 'Contratos Asignados a mí', href: '#', icon: UserCheck },
  { name: 'Aprobaciones', href: '#', icon: ThumbsUp },
  { name: 'Contratos por firmar', href: '#', icon: FileSignature },
  { name: 'Contratos Firmados', href: '#', icon: FileCheck2 },
  { name: 'Contratos Cancelados', href: '#', icon: FileX2 },
  { name: 'Contratos en litigio', href: '#', icon: Scale },
];


export default function ContractsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
             <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                 {contractsNav.map((item, index) => (
                    item.submenu ? (
                        <Collapsible defaultOpen={true} key={item.name}>
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors hover:bg-muted">
                                 <div className="flex items-center gap-3">
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-8">
                                <div className="flex flex-col gap-1 mt-1">
                                    {item.submenu.map(subItem => (
                                        <Link key={subItem.name} href={subItem.href || "#"} className={cn(
                                            'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-xs',
                                            pathname === subItem.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                                        )}>
                                            <span>{subItem.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ) : (
                        <Link key={item.name} href={item.href || "#"} className={cn(
                            'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                            pathname === item.href ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                        )}>
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                        </Link>
                    )
                ))}
            </nav>
        </div>
        <div className="flex flex-col gap-8">
            {children}
        </div>
    </div>
  );
}
