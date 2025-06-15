import React, { useState } from "react";

const ComplexTestComponent: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-4">
      <h1 className="text-white text-2xl font-bold mb-4">
        Complex Tailwind Test
      </h1>
      <div className="rounded-lg shadow-md bg-white p-4 m-2 w-full max-w-md">
        <p className="text-blue-500 mb-2">
          This is a card with multiple Tailwind classes.
        </p>
        <button
          className={`p-4 m-2 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-600 ${
            active ? "items-center" : "justify-center"
          }`}
          onClick={() => setActive((a) => !a)}
        >
          Toggle Active
        </button>
        <div className="flex mt-4 space-x-2">
          <span className="bg-blue-500 text-white p-2 rounded-lg shadow-md">
            Tag 1
          </span>
          <span className="bg-blue-500 text-white p-2 rounded-lg shadow-md">
            Tag 2
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComplexTestComponent;
