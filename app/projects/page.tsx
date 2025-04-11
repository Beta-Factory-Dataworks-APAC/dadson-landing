import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder projects - will be replaced with actual content
const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    description: 'A complete kitchen renovation with premium materials and smart appliances.',
    category: 'Kitchen',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    title: 'Luxury Bathroom Remodel',
    description: 'Transforming an outdated bathroom into a spa-like retreat with high-end fixtures.',
    category: 'Bathroom',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    title: 'Custom Home Office',
    description: 'A functional and stylish home office designed for productivity and comfort.',
    category: 'Office',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    title: 'Master Bedroom Suite',
    description: 'Creating a luxurious and relaxing master bedroom with custom storage solutions.',
    category: 'Bedroom',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    title: 'Outdoor Living Space',
    description: 'A beautiful deck and patio design that extends living space into the outdoors.',
    category: 'Outdoor',
    image: '/placeholder.jpg'
  },
  {
    id: 6,
    title: 'Full Home Renovation',
    description: 'A comprehensive renovation of an entire home, bringing modern amenities while preserving character.',
    category: 'Whole Home',
    image: '/placeholder.jpg'
  }
];

// Project categories for filtering
const categories = [
  'All',
  'Kitchen',
  'Bathroom',
  'Office',
  'Bedroom',
  'Outdoor',
  'Whole Home'
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Projects</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Explore our portfolio of completed projects and get inspired for your next home transformation.
      </p>
      
      {/* Filter Categories - To be implemented with client-side filtering */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 bg-gray-200">
              {/* Replace with actual project images */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p>Project Image</p>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={`/projects/${project.id}`}
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-secondary/50 rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
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