## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


npm i 
    instalar todo :p

npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.


- projecto usa TScript (.ts, .tsx), Tailwind (usado en DSI?) y Prisma (en DSI no ocupan Prisma)
- inicia ruta con @ para partir desde la raíz
- no modificar next.config.js
- al usar "create-next-app" pregunta si quieres usar Tailwind o no
- TScript and CSS: archivo.module.css para darle estilo a archivoCualquiera.tsx al importar el primero dentro del segundo como import styles from 'blabla'
- nextjs optimiza fuentes para q al cargar la página no cambie la disposición (como lo q le pasa a mi pág web personal)
- optimiza solito imágenes (ir cambiando imagen con tamaño ad hoc sg cambia el tamaño de la pantalla. , etc..)
- fuentes se agregan en un fonts.ts y no en el css
- next: rutas == carpetas ; solo page.tsx y route.tsx se muestran en la ruta definida por las carpetas
- In Next.js, you can use a special layout.tsx file to create UI that is shared between multiple pages, así usando Link en lugar del tag a, me ahorro tener q recargar toooda la página cuando cambio entre rutas q compartes UI (i.e. q están definidas por el mismo layout) 
- Dado q no es ReactSPA se puede caer una sola página sin q se caiga la app entera
- he hecho páginas sin usar 'use client'. pq me fxnan?


- tag link para no recargar toda la página como si lo hace a
- creo q react server component es solo un .ts

- funciones luego tratadas como tags??
