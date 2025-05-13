import Link from 'next/link';

const categories = [
  {
    name: "Ko'ylaklar",
    href: '/shop?category=koylaklar',
  },
  {
    name: 'Blishkalar',
    href: '/shop?category=blishkalar',
  },
  {
    name: 'Yubkalar',
    href: '/shop?category=yubkalar',
  },
  {
    name: 'Shimlar',
    href: '/shop?category=shimlar',
  },
  {
    name: 'Aksessuarlar',
    href: '/shop?category=aksessuarlar',
  },
  {
    name: 'Sumkalar',
    href: '/shop?category=sumkalar',
  },
  {
    name: 'Poyabzallar',
    href: '/shop?category=poyabzallar',
  },
  {
    name: 'Sport kiyimlar',
    href: '/shop?category=sport-kiyimlar',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
      {categories.map((category) => (
        <Link key={category.name} href={category.href} className="group relative">
          <div
            className="
            bg-white dark:bg-gray-900
            rounded-xl overflow-hidden
            border border-neutral-100 dark:border-gray-800
            p-5 sm:p-6
            text-center 
            transition-all duration-300
            shadow-sm hover:shadow-md
            hover:border-rose-100 dark:hover:border-rose-900/30
            group-hover:bg-rose-50/50 dark:group-hover:bg-rose-950/10
          "
          >
            <h3
              className="
              text-lg sm:text-xl
              font-light
              text-gray-900 dark:text-gray-100
              group-hover:text-rose-500 dark:group-hover:text-rose-300
              transition-colors duration-300
              relative
              inline-block
            "
            >
              {category.name}

              <span
                className="
                absolute -bottom-1 left-0
                w-0 group-hover:w-full
                h-[1px]
                bg-rose-300 dark:bg-rose-400
                transition-all duration-300 ease-out
              "
              ></span>
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
