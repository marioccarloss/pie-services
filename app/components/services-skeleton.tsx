"use client";

const ServicesSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="h-4 w-32 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
        <div className="h-8 w-64 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
        <div className="h-4 w-96 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
      </div>

      <div className="w-full max-w-[990px] flex flex-col md:flex-row justify-between items-center mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 md:mb-auto">
          <div id="text-circle" className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center p-8 animate-pulse">
              <div className="space-y-4 w-full">
                <div className="h-6 w-3/4 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="h-4 w-full bg-gray-300 rounded-full animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div
            id="image-circle"
            className="relative -mt-10 md:ml-auto lg:-ml-20 lg:mt-0 -z-10 w-80 h-80"
          >
            <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map(id => (
            <div
              key={id}
              className="bg-gray-200 rounded-full md:rounded-r-none py-3 pl-5 pr-8 flex items-center justify-between gap-8 animate-pulse"
            >
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-32 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSkeleton;
