import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">About Dadson</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Dadson is a premium provider of home solutions dedicated to transforming living spaces
          with quality craftsmanship and exceptional service.
        </p>
        
        <p className="mb-6">
          Our mission is to create beautiful, functional spaces that exceed our clients' expectations.
          With years of experience in the industry, we understand the importance of attention to detail
          and personalized service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
        <p className="mb-6">
          Founded in [year], Dadson began with a simple vision: to provide homeowners with
          premium solutions that combine aesthetics with functionality. Over the years, we've grown
          from a small local business to a trusted name in home improvement, serving clients
          across [region/area].
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
        <p className="mb-6">
          We believe in a collaborative approach, working closely with our clients to understand
          their needs and preferences. Our team of skilled professionals is committed to delivering
          excellence at every stage of the project, from initial consultation to final implementation.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Quality materials and expert craftsmanship</li>
          <li className="mb-2">Personalized solutions tailored to your specific needs</li>
          <li className="mb-2">Transparent pricing with no hidden costs</li>
          <li className="mb-2">Timely completion of projects</li>
          <li className="mb-2">Exceptional customer service</li>
        </ul>
        
        <p className="mt-8">
          At Dadson, we're more than just service providers—we're partners in creating
          the home of your dreams. Contact us today to discover how we can transform your space.
        </p>
      </div>
    </div>
  );
} 