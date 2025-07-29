
'use client';

import {
  Users,
  File,
  ChevronRight,
  Building,
  Scale,
  FileText,
  AreaChart,
} from 'lucide-react';
import Link from 'next/link';

const SectionCard = ({
  title,
  icon,
  links,
}: {
  title: string;
  icon: React.ReactNode;
  links: { href: string; label: string }[];
}) => (
  <div className="flex-1">
    <h2 className="flex items-center gap-2 font-semibold mb-4">
      {icon}
      {title}
    </h2>
    <div className="space-y-3">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className="flex items-center justify-between p-4 bg-muted/50 hover:bg-muted rounded-lg transition-colors"
        >
          <span>{link.label}</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      ))}
    </div>
  </div>
);

export default function EntityDashboardPage() {
  const sections = [
    {
      title: 'General',
      icon: <Building className="h-5 w-5 text-muted-foreground" />,
      links: [
        { href: '#', label: 'Información de la Entidad' },
        { href: '#', label: 'Interesados' },
      ],
    },
    {
      title: 'Valores',
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      links: [
        { href: '/entities/overview', label: 'Resumen de Valores' },
        { href: '/entities/org-chart', label: 'Organigrama' },
      ],
    },
    {
      title: 'Gobernanza',
      icon: <Scale className="h-5 w-5 text-muted-foreground" />,
      links: [
        { href: '#', label: 'Órganos de Gobierno' },
        { href: '#', label: 'Actas de Reuniones del Consejo' },
      ],
    },
    {
      title: 'Documentos',
      icon: <File className="h-5 w-5 text-muted-foreground" />,
      links: [
        { href: '#', label: 'Archivos de la Entidad' },
        { href: '#', label: 'Informes Trimestrales' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Resumen de la Entidad
        </h1>
      </div>
      <div className="flex gap-8">
        {sections.map((section) => (
          <SectionCard
            key={section.title}
            title={section.title}
            icon={section.icon}
            links={section.links}
          />
        ))}
      </div>
    </div>
  );
}
