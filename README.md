# Espejo de Camarín "Machado Teatro" - Planos y Documentación Técnica

Este repositorio contiene la documentación técnica, lista de materiales y planos interactivos para la construcción física del espejo de camarín para las obras escénicas de Machado Teatro.

El objetivo central del proyecto es la construcción de un espejo iluminado por retroproyección (luz rebotada), montado mediante sistema _French Cleat_, asegurando rigidez estructural, transportabilidad y una estética impecable sin luces deslumbrantes directas hacia el actor.

> [!NOTE]
> Próximamente se agregará la documentación técnica, lista de materiales y planos interactivos para la construcción física del espejo de camarín del Teatro Machado.

## 🪞 El Objeto Construido

El diseño del espejo se fundamenta en un sándwich de diferentes materiales, optimizando el peso, la difusión de la luz LED y la estabilidad del cristal.

### Desglose Estructural (De atrás hacia adelante)

1. **Sistema de Anclaje (French Cleat - 15mm)**: Sistema de listón francés que permite montaje por gravedad a 45°. Ofrece un encastre seguro a la pared y actúa como separador natural para ventilación de la electrónica.
2. **Reflector Trasero (MDF 5.5mm)**: Placa de pre-pintada en blanco titanio. Su función es rebotar la luz que impacta desde el frente hacia la zona del cristal decapado.
3. **Placa Portante (MDF 18mm)**: Núcleo estructural de 1440x640mm. Provee la rigidez necesaria, actúa como cama para pegar el espejo y crea el pasillo/cámara para ocultar el cableado y la fuente de alimentación.
4. **Iluminación Lateral (LED COB 12V)**: Tira de alta densidad (COB) instalada en el perímetro del MDF portante, disparando luz hacia los costados en una cavidad estanca, rebotando en los reflectores (varilla de pino y fondo de 5.5mm).
5. **
---

## 🛠️ Herramienta de Planos (Visor Interactivo)

Para facilitar la construcción y cortes en taller (CNC/Ingletadora), este proyecto se acompaña de un visor web interactivo.

## Tecnologías utilizadas

- **Astro**: Framework web principal rápido y orientado a componentes.
- **Tailwind CSS v4**: Framework de estilos de utilidad integrados.
- **FlyonUI**: Librería de componentes UI interactivos.
- **Lucide Icons**: Librería de íconos limpios y adaptables.
- **TypeScript / JavaScript**: Estructuración de datos y lógica nativa del lado del cliente para controlar los SVG.
- SVG (Scalable Vector Graphics)

### Funciones del Visor Web (`/espejo`)

- **Vista de Corte (Perfil)**: Muestra el sándwich de materiales capa por capa.
- **Vista Frontal**: Plano constructivo 2D tradicional.
- **Explosión Isométrica**: Visualización 3D desglosada del ensamblaje.
- **Despiece a Presupuesto/CNC**: Tablas automatizadas de consumos por grosor de material.
- **Modo Blueprint**: Herramienta de contraste estilo plano técnico clásico.

### Estructura del proyecto

/
├── src/
│   ├── pages/        # Rutas principales (index.astro, espejo.astro, detalles.astro)
│   ├── components/   # Componentes UI reutilizables (Navbar, Tarjeta)
│   ├── layouts/      # Plantilla base y metadatos de HTML (Layout.astro)
│   └── styles/       # Variables CSS globales y configuración de temas
├── datos_espejo.json # Datos dimensionales e informativos estructurales
├── package.json      # Dependencias y scripts del entorno
└── astro.config.mjs  # Configuración del framework

### Cómo visualizar los planos

**Opción 1: Visor Online (Recomendado)**
El proyecto se compila y despliega automáticamente vía GitHub Actions. Puedes verlo sin instalar nada visitando la URL de GitHub Pages provista en este repositorio.

**Opción 2: Desarrollo Local**
1. Asegúrate de tener **Node.js** (v22.12 o superior) instalado en tu computadora.
2. Clona este repositorio y abre una terminal en su directorio.
3. Ejecuta `npm install` para instalar las dependencias (Astro, Tailwind, etc).
4. Ejecuta `npm run dev` para iniciar el servidor local y abre `http://localhost:4321` en tu navegador.

### Créditos

**Diseño y Dirección**: Matías Diez
**Asistencia de Desarrollo**: Creado con la ayuda de IA (Gemini / Antigravity).

---

_Documentación generada para Machado Teatro._
