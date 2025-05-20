import { Skeleton } from '@/components/ui/skeleton';

export default function ProductsLoading() {
  return (
    <section className="pt-20 pb-10 py-16 md:py-24 px-4 bg-neutral-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-t-xl overflow-hidden shadow-sm hover:shadow transition-all duration-300"
            >
              <div className="relative aspect-[3/4] w-full">
                <Skeleton className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>

              <div className="absolute top-3 right-3 z-10">
                <Skeleton className="w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800" />
              </div>

              <div className="flex-grow flex flex-col justify-between p-4 space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <div className="flex justify-between items-center mt-2">
                  <Skeleton className="h-4 w-1/3" />
                  <div className="flex space-x-1">
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="w-3 h-3 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
