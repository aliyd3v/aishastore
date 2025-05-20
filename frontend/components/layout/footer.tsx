'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { Instagram, Youtube, Send, Phone } from 'lucide-react';

export default function Footer() {
  const sections = [
    {
      title: 'Sahifalar',
      links: [
        { label: 'Asosiy', href: '/' },
        { label: 'Kategoriyalar', href: '/categorys' },
        { label: 'Mahsulotlar', href: '/products' },
        { label: 'Biz haqimizda', href: '/about' },
        { label: 'Aloqa', href: '/contact' },
      ],
    },
    {
      title: 'Kategoriyalar',
      links: [
        { label: 'Test 1', href: '/' },
        { label: 'Test 2', href: '/' },
        { label: 'Test 3', href: '/' },
        { label: 'Test 5', href: '/' },
        { label: 'Test 6', href: '/' },
      ],
    },
    {
      title: 'Tarmoqlar',
      links: [
        { label: 'Telegram', href: 'https://telegram.com' },
        { label: 'Youtube', href: 'https://youtube.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'WhatsApp', href: 'https://whatsapp.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-50 dark:bg-gray-950 pt-16 pb-8 px-4 md:px-8 border-t border-neutral-200 dark:border-gray-800">
      {/* MOBILE */}
      <div className="md:hidden">
        <div className="justify-items-center">
          <div className="flex">
            <Link href="/">
              <Image
                src="/logo/rose-500.png"
                alt="AishaStore Logo Light"
                width={150}
                height={150}
                className="block dark:hidden h-auto"
              />

              <Image
                src="/logo/rose-300.png"
                alt="AishaStore Logo Dark"
                width={150}
                height={150}
                className="hidden dark:block h-auto"
              />
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://instagram.com"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Youtube size={18} />
            </Link>
            <Link
              href="https://telegram.com"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Send size={18} />
            </Link>
            <Link
              href="tel:+998901234567"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Phone size={18} />
            </Link>
          </div>
        </div>

        <Accordion type="multiple">
          {sections.map((section) => (
            <AccordionItem
              key={section.title}
              value={section.title}
              className="border-neutral-200 dark:border-gray-800"
            >
              <AccordionTrigger className="text-left text-gray-900 dark:text-gray-100 py-3 font-light">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 mt-1 pl-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-300 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-4 gap-8">
        <div className="justify-items-center">
          <Link href="/">
            <Image
              src="/logo/rose-500.png"
              alt="AishaStore Logo Light"
              width={150}
              height={150}
              className="block dark:hidden h-auto"
            />

            <Image
              src="/logo/rose-300.png"
              alt="AishaStore Logo Dark"
              width={150}
              height={150}
              className="hidden dark:block h-auto"
            />
          </Link>

          <div className="flex space-x-5">
            <Link
              href="https://instagram.com"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Youtube size={18} />
            </Link>
            <Link
              href="https://telegram.com"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Send size={18} />
            </Link>
            <Link
              href="tel:+998999999999"
              className="text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-300"
            >
              <Phone size={18} />
            </Link>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-medium mb-4 text-gray-900 dark:text-gray-100">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-neutral-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} AishaStore. Barcha huqular himoyalangan.</p>
      </div>
    </footer>
  );
}
