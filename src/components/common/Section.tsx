import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="prose max-w-none">
        {children}
      </div>
    </section>
  );
};

export default Section; 