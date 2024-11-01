import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const EndpointSecurity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Endpoint Security</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-600">
              Endpoint security protects end-user devices such as desktops, laptops, and mobile devices 
              from cybersecurity threats and unauthorized access.
            </p>
          </section>

          {/* Traditional Approach Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Traditional Approach</h3>
            <p className="text-gray-600 mb-4">
              Traditional endpoint security relied on signature-based antivirus software and 
              basic device management policies.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Use Case</h4>
                  <p className="text-sm text-gray-600">
                    Organizations using standard antivirus solutions that only detect known malware 
                    signatures, leaving systems vulnerable to zero-day attacks.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Benefit</h4>
                  <p className="text-sm text-gray-600">
                    Effective against known threats with established signatures.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How AI Helps Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How AI Helps</h3>
            <p className="text-gray-600 mb-4">
              AI transforms endpoint security through behavioral analysis, predictive threat detection, 
              and automated response mechanisms.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Key AI Techniques</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Behavioral Analysis: AI monitors and learns normal device behavior patterns.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Zero-Day Detection: AI identifies previously unknown threats through pattern analysis.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Measures for Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Endpoint Protection Rate</h4>
                <p className="text-sm text-gray-600">
                  Percentage of successfully blocked threats and attacks.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">False Positive Rate</h4>
                <p className="text-sm text-gray-600">
                  Accuracy in distinguishing between legitimate and malicious activity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default EndpointSecurity;