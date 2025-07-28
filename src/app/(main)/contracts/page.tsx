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
import { contractsData, type Contract } from "@/lib/mock-data";
import { FileText } from "lucide-react";

export default function ContractsPage() {
  const getStatusVariant = (status: Contract["status"]) => {
    switch (status) {
      case "Active":
        return "default";
      case "Draft":
        return "secondary";
      case "Expired":
        return "outline";
      case "Terminated":
        return "destructive";
    }
  };

  const getRiskVariant = (risk: Contract["riskLevel"]) => {
    switch (risk) {
      case "Low":
        return "default";
      case "Medium":
        return "secondary";
      case "High":
        return "destructive";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Contract Management
        </h1>
        <p className="text-muted-foreground">
          Track statuses, identify risks, and monitor key dates for all your contracts.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText /> All Contracts
          </CardTitle>
          <CardDescription>
            A complete list of all managed legal contracts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract Name</TableHead>
                <TableHead>Counterparty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Renewal Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contractsData.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell className="font-medium">{contract.name}</TableCell>
                  <TableCell>{contract.counterparty}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(contract.status)}
                           className={contract.status === 'Active' ? 'bg-accent text-accent-foreground' : ''}>
                      {contract.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRiskVariant(contract.riskLevel)}>
                      {contract.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>{contract.renewalDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
