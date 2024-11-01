import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const IncidentResponse = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Incident Response</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-600">
              Incident response involves the systematic approach to managing the aftermath of 
              security breaches or cyberattacks, aiming to minimize damage and reduce recovery time.
            </p>
          </section>

          {/* Traditional Approach Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Traditional Approach</h3>
            <p className="text-gray-600 mb-4">
              Traditional incident response relied on manual investigation processes and 
              predefined playbooks for handling security incidents.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Use Case</h4>
                  <p className="text-sm text-gray-600">
                    Security teams following standard procedures to investigate and respond 
                    to incidents, often taking hours or days to resolve issues.
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
                    Structured approach to incident handling with documented procedures.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How AI Helps Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How AI Helps</h3>
            <p className="text-gray-600 mb-4">
              AI accelerates incident response through automated analysis, intelligent triage, 
              and predictive incident management.
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
                      Automated Triage: AI prioritizes and categorizes incidents automatically.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Intelligent Response: AI suggests or implements response actions based on analysis.
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
                <h4 className="text-sm font-medium text-gray-900 mb-2">Mean Time to Detect (MTTD)</h4>
                <p className="text-sm text-gray-600">
                  Time between incident occurrence and detection.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Mean Time to Respond (MTTR)</h4>
                <p className="text-sm text-gray-600">
                  Time taken to contain and resolve security incidents.
                </p>
              </div>
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncidentResponse; 