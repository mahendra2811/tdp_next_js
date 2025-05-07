'use client';

import { useState } from 'react';
import { trackEvent, trackButtonClick } from '@/utils/analytics';

export default function GTMTester() {
  const [testCount, setTestCount] = useState(0);

  const handleTestEvent = () => {
    trackEvent('test_event', {
      test_count: testCount + 1,
      timestamp: new Date().toISOString()
    });
    setTestCount(prev => prev + 1);
  };

  const handleTestButtonClick = () => {
    trackButtonClick('test_button', {
      location: 'gtm_tester',
      test_count: testCount + 1
    });
    setTestCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50 my-4">
      <h3 className="text-lg font-semibold mb-2">Google Tag Manager Test Panel</h3>
      <p className="text-sm text-gray-600 mb-4">
        Use these buttons to test if Google Tag Manager events are being tracked properly.
        Check the browser console and Google Tag Manager preview mode to verify.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleTestEvent}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Test Generic Event
        </button>
        
        <button
          onClick={handleTestButtonClick}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Test Button Click
        </button>
      </div>
      
      {testCount > 0 && (
        <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded text-green-800">
          Events triggered: {testCount}
        </div>
      )}
    </div>
  );
}