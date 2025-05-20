import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    id: '1',
    name: "Ipakli uzun ko'ylak",
    price: 129000,
    image: 'https://picsum.photos/200/300',
    category: 'koylaklar',
    colors: ['pink', 'ivory', 'blue'],
  },
  {
    id: '2',
    name: 'Linan bluzka',
    price: 79000,
    image: 'https://picsum.photos/200/300',
    category: 'yuqori-kiyimlar',
    colors: ['white', 'green', 'sand'],
  },
  {
    id: '3',
    name: 'Klassik shimlar',
    price: 89000,
    image: 'https://picsum.photos/200/300',
    category: 'pastki-kiyimlar',
    colors: ['black', 'gray', 'beige'],
  },
  {
    id: '4',
    name: "Zarli sirg'alar",
    price: 49000,
    image: 'https://picsum.photos/200/300',
    category: 'aksessuarlar',
    colors: ['gold', 'silver'],
  },
  {
    id: '5',
    name: 'Hajmli palto',
    price: 149000,
    image: 'https://picsum.photos/200/300',
    category: 'tashqi-kiyimlar',
    colors: ['beige', 'dark green'],
  },
  {
    id: '6',
    name: 'Zamonaviy kofta',
    price: 69000,
    image: 'https://picsum.photos/200/300',
    category: 'yuqori-kiyimlar',
    colors: ['blue', 'yellow'],
  },
  {
    id: '7',
    name: 'Yozgi etik',
    price: 59000,
    image: 'https://picsum.photos/200/300',
    category: 'pastki-kiyimlar',
    colors: ['pink', 'white'],
  },
  {
    id: '8',
    name: 'Charm sumka',
    price: 109000,
    image: 'https://picsum.photos/200/300',
    category: 'aksessuarlar',
    colors: ['brown', 'black'],
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-t-xl overflow-hidden shadow-sm hover:shadow transition-all duration-300"
        >
          <Link
            href={`/shop/${product.id}`}
            className="relative block aspect-[3/4] overflow-hidden"
          >
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <div className="absolute top-3 right-3 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900 border border-neutral-100 dark:border-gray-800 shadow-sm"
            >
              <Heart className="h-3.5 w-3.5 text-gray-400 group-hover:text-rose-400 hover:text-rose-400 dark:text-gray-500 dark:group-hover:text-rose-300 dark:hover:text-rose-300 transition-colors duration-200" />
            </Button>
          </div>

          <div className="flex-grow flex flex-col justify-between p-4">
            <Link href={`/shop/${product.id}`} className="block">
              <h3 className="font-light text-sm sm:text-base mb-1 line-clamp-1 text-gray-900 dark:text-gray-100 group-hover:text-rose-500 dark:group-hover:text-rose-300 transition-colors">
                {product.name}
              </h3>
            </Link>

            <div className="flex justify-between items-center mt-2">
              <p className="text-sm sm:text-base font-medium text-rose-500 dark:text-rose-300">
                {product.price.toFixed(2)} UZS
              </p>

              <div className="flex -space-x-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <span
                    key={color}
                    className={`
                      w-3 h-3 rounded-full border 
                      border-white dark:border-gray-900
                      ${
                        color === 'rose'
                          ? 'bg-rose-400'
                          : color === 'ivory'
                          ? 'bg-stone-200'
                          : color === 'navy'
                          ? 'bg-blue-900'
                          : color === 'white'
                          ? 'bg-white dark:bg-neutral-600'
                          : color === 'sage'
                          ? 'bg-green-600'
                          : color === 'sand'
                          ? 'bg-amber-300'
                          : color === 'black'
                          ? 'bg-black'
                          : color === 'gray'
                          ? 'bg-gray-500'
                          : color === 'beige'
                          ? 'bg-amber-100'
                          : color === 'gold'
                          ? 'bg-yellow-600'
                          : color === 'silver'
                          ? 'bg-gray-300'
                          : 'bg-gray-300'
                      }
                    `}
                    style={{ zIndex: 3 - index }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
