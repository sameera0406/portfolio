import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
