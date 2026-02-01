import React from 'react';
import {
  Database,
  LayoutDashboard,
  Globe,
  Code,
  Smartphone,
  Settings
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Data Services',
    description:
      'Transform raw data into actionable insights with our comprehensive data engineering and analytics solutions.',
    icon: <Database className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Dashboard Design',
    description:
      'Create intuitive, real-time dashboards that empower your team to make data-driven decisions.',
    icon: <LayoutDashboard className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'Website Design',
    description:
      'Craft beautiful, user-centric websites that reflect your brand and convert visitors into customers.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: '4',
    title: 'Web Development',
    description:
      'Build robust, scalable web applications using modern frameworks and best practices.',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: '5',
    title: 'App Development',
    description:
      'Develop cross-platform mobile applications that deliver seamless user experiences.',
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: '6',
    title: 'Maintenance & Optimization',
    description:
      'Keep your systems running smoothly with ongoing support, updates, and performance optimization.',
    icon: <Settings className="w-6 h-6" />
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-16">
          <div>
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500 mb-4 block animate-fade-in">
              WHAT WE DO
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight animate-fade-in"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              Services built for growth
            </h2>
          </div>

          <div
            className="flex items-end animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We combine creativity with strategy to deliver solutions that not
              only look beautiful but drive{' '}
              <span className="italic">real business results.</span>
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-8 md:p-10 hover:bg-[#f0f7ff] transition-colors duration-300 animate-fade-in group"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="mb-6 text-black">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
