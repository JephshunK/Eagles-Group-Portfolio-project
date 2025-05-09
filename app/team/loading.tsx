export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-6"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded mx-auto mb-16"></div>

          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-12 items-center mb-24">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gray-200"></div>
              </div>

              <div className="w-full md:w-2/3">
                <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>

                <div className="space-y-4 mb-6">
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>

                <div className="flex space-x-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-10 h-10 rounded-full bg-gray-200"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
