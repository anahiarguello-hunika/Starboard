
'use client';

import {
    Briefcase,
    Building,
    DollarSign,
    Users,
    BrainCircuit,
    Package,
    FileText,
    ShieldCheck,
    Landmark,
    Server,
    Scale,
    FileCheck,
    FileType,
    Book,
    MoreHorizontal,
    LayoutDashboard,
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import React from "react";
import { redirect } from 'next/navigation';

export default function ComunicacionesDocumentsPage() {
  redirect('/comunicaciones/documents/dashboard');
}
