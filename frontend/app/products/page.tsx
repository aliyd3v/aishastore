import { Suspense } from 'react';
import ProductGrid from '@/components/product-grid';
import ProductsLoading from './loading';

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ShopPage() {
  await wait(2000);

  return (
    <main className="flex min-h-screen flex-col pt-20 pb-10 px-4 bg-neutral-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <Suspense fallback={<ProductsLoading />}>
              <ProductGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
