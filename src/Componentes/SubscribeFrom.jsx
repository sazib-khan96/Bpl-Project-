import React from 'react';
import FooterForm from './FooterForm';

const SubscribeForm = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-12">
      <div className="w-full py-10 px-4 sm:px-8 md:py-16 rounded-3xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 text-center shadow-xl border border-amber-300/50">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Subscribe to our Newsletter
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-700 text-sm sm:text-base max-w-lg mx-auto">
          Get the latest updates and news right in your inbox!
        </p>

        {/* Form Container */}
        <div className="mt-6 flex justify-center">
          <FooterForm />
        </div>

      </div>
    </div>
  );
};

export default SubscribeForm;