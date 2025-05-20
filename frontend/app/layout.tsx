import '../styles/globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Raleway } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Header from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'AishaStore - Zamonaviy ayollar cchun muxim elegans',
  description:
    "AishaStore da zamonaviy ayollar uchun mo'ljallangan ajoyib modalar kolleksiyasini kashf eting. Bizning kiyimlarimiz nafis dizaynlar va nozik detallar bilan zamonaviy ayollarning go'zalligini nishonlaydi.",
  keywords: "moda, ayollar kiyimlari, elegant, zamonaviy, nafis, go'zallik, AishaStore",
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    url: 'https://aishastore.uz',
    title: 'AishaStore - Zamonaviy ayollar cchun elegans',
    description:
      "AishaStore da zamonaviy ayollar uchun mo'ljallangan ajoyib modalar kolleksiyasini kashf eting. Nafis dizaynlar va nozik detallar bilan ayollar go'zalligini nishonlaymiz.",
    images: [
      {
        url: 'https://picsum.photos/200/300',
        alt: 'AishaStore Fashion Collection',
        width: 1200,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning={true}>
      <body className={`${playfair.variable} ${raleway.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
