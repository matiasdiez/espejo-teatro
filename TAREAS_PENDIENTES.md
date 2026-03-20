# 📋 Tareas Pendientes y Roadmap

## 📄 Páginas y Contenido
- [ ] **Página de Equipo (`equipo.astro`)**: Crear y maquetar la vista que presente a los desarrolladores, diseñadores y miembros del proyecto Machado Teatro.
- [ ] **Mejorar Portada (`index.astro`)**: Agregar más contenido descriptivo, quizás una galería de imágenes del proceso de construcción o enlaces rápidos a las distintas piezas del proyecto.

## 🎨 Estilos y UI
- [ ] **Aprovechar FlyonUI al máximo**: Revisar la documentación de FlyonUI e implementar componentes más avanzados (ej. modales para información extra, tooltips en las vistas 2D/3D, o un mejor sistema de menús).
- [ ] **Micro-interacciones**: Agregar transiciones más fluidas entre pestañas y al momento de hacer zoom o pan en los SVG.
- [ ] **CSS Universal**: Crear un código CSS de base universal para planos de muebles.

## 🏗️ Arquitectura y Escalabilidad (Multi-Proyecto)
- [ ] **Motor de Renderizado Dinámico**: Desacoplar `espejo.astro` de sus datos hardcodeados para que la página funcione como una *plantilla base*. El objetivo es poder desplegar cualquier otro mueble u objeto escénico solo cambiando el origen de datos.
- [ ] **Sistema de Rutas Dinámicas**: Configurar Astro para que genere páginas automáticamente (ej. `/planos/[proyecto]`) basándose en los archivos JSON disponibles en el repositorio.
- [ ] **Separar SVGs**: Los dibujos SVG deben ser importados a la página astro. Deben estar en un lugar separado.

## 💾 Gestión de Datos (Archivos JSON)
- [ ] **Estudio y Optimización de JSON**: Analizar cómo mejorar la estructura de `datos_espejo.json` y `datos_materiales.json`.
  - *Idea*: Crear esquemas estrictos (TypeScript Interfaces) para validar que cualquier JSON nuevo tenga las propiedades correctas antes de renderizar la página.
  - *Idea*: Unificar las coordenadas o atributos del SVG dentro del JSON (o en un archivo paralelo) para automatizar el dibujo, en lugar de tener el código SVG incrustado directamente en el HTML.

## ⚙️ Generales y Mantenimiento
- [ ] **SEO y Metaetiquetas**: Optimizar el `<head>` en `Layout.astro` para que cada vista tenga sus metaetiquetas dinámicas (título, descripción, imagen de preview para compartir en redes).
- [ ] **Accesibilidad (a11y)**: Asegurar que todos los botones, tarjetas y el menú navegable sean completamente accesibles por teclado y lectores de pantalla.