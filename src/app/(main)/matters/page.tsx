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
import { mattersData, type Matter } from "@/lib/mock-data";
import { Briefcase, FileText, Folder } from "lucide-react";

export default function MattersPage() {
  const getStatusVariant = (status: Matter["status"]) => {
    switch (status) {
      case "Active":
        return "default";
      case "Closed":
        return "secondary";
      case "On Hold":
        return "outline";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Matters
        </h1>
        <p className="text-muted-foreground">
          A central place for all your legal matters.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase /> All Matters
          </CardTitle>
          <CardDescription>
            A complete list of all active and closed matters.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Matter Name</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Lead Attorney</TableHead>
                <TableHead>Open Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mattersData.map((matter) => (
                <TableRow key={matter.id}>
                  <TableCell className="font-medium">{matter.name}</TableCell>
                  <TableCell>{matter.client}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(matter.status)}
                           className={matter.status === 'Active' ? 'bg-accent text-accent-foreground' : ''}>
                      {matter.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{matter.leadAttorney}</TableCell>
                  <TableCell>{matter.openDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
