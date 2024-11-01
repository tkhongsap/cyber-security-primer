import React from 'react';
import Section from '../common/Section';

const IncidentResponse: React.FC = () => {
  return (
    <Section title="Incident Response">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            Incident response strategies involve the detection, analysis, and mitigation of security breaches, aiming to minimize damage and restore normal operations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Traditional Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Incident investigations were manually conducted, with teams reviewing logs and reports, leading to delays and inefficiencies.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> An IT team manually examines alerts to determine the severity of a security breach, taking hours to respond.</li>
            <li><strong>Benefit:</strong> Provides a structured approach but is slow and susceptible to human error.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">How AI Helps</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI automates incident analysis, quickly assessing the severity of threats, and provides actionable insights, significantly reducing response time.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> An AI tool evaluates the scope of a breach, isolates affected systems, and generates a detailed report to guide recovery efforts.</li>
            <li><strong>Benefit:</strong> Minimizes damage, accelerates threat containment, and enhances future security strategies.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key AI Techniques</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Rapid Threat Response: AI identifies and contains threats in real-time.</li>
            <li>Incident Reporting: AI compiles comprehensive reports for post-incident analysis.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key Measures for Success</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Incident Detection Speed: Measures how fast the AI system identifies threats.</li>
            <li>Response and Recovery Time: Time taken to restore affected systems to full functionality.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default IncidentResponse; 