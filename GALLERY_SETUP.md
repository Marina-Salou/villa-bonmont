# Guía de Galerías Luxosas - Interior Spaces

## Descripción

La página `pages/interiors.html` ahora cuenta con galerías modernas y luxosas para cada espacio con un sistema Lightbox sofisticado.

## Características

✨ **Diseño Moderno**
- Grid responsive adaptado a todos los dispositivos
- Efecto hover elegante con zoom suave y overlay degradado
- Transiciones fluidas y animaciones premium

🖼️ **Lightbox Interactivo**
- Modal full-screen con animaciones suaves
- Navegación con flechas (anterior/siguiente)
- Navegación por teclado (← → Escape)
- Cierre al hacer click fuera de la imagen
- Contador de imágenes (ej: "2 / 6")

📁 **Estructura de Carpetas**

Las imágenes deben estar organizadas así:
```
website/images/
├── Salon 1/
│   └── salon-1.webp
├── Salon 2/
│   └── salon-2.webp
├── Salon 3/
│   └── salon-3.webp
├── Cocina/
│   ├── cocina-1.webp
│   ├── cocina-2.webp
│   └── cocina-3.webp
├── Domitorio 1/
│   └── dormitorio-1.webp
├── Domitorio 2/
│   └── dormitorio-2.webp
├── Domitorio 3/
│   └── dormitorio-3.webp
├── Baño 1/
│   └── bathroom-1.webp
├── Baño 2/
│   └── bathroom-2.webp
└── Baño 3/
    └── bathroom-3.webp
```

## Cómo Agregar Más Imágenes

### 1. **Crear las carpetas** (si no existen)
- `website/images/Salon 1/`
- `website/images/Salon 2/`
- `website/images/Salon 3/`
- Etc...

### 2. **Convertir imágenes a WebP**
- Usa: [squoosh.app](https://squoosh.app) o [cloudconvert.com](https://cloudconvert.com)
- Selecciona el formato WebP
- Comprime sin perder calidad (85-90% recomendado)
- Descarga y coloca en las carpetas

### 3. **Actualizar la configuración** (en `pages/interiors.html`)

Encontrarás este código JavaScript (líneas ~360):
```javascript
const galleries = {
    salon: [
        { src: '../images/Salon%201/salon-1.webp', alt: 'Living room 1' },
        { src: '../images/Salon%202/salon-2.webp', alt: 'Living room 2' },
        { src: '../images/Salon%203/salon-3.webp', alt: 'Living room 3' }
    ],
    // ... más galerías
};
```

**Para agregar más imágenes:**
```javascript
const galleries = {
    salon: [
        { src: '../images/Salon%201/salon-1.webp', alt: 'Living room 1' },
        { src: '../images/Salon%202/salon-2.webp', alt: 'Living room 2' },
        { src: '../images/Salon%203/salon-3.webp', alt: 'Living room 3' },
        { src: '../images/Salon%204/salon-4.webp', alt: 'Living room 4' },  // ← Nueva imagen
        { src: '../images/Salon%205/salon-5.webp', alt: 'Living room 5' }   // ← Nueva imagen
    ],
    // ...
};
```

**Notas importantes:**
- Los espacios en los nombres de carpeta se codifican como `%20` en la URL (ej: `Salon%201`)
- Usa siempre extensión `.webp`
- El `alt` debe ser descriptivo para accesibilidad

### 4. **Agregar la tarjeta en el HTML** (también en `pages/interiors.html`)

Busca la sección de salón (~línea 180):
```html
<div class="gallery-item" onclick="openLightbox('salon', 2)">
    <img src="../images/Salon%203/salon-3.webp" alt="Living room view 3">
    <div class="gallery-overlay">
        <div class="gallery-overlay-icon">🔍</div>
    </div>
</div>
```

Para agregar una nueva tarjeta:
```html
<div class="gallery-item" onclick="openLightbox('salon', 3)">
    <img src="../images/Salon%204/salon-4.webp" alt="Living room view 4">
    <div class="gallery-overlay">
        <div class="gallery-overlay-icon">🔍</div>
    </div>
</div>
```

**Regla importante:** El número en `openLightbox('salon', X)` debe coincidir con el índice en el array (0, 1, 2, 3...)

## Estilos y Personalización

### Cambiar colores del overlay
En el `<style>` (línea ~40):
```css
.gallery-overlay {
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(201, 168, 102, 0.4) 100%);
    /* ↑ Cambiar rgba(201, 168, 102, 0.4) por tu color */
}
```

### Ajustar espacio entre imágenes
En `.gallery-grid` (línea ~35):
```css
.gallery-grid {
    gap: 1.5rem; /* Cambiar este valor */
}
```

### Cambiar velocidad de animaciones
En las clases `.gallery-item` (línea ~46):
```css
transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
/* ↑ Cambiar 0.4s por 0.2s (más rápido) o 0.8s (más lento) */
```

## Compatibilidad

✅ **WebP es compatible con:**
- Chrome 23+
- Firefox 65+
- Safari 16+
- Edge 18+
- iOS 14+
- Android 5+

**Cobertura: ~95% de dispositivos activos** (Enero 2026)

## Ventajas de WebP

- 📉 Tamaño 30-50% menor que JPG/PNG
- ⚡ Carga más rápida (mejor SEO)
- 🎨 Mejor compresión sin perder calidad
- 🌐 Compatible en todos los navegadores modernos

## Ejemplos de Uso

**Cantidad recomendada de imágenes por espacio:**
- Salon: 6-10 imágenes
- Kitchen: 5-8 imágenes
- Bedrooms: 4-6 imágenes por tipo
- Bathrooms: 3-5 imágenes por tipo

**Tamaño recomendado de archivo:**
- Ligero: 100-300 KB
- Estándar: 300-600 KB
- Alta calidad: 600-1000 KB

## Solución de Problemas

**Problema:** Las imágenes no cargan
- ✓ Verifica que la ruta sea correcta
- ✓ Comprueba que la carpeta existe en `website/images/`
- ✓ Asegúrate que la extensión sea `.webp`

**Problema:** Lightbox no funciona
- ✓ Abre la consola (F12) y busca errores
- ✓ Verifica que los números en `openLightbox()` coincidan con el array
- ✓ Comprueba que el JavaScript esté activado

**Problema:** Las imágenes se ven pixeladas
- ✓ Reconvierte con mejor calidad (85-90% en squoosh)
- ✓ Usa imágenes originales de mayor resolución

---

¡Disfruta creando una galería premium para la Villa Bonmont! 🏡✨
