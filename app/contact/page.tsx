import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12">
        Have questions or ready to start your project? Reach out to us and our team will get back to you as soon as possible.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="mt-1">
                  <a href="tel:+1-555-555-5555" className="text-gray-600 hover:text-gray-900">
                    +1 (555) 555-5555
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Email</h3>
                <p className="mt-1">
                  <a href="mailto:info@example.com" className="text-gray-600 hover:text-gray-900">
                    info@example.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Address</h3>
                <p className="mt-1 text-gray-600">
                  123 Example Street<br />
                  City, State 12345<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Business Hours</h3>
                <div className="mt-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-secondary/30 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Note</h3>
            <p className="text-gray-600">
              This contact form is a placeholder. The actual design and functionality will be implemented
              based on the Figma design once it's confirmed by the client.
            </p>
          </div>
        </div>
      </div>
      
      {/* Map Section - To be replaced with actual map */}
      <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Map will be integrated here</p>
      </div>
    </div>
  );
} 