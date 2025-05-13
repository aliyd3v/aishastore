import CategoryGrid from '@/components/category-grid';

export default async function ShopPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20 pb-10 px-4 bg-neutral-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <CategoryGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
