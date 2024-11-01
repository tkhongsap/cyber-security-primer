import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const References = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>References</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Academic Publications Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <BookOpenIcon className="w-5 h-5 mr-2" />
              Academic Publications
            </h3>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Bautista Jr., W. (2018).</span> 
                  <em> Practical Cyber Intelligence: How Action-Based Intelligence Can Be an Effective Response to Incidents.</em> 
                  Packt Publishing.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Sarker, I. H. (2024).</span> 
                  <em> AI-Driven Cybersecurity and Threat Intelligence: Cyber Automation, Intelligent Decision-Making and Explainability.</em> 
                  Springer.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Unknown Author.</span> 
                  <em> Hands-On Artificial Intelligence for Cybersecurity: Implement Smart AI Systems for Preventing Cyber Attacks.</em> 
                  Packt Publishing.
                </p>
              </div>
            </div>
          </section>

          {/* Note Section */}
          <section className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Note:</span> These references provide comprehensive coverage 
              of both theoretical foundations and practical applications of AI in cybersecurity.
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default References; 