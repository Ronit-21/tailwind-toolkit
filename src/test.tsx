import React from 'react';

// Test Component with various Tailwind class patterns
const TestComponent = () => {
  const isActive = true;
  const isDisabled = false;
  const theme = 'dark';

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Basic static classes */}
      <div className="flex items-center justify-center p-4 m-2">
        <h1 className="text-2xl font-bold text-blue-500">Basic Classes</h1>
      </div>

      {/* Template literals */}
      <div className={`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-500'}`}>
        <p className="text-white">Template Literal</p>
      </div>

      {/* Complex conditional classes */}
      <div className={`
        flex items-center justify-between
        ${isActive ? 'bg-green-500' : 'bg-red-500'}
        ${isDisabled ? 'opacity-50' : 'opacity-100'}
      `}>
        <span className="text-white">Complex Conditional</span>
      </div>

      {/* Multiple conditions */}
      <button className={`
        px-4 py-2 rounded-lg
        ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
        ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        hover:bg-blue-600
      `}>
        Multiple Conditions
      </button>

      {/* Nested template literals */}
      <div className={`p-4 ${`${isActive ? 'bg-blue-500' : 'bg-gray-500'}`}`}>
        <p className="text-white">Nested Template</p>
      </div>

      {/* Classes with notes */}
      <div className="transform hover:scale-105 transition-transform">
        <p>Transform Classes</p>
      </div>

      <div className="hover:bg-blue-600 focus:ring-2 active:bg-blue-700">
        <p>Modifier Classes</p>
      </div>
    </div>
  );
};

export default TestComponent; 