import React, { useState } from 'react';
import { ShieldCheckIcon, LockClosedIcon, ChartBarIcon, ExclamationTriangleIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Abstract from './components/sections/Abstract';
import NetworkSecurity from './components/sections/NetworkSecurity';
import EndpointSecurity from './components/sections/EndpointSecurity';
import ApplicationSecurity from './components/sections/ApplicationSecurity';
import DataSecurity from './components/sections/DataSecurity';
import IncidentResponse from './components/sections/IncidentResponse';
import References from './components/sections/References';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('abstract');

  const sections = [
    { id: 'abstract', title: 'Abstract', icon: <ShieldCheckIcon className="w-5 h-5" />, component: Abstract },
    { id: 'network-security', title: 'Network Security', icon: <ChartBarIcon className="w-5 h-5" />, component: NetworkSecurity },
    { id: 'endpoint-security', title: 'Endpoint Security', icon: <LockClosedIcon className="w-5 h-5" />, component: EndpointSecurity },
    { id: 'application-security', title: 'Application Security', icon: <ShieldCheckIcon className="w-5 h-5" />, component: ApplicationSecurity },
    { id: 'data-security', title: 'Data Security', icon: <LockClosedIcon className="w-5 h-5" />, component: DataSecurity },
    { id: 'incident-response', title: 'Incident Response', icon: <ExclamationTriangleIcon className="w-5 h-5" />, component: IncidentResponse },
    { id: 'references', title: 'References', icon: <BookOpenIcon className="w-5 h-5" />, component: References }
  ];

  const CurrentSection = sections.find(section => section.id === selectedSection)?.component || Abstract;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          AI for Effective Cybersecurity: A Management Primer
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <nav className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                    selectedSection === section.id
                      ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {section.icon}
                  <span className="ml-3 font-medium">{section.title}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <CurrentSection />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;