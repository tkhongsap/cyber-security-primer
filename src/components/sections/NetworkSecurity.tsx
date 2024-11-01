import React from 'react';
import Section from '../common/Section';

const NetworkSecurity: React.FC = () => {
  return (
    <Section title="Network Security">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            Network security aims to safeguard data as it travels across organizational networks. It involves using tools like firewalls, Intrusion Detection Systems (IDS), and secure network architectures to block unauthorized access and maintain data integrity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Traditional Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Historically, network security relied on rule-based firewalls and signature-based IDS, which required frequent updates and manual oversight.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> A signature-based IDS monitors network traffic for known malware signatures. While effective against known threats, it often fails to detect new attack methods, resulting in delayed responses and increased vulnerability.</li>
            <li><strong>Benefit:</strong> Provides basic protection but demands constant updates and manual intervention, which can lead to inefficiencies and limited adaptability.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">How AI Helps</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI revolutionizes network security through real-time monitoring and advanced pattern recognition. By analyzing vast amounts of traffic data, AI can swiftly detect and mitigate threats.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> An AI-driven system monitors network traffic, identifying anomalies such as unexpected data transfers or login attempts during unusual hours. The system can automatically block suspicious activity, minimizing response times and preventing data breaches.</li>
            <li><strong>Benefit:</strong> Enhances threat detection accuracy, reduces human intervention, and provides proactive network defense.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key AI Techniques</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Analyzing Patterns: AI algorithms assess traffic flow for irregularities that could signal malicious intent.</li>
            <li>Behavioral Learning: AI models learn normal network behavior, alerting teams to any deviations.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key Measures for Success</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Time to Detect and Respond: How quickly the system identifies and neutralizes threats.</li>
            <li>False Positive Rate: Evaluates the precision of AI in distinguishing real threats from benign activities.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default NetworkSecurity;