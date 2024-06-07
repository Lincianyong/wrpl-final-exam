import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import 'boundless-commerce-components/dist/styles.css';
import 'boundless-checkout-react/dist/index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import WrapperForCartContext from '@/components/wrapperForCartContext';
import {ReactNode} from 'react';
import Header from '@/components/header';
import CategoriesMenu from '@/components/categoriesMenu';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Beli-Book book store',
  description: 'Build your own e-commerce with Boundless-Commerce and Next.js v14',
  icons: 'favicon.ico',
};

const plusjakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={`${plusjakarta.className}`}>
        <WrapperForCartContext>
          <>
            <Header />

            {/* @ts-expect-error Server Component */}
            <CategoriesMenu />
            {children}
            <Footer />
          </>
        </WrapperForCartContext>
      </body>
    </html>
  );
}
