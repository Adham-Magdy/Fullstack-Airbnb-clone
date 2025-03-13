"use client";
import React from "react";

const Modals: React.FC = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black/60 z-50">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto mx-auto">
        <div
          className={`transition duration-600 h-full transform-y-0 opacity-100 `}
        >
          <div className="w-full h-auto relative flex flex-col rounded-xl bg-white">
            <header className="h-[60px] flex items-center justify-center rounded-t border-b relative p-6">
              <div className="absolute left-3 p-3 hover:bg-gray-300 rounded-xl cursor-pointer ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
