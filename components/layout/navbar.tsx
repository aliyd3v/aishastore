'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '../theme/mode-toggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Asosiy' },
    { href: '/categorys', label: 'Kategoriyalar' },
    { href: '/products', label: 'Mahsulotlar' },
    { href: '/about', label: 'Biz haqimizda' },
    { href: '/contact', label: 'Aloqa' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 min-w-[150px]">
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-0 hover:bg-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full bg-white dark:bg-gray-950">
                <SheetHeader>
                  <div className="mt-8 text-center space-y-6">
                    <SheetTitle className="font-serif text-2xl font-light tracking-wide text-rose-500 dark:text-rose-300">
                      AishaStore
                    </SheetTitle>
                    <div className="flex flex-col space-y-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`
                            text-lg font-light tracking-wide py-2
                            ${
                              pathname === link.href
                                ? 'text-rose-500 border-b border-rose-500 dark:text-rose-300'
                                : 'text-gray-600 dark:text-gray-300 hover:text-rose-500'
                            }
                          `}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            className="font-serif text-2xl font-light tracking-wide text-rose-500 dark:text-rose-300"
          >
            AishaStore
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm font-light tracking-wider uppercase
                ${
                  pathname === link.href
                    ? 'text-gray-900 dark:text-gray-100 border-b border-rose-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-300'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4 min-w-[150px] justify-end">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="p-0 hover:bg-transparent text-gray-600 dark:text-gray-300 hover:text-rose-500"
          >
            <Link href="/favorites" className="relative">
              <Heart className="h-[18px] w-[18px]" />
              <span className="sr-only">Saralangan</span>
            </Link>
          </Button>

          <ModeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="p-0 hover:bg-transparent text-gray-600 dark:text-gray-300 hover:text-rose-500"
          >
            <User className="h-[18px] w-[18px]" />
            <span className="sr-only">Kabinet</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
