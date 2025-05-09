export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-4 w-24 bg-gray-200 rounded mb-8"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <div className="w-full max-w-xs">
              <div className="w-64 h-64 mx-auto rounded-full bg-gray-200"></div>
            </div>

            <div className="flex-1">
              <div className="h-10 w-64 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>

              <div className="space-y-4 mb-8">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>

              <div className="flex space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-48 w-full bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-4 w-20 bg-gray-300 rounded"></div>
                      <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
