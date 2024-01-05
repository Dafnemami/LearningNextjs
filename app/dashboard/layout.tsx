import SideNav from '@/app/ui/dashboard/sidenav';
 

//  This child can either be a page or another layout. In your case

// En este caso todos los childers (rutas) que estén dentro de /dashboard
// serán renderizados dentro de este layout, i.e. incluirán el SideNav

// beneficios: solo el children (página) se vuelve a renderizar pero no el Layout
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}