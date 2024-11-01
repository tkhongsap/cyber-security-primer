import React from 'react';
import Section from '../common/Section';

const DataSecurity: React.FC = () => {
  return (
    <Section title="Data Security">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            Data security focuses on protecting sensitive information through encryption, access control mechanisms, and Data Loss Prevention (DLP) strategies.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Traditional Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Data was protected using static encryption methods and manual monitoring of access logs, which delayed detection of unauthorized activities.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> A company encrypts confidential data using traditional methods and manually reviews access logs, often missing real-time threats.</li>
            <li><strong>Benefit:</strong> Keeps data secure but lacks proactive monitoring capabilities.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">How AI Helps</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI enables real-time monitoring and provides intelligent data protection by rapidly identifying suspicious access attempts and predicting potential breaches.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> An AI-based system monitors access to sensitive data, alerting the security team or locking down data upon detecting unauthorized access attempts.</li>
            <li><strong>Benefit:</strong> Enhances data protection, speeds up threat detection, and minimizes risk.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key AI Techniques</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Monitoring Data Access: AI tracks who accesses data and flags suspicious behavior.</li>
            <li>Risk Prediction: AI predicts potential breaches and takes preemptive action.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key Measures for Success</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Data Breach Prevention Rate: Frequency of unauthorized access prevention.</li>
            <li>Anomaly Detection Accuracy: Precision in identifying and mitigating threats.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default DataSecurity; 