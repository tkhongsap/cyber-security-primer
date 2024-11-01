import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const DataSecurity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Security</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-600">
              Data security focuses on protecting sensitive information through encryption, 
              access control mechanisms, and Data Loss Prevention (DLP) strategies.
            </p>
          </section>

          {/* Traditional Approach Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Traditional Approach</h3>
            <p className="text-gray-600 mb-4">
              Data was protected using static encryption methods and manual monitoring of 
              access logs, which delayed detection of unauthorized activities.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Use Case</h4>
                  <p className="text-sm text-gray-600">
                    A company encrypts confidential data using traditional methods and 
                    manually reviews access logs, often missing real-time threats.
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
                    Keeps data secure but lacks proactive monitoring capabilities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How AI Helps Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How AI Helps</h3>
            <p className="text-gray-600 mb-4">
              AI enables real-time monitoring and provides intelligent data protection by 
              rapidly identifying suspicious access attempts and predicting potential breaches.
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
                      Monitoring Data Access: AI tracks who accesses data and flags suspicious behavior.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Risk Prediction: AI predicts potential breaches and takes preemptive action.
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
                <h4 className="text-sm font-medium text-gray-900 mb-2">Data Breach Prevention Rate</h4>
                <p className="text-sm text-gray-600">
                  Frequency of unauthorized access prevention.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Anomaly Detection Accuracy</h4>
                <p className="text-sm text-gray-600">
                  Precision in identifying and mitigating threats.
                </p>
              </div>
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSecurity; 