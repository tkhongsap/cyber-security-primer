import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Abstract = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Abstract</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-600">
            Cybersecurity has become vital as traditional security measures struggle against sophisticated cyberattacks. Artificial Intelligence (AI) 
            offers a transformative solution through advanced threat detection and adaptive response mechanisms. 
            By leveraging AI and Machine Learning algorithms to analyze vast datasets and identify patterns, organizations can proactively 
            strengthen their security infrastructure while reducing manual interventions.
            </p>
          </section>

          {/* Key Challenges Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h3>
            <p className="text-gray-600 mb-4">
              Organizations face increasingly sophisticated cyber threats while managing complex 
              digital infrastructures with limited resources.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Current Landscape</h4>
                  <p className="text-sm text-gray-600">
                    Traditional security measures struggle to keep pace with rapidly evolving threats 
                    and increasing attack sophistication.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Opportunity</h4>
                  <p className="text-sm text-gray-600">
                    AI presents opportunities to enhance security capabilities across multiple domains.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Impact Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Impact</h3>
            <p className="text-gray-600 mb-4">
              AI transforms cybersecurity through automated threat detection, predictive analytics, 
              and intelligent response mechanisms.
            </p>
            <p className="text-gray-600 mb-4">
              This book provides a comprehensive study of AI in cybersecurity, exploring the potential of various AI methods, such as machine learning modeling, deep learning modeling, data science processes, generative AI modeling, and natural language processing with large language modeling.
            </p>
            <p className="text-gray-600 mb-4">
              By leveraging these advanced AI techniques, organizations can achieve a more nuanced understanding of threat landscapes, enabling them to anticipate and mitigate risks more effectively. The integration of AI into cybersecurity frameworks facilitates a proactive rather than reactive stance, fostering resilience against emerging cyber threats.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Key Benefits</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Enhanced Detection: Improved identification of threats and vulnerabilities.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Automated Response: Faster and more effective incident handling.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Real-world Applications: Integration with IoT, smart cities, industrial control systems, critical infrastructures, cyber-physical systems, and digital twins.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Document Structure Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Document Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Content Organization</h4>
                <p className="text-sm text-gray-600">
                  Systematic coverage of key cybersecurity domains and AI applications.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Practical Focus</h4>
                <p className="text-sm text-gray-600">
                  Real-world examples and actionable insights for implementation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default Abstract;