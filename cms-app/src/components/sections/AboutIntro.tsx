import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import ImageGallery from '../ui/ImageGallery';

export default function AboutIntro() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image Placeholder */}
          
          <div className="w-full h-80 rounded-2xl overflow-hidden">
            <ImageGallery />
          </div>


          {/* Content */}
          <div>

            <p className="text-gray-600 font-semibold mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Turning Ideas Into Reality
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              We are a passionate team of developers, designers,
              and technology experts focused on creating modern
              and reliable digital solutions.
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              Our goal is to understand our clients' needs and
              transform their ideas into simple, scalable, and
              user-friendly products.
            </p>

            {/* Button */}
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
              >
                Learn More
              </Button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}