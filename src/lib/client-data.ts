
export type ClientWorkItem = {
  id: string;
  title: string;
  status: 'Open' | 'Quote Requested' | 'Closing' | 'Active' | 'Planned';
  age?: string;
  contact?: string;
  value?: string;
  salesperson?: string;
  budget?: number;
  budgetTarget?: number;
  manager?: string;
};

export type ClientData = {
    requests: ClientWorkItem[];
    sales: ClientWorkItem[];
    projects: ClientWorkItem[];
};

export const clientData: ClientData = {
    requests: [
        { id: 'REQ-001', title: 'Additional Landing Page - Quote question?', status: 'Open', age: '72 days', contact: 'Alex L' },
        { id: 'REQ-002', title: 'Login Error', status: 'Open', age: '72 days', contact: 'Drew B' },
    ],
    sales: [
        { id: 'SALE-001', title: 'Website Maintenance', status: 'Quote Requested', value: '$25,000', salesperson: 'Siobhan C' },
        { id: 'SALE-002', title: 'Campaign Opportunity', status: 'Closing', value: '$20,000', salesperson: 'Maggie I' },
        { id: 'SALE-003', title: 'Website Design', status: 'Quote Requested', value: '$25,100', salesperson: 'Ade A' },
    ],
    projects: [
        { id: 'PROJ-001', title: 'Video Project', status: 'Active', budget: 9640, budgetTarget: 21800, manager: 'Ade A' },
        { id: 'PROJ-002', title: 'New Product Visual', status: 'Active', budget: 8262, budgetTarget: 25000, manager: 'Whitney L' },
        { id: 'PROJ-003', title: 'Web Development Project', status: 'Active', budget: 5940, budgetTarget: 25000, manager: 'Siobhan C' },
        { id: 'PROJ-004', title: 'Branding Strategy', status: 'Planned', budget: 0, budgetTarget: 20000, manager: 'Maggie I' },
    ]
};
