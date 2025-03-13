'use client';

import { useState } from 'react';
import AdminPanel from '../../components/AdminPanel';
import AdminAuthWrapper from '../../components/AdminAuthWrapper';

export default function AdminPage() {
  return (
    <AdminAuthWrapper>
      <h1>Whiskey Wizardry Admin</h1>
      <AdminPanel />
    </AdminAuthWrapper>
  );
}