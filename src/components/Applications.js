import React from 'react';
import { HeartPulse } from 'lucide-react';  // Replace with a valid icon

const Applications = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Applications of AI in Healthcare</h2>

      <div className="space-y-8">
        {/* Healthcare AI */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <HeartPulse className="mr-2" size={24} />  {/* Correct icon */}
            AI in Healthcare
          </h3>
          <p className="text-gray-700 mb-4">
            AI is transforming healthcare through advanced diagnostics, personalized medicine, and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Applications;
