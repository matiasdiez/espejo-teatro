# Espejo de Camarín "Machado Teatro" - Planos y Documentación Técnica

Este repositorio contiene la documentación técnica, lista de materiales y planos interactivos para la construcción física del espejo de camarín para las obras escénicas de Machado Teatro.

El objetivo central del proyecto es la construcción de un espejo iluminado por retroproyección (luz rebotada), montado mediante sistema _French Cleat_, asegurando rigidez estructural, transportabilidad y una estética impecable sin luces deslumbrantes directas hacia el actor.

> [!note] Nota
> Próximamente se agregará la documentación técnica, lista de materiales y planos interactivos para la construcción física del espejo de camarín del Teatro Machado.

## 🪞 El Objeto Construido

El diseño del espejo se fundamenta en un sándwich de diferentes materiales, optimizando el peso, la difusión de la luz LED y la estabilidad del cristal.

### Desglose Estructural (De atrás hacia adelante)

1. **Sistema de Anclaje (French Cleat - 15mm)**: Sistema de listón francés que permite montaje por gravedad a 45°. Ofrece un encastre seguro a la pared y actúa como separador natural para ventilación de la electrónica.
2. **Reflector Trasero (MDF 5.5mm)**: Placa de pre-pintada en blanco titanio. Su función es rebotar la luz que impacta desde el frente hacia la zona del cristal decapado.
3. **Placa Portante (MDF 18mm)**: Núcleo estructural de 1440x640mm. Provee la rigidez necesaria, actúa como cama para pegar el espejo y crea el pasillo/cámara para ocultar el cableado y la fuente de alimentación.
4. **Iluminación Lateral (LED COB 12V)**: Tira de alta densidad (COB) instalada en el perímetro del MDF portante, disparando luz hacia los costados en una cavidad estanca, rebotando en los reflectores (varilla de pino y fondo de 5.5mm).
5. **Cierre Lumínico Perimetral (Pino 18mm)**: Varillas laterales (blancas por dentro) que evitan la fuga de luz hacia afuera y la direccionan forzosamente hacia el frente.
6. **Espejo Principal (Cristal VASA 4mm)**: Superficie reflectante de 1500x700mm. Cuenta con un **Decapado perimetral de 30mm** (franja translúcida) por donde asomará la luz LED rebotada (retroiluminación).
7. **Marco Exterior (Madera de Kiri)**: Marco liviano pero robusto (1630x830mm total, 70mm de vista frontal y 20mm de grosor). Cuenta con un galce (rebaje) donde asienta el conjunto, conteniendo todo el sándwich de materiales.

---

## 🛠️ Herramienta de Planos (Visor Interactivo)

Para facilitar la construcción y cortes en taller (CNC/Ingletadora), este proyecto se acompaña de un visor web interactivo.

## Tecnologías utilizadas

- HTML / CSS3 (vainilla)
- JavaScript (sin frameworks, lógica nativa para controlar los SVG)
- SVG (Scalable Vector Graphics)
- Lucide Icons (librería de iconos)
- FlyonUI (librería de componentes UI)
- Tailwind CSS (framework de estilos)

### Funciones del Visor Web (`espejo.html`)

- **Vista de Corte (Perfil)**: Muestra el sándwich de materiales capa por capa.
- **Vista Frontal**: Plano constructivo 2D tradicional.
- **Explosión Isométrica**: Visualización 3D desglosada del ensamblaje.
- **Despiece a Presupuesto/CNC**: Tablas automatizadas de consumos por grosor de material.
- **Modo Blueprint**: Herramienta de contraste estilo plano técnico clásico.

### Estructura del proyecto

/
├── espejo.html # Página principal del visor del espejo
├── PLANTILLA_PLANOS.md # Plantilla base con el motor de zoom/pan y estética blueprint
├── shared.css # Estilos globales de la aplicación
└── ...

### Cómo visualizar los planos

1. Descarga o clona este directorio/repositorio.
2. No requiere instalación de programas adicionales ni servidores.
3. Abre el archivo `espejo.html` (o ingresa desde `index.html`) utilizando cualquier navegador web (Chrome, Firefox, Safari) en PC o móvil.

### Créditos

**Diseño y Dirección**: Matías Diez
**Asistencia de Desarrollo**: Creado con la ayuda de IA (Gemini / Antigravity).

---

_Documentación generada para Machado Teatro._
