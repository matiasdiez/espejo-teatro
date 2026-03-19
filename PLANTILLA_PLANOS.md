# Plantilla Base para Planos Interactivos (Estilo "Espejo Teatro" v2.0)

Este documento contiene la estructura esencial perfeccionada (HTML, CSS, y JavaScript) para replicar el estilo visual, la disposición de la información (Sidebar + Canvas SVG) y las interacciones avanzadas (hover bidireccional, zoom/pan global, modos blueprint adaptativos, líneas guía CAD) desarrolladas en el proyecto "Espejo Teatro". 

Puedes copiar y pegar esta base cuando necesites documentar un nuevo proyecto técnico.

## 1. Estructura y Configuración Base (Head)
Incluye Tailwind, FlyonUI, Lucide Icons, la configuración de colores base, y ahora integra **Variables CSS para el modo Blueprint Dual Theme** y tipografía técnica nativa.

```html
<!doctype html>
<html lang="es" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Planos - Nuevo Proyecto</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FlyonUI CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flyonui@1.3.0/dist/full.min.css" />
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- Tailwind Config Custom Colors -->
  <script>
    tailwind.config = {
      darkMode: ["class", '[data-theme="dark"]'],
      theme: { extend: {} } 
    };
  </script>

  <style>
    /* Tipografía técnica para Sidebar y Textos de Planos */
    aside#sidebar, main svg text {
      font-family: 'Courier New', 'Courier', monospace !important;
    }

    /* Transiciones base para elementos SVG */
    .svg-layer {
      transition: opacity 0.4s ease, filter 0.4s ease, stroke-width 0.4s ease;
    }

    /* Comportamiento al pasar el mouse por un material (Desaturar el resto) */
    .layer-highlight-mode .svg-layer:not(.highlighted) {
      opacity: 0.15 !important;
      filter: grayscale(100%) !important;
    }
    .layer-highlight-mode .svg-layer.highlighted {
      filter: brightness(1.3) drop-shadow(0 0 8px currentColor) !important;
      stroke: currentColor !important;
      stroke-width: 2px !important;
    }

    /* Animación Sidebar Items */
    .spec-item {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s;
      transform-origin: left center;
    }
    .spec-item:hover, .spec-item.active-hover { transform: scale(1.02); }

    /* Pestañas (Tabs) */
    .view-panel {
      display: none; opacity: 0; transition: opacity 0.4s ease;
    }
    .view-panel.active { display: flex; opacity: 1; }

    /* Sombras base de los planos SVG */
    svg {
      max-width: 100%; height: auto;
      filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.15));
      transition: background-color 0.4s ease;
    }
    [data-theme="dark"] svg {
      filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.6));
    }

    /* Estilos de Cotas y Líneas Guía tipo CAD */
    .dim-line {
      stroke: currentColor; opacity: 0.3; stroke-width: 1; 
      /* Usar stroke-dasharray="2,2" directamente en el SVG para líderes (leader lines) */
      /* Usar fill="none" para las polylines */
    }
    .dim-text-m {
      fill: currentColor; font-size: 6px;
    }

    /* ====== MODO BLUEPRINT (DUAL THEME) ====== */
    /* El modo Blueprint se adapta al Light o Dark theme del usuario */
    .blueprint-mode {
      --bp-bg: #2563eb;
      --bp-line: #ffffff;
      --bp-grid: rgba(255, 255, 255, 0.08); /* Grilla milimetrada sutil */
      --bp-fill: rgba(255, 255, 255, 0.1);
    }
    [data-theme="dark"] .blueprint-mode {
      --bp-bg: #0f172a;
      --bp-line: #bae6fd;
      --bp-grid: transparent; /* Sin grilla en el tema oscuro */
      --bp-fill: rgba(186, 230, 253, 0.1);
    }

    .blueprint-mode #workspace-container {
      background-color: var(--bp-bg) !important;
      background-image: 
        linear-gradient(var(--bp-grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--bp-grid) 1px, transparent 1px) !important;
      background-size: 40px 40px !important;
      background-position: center center !important;
    }
    .blueprint-mode svg { filter: none !important; }
    .blueprint-mode [stroke="currentColor"], .blueprint-mode .dim-line {
      stroke: var(--bp-line) !important; opacity: 0.8 !important;
    }
    .blueprint-mode text, .blueprint-mode .fill-current {
      fill: var(--bp-line) !important; color: var(--bp-line) !important;
    }
    /* Materiales en general (Hatch genérico a 45 grados) */
    .blueprint-mode .svg-layer:not(.layer-muro):not(.layer-decapado) {
      fill: url(#blueprintHatch) !important;
      stroke: var(--bp-line) !important;
      stroke-width: 0.5px !important;
    }
    /* Concreto / Muros (Patrón de grava y arena) */
    .blueprint-mode .layer-muro {
      fill: url(#concreteHatch) !important;
      stroke: var(--bp-line) !important;
      stroke-width: 0.5px !important;
      opacity: 0.7 !important;
    }

    /* Ocultar Cotas */
    .hide-dims .dim-line, .hide-dims .dim-text-m, .hide-dims .dim-group {
      opacity: 0 !important; transition: opacity 0.3s ease;
    }
    
    /* Apagar Luces */
    .lights-off .layer-led, .lights-off [fill="url(#lightConeGrad)"] {
      opacity: 0 !important; transition: opacity 0.4s ease;
    }
  </style>
</head>
<body class="bg-base-50 text-base-900 dark:bg-base-950 dark:text-base-50 h-screen flex flex-col overflow-hidden transition-colors duration-300">
  <!-- NAVBAR ... (Insertar Navbar asegurándote que navbar-end use w-auto ml-auto) ... -->
```

## 2. Layout Principal (Sidebar y Canvas)
La disposición incluye la estructura para los paneles de zoom y los botones interactivos de alta legibilidad en modo claro.

```html
  <div class="flex flex-col-reverse lg:flex-row flex-1 overflow-hidden">
    
    <!-- SIDEBAR: Lista de Materiales -->
    <aside class="w-full lg:w-[380px] h-2/5 lg:h-auto bg-base-100 dark:bg-base-900 flex flex-col p-4 gap-2 overflow-y-auto z-10 shadow-lg shrink-0" id="sidebar">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-xs font-bold uppercase tracking-widest text-base-500">Desglose de Materiales</h2>
      </div>

      <!-- EJEMPLO DE MATERIAL -->
      <div class="spec-item group bg-base-50 dark:bg-base-800/50 border border-base-200 dark:border-base-700 rounded-xl p-4 cursor-pointer hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20" 
           data-target="layer-madera" 
           data-color="text-amber-600">
        <div class="flex justify-between items-center mb-1">
          <span class="font-semibold text-base-900 dark:text-base-100 group-hover:text-amber-700 transition-colors">Madera Base</span>
          <span class="text-xs bg-base-200 dark:bg-base-800 px-2 py-1 rounded">1000 x 500 x 18mm</span>
        </div>
        <div class="text-sm text-base-600 dark:text-base-400">Descripción del material.</div>
      </div>
    </aside>

    <!-- AREA PRINCIPAL SVG Y CONTROLES -->
    <main class="flex-1 flex flex-col bg-base-200 dark:bg-base-950 relative overlay-pattern">

      <!-- Barra Superior: Pestañas (Tabs) y Herramientas -->
      <div class="flex flex-col sm:flex-row w-full bg-base-100 dark:bg-base-900 border-b border-base-200 shadow-sm z-10">
        <div class="tabs tabs-box flex-1 px-4 pt-4 border-b-0 bg-transparent">
          <a class="tab tab-btn tab-active font-medium" data-view="view-1">Vista Planta</a>
        </div>
        
        <div class="flex items-center gap-2 px-4 py-3 sm:py-0 border-t sm:border-t-0">
          <!-- Controles Zoom -->
          <div class="hidden sm:flex items-center gap-1 border-r pr-2 mr-1">
            <i data-lucide="zoom-out" class="w-4 h-4 text-base-500"></i>
            <input id="zoom-slider" type="range" min="0.5" max="3" step="0.1" value="1" class="range range-xs range-primary w-24" />
            <i data-lucide="zoom-in" class="w-4 h-4 text-base-500"></i>
            <button id="zoom-reset" class="btn btn-xs btn-ghost btn-circle ml-1" title="Reset Zoom">
              <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <!-- Botones Herramientas Interactivos -->
          <button id="btn-blueprint" class="btn btn-sm btn-ghost btn-square" title="Modo Blueprint">
            <i data-lucide="drafting-compass" class="w-4 h-4 text-blue-600 dark:text-sky-500"></i>
          </button>
          <button id="btn-lights" class="btn btn-sm btn-ghost btn-square" title="Alternar Luces LED">
            <i id="icon-lights" data-lucide="lightbulb" class="w-4 h-4 text-amber-600 dark:text-yellow-500 fill-amber-600 dark:fill-yellow-500"></i>
          </button>
          <button id="btn-dims" class="btn btn-sm btn-ghost btn-square" title="Ocultar/Mostrar Cotas">
            <i id="icon-dims" data-lucide="ruler" class="w-4 h-4 text-base-700 dark:text-base-400"></i>
          </button>
        </div>
      </div>

      <!-- Definiciones de Componentes SVG (Filtros, Gradientes, Patrones) -->
      <svg width="0" height="0" class="absolute pointer-events-none">
        <defs>
          <pattern id="blueprintHatch" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" stroke-width="2" />
          </pattern>
          <pattern id="concreteHatch" patternUnits="userSpaceOnUse" width="20" height="20">
            <path d="M 4,4 L 6,1 L 8,4 Z M 14,14 L 16,11 L 18,14 Z" stroke="currentColor" fill="none" stroke-width="0.5" />
            <circle cx="12" cy="4" r="0.5" fill="currentColor" />
            <circle cx="4" cy="14" r="0.5" fill="currentColor" />
            <circle cx="10" cy="10" r="0.5" fill="currentColor" />
            <circle cx="16" cy="6" r="0.3" fill="currentColor" />
            <circle cx="6" cy="18" r="0.3" fill="currentColor" />
          </pattern>
        </defs>
      </svg>

      <!-- Vistas SVG (Relacionadas a las Tabs) -->
      <div id="workspace-container" class="flex-1 flex relative p-4 z-0 h-full w-full items-center justify-center transition-colors duration-500">
        
        <!-- VISTA 1 -->
        <div id="view-1" class="view-panel active text-base-500 w-full h-full max-w-5xl zoom-area cursor-grab active:cursor-grabbing">
          <!-- ZOOM CONTAINER -->
          <div id="zoom-container-1" class="w-full h-full flex justify-center items-center" style="transform-origin: center center">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" class="w-full text-base-400">
              <!-- Material y Capas -->
              <rect x="100" y="100" width="800" height="400" fill="#f59e0b" class="svg-layer layer-madera" />
              <rect x="100" y="550" width="800" height="40" class="svg-layer layer-muro" fill="#CBD5E1" opacity="0.3" />
              
              <!-- Línea Guía tipo CAD (Polyline Punteada) -->
              <polyline points="500,300 550,500 650,500" class="dim-line" stroke-width="0.5" stroke-dasharray="2,2" fill="none" />
              <text x="655" y="502" font-size="20">Fijación a panel</text>
            </svg>
          </div>
        </div>

      </div>
    </main>
  </div>
</body>
```

## 3. Lógica JavaScript Avanzada (Zoom, Pan, Hovers CSS cacheados y Toggles)
Esta sección contiene la lógica integral perfeccionada para alto rendimiento.

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializar Iconos
    lucide.createIcons();

    // 2. Variables de Paneo y Zoom (Globales)
    let currentScale = 1; let currentPanX = 0; let currentPanY = 0;
    let isPanning = false; let startX = 0; let startY = 0;

    const zoomSlider = document.getElementById("zoom-slider");
    
    function applyTransform() {
      const activeView = document.querySelector(".view-panel.active");
      if (activeView) {
        const container = activeView.querySelector("[id^='zoom-container']");
        if (container) {
          container.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentScale})`;
        }
      }
    }

    function resetZoomPan() {
      currentScale = 1; currentPanX = 0; currentPanY = 0;
      if (zoomSlider) zoomSlider.value = 1;
      applyTransform();
    }

    const viewPanels = document.querySelectorAll(".view-panel");
    viewPanels.forEach((panel) => {
      panel.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY * -0.001;
        currentScale = Math.min(Math.max(0.5, currentScale + delta), 3);
        if (zoomSlider) zoomSlider.value = currentScale;
        applyTransform();
      });

      panel.addEventListener("mousedown", (e) => {
        isPanning = true;
        startX = e.clientX - currentPanX;
        startY = e.clientY - currentPanY;
        panel.style.cursor = "grabbing";
      });

      panel.addEventListener("mousemove", (e) => {
        if (!isPanning) return;
        currentPanX = e.clientX - startX;
        currentPanY = e.clientY - startY;
        applyTransform();
      });

      panel.addEventListener("mouseup", () => { isPanning = false; panel.style.cursor = "grab"; });
      panel.addEventListener("mouseleave", () => { isPanning = false; panel.style.cursor = "grab"; });
    });

    if (zoomSlider) zoomSlider.addEventListener("input", (e) => { currentScale = parseFloat(e.target.value); applyTransform(); });
    document.getElementById("zoom-reset")?.addEventListener("click", resetZoomPan);

    // 3. Lógica de Pestañas (Tabs)
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("tab-active"));
        viewPanels.forEach((v) => v.classList.remove("active"));
        btn.classList.add("tab-active");
        document.getElementById(btn.dataset.view).classList.add("active");
        resetZoomPan(); // Limpiar escala al cambiar
      });
    });

    // 4. Hover Bidireccional (Cacheando clases)
    const specItems = document.querySelectorAll(".spec-item");
    const svgLayers = document.querySelectorAll(".svg-layer");

    // LADO A: SIDEBAR -> SVG
    specItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const targetClass = item.dataset.target;
        const mainColorClass = item.dataset.color;
        document.body.classList.add("layer-highlight-mode");
        document.querySelectorAll("." + targetClass).forEach((el) => {
          el.classList.add("highlighted");
          if (mainColorClass) el.classList.add(mainColorClass);
        });
      });
      item.addEventListener("mouseleave", () => {
        document.body.classList.remove("layer-highlight-mode");
        document.querySelectorAll("." + item.dataset.target).forEach((el) => {
          el.classList.remove("highlighted", item.dataset.color);
        });
      });
    });

    // LADO B: SVG -> SIDEBAR
    svgLayers.forEach((layer) => {
      layer.addEventListener("mouseenter", () => {
        const targetClass = Array.from(layer.classList).find(c => c.startsWith("layer-"));
        if (targetClass) {
          const specItem = document.querySelector(`.spec-item[data-target="${targetClass}"]`);
          if (specItem) {
            document.body.classList.add("layer-highlight-mode");
            specItem.classList.add("active-hover");

            if (!specItem.dataset.hoverClassesCached) {
              const hClass = Array.from(specItem.classList).filter(c => c.includes("hover:")).map(c => c.replace(/.*hover:/, ""));
              specItem.dataset.hoverClasses = JSON.stringify(hClass);
              specItem.dataset.hoverClassesCached = "true";
            }
            const hoverClasses = JSON.parse(specItem.dataset.hoverClasses || "[]");
            specItem.classList.add(...hoverClasses);
            specItem.classList.remove("bg-base-50", "dark:bg-base-800/50"); 
            specItem.scrollIntoView({ behavior: "smooth", block: "nearest" });

            document.querySelectorAll("." + targetClass).forEach(el => el.classList.add("highlighted", specItem.dataset.color));
          }
        }
      });

      layer.addEventListener("mouseleave", () => {
        const targetClass = Array.from(layer.classList).find(c => c.startsWith("layer-"));
        if (targetClass) {
          const specItem = document.querySelector(`.spec-item[data-target="${targetClass}"]`);
          if (specItem) {
            document.body.classList.remove("layer-highlight-mode");
            specItem.classList.remove("active-hover");

            const hoverClasses = JSON.parse(specItem.dataset.hoverClasses || "[]");
            specItem.classList.remove(...hoverClasses);
            specItem.classList.add("bg-base-50", "dark:bg-base-800/50");

            document.querySelectorAll("." + targetClass).forEach(el => el.classList.remove("highlighted", specItem.dataset.color));
          }
        }
      });
    });

    // 5. Toggle de Herramientas Superiores
    const workspaceContainer = document.getElementById("workspace-container");
    
    document.getElementById("btn-blueprint")?.addEventListener("click", (e) => {
      workspaceContainer.classList.toggle("blueprint-mode");
      e.currentTarget.classList.toggle("bg-blue-200");
      e.currentTarget.classList.toggle("dark:bg-sky-500/20");
      e.currentTarget.querySelector("i").classList.toggle("text-blue-600");
      e.currentTarget.querySelector("i").classList.toggle("dark:text-sky-500");
    });
    
    document.getElementById("btn-lights")?.addEventListener("click", (e) => {
      workspaceContainer.classList.toggle("lights-off");
      const icon = document.getElementById("icon-lights");
      const btn = e.currentTarget;
      if (workspaceContainer.classList.contains("lights-off")) {
        icon.classList.remove("fill-amber-600", "text-amber-600", "dark:fill-yellow-500", "dark:text-yellow-500");
        icon.classList.add("text-base-500");
        btn.classList.add("bg-base-200", "dark:bg-base-800");
      } else {
        icon.classList.add("fill-amber-600", "text-amber-600", "dark:fill-yellow-500", "dark:text-yellow-500");
        icon.classList.remove("text-base-500");
        btn.classList.remove("bg-base-200", "dark:bg-base-800");
      }
    });

    document.getElementById("btn-dims")?.addEventListener("click", (e) => {
      workspaceContainer.classList.toggle("hide-dims");
      const icon = document.getElementById("icon-dims");
      const btn = e.currentTarget;
      if (workspaceContainer.classList.contains("hide-dims")) {
        icon.setAttribute("data-lucide", "eye-off");
        icon.classList.remove("text-base-700", "dark:text-base-400");
        icon.classList.add("text-base-400");
        btn.classList.add("bg-base-200", "dark:bg-base-800");
      } else {
        icon.setAttribute("data-lucide", "ruler");
        icon.classList.add("text-base-700", "dark:text-base-400");
        icon.classList.remove("text-base-400");
        btn.classList.remove("bg-base-200", "dark:bg-base-800");
      }
      lucide.createIcons();
    });

  });
</script>
</html>
```

---

## 4. Estándares Constructivos Clave (v2.0)

1. **Líneas Guía (Leader Lines) tipo CAD**: 
   Utiliza siempre la convención `<polyline points="X,Y X2,Y2 X3,Y3" class="dim-line" stroke-width="0.5" stroke-dasharray="2,2" fill="none" />` para etiquetar elementos. Esto evita empalmes abruptos formando una diagonal de salida muy limpia y quebrando hacia horizonte.

2. **Paredes y Fondos Constructivos (Concreto)**: 
   Usa la clase `.layer-muro` para cajas rectangulares que representen muros base. Configurar la opacidad nativa muy baja. En la vista Blueprint el CSS lo reemplaza automáticamente por el estándar arquitectónico de entrazo de hormigón/grava, ignorando el "Hatch" de elementos estructurales o madera.

3. **Interacción Directa CSS Sidebar/SVG**: 
   Añadiendo el atributo de data personalizado de Tailwind `data-color="text-amber-600"`, el JS extraerá las propiedades exactas y retroalimentará bidireccionalmente SVG -> Sidebar sin tener que hardcodear paletas de colores separadas en el JS. Respetando el DRY (Don't Repeat Yourself).

4. **Compatibilidad Theme-Aware**: 
   Bajo "Blueprint", `--bp-bg` y `--bp-line` reaccionan a `data-theme="dark"` para ofrecer fondos oscuros (`#0f172a`) o azul cian (`#2563eb`). Nunca coloques `!important` a fill y variables hardcodeadas directas en elementos ajenos salvo que se quieran romper de este comportamiento. El Navbar usa clase `navbar-end` con `w-auto ml-auto` para evitar solapes de clic en los links.
