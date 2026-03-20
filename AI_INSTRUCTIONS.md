# Directivas de Proyecto para la IA

Este proyecto utiliza un stack moderno. **Antes de sugerir cualquier código o configuración, debes leer el archivo `package.json`** para corroborar las versiones exactas.

## Stack Tecnológico Actual
- **Astro**: v6+
- **Tailwind CSS**: v4+ (Vite plugin)
- **FlyonUI**: v2+
- **Lucide Icons**: v0.5+

## Reglas Estrictas de Desarrollo
1. **Tailwind CSS-First**: Estamos en Tailwind v4. **NO sugieras** crear ni modificar archivos `tailwind.config.js` o `tailwind.config.mjs`. Toda la configuración de temas, colores y plugins (`@theme`, `@plugin`) debe ir directamente en la hoja de estilos global (`src/styles/global.css`).
2. **Astro Moderno**: Utiliza las mejores prácticas de Astro. Los scripts del cliente que interactúen con el DOM deben ir en etiquetas `<script>` estándar dentro de los `.astro`.
3. **TypeScript**: Astro usa TypeScript por defecto en su frontmatter (`---`). Siempre tipa adecuadamente las variables (ej: no dejes `any` implícitos si puedes inferir la estructura, usa Nullish Coalescing `??` en lugar de `||` para números).
4. **Eficiencia de Tokens**: Ve directo al grano. No me des explicaciones largas sobre cómo funciona HTML o CSS a menos que te lo pida. Limítate a darme el código refactorizado y una breve viñeta del porqué de tu decisión técnica.

## Flujo de Trabajo (Muebles / Planos)
Este proyecto lee datos estructurales desde archivos JSON (ej. `datos_espejo.json`) para renderizar componentes visuales en los archivos `.astro` e interactuar con SVGs manipulados mediante JavaScript nativo. Mantén separada la lógica de datos (JSON) de la presentación.