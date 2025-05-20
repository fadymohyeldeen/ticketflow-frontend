import React from "react";
import { FaTools } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <FaTools className="mx-auto h-16 w-16 text-blue-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Coming Soon</h2>
        <p className="text-gray-600 max-w-md">
          We're working hard to bring you this feature. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
