# Componente: Header (Cabecera) 🔧

## Resumen 💡
Componente responsivo que contiene: logo, navegación, botón de menú (mobile) y CTA (Reservar). Debe ser una réplica exacta del header actual en estructura, comportamiento y estilos: **sticky** en la parte superior, **fondo blanco semitransparente con backdrop blur (10px)**, borde inferior sutil, menú móvil absoluto por debajo del header con separadores y sombra, y selección de enlace activo con color secundario.

---

## Tokens usados (referencia) 🎯
(Extraídos de `css/styles.css`)
- **Color principal**: `--color-primary` → `#1a1a1a`
- **Color secundario**: `--color-secondary` → `#c9a866`
- **Fondo header**: blanco con opacidad `0.6` → `tw-bg-white/60`
- **Backdrop blur**: `10px` → `tw-backdrop-blur-md`
- **Padding vertical header**: `--spacing-md` → `1.5rem` → `tw-py-[1.5rem]`
- **Container**: `max-width: 1400px`, `padding-horizontal: var(--spacing-md)` → `tw-max-w-[1400px] tw-px-[1rem]`
- **Menu shadow**: `--shadow-md` → `0 4px 16px rgba(0,0,0,0.15)` → `tw-shadow-md`
- **Transición**: `all 0.3s ease` → `tw-transition-all tw-duration-300 tw-ease-in-out`

(Ver `docs/style-guide/design-tokens.json`)

---

## Especificación detallada por elemento 🔍

### Estructura HTML y hooks
- Contenedor: `<header class="header">` con `position: sticky; top: 0; z-index: 50`.
  - Norma: **El header debe llevar siempre `z-index: 50` o superior** para garantizar que flote por encima del resto del contenido. En Tailwind usar `tw-z-50` (o `tw-z-[valor]` mayor si se necesita mayor prioridad).
  - Nota de jerarquía: si otros componentes deben superponer el header (modales, drawers, menús contextuales), asígnales un z-index mayor y documentalo: por ejemplo, `tw-z-60` para modales, `tw-z-70` para overlays críticos. Evita usar valores arbitrarios y documenta la elección en el componente que exige mayor prioridad.
- Contenedor interno: `.navbar-container` (centrado y con `max-width: 1400px`).
- Logo: `.logo a` — texto con fuente serif y tamaño `1.5rem`.
- Navegación desktop: `<nav>` visible desde `md` (768px). Usa enlaces en **mayúsculas**, `font-size: 0.9rem`, `letter-spacing: 1px`.
- Toggle móvil: `button.menu-toggle` (tres `span`) con `aria-controls="#nav-menu"` y `aria-expanded` y `aria-label`.
- Menú móvil: `ul#nav-menu` con clase `.nav-menu` (absoluto, `top: 70px`, ancho completo, fondo blanco, sombras y separadores).

**Reinicios HTML obligatorios**
- Todas las listas de navegación (`<ul>`) del header deben llevar: `tw-list-none tw-p-0 tw-m-0` para evitar estilos de lista por defecto.
- Todos los enlaces (`<a>`) dentro del header deben llevar por defecto: `tw-no-underline tw-text-inherit` (o aplicarlo mediante una clase base) para evitar el color azul y subrayado del navegador.

(Estas reglas evitan diferencias visuales entre navegadores y aseguran que las utilidades `tw-` controlen totalmente la apariencia.)

---

### Tipografía y colores
- Logo
  - Fuente: `var(--font-serif)` (`Crimson Text`) o `Libre Bodoni` si buscas la versión hero.
  - Tamaño: **1.5rem** (aprox. 24px).
  - Peso: `400` (normal), color: token `primary` (use `tw-text-primary`).
- Enlaces de navegación (desktop + mobile)
  - Texto: **uppercase** (`text-transform: uppercase`).
  - Tamaño: **0.9rem**.
  - Espaciado: **letter-spacing: 1px**.
  - Peso normal: `500` para enlaces regulares, `600` para el enlace activo/CTA.
  - Hover: fondo token `light` (`#f9f9f9`) (use `hover:tw-bg-light`) y color token `secondary` (use `hover:tw-text-secondary`).
- CTA (Reservar)
  - Fondo: token `primary` (use `tw-bg-primary`).
  - Color texto: blanco.
  - Padding: `var(--spacing-sm)` vertical x `var(--spacing-lg)` horizontal (aprox. `1rem` x `2rem`).
  - Texto: uppercase, letter-spacing `1.5px`, font-weight `600`.

---

### Dimensiones y espaciados
- Padding vertical del header: `1.5rem` (clase `tw-py-[1.5rem]`).
- Espaciado interior del contenedor: `padding-left/right: 1rem` (`tw-px-[1rem]`).
- Alto del botón toggle: tres barras `25px` x `3px`, gap `5px`.
- Offset del menú móvil respecto al top del viewport: `70px` (`top: 70px`).
- Separadores del menú móvil: `border-bottom: 1px solid` token `border` (use `tw-border-b tw-border-border`) y el último elemento sin borde.

---

### Comportamiento / Interacciones
- Sticky: header debe quedar fijo encima del contenido (`position: sticky; top: 0`) y mantener `tw-backdrop-blur-md` y `tw-bg-white/60` mientras el usuario hace scroll.
- Menú móvil: toggle alterna la clase `.active` (o cambia `aria-expanded`) y muestra el menú cambiando `tw-hidden` → `tw-flex`.
- Toggle transformaciones (animación al abrir):
  - `.menu-toggle.active span:nth-child(1)` → `transform: rotate(45deg) translate(8px, 8px)`
  - `.menu-toggle.active span:nth-child(2)` → `opacity: 0`
  - `.menu-toggle.active span:nth-child(3)` → `transform: rotate(-45deg) translate(7px, -7px)`
  - Transitions deben usar `all 0.3s ease`.
- Enlace activo / página actual:
  - Color: token `secondary` (use `tw-text-secondary`).
  - Peso: `600`.
  - Subrayado sutil: `border-bottom: 2px solid rgba(201,168,102,0.12)` y `padding-bottom: calc(1.5rem - 0.15rem)`.

---

### Accesibilidad y focus
- Botón del menú: incluir `aria-expanded="false"` por defecto y actualizarlo a `true` cuando el menú esté visible.
- Añadir `aria-controls="#nav-menu"` y `aria-label="Abrir menú"`.
- Cada enlace puede llevar `aria-current="page"` cuando corresponde.
- Focus visible: usar `tw-ring-2 tw-ring-offset-2 focus:tw-ring-secondary` o un `outline` visible cuando el elemento recibe foco.
- Preferencia de movimiento reducida: respetar `prefers-reduced-motion` y eliminar/atenuar las transiciones y transformaciones.

---

### Sombra y profundidad
- La sombra usada para el panel móvil: `box-shadow: 0 4px 16px rgba(0,0,0,0.15)` (`tw-shadow-md`).
- El header no tiene shadow por defecto (ligero borde inferior `rgba(0,0,0,0.05)`).

---

## Claves Tailwind (mapeo directo) 📘
- Header: `tw-bg-white/60 tw-backdrop-blur-md tw-border-b tw-border-black/5 tw-sticky tw-top-0 tw-z-50`
- Contenedor: `tw-max-w-[1400px] tw-mx-auto tw-px-[1rem] tw-py-[1.5rem] tw-flex tw-justify-between tw-items-center`
- Logo: `tw-font-serif tw-text-logo tw-text-primary`
- Nav desktop: `md:tw-flex tw-hidden tw-gap-[1rem]` + enlaces `tw-uppercase tw-text-[0.9rem] tw-tracking-[1px]`
- Toggle móvil: `md:tw-hidden tw-flex tw-flex-col tw-gap-[5px] tw-bg-transparent tw-p-[0.5rem]`
- Menú móvil oculto: `tw-hidden`; visible: `tw-flex tw-flex-col tw-absolute tw-top-[70px] tw-left-0 tw-right-0 tw-bg-white tw-shadow-md`
- Nota de reset: las listas de navegación deben llevar `tw-list-none tw-p-0 tw-m-0` y los enlaces `tw-no-underline tw-text-inherit` para evitar estilos por defecto del navegador.
- Nota de JIT/arbitrary values: cuando el diseño original no encaje con la escala predeterminada de Tailwind (espaciados de 4 en 4), **usar valores arbitrarios JIT entre corchetes** (por ejemplo `tw-top-[70px]`, `tw-w-[25px]`, `tw-py-[1.5rem]`). Documenta cada uso y prefiere tokens (`design-tokens.json`) si se reutiliza en varios lugares.
- Enlace activo: `tw-text-secondary tw-font-semibold tw-border-b tw-border-[rgba(201,168,102,0.12)] tw-pb-[calc(1.5rem-0.15rem)]`

---

## Criterios de aceptación detallados ✅
- Visual
  - Fondo del header: blanco al 60% con blur (10px).
  - Distancias y paddings idénticos: header vertical `1.5rem`, contenedor centrado `max-width: 1400px`, padding lateral `1rem`.
  - Tamaños de texto: logo `1.5rem`, enlaces `0.9rem`.
  - Menú móvil aparece a `top: 70px`, con separadores y sombra `0 4px 16px rgba(0,0,0,0.15)`.
- Comportamiento
  - Toggle transforma las barras según las transformaciones especificadas.
  - `aria-expanded` refleja el estado del menú.
  - Enlace activo aplica color secundario y subrayado sutil.
- Accesibilidad
  - Focus visible en botones y enlaces.
  - `skip-link` presente en la página.

---

## Valores exactos (tabla) 🧾
Todos los valores mostrados en esta tabla han sido extraídos literalmente de `css/styles.css`. Puedes copiarlos tal cual para conseguir una réplica exacta del header.

| Elemento | Propiedad | Valor (exacto) | Clase `tw-` / Nota |
|---|---|---:|---|
| Logo | Fuente | `Crimson Text, serif` | `tw-font-serif` |
| Logo | Tamaño (font-size) | `1.5rem` | `tw-text-[1.5rem]` |
| Logo | Peso (font-weight) | `400` | |
| Enlace (nav) | Tamaño | `0.9rem` | `tw-text-[0.9rem]` |
| Enlace (nav) | Letter-spacing | `1px` | `tw-tracking-[1px]` |
| Enlace (nav) | Transformación | `uppercase` | `tw-uppercase` |
| Enlace (nav) | Peso | `500` (normal) / `600` (activo) | |
| Header | Padding vertical | `1.5rem` | `tw-py-[1.5rem]` |
| Contenedor | Padding lateral | `1rem` | `tw-px-[1rem]` |
| Contenedor | Max-width | `1400px` | `tw-max-w-[1400px]` |
| Header | Fondo | `rgba(255,255,255,0.6)` | `tw-bg-white/60` |
| Header | Backdrop blur | `10px` | `tw-backdrop-blur-md` (o `tw-backdrop-blur-[10px]`) |
| Header | Border-bottom | `1px solid rgba(0,0,0,0.05)` | `tw-border-b tw-border-black/5` |
| Menú móvil | Offset top | `70px` | `tw-top-[70px]` |
| Menú móvil | Separadores | `1px solid rgba(0,0,0,0.05)` | `tw-border-b tw-border-border` |
| Menú móvil | Sombra | `0 4px 16px rgba(0,0,0,0.15)` | `tw-shadow-md` |
| Toggle (barra) | Tamaño | `25px × 3px` | `tw-w-[25px] tw-h-[3px]` |
| Toggle | Gap | `5px` | `tw-gap-[5px]` |
| Toggle | Transición | `all 0.3s ease` | `tw-transition-all tw-duration-300 tw-ease-in-out` |
| Toggle (abrir) | Transformación 1ª barra | `rotate(45deg) translate(8px, 8px)` | aplicar por JS / inline style |
| Toggle (abrir) | Transformación 2ª barra | `opacity: 0` | aplicar por JS / inline style |
| Toggle (abrir) | Transformación 3ª barra | `rotate(-45deg) translate(7px, -7px)` | aplicar por JS / inline style |
| CTA (Reservar) | Padding | `~1rem (v) × 2rem (h)` | `tw-py-[1rem] tw-px-[2rem]` |
| CTA | Letter-spacing | `1.5px` | `tw-tracking-[1.5px]` |
| Enlace activo | Color | `#c9a866` | `tw-text-secondary` |
| Enlace activo | Subrayado | `2px solid rgba(201,168,102,0.12)` | `tw-border-b tw-border-[rgba(201,168,102,0.12)] tw-pb-[calc(1.5rem-0.15rem)]` |
| Focus | Ring | `ring-2 + ring-offset-2` color `#c9a866` | `focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-secondary` |
| Motion | Prefers-reduced-motion | `reduce` → desactivar transiciones | JS: `window.matchMedia('(prefers-reduced-motion: reduce)')` |

---

## Implementación disponible
La réplica exacta del header (sin dependencia del CSS antiguo, usando únicamente utilidades `tw-`) está disponible en el archivo `index-header-tailwind.html` en la raíz del proyecto. Abre ese archivo en el navegador para ver y probar el componente.

## Contenido exacto (palabra por palabra)
A continuación se incluye el HTML del bloque de header tal y como aparece en `index.html`, pero **implementado únicamente con utilidades `tw-`** (sin ninguna dependencia del CSS antiguo). Mantiene los mismos IDs y atributos (`id="themeToggle"`, `id="menuToggle"`, `id="navMenu"`) para compatibilidad con el JS existente.

```html
<!-- Skip link (texto exacto) -->
<a href="#main" class="skip-link">Ir al contenido principal</a>

<header class="tw-bg-white/60 tw-backdrop-blur-md tw-border-b tw-border-border tw-sticky tw-top-0 tw-z-50" role="banner">
  <nav class="tw-w-full" role="navigation" aria-label="Main navigation">
    <div class="tw-max-w-[1400px] tw-mx-auto tw-px-[1rem] tw-py-[1.5rem] tw-flex tw-justify-between tw-items-center navbar-container">

      <div class="logo">
        <a href="#hero" aria-label="Villa Bonmont home" class="tw-font-serif tw-text-[1.5rem] tw-text-primary tw-font-normal">Villa Bonmont Terres Noves</a>
      </div>

      <!-- Theme toggle (texto exacto: 🌞) -->
      <button id="themeToggle" class="theme-toggle tw-ml-4 tw-hidden md:tw-inline-flex" aria-label="Cambiar tema" aria-pressed="false" title="Cambiar tema">🌞</button>

      <!-- Menu toggle (mismo id y atributos) -->
      <button id="menuToggle" class="menu-toggle md:tw-hidden tw-flex tw-flex-col tw-gap-[5px] tw-bg-transparent tw-p-[0.5rem]" aria-label="Toggle menu" aria-expanded="false">
        <span class="tw-block tw-w-[25px] tw-h-[3px] tw-bg-primary tw-transition-all tw-duration-300"></span>
        <span class="tw-block tw-w-[25px] tw-h-[3px] tw-bg-primary tw-transition-all tw-duration-300"></span>
        <span class="tw-block tw-w-[25px] tw-h-[3px] tw-bg-primary tw-transition-all tw-duration-300"></span>
      </button>

      <!-- Nav (desktop items visible at md+) -->
      <ul id="navMenu" class="nav-menu tw-hidden md:tw-flex tw-gap-[1rem] tw-items-center">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="pages/interiors.html">Interiores</a></li>
        <li><a href="pages/exteriors.html">Exteriores</a></li>
        <li><a href="pages/equipamiento-bienestar.html">Equipamiento y Bienestar</a></li>
        <li><a href="#lifestyle">Estilo de vida</a></li>
        <li><a href="pages/about.html">La anfitriona</a></li>
        <li><a href="https://www.airbnb.es/rooms/42616703?adults=10&search_mode=regular_search&check_in=2026-01-19&check_out=2026-01-24&children=0&infants=0&pets=0&source_impression_id=p3_1768815143_P3CsUepaBeTYUavQ&previous_page_section_name=1000&federated_search_id=e14b4184-f013-4e0a-95b9-7d03d874fa71" class="cta-link tw-bg-primary tw-text-white tw-uppercase tw-py-[1rem] tw-px-[2rem] tw-tracking-[1.5px] tw-font-semibold tw-no-underline tw-text-inherit tw-rounded focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-secondary">Reservar</a></li>
      </ul>

    </div>
  </nav>
</header>
```

> Nota: los textos y hrefs mostrados arriba son palabra por palabra los del `index.html` original. Puedes copiar este bloque para reemplazar el header en cualquier página y conservar la misma semántica y enlaces.
---

¿Quieres que además genere un archivo `index-header-tailwind.html` con solo este header para probar visualmente en el navegador (no modifica `index.html`)? ✅