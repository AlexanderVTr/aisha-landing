import { useState, useEffect } from 'react';

const AnimatedDevice = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full max-w-[480px] ${isLoaded ? 'animate-device-float' : ''}`}>
      <div className="relative aspect-[5/3] overflow-hidden rounded-2xl shadow-elevation glass-panel border-2 border-white/50">
        {/* Browser chrome mockup */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-white/90 backdrop-blur-sm flex items-center px-4 border-b border-gray-200/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-auto bg-gray-100/70 rounded-full h-6 w-64 flex items-center justify-center text-[10px] text-gray-500">
            example.com
          </div>
        </div>

        {/* Browser content */}
        <div className="absolute top-10 left-0 right-0 bottom-0 bg-gray-50 p-2">
          <div className="bg-white h-full rounded-lg shadow-sm p-2 flex">
            {/* Side panel toggle button */}
            <div className="absolute right-4 top-14 bg-white shadow-sm rounded-full p-1 z-10">
              <div className="h-6 w-6 bg-grok/10 rounded-full flex items-center justify-center">
                <span className="text-grok text-xs">G</span>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-gray-50 rounded-md"></div>

            {/* Side panel */}
            <div className="w-64 bg-white rounded-md shadow-sm ml-2 border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-8 border-b border-gray-100 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">Grok Chat</span>
              </div>

              <div className="flex-1 bg-gray-50 p-2 overflow-hidden flex flex-col">
                {/* Chat messages */}
                <div className="space-y-2 flex-1">
                  <div className="bg-gray-100 rounded-lg p-2 text-[10px] max-w-[80%]">
                    How can I help you today?
                  </div>

                  <div className="bg-blue-50 rounded-lg p-2 text-[10px] max-w-[80%] ml-auto">
                    Can you summarize this webpage?
                  </div>

                  <div className="bg-gray-100 rounded-lg p-2 text-[10px] max-w-[80%] animate-pulse-subtle">
                    This webpage appears to be about...
                  </div>
                </div>

                {/* Chat input */}
                <div className="mt-2 bg-white rounded-md shadow-sm border border-gray-100 h-6 flex items-center px-2">
                  <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 -top-10 -right-10 h-40 w-40 bg-grok/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 -bottom-10 -left-10 h-56 w-56 bg-grok/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AnimatedDevice;
