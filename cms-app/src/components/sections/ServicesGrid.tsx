import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';

export default function ServicesGrid() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ServicesGrid
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover everything you need to know.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="pt-6 px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Item Title
                </h3>

                <p className="text-gray-500">
                  A brief description of this grid item goes here.
                  It provides enough detail to be useful.
                </p>
              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}