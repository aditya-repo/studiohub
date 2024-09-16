import React from "react";

const ClientCardSkeleton = () => {
  return (
    <div className="animate-pulse grid grid-cols-1 lg:grid-cols-9 gap-4">
      {/* Basic Info Skeleton */}
      <div className="lg:col-span-4">
        <h3 className="text-xl pb-2">Basic Info</h3>
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-100 shadow-lg mb-5 relative">
          <div className="h-8 w-24 bg-gray-300 rounded-md mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="flex items-center py-2 border-b border-gray-200">
                  <div className="w-20 h-4 bg-gray-300 rounded-md mr-4"></div>
                  <div className="flex-1 h-4 bg-gray-300 rounded-md"></div>
                </div>
              ))}
            </div>
            <div>
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="flex items-center py-2 border-b border-gray-200">
                  <div className="w-20 h-4 bg-gray-300 rounded-md mr-4"></div>
                  <div className="flex-1 h-4 bg-gray-300 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Info Skeleton */}
      <div className="md:col-span-3">
        <h3 className="text-xl pb-2">Service Info</h3>
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-100 shadow-md mb-5">
          <div className="h-6 w-32 bg-gray-300 rounded-md mb-4"></div>
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="flex items-center py-2 border-b border-gray-200">
              <div className="w-32 h-4 bg-gray-300 rounded-md mr-4"></div>
              <div className="flex-1 h-4 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>

      {/* User Access Skeleton */}
      <div className="md:col-span-2">
        <h3 className="text-xl pb-2">User Access</h3>
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-100 shadow-md mb-5">
          <div className="h-6 w-32 bg-gray-300 rounded-md mb-4"></div>
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="flex items-center py-2 border-b border-gray-200">
              <div className="w-20 h-4 bg-gray-300 rounded-md mr-4"></div>
              <div className="flex-1 h-4 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCardSkeleton;
