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
import { documentsData, type Document } from "@/lib/mock-data";
import { Folder } from "lucide-react";

export default function DocumentsPage() {
    const getStatusVariant = (status: Document['status']) => {
        switch (status) {
            case 'Approved':
                return 'default'
            case 'In Review':
                return 'secondary'
            case 'Draft':
                return 'outline'
        }
    }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Document Management
        </h1>
        <p className="text-muted-foreground">
          Upload, version, and control your legal documents.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Folder /> Document Library
          </CardTitle>
          <CardDescription>
            All documents stored in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentsData.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{doc.type}</Badge>
                  </TableCell>
                  <TableCell>v{doc.version}.0</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(doc.status)}
                           className={doc.status === 'Approved' ? 'bg-accent text-accent-foreground' : ''}>
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{doc.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
