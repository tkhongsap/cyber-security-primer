import React from 'react';
import Section from '../common/Section';

const EndpointSecurity: React.FC = () => {
  return (
    <Section title="Endpoint Security">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            Endpoint security focuses on safeguarding devices like laptops, smartphones, and servers connected to the network. It includes antivirus software, Endpoint Detection and Response (EDR), and device management protocols.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Traditional Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Organizations have relied on antivirus programs that scan for known malware signatures, necessitating frequent updates.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> An enterprise deploys traditional antivirus software to protect employee devices. While efficient at detecting familiar malware, it is less effective against emerging or unknown threats.</li>
            <li><strong>Benefit:</strong> Provides a foundational layer of protection but requires continuous maintenance and has limited defense against sophisticated threats.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">How AI Helps</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI enhances endpoint security by monitoring device behavior and recognizing threats in real-time, even without prior knowledge of specific malware.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> An AI-based EDR system observes device activities and detects unauthorized encryption attempts, isolating compromised devices to prevent further damage.</li>
            <li><strong>Benefit:</strong> Proactively prevents threats, shortens response times, and minimizes overall impact.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key AI Techniques</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Device Monitoring: AI continuously analyzes device behavior, detecting anomalies and suspicious activities.</li>
            <li>Threat Recognition: AI identifies signs of attacks, such as ransomware encrypting files, and intervenes immediately.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key Measures for Success</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Malware Detection Rate: Measures the system's effectiveness in identifying different types of malware.</li>
            <li>Time to Contain Threats: Tracks the duration from threat detection to containment.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default EndpointSecurity;