import React from "react";

type TopicSectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const TopicSection = ({ title, description, children }: TopicSectionProps) => {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500 mt-4 md:w-1/2">{description}</p>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3 sm:grid-cols-2">
        {children}
      </div>
    </section>
  );
};

export default TopicSection;
