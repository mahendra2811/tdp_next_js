import GTMTester from '@/components/analytics/GTMTester';
import Link from 'next/link';
import DataLayerDebuggerInit from '@/components/analytics/DataLayerDebuggerInit';

export const metadata = {
  title: 'Google Tag Manager Test Page',
  description: 'A page to test Google Tag Manager implementation',
};

export default function GTMTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Google Tag Manager Test Page</h1>
        
        <p className="mb-4">
          This page is designed to test the Google Tag Manager implementation. Use the test panel below
          to trigger events and verify they are being tracked correctly in Google Tag Manager.
        </p>
        
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">How to Verify GTM Implementation</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open Google Tag Manager and enter preview mode for this website</li>
            <li>Use the buttons in the test panel below to trigger events</li>
            <li>Verify that the events appear in the Google Tag Manager preview panel</li>
            <li>Check the browser console for dataLayer events</li>
          </ol>
        </div>
        
        <GTMTester />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Additional Testing</h2>
          <p className="mb-4">
            You can also test page view tracking by navigating between pages:
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/"
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            >
              Home Page
            </Link>
            
            <Link 
              href="/about"
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            >
              About Page
            </Link>
            
            <Link 
              href="/contact"
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
        
        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">DataLayer Debugger</h2>
          <p className="mb-4">
            Use the following commands in your browser console to debug the dataLayer:
          </p>
          
          <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto">
            <div className="mb-2">{/* Initialize the debugger */}
              Initialize the debugger:
            </div>
            <div className="mb-4">gtmDebug.init()</div>
            
            <div className="mb-2">{/* Get current dataLayer state */}
              Get current dataLayer state:
            </div>
            <div className="mb-4">gtmDebug.getState()</div>
            
            <div className="mb-2">{/* Push a test event */}
              Push a test event:
            </div>
            <div>gtmDebug.pushTestEvent(&apos;custom_test&apos;, &#123;&apos;property&apos;: &apos;value&apos;&#125;)</div>
          </div>
          
          <DataLayerDebuggerInit />
        </div>
        
        <div className="mt-8 p-4 border-t pt-4">
          <h2 className="text-xl font-semibold mb-3">Documentation</h2>
          <p>
            For more information on how Google Tag Manager has been implemented in this project,
            please refer to the <code className="bg-gray-100 px-1 py-0.5 rounded">docs/google-tag-manager.md</code> file.
          </p>
        </div>
      </div>
    </div>
  );
}
