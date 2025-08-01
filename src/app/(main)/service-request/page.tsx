
'use client';

import { redirect } from 'next/navigation';

export default function ServiceRequestRedirectPage() {
  redirect('/service-request/new');
  return null;
}
