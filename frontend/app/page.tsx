import Link from 'next/link';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeaturedProducts from '@/components/product-grid';
import CategoryGrid from '@/components/category-grid';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-50 dark:bg-gray-950">
      <section className="pt-16 sm:pt-20 md:pt-24 min-h-[80vh] sm:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/30 to-neutral-50 dark:from-gray-900/50 dark:to-gray-950 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 z-10 text-center md:text-left">
            <div className="inline-flex items-center mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-rose-100/30 dark:border-gray-800">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-rose-400 dark:text-rose-300 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">
                Yangi bahor kolleksiyalari
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight">
              <span className="font-semibold">Har </span>
              <span className="font-medium">bir ayol</span>
              <span className="block italic text-rose-500 dark:text-rose-300">
                go&apos;zallikka loyiq!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
              AishaStore – siz izlagan nafislik, sifat va ishonch manzili.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center sm:items-center md:items-start md:justify-start justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-rose-50 dark:text-gray-900 dark:hover:bg-rose-100 group rounded-full px-6 sm:px-8 py-2 sm:py-3 shadow-sm hover:shadow transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
              >
                <Link href="/product" className="flex items-center justify-center">
                  Mahsulotlar
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 z-10">
            <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden rounded-2xl md:rounded-3xl shadow-md mx-auto max-w-[400px] md:max-w-none">
              <Image
                src={'/img/fashion-women.jpeg'}
                alt="Elegant fashion collection"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-3 px-3 py-1 rounded-full bg-rose-50 dark:bg-gray-900 border border-rose-100/50 dark:border-gray-800/50">
              <Star className="w-3 h-3 text-rose-400 dark:text-rose-300 mr-2" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Saralangan Kategoriyalar
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100">
              Bizning <span className="italic text-rose-500 dark:text-rose-300">Kategoriyalar</span>
            </h2>
          </div>

          <CategoryGrid />

          <div className="flex justify-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-300 group transition-colors duration-300"
            >
              Barcha Kategoriyalarni ko&apos;rish
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 px-4 bg-neutral-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-3 px-3 py-1 rounded-full bg-rose-50 dark:bg-gray-800 border border-rose-100/50 dark:border-gray-700/50">
              <Sparkles className="w-3 h-3 text-rose-400 dark:text-rose-300 mr-2" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Zamonaviy kiyimlar
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100">
              Bizning <span className="italic text-rose-500 dark:text-rose-300">Mahsuloatlar</span>
            </h2>
          </div>

          <FeaturedProducts />

          <div className="flex justify-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-300 group transition-colors duration-300"
            >
              Barcha mahsulotlarni ko&apos;rish
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
