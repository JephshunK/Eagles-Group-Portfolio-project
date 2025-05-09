export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-6"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 w-full bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
