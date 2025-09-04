"use client";
import React from "react";

interface LoadingOverlayProps {
  text?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
          <img
            src="/microleague-sports-beta-logo.png"
            alt="Microleague Logo"
            className="w-full h-full object-contain animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          />
        </div>
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center animate-pulse">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
