export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
          <div className="flex gap-2 mb-6">
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex mb-8">
            <div className="h-4 w-20 bg-gray-200 rounded mr-4"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-video bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-full bg-gray-200 rounded mb-4"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
