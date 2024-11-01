import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  setMobileMenuOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          AI for Effective Cybersecurity: A Management Primer
        </h1>
        <button
          type="button"
          className="md:hidden -mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header; 