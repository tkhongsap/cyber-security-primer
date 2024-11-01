import React from 'react';
import Section from '../common/Section';

const ApplicationSecurity: React.FC = () => {
  return (
    <Section title="Application Security">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            Application security involves securing software throughout its lifecycle, from development to deployment. This includes following secure coding practices, conducting regular updates, and implementing application firewalls.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Traditional Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Developers conducted manual code reviews and periodic penetration testing to identify vulnerabilities, which was labor-intensive and often missed subtle issues.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> A development team manually reviews application code for common security flaws. Although this approach catches major issues, it is time-consuming and error-prone.</li>
            <li><strong>Benefit:</strong> Helps identify basic vulnerabilities but lacks efficiency and accuracy, especially in complex systems.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">How AI Helps</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI automates the detection of vulnerabilities and assists developers in implementing security best practices.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Use Case:</strong> An AI-powered tool scans the codebase for potential flaws and provides recommendations, enabling teams to address issues before deployment.</li>
            <li><strong>Benefit:</strong> Reduces human error, accelerates development, and improves the security of applications.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key AI Techniques</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Automated Code Scanning: AI analyzes code for security risks, reducing manual effort.</li>
            <li>Simulated Penetration Testing: AI performs tests to simulate real-world attacks, identifying weaknesses.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Key Measures for Success</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Vulnerability Detection Rate: The ability of AI tools to identify and highlight security issues.</li>
            <li>Time to Remediation: Average time taken to resolve identified vulnerabilities.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ApplicationSecurity;