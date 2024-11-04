import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const NetworkSecurity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Security</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-600">
              Network security encompasses the technologies, processes, and practices adopted to 
              protect networks, devices, programs, and data from attacks, damage, or unauthorized access.
            </p>
          </section>

          {/* Traditional Approach Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Traditional Approach</h3>
            <p className="text-gray-600 mb-4">
              Conventional network security relied on firewalls, IDS/IPS systems, and 
              manual analysis of network traffic patterns.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Use Case</h4>
                  <p className="text-sm text-gray-600">
                    Organizations using rule-based systems to detect and prevent network intrusions, 
                    often resulting in false positives and missed sophisticated attacks.
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
                    Provides basic protection against known threats and common attack patterns.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How AI Helps Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How AI Helps</h3>
            <p className="text-gray-600 mb-4">
              AI enhances network security through advanced threat detection, automated response, 
              and predictive analytics.
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
                      Pattern Recognition: AI identifies complex attack patterns in network traffic.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Automated Response: AI-driven systems automatically respond to threats in real-time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI Use Cases Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Use Cases</h3>
            <div className="bg-blue-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Real-Time Threat Detection</h4>
                  <p className="text-sm text-gray-600">
                    AI models analyze network traffic in real-time to detect threats and anomalies, enhancing detection speed and accuracy.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Automated Incident Response</h4>
                  <p className="text-sm text-gray-600">
                    AI systems automate threat responses, reducing the time to react and minimizing damage.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">User Behavior Analytics</h4>
                  <p className="text-sm text-gray-600">
                    AI tracks and analyzes user activities to detect abnormal behavior, helping to prevent insider threats.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Machine Learning Algorithms Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Machine Learning Algorithms</h3>
            <div className="bg-yellow-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Anomaly Detection</h4>
                  <p className="text-sm text-gray-600">
                    Isolation Forest, One-Class SVM, Autoencoders.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Automated Response</h4>
                  <p className="text-sm text-gray-600">
                    Reinforcement Learning, Decision Trees, Bayesian Networks.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">User Behavior Analytics</h4>
                  <p className="text-sm text-gray-600">
                    Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM), Hidden Markov Models (HMM).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Measures for Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Threat Detection Rate</h4>
                <p className="text-sm text-gray-600">
                  Speed and accuracy of identifying network threats.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Response Time</h4>
                <p className="text-sm text-gray-600">
                  Time taken to detect and respond to security incidents.
                </p>
              </div>
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkSecurity;
