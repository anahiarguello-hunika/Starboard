
import {
  AppWindow,
  Building2,
  ChevronRight,
  FileText,
  Folder,
  GanttChart,
  Grid,
  HeartHandshake,
  Landmark,
  Library,
  Link2,
  Scale,
  Settings,
  Siren,
  Users,
  Wallet,
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { entitiesData, type Entity } from "@/lib/mock-data";

export default function EntitiesPage() {
  const getStatusVariant = (status: Entity["status"]) => {
    switch (status) {
      case "Active":
        return "secondary";
      case "In Good Standing":
        return "default";
      case "Dissolved":
        return "destructive";
    }
  };

  const entityNav = [
    { name: "Overview", icon: Grid },
    { name: "Reminders", icon: Siren },
    { name: "Governance", icon: Scale },
    { name: "Delegations", icon: HeartHandshake },
    { name: "Ownership", icon: Landmark },
    { name: "Interests", icon: Wallet },
    { name: "UBO", icon: Users },
    { name: "Organisational chart", icon: GanttChart },
    { name: "Documents", icon: Folder },
    { name: "Financial", icon: Library },
    { name: "Connections", icon: Link2 },
    { name: "Contacts", icon: AppWindow },
    { name: "Settings", icon: Settings },
  ]

  return (
    <div className="grid grid-cols-[280px_1fr] gap-8 items-start">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground font-headline pl-2">
          Acme NV/SA
        </h2>
        <nav className="flex flex-col gap-1">
          {entityNav.map((item, index) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:bg-muted hover:text-foreground ${index === 0 ? 'bg-primary/10 text-primary' : ''}`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
            <Building2 />
            Entities
          </h1>
          <p className="text-muted-foreground">
            A central place to manage all your legal entities.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>All Entities</CardTitle>
            <CardDescription>
              A complete list of all managed legal entities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Entity Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Jurisdiction</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Incorporation Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entitiesData.map((entity) => (
                  <TableRow key={entity.id}>
                    <TableCell className="font-medium">{entity.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{entity.type}</Badge>
                    </TableCell>
                    <TableCell>{entity.jurisdiction}</TableCell>
                    <TableCell>
                      <Badge
                        variant={getStatusVariant(entity.status)}
                        className={
                          entity.status === 'In Good Standing'
                            ? 'bg-accent text-accent-foreground'
                            : ''
                        }
                      >
                        {entity.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{entity.incorporationDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
