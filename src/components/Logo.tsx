import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
        <img src="/src/components/logo.png" alt="Logo" className="h-6 w-6" /> {/* Your icon */}
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        1NE
      </span>
    </div>
  );
}
