
'use client';

import {
    ChevronRight
} from "lucide-react";


export default function WealthManagementPage() {
  return (
    <div className="space-y-8">
       <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Wealth Management</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Personal Wealth Management
        </h1>
      </div>
      <div className="p-8 bg-muted/50 rounded-lg overflow-auto">
        Content for Personal Wealth Management
      </div>
    </div>
  );
}
