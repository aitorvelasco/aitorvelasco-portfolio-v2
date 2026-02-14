# Portfolio de Aitor Velasco

Portfolio personal profesional construido con [Astro](https://astro.build), diseñado para mostrar proyectos web modernos y experiencia como Frontend Developer.

## Características

- **Diseño moderno** con gradientes, animaciones y efectos visuales
- **Totalmente responsive** adaptado a todos los dispositivos
- **Tipado con TypeScript** para mayor robustez
- **Tailwind CSS** para estilos eficientes
- **Imágenes optimizadas** en formato WebP
- **Rutas dinámicas** para páginas de proyectos individuales
- **Animaciones fluidas** y transiciones suaves
- **SEO optimizado** con meta tags apropiados

## Estructura del Proyecto

```
/
├── public/
│   ├── foto.webp
│   ├── logo.webp
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── websites.ts         # Datos de proyectos
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal
│   ├── pages/
│   │   ├── index.astro         # Página principal
│   │   └── proyecto/
│   │       └── [id].astro      # Página dinámica de proyecto
│   └── styles/
│       └── global.css
└── astro.config.mjs
```

## Proyectos Incluidos

El portfolio incluye 8 proyectos en diferentes categorías:

- **E-commerce**: Luxe Fashion (Shopify, React)
- **SaaS**: DataFlow (Next.js, D3.js)
- **Portfolio**: Studio Noir (Astro, Framer Motion)
- **Restaurant**: Olea (Webflow)
- **Mobile App**: PulseFit (React Native)
- **Blog**: DevPulse (Gatsby)
- **Fintech**: BitVault (Web3, Solidity)
- **Travel**: Wanderlust (Vue.js, Mapbox)

## Experiencia Profesional

- **Senior FrontEnd Developer** @ MASORANGE (actualmente)
- **Senior FrontEnd Developer** @ Grupo MASMOVIL
- **FrontEnd Developer** @ BQ

## Tech Stack

- Astro 5.x
- Tailwind CSS
- TypeScript
- Vite

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Inicia servidor local en `localhost:4321`     |
| `npm run build`   | Construye para producción en `./dist/`         |
| `npm run preview` | Previsualiza build localmente                 |

## Deploy

```bash
npm run build
```

El directorio `dist/` está listo para desplegar en cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## Contacto

- Email: aitorvelascodev@gmail.com
- GitHub: [github.com/aitorvelasco](https://github.com/aitorvelasco)
- LinkedIn: [linkedin.com/in/aitor-velasco-ovejero](https://www.linkedin.com/in/aitor-velasco-ovejero-91a0094b)
