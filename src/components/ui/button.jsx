import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`w-full px-4 py-2 
        bg-indigo-600 text-white 
        rounded-md 
        hover:bg-indigo-700 
        hover:text-white 
        hover:shadow-lg 
        hover:-translate-y-1 
        transform 
        transition duration-200 ease-in-out 
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
