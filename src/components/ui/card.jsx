import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
