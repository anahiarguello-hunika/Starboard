export type Contract = {
  id: string;
  name: string;
  status: "Active" | "Draft" | "Expired" | "Terminated";
  riskLevel: "Low" | "Medium" | "High";
  renewalDate: string;
  counterparty: string;
};

export type LegalTask = {
  id: string;
  taskName: string;
  assignedTo: {
    name: string;
    avatar: string;
  };
  vertical: "Corporate" | "IP" | "Litigation" | "Commercial";
  status: "To Do" | "In Progress" | "Done" | "Blocked";
  dueDate: string;
};

export type Document = {
  id: string;
  name: string;
  type: "Agreement" | "NDA" | "Policy" | "Minutes" | "Filing";
  version: number;
  lastUpdated: string;
  status: "Draft" | "In Review" | "Approved";
};

export type Matter = {
  id: string;
  name: string;
  client: string;
  status: "Active" | "Closed" | "On Hold";
  leadAttorney: string;
  openDate: string;
  documentCount: number;
  contractCount: number;
};


export const contractsData: Contract[] = [
  {
    id: "CTR-001",
    name: "Master Services Agreement",
    status: "Active",
    riskLevel: "Medium",
    renewalDate: "2025-08-15",
    counterparty: "Innovate Inc.",
  },
  {
    id: "CTR-002",
    name: "Software License Agreement",
    status: "Active",
    riskLevel: "Low",
    renewalDate: "2024-12-31",
    counterparty: "Tech Solutions LLC",
  },
  {
    id: "CTR-003",
    name: "Non-Disclosure Agreement",
    status: "Expired",
    riskLevel: "Low",
    renewalDate: "2023-01-20",
    counterparty: "Stealth Startup",
  },
  {
    id: "CTR-004",
    name: "Office Lease Agreement",
    status: "Active",
    riskLevel: "High",
    renewalDate: "2026-06-30",
    counterparty: "Downtown Properties",
  },
  {
    id: "CTR-005",
    name: "Vendor Agreement",
    status: "Draft",
    riskLevel: "Medium",
    renewalDate: "2024-11-01",
    counterparty: "SupplyCo",
  },
  {
    id: "CTR-006",
    name: "Partnership Agreement",
    status: "Terminated",
    riskLevel: "High",
    renewalDate: "2022-05-10",
    counterparty: "Synergy Partners",
  },
];

export const legalTasksData: LegalTask[] = [
  {
    id: "TSK-001",
    taskName: "Review Q3 Financials NDA",
    assignedTo: { name: "Alice Johnson", avatar: "https://placehold.co/100x100" },
    vertical: "Corporate",
    status: "In Progress",
    dueDate: "2024-09-05",
  },
  {
    id: "TSK-002",
    taskName: "File 'Innovate' Trademark Application",
    assignedTo: { name: "Bob Williams", avatar: "https://placehold.co/100x100" },
    vertical: "IP",
    status: "To Do",
    dueDate: "2024-09-20",
  },
  {
    id: "TSK-003",
    taskName: "Draft response to discovery request",
    assignedTo: { name: "Charlie Brown", avatar: "https://placehold.co/100x100" },
    vertical: "Litigation",
    status: "Done",
    dueDate: "2024-08-28",
  },
  {
    id: "TSK-004",
    taskName: "Update Employee Handbook",
    assignedTo: { name: "Alice Johnson", avatar: "https://placehold.co/100x100" },
    vertical: "Corporate",
    status: "Blocked",
    dueDate: "2024-10-01",
  },
  {
    id: "TSK-005",
    taskName: "Negotiate terms for new vendor MSA",
    assignedTo: { name: "Diana Prince", avatar: "https://placehold.co/100x100" },
    vertical: "Commercial",
    status: "In Progress",
    dueDate: "2024-09-12",
  },
];

export const documentsData: Document[] = [
  {
    id: "DOC-001",
    name: "MSA_Innovate_Inc_Executed.pdf",
    type: "Agreement",
    version: 3,
    lastUpdated: "2023-08-15",
    status: "Approved",
  },
  {
    id: "DOC-002",
    name: "Privacy_Policy_v2.1.docx",
    type: "Policy",
    version: 2,
    lastUpdated: "2024-07-01",
    status: "In Review",
  },
  {
    id: "DOC-003",
    name: "Board_Minutes_Q2_2024.pdf",
    type: "Minutes",
    version: 1,
    lastUpdated: "2024-06-30",
    status: "Approved",
  },
  {
    id: "DOC-004",
    name: "NDA_Stealth_Startup_draft.docx",
    type: "NDA",
    version: 1,
    lastUpdated: "2024-08-20",
    status: "Draft",
  },
  {
    id: "DOC-005",
    name: "Patent_Filing_PX-101.pdf",
    type: "Filing",
    version: 4,
    lastUpdated: "2024-05-18",
    status: "Approved",
  },
];

export const mattersData: Matter[] = [
  {
    id: "MAT-001",
    name: "Acquisition of TechCorp",
    client: "Innovate Inc.",
    status: "Active",
    leadAttorney: "Alice Johnson",
    openDate: "2024-03-15",
    documentCount: 42,
    contractCount: 5,
  },
  {
    id: "MAT-002",
    name: "Series A Financing",
    client: "Stbd Law",
    status: "Active",
    leadAttorney: "Charlie Brown",
    openDate: "2024-05-01",
    documentCount: 15,
    contractCount: 8,
  },
    {
    id: "MAT-003",
    name: "Patent Litigation vs. CompetitorX",
    client: "Stbd Law",
    status: "Active",
    leadAttorney: "Diana Prince",
    openDate: "2023-11-10",
    documentCount: 256,
    contractCount: 2,
  },
  {
    id: "MAT-004",
    name: "Real Estate Lease - SF Office",
    client: "Stbd Law",
    status: "Closed",
    leadAttorney: "Bob Williams",
    openDate: "2022-06-01",
    documentCount: 23,
    contractCount: 1,
  },
   {
    id: "MAT-005",
    name: "GDPR Compliance Overhaul",
    client: "Stbd Law",
    status: "On Hold",
    leadAttorney: "Alice Johnson",
    openDate: "2024-06-20",
    documentCount: 8,
    contractCount: 0,
  },
];
