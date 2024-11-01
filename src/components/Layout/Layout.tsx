import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileMenu from './MobileMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout; 