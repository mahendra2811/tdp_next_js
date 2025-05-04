'use client';

import { usePathname } from 'next/navigation';
import JoinTeamButton from '@/components/common/JoinTeamButton';

export default function ContactJoinTeamButton() {
  const pathname = usePathname();
  
  // Don't show on book-now page
  if (pathname === '/book-now') return null;
  
  return <JoinTeamButton />;
}