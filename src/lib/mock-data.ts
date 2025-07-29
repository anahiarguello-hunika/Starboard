export type Contract = {
  id: string;
  name: string;
  status: "Activo" | "Borrador" | "Expirado" | "Terminado";
  riskLevel: "Bajo" | "Medio" | "Alto";
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
  vertical: "Corporativo" | "PI" | "Litigios" | "Comercial";
  status: "Por Hacer" | "En Progreso" | "Hecho" | "Bloqueado";
  dueDate: string;
};

export type Document = {
  id: string;
  name: string;
  type: "Acuerdo" | "NDA" | "Política" | "Minuta" | "Presentación";
  version: number;
  lastUpdated: string;
  status: "Borrador" | "En Revisión" | "Aprobado";
};

export type Project = {
  id: string;
  name: string;
  client: string;
  status: "Activo" | "Cerrado" | "En Espera";
  leadAttorney: string;
  openDate: string;
  documentCount: number;
  contractCount: number;
};

export type Entity = {
  id: string;
  name: string;
  type: "LLC" | "Corporación" | "Sociedad" | "Empresa Individual";
  jurisdiction: string;
  status: "Activa" | "Disuelta" | "En Regla";
  incorporationDate: string;
};

export const contractsData: Contract[] = [
  {
    id: "CTR-001",
    name: "Acuerdo Marco de Servicios",
    status: "Activo",
    riskLevel: "Medio",
    renewalDate: "2025-08-15",
    counterparty: "Innovate Inc.",
  },
  {
    id: "CTR-002",
    name: "Acuerdo de Licencia de Software",
    status: "Activo",
    riskLevel: "Bajo",
    renewalDate: "2024-12-31",
    counterparty: "Tech Solutions LLC",
  },
  {
    id: "CTR-003",
    name: "Acuerdo de No Divulgación",
    status: "Expirado",
    riskLevel: "Bajo",
    renewalDate: "2023-01-20",
    counterparty: "Stealth Startup",
  },
  {
    id: "CTR-004",
    name: "Contrato de Arrendamiento de Oficina",
    status: "Activo",
    riskLevel: "Alto",
    renewalDate: "2026-06-30",
    counterparty: "Downtown Properties",
  },
  {
    id: "CTR-005",
    name: "Acuerdo de Proveedor",
    status: "Borrador",
    riskLevel: "Medio",
    renewalDate: "2024-11-01",
    counterparty: "SupplyCo",
  },
  {
    id: "CTR-006",
    name: "Acuerdo de Asociación",
    status: "Terminado",
    riskLevel: "Alto",
    renewalDate: "2022-05-10",
    counterparty: "Synergy Partners",
  },
];

export const legalTasksData: LegalTask[] = [
  {
    id: "TSK-001",
    taskName: "Revisar NDA de Finanzas del Q3",
    assignedTo: { name: "Alice Johnson", avatar: "https://placehold.co/100x100" },
    vertical: "Corporativo",
    status: "En Progreso",
    dueDate: "2024-09-05",
  },
  {
    id: "TSK-002",
    taskName: "Presentar solicitud de marca 'Innovate'",
    assignedTo: { name: "Bob Williams", avatar: "https://placehold.co/100x100" },
    vertical: "PI",
    status: "Por Hacer",
    dueDate: "2024-09-20",
  },
  {
    id: "TSK-003",
    taskName: "Redactar respuesta a solicitud de descubrimiento",
    assignedTo: { name: "Charlie Brown", avatar: "https://placehold.co/100x100" },
    vertical: "Litigios",
    status: "Hecho",
    dueDate: "2024-08-28",
  },
  {
    id: "TSK-004",
    taskName: "Actualizar Manual del Empleado",
    assignedTo: { name: "Alice Johnson", avatar: "https://placehold.co/100x100" },
    vertical: "Corporativo",
    status: "Bloqueado",
    dueDate: "2024-10-01",
  },
  {
    id: "TSK-005",
    taskName: "Negociar términos para nuevo MSA de proveedor",
    assignedTo: { name: "Diana Prince", avatar: "https://placehold.co/100x100" },
    vertical: "Comercial",
    status: "En Progreso",
    dueDate: "2024-09-12",
  },
];

export const documentsData: Document[] = [
  {
    id: "DOC-001",
    name: "MSA_Innovate_Inc_Ejecutado.pdf",
    type: "Acuerdo",
    version: 3,
    lastUpdated: "2023-08-15",
    status: "Aprobado",
  },
  {
    id: "DOC-002",
    name: "Politica_Privacidad_v2.1.docx",
    type: "Política",
    version: 2,
    lastUpdated: "2024-07-01",
    status: "En Revisión",
  },
  {
    id: "DOC-003",
    name: "Minuta_Junta_Q2_2024.pdf",
    type: "Minuta",
    version: 1,
    lastUpdated: "2024-06-30",
    status: "Aprobado",
  },
  {
    id: "DOC-004",
    name: "NDA_Stealth_Startup_borrador.docx",
    type: "NDA",
    version: 1,
    lastUpdated: "2024-08-20",
    status: "Borrador",
  },
  {
    id: "DOC-005",
    name: "Presentacion_Patente_PX-101.pdf",
    type: "Presentación",
    version: 4,
    lastUpdated: "2024-05-18",
    status: "Aprobado",
  },
];

export const projectsData: Project[] = [
  {
    id: "PROJ-001",
    name: "Adquisición de TechCorp",
    client: "Innovate Inc.",
    status: "Activo",
    leadAttorney: "Alice Johnson",
    openDate: "2024-03-15",
    documentCount: 42,
    contractCount: 5,
  },
  {
    id: "PROJ-002",
    name: "Financiamiento Serie A",
    client: "Stbd Law",
    status: "Activo",
    leadAttorney: "Charlie Brown",
    openDate: "2024-05-01",
    documentCount: 15,
    contractCount: 8,
  },
    {
    id: "PROJ-003",
    name: "Litigio de Patentes vs. CompetitorX",
    client: "Stbd Law",
    status: "Activo",
    leadAttorney: "Diana Prince",
    openDate: "2023-11-10",
    documentCount: 256,
    contractCount: 2,
  },
  {
    id: "PROJ-004",
    name: "Arrendamiento Inmobiliario - Oficina SF",
    client: "Stbd Law",
    status: "Cerrado",
    leadAttorney: "Bob Williams",
    openDate: "2022-06-01",
    documentCount: 23,
    contractCount: 1,
  },
   {
    id: "PROJ-005",
    name: "Revisión de Cumplimiento GDPR",
    client: "Stbd Law",
    status: "En Espera",
    leadAttorney: "Alice Johnson",
    openDate: "2024-06-20",
    documentCount: 8,
    contractCount: 0,
  },
];

export const entitiesData: Entity[] = [
  {
    id: "ENT-001",
    name: "Stbd Law Platform, Inc.",
    type: "Corporación",
    jurisdiction: "Delaware",
    status: "En Regla",
    incorporationDate: "2022-01-15",
  },
  {
    id: "ENT-002",
    name: "Innovate Holdings, LLC",
    type: "LLC",
    jurisdiction: "Wyoming",
    status: "Activa",
    incorporationDate: "2021-05-20",
  },
  {
    id: "ENT-003",
    name: "Synergy Partners",
    type: "Sociedad",
    jurisdiction: "California",
    status: "Activa",
    incorporationDate: "2020-11-01",
  },
  {
    id: "ENT-004",
    name: "Tech Innovations Co.",
    type: "Corporación",
    jurisdiction: "Delaware",
    status: "En Regla",
    incorporationDate: "2019-03-10",
  },
  {
    id: "ENT-005",
    name: "Legacy Ventures",
    type: "Corporación",
    jurisdiction: "New York",
    status: "Disuelta",
    incorporationDate: "2015-08-25",
  },
];
