import React from 'react';
import Link from 'next/link';

export default function AboutIntro() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/*  Image  */}
          <div className="h-80 md:h-96 bg-gray-200 rounded-2xl
                            flex items-center justify-center">

            <span className="text-gray-500 text-lg">
              Company Image
            </span>

          </div>


          {/* <!-- Content --> */}
          <div>

            <p className="text-blue-600 font-semibold mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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

            <a href="#"
              className="inline-block bg-blue-600 text-white
                              px-6 py-3 rounded-lg
                              hover:bg-blue-700 transition">
              Learn More
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}