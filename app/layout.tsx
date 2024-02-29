import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';

/* Developed by Emmanuel Martinez for ESAT */

export const metadata = {
  title: 'ESAT Learnworlds API Admin Dashboard',
  description:
    'A user admin dashboard for the ESAT API.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">

<head>
      
      <meta name="description" content="ID3 by ESAT VALENCIA" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="img/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="img/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="img/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="img/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="img/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="img/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="img/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="img/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="img/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="img/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="img/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="img/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="img/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="img/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="img/mstile-70x70.png" />
      <meta
        name="msapplication-square150x150logo"
        content="img/mstile-150x150.png"
      />
      <meta
        name="msapplication-wide310x150logo"
        content="img/mstile-310x150.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="img/mstile-310x310.png"
      />
    </head>
      
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
