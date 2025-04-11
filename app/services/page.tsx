import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Home Renovations',
    description: 'Transform your living spaces with our comprehensive renovation services, from kitchen and bathroom remodels to full home makeovers.',
    icon: '🏠',
  },
  {
    title: 'Custom Furniture',
    description: 'Get bespoke furniture pieces designed and crafted specifically for your space and style preferences.',
    icon: '🪑',
  },
  {
    title: 'Interior Design',
    description: 'Our professional designers will help you create beautiful and functional interior spaces that reflect your personality and lifestyle.',
    icon: '🎨',
  },
  {
    title: 'Smart Home Solutions',
    description: 'Upgrade your home with the latest smart technology for improved convenience, security, and energy efficiency.',
    icon: '💡',
  },
  {
    title: 'Outdoor Living',
    description: 'Extend your living space outdoors with custom decks, patios, and landscaping that complement your home.',
    icon: '🌳',
  },
  {
    title: 'Maintenance Services',
    description: 'Keep your home in top condition with our regular maintenance services, addressing issues before they become problems.',
    icon: '🔧',
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Discover our range of premium home solutions designed to enhance your living space and improve your quality of life.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link 
              href="/contact" 
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="bg-secondary/50 rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-lg mb-8">
            Contact us today for a consultation and discover how we can bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="bg-primary text-white font-medium px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 