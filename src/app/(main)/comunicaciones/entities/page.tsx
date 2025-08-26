

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
    <h2 className="flex items-center gap-2 font-semibold mb-4 text-foreground">
      {icon}
      {title}
    </h2>
    <div className="space-y-3">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className="flex items-center justify-between p-4 bg-card hover:bg-muted rounded-lg transition-colors border"
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
        { href: '#', label: 'Entity information' },
        { href: '#', label: 'Stakeholders' },
      ],
    },
    {
      title: 'Securities',
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      links: [
        { href: '/entities/overview', label: 'Securities overview' },
        { href: '/entities/org-chart', label: 'Organisational chart' },
      ],
    },
    {
      title: 'Governance',
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
      links: [
        { href: '#', label: 'Governing bodies' },
        { href: '#', label: 'Board - Meeting minutes' },
      ],
    },
    {
      title: 'Documents',
      icon: <File className="h-5 w-5 text-muted-foreground" />,
      links: [
        { href: '#', label: 'Entity files' },
        { href: '#', label: 'Quarterly reporting' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight font-headline">
            Resumen de la Entidad
            </h1>
             <div className="relative">
                <select className="appearance-none bg-background border border-border rounded-md py-2 pl-3 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Acme NV/SA</option>
                    <option>Innovate Inc.</option>
                    <option>Tech Solutions LLC</option>
                </select>
                <ChevronRight className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
        </div>
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
