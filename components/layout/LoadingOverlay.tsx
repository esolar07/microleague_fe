"use client";
import React from "react";

interface LoadingOverlayProps {
  text?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
          <img
            src="/microleague-sports-beta-logo.png"
            alt="Microleague Logo"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center animate-pulse">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
