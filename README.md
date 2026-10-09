# Federico Curto · Portfolio

Portfolio y sitio de servicios de Federico Curto, desarrollador web con foco en frontend y DevOps. Presenta lo que construyo, cómo trabajo y los proyectos que publiqué, en ocho idiomas.

**Sitio en vivo:** https://federicocurto.vercel.app


## Características

- **Ocho idiomas** (inglés, español, portugués, francés, alemán, italiano, japonés y chino). El idioma se elige según el navegador y se recuerda entre visitas.
- **Tema claro y oscuro** que sigue la preferencia del sistema y se puede cambiar a mano.
- **Portada interactiva:** cada letra del nombre cambia de grosor a medida que el puntero se acerca (fuente variable), sin re-renderizados de React.
- **Animaciones al hacer scroll** que corren una sola vez y se omiten si la persona prefiere reducir el movimiento.
- **Tarjetas de proyecto** con una vista previa en video en loop (WebM con MP4 de respaldo) que queda quieta si se prefiere reducir el movimiento.
- **Menú de idioma accesible:** flechas, Escape y roles de menú correctos.
- **Bases de SEO:** metadatos, `robots.txt`, `sitemap.xml` y un set completo de íconos.

## Tecnologías

| Área | Herramientas |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 |
| Tipografías | Bricolage Grotesque e Instrument Sans (`next/font`) |
| Íconos | lucide-react, react-icons |
| Temas | next-themes |
| Hosting | Vercel |

## Cómo correrlo

Requiere Node.js 20 o superior.

```bash
git clone https://github.com/FedeHuapi/portfolio.git
cd portfolio
npm install
npm run dev
```

El sitio queda en http://localhost:3000.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación de producción |
| `npm run start` | Sirve la compilación de producción |
| `npm run lint` | Ejecuta ESLint |

### Variables de entorno

Opcional. `NEXT_PUBLIC_SITE_URL` define la dirección pública que usan `robots.txt`, el sitemap y las vistas previas al compartir. Si no se define, el sitio usa la dirección de producción de Vercel o `http://localhost:3000` en local.

## Estructura del proyecto

```
src/
├── app/            Página, layout, estilos globales, robots, sitemap e íconos
├── components/     Secciones (portada, qué hago, proyectos, contacto) y piezas de interfaz
├── data/           Datos de los proyectos (projects.ts)
├── i18n/           Traducciones de los ocho idiomas (dictionaries.ts)
└── lib/            Enlaces de contacto, dirección del sitio e íconos de tecnologías
public/projects/    Vistas previas de los proyectos (imágenes y videos)
```

### Agregar un proyecto

Sumá una entrada en `src/data/projects.ts`. Las descripciones están tipadas como `Record<Locale, string>`, así que TypeScript no compila hasta que el proyecto tenga descripción en todos los idiomas.

## Decisiones de diseño

- **Video en lugar de GIF.** La grabación de pantalla original era un GIF de 48 MB. Como WebM pesa 0,85 MB y se ve igual.
- **Sin estado dentro de un efecto en el botón de tema.** Se renderizan los dos íconos y CSS (`dark:`) muestra el correcto, así el HTML del servidor y del cliente coinciden y no hay parpadeo al cargar.
- **Aparición al scroll sin re-renderizados.** El estado visible u oculto vive en un atributo `data-`, y el contenido solo se oculta cuando el navegador confirma que puede animarlo. Sin JavaScript, no se oculta nada.
- **Estilos base dentro de `@layer base`,** para que las utilidades de Tailwind siempre ganen sin importar el orden de los archivos.
- **Contraste verificado:** el texto principal y el secundario cumplen WCAG AA en ambos temas.

## Estado y próximos pasos

- [ ] Agregar un workflow de GitHub Actions (revisión de tipos y compilación en cada pull request)
- [ ] Agregar tests para la lógica de idioma y de tema
- [ ] Revisar con hablantes nativos las traducciones al portugués, francés, alemán, italiano, japonés y chino. Español e inglés son las versiones de referencia
- [ ] Agregar una imagen para compartir en redes
- [ ] Corregir el error de lint `react-hooks/set-state-in-effect` en el proveedor de idioma

## Otros proyectos

- **[Mawida](https://www.mawida.ar):** sitio web de una empresa de expediciones en kayak en Villa Pehuenia ([código](https://github.com/FedeHuapi/mawidakayaks))
- **[Mamunis](https://github.com/FedeHuapi/mamunis):** tienda online con una API en FastAPI y PostgreSQL y una tienda en React (en desarrollo)

## Contacto

- Email: federicocurto00@gmail.com
- LinkedIn: https://www.linkedin.com/in/federicocurto/
- GitHub: https://github.com/FedeHuapi
