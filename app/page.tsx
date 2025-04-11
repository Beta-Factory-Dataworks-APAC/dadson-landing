import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section - Will be replaced with Figma implementation */}
      <section className="w-full bg-gradient-to-r from-primary/90 to-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Home Solutions Tailored for You
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover how we can transform your living space into something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Section - Will be replaced with Figma implementation */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Dadson
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'We use only the finest materials and expert craftsmanship.',
                icon: '🏆'
              },
              {
                title: 'Tailored Solutions',
                description: 'Custom designs that perfectly match your vision and needs.',
                icon: '✨'
              },
              {
                title: 'Trusted Service',
                description: 'Our commitment to excellence has earned us countless satisfied clients.',
                icon: '🤝'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - Will be replaced with Figma implementation */}
      <section className="w-full bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a consultation and discover how we can bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="bg-primary text-white font-medium px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 