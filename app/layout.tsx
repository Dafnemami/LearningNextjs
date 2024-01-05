import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


//  This child can either be a page or another layout. In your case

// En este caso todos los childers (rutas) que estén dentro de / (app, q es el root) 
// serán renderizados dentro de este layout, en este caso es solo 
// renderizar la página misma.

export default function RootLayout({ children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* adding the Tailwind antialiased class which smooths out the font */}
   </html>
  );
}
