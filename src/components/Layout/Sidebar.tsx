import React from 'react';
import { NavLink } from 'react-router-dom';

export const navigation = [
  { name: 'Abstract', href: '/' },
  { name: 'Network Security', href: '/network-security' },
  { name: 'Endpoint Security', href: '/endpoint-security' },
  { name: 'Application Security', href: '/application-security' },
  { name: 'Data Security', href: '/data-security' },
  { name: 'Incident Response', href: '/incident-response' },
  { name: 'References', href: '/references' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-lg font-semibold text-gray-900">
                Cybersecurity Primer
              </h1>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 