import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function HeroSection() {
  return (

    <section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <p className="text-gray-600 font-semibold mb-4">
      WELCOME TO OUR WEBSITE
    </p>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
      We Build Digital Solutions
    </h1>

    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
      We help businesses transform their ideas into modern,
      reliable, and scalable digital products.
    </p>

    <div className="mt-8 flex justify-center gap-4">

      {/* Get Started Button */}
          <Link href="/contact">
            <Button
              variant="primary"
              size="md"
            >
              Get Started
            </Button>
          </Link>

      {/* About Us Button */}
      <Link href="/about">
      <Button 
        variant="outline"
        size='md'
        >
          About us
        </Button>
      </Link>

    </div>

  </div>
</section>

  );
}