
'use client';

import { Users, File, ChevronRight } from 'lucide-react';
import './org-chart.css';

const OrgChartNode = ({
  name,
  role,
  icon,
  percentage,
  isCompany,
  isMain,
  children,
}: {
  name: string;
  role: string;
  icon: React.ReactNode;
  percentage?: string;
  isCompany?: boolean;
  isMain?: boolean;
  children?: React.ReactNode;
}) => (
  <div className="org-node">
    <div className={`org-card ${isMain ? 'main-company' : ''}`}>
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
    {percentage && <div className="percentage-badge">{percentage}</div>}
    {children && <div className="org-children">{children}</div>}
  </div>
);

export default function OrgChartPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Acme NV/SA</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Organisational Chart</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Organisational Chart
        </h1>
      </div>
      <div className="org-chart-container p-8 bg-muted/50 rounded-lg overflow-auto">
        <div className="org-chart">
          {/* Top Level - Individuals */}
          <div className="org-level">
            <OrgChartNode
              name="Maarten POULUSSEN"
              role="BE"
              icon={<Users className="w-5 h-5 text-muted-foreground" />}
              percentage="15.79%"
            />
            <OrgChartNode
              name="Joe BROOKES"
              role="BE"
              icon={<Users className="w-5 h-5 text-muted-foreground" />}
              percentage="23.68%"
            />
            <OrgChartNode
              name="Andy KELLENS"
              role="BE"
              icon={<Users className="w-5 h-5 text-muted-foreground" />}
              percentage="21.06%"
            />
             <OrgChartNode
              name="Olivier VAN BORSEL"
              role="BE"
              icon={<Users className="w-5 h-5 text-muted-foreground" />}
              percentage="19.74%"
            />
             <OrgChartNode
              name="Claire HALE"
              role="BE"
              icon={<Users className="w-5 h-5 text-muted-foreground" />}
              percentage="19.74%"
            />
          </div>

          {/* Main Company */}
          <div className="org-level justify-center">
            <OrgChartNode
              name="ABC Consulting BVBA/SPRL"
              role="BE - 0641723492"
              icon={<File className="w-5 h-5 text-primary" />}
              isCompany
              isMain
            >
              {/* Sub Level 1 */}
              <div className="org-level">
                <OrgChartNode
                  name="Belgische STAK PSFP"
                  role="BE - 0041190911"
                  icon={<File className="w-5 h-5 text-primary" />}
                  percentage="1.00%"
                  isCompany
                />
                <OrgChartNode
                  name="KALO NV/SA"
                  role="BE - 067490316"
                  icon={<File className="w-5 h-5 text-primary" />}
                  percentage="0.08%"
                  isCompany
                >
                    {/* Sub Level 2 */}
                    <div className="org-level">
                         <OrgChartNode
                            name="F Company BV"
                            role="NL - 12345678"
                            icon={<File className="w-5 h-5 text-primary" />}
                            percentage="02.00%"
                            isCompany
                         />
                          <OrgChartNode
                            name="Ac NV/SA"
                            role="DE - 0523961534"
                            icon={<File className="w-5 h-5 text-primary" />}
                            percentage="0.38%"
                            isCompany
                         />
                          <OrgChartNode
                            name="Acme NV/SA"
                            role="DE - 0606447421"
                            icon={<File className="w-5 h-5 text-primary" />}
                            percentage="0.01%"
                            isCompany
                         />
                    </div>
                </OrgChartNode>
              </div>
            </OrgChartNode>
          </div>
        </div>
      </div>
    </div>
  );
}
