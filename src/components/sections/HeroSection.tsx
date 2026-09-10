import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import ImageGallery from '../ui/ImageGallery';

export default function HeroSection() {
  return (

    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Placeholder */}
      
      <div className="absolute inset-0 w-full h-full">
        <ImageGallery />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4">

        <div className="text-center">

          <p className="text-gray-700 font-semibold mb-4">
            WELCOME TO OUR WEBSITE
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            We Build Digital Solutions
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
            We help businesses transform their ideas into modern,
            reliable, and scalable digital products.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link href="/contact">
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </Link>

            <Link href="/about">
              <Button variant="outline" size="md">
                About Us
              </Button>
            </Link>

          </div>

        </div>

      </div>

    </section>

  );
}