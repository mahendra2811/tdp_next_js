'use client';

import { useEffect } from 'react';
import { initDataLayerDebugger } from '@/utils/dataLayerDebugger';

export default function DataLayerDebuggerInit() {
  useEffect(() => {
    // Make the debugger available in the console
    if (typeof window !== 'undefined') {
      console.log('✅ GTM Debugger available. Type gtmDebug.init() to start debugging');
    }
  }, []);

  // This component doesn't render anything
  return null;
}