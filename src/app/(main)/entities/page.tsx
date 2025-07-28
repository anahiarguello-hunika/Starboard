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
import { Building2 } from "lucide-react";

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

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Entity Management
        </h1>
        <p className="text-muted-foreground">
          A central place to manage all your legal entities.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 /> All Entities
          </CardTitle>
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
                    <Badge variant={getStatusVariant(entity.status)}
                           className={entity.status === 'In Good Standing' ? 'bg-accent text-accent-foreground' : ''}>
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
  );
}
