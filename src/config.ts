import type { NavItem, TarjetaConfig } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Espejo', href: '/espejo' },
  { label: 'Detalles Técnicos', href: '/detalles' },
];

export const TARJETAS_CONFIG: TarjetaConfig[] = [
  {
    id: "espejo_frontal",
    dataTarget: "layer-cristal",
    dataColor: "text-sky-500",
    hoverClasses: "hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20",
    titleHoverClasses: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
  },
  {
    isCustom: true,
    title: "Decapado",
    subtitle: "30mm ancho",
    description: "Franja translúcida en cara posterior. La luz de la ranura estanca sale frontalmente iluminando por retroproyección.",
    dataTarget: "layer-decapado",
    dataColor: "text-fuchsia-500",
    hoverClasses: "hover:border-fuchsia-400 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20",
    titleHoverClasses: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
  },
  {
    id: "marco_principal",
    dataTarget: "layer-kiri",
    dataColor: "text-burgundy-600",
    hoverClasses: "hover:border-burgundy-600 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/20",
    titleHoverClasses: "group-hover:text-burgundy-700 dark:group-hover:text-burgundy-500",
  },
  {
    id: "base_portante",
    dataTarget: "layer-mdf",
    dataColor: "text-burgundy-800",
    hoverClasses: "hover:border-burgundy-800 hover:bg-burgundy-100 dark:hover:bg-burgundy-900/40",
    titleHoverClasses: "group-hover:text-burgundy-900 dark:group-hover:text-burgundy-600",
  },
  {
    id: "reflector_trasero",
    dataTarget: "layer-mdf5",
    dataColor: "text-violet-500",
    hoverClasses: "hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20",
    titleHoverClasses: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
  },
  {
    id: "bastidor_pino",
    dataTarget: "layer-pino",
    dataColor: "text-yellow-400",
    hoverClasses: "hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20",
    titleHoverClasses: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
  },
  {
    isCustom: true,
    title: "Electrónica 12V",
    subtitle: "Fuente Slim + COB",
    description: "Fuente embutida. Tira COB incrustada en el canto del MDF, disparando luz lateralmente hacia la ranura estanca.",
    dataTarget: "layer-led",
    dataColor: "text-yellow-300",
    hoverClasses: "hover:border-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/30",
    titleHoverClasses: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
    extraClasses: "shadow-[0_0_15px_rgba(253,224,71,0)] hover:shadow-[0_0_15px_rgba(253,224,71,0.4)]",
  },
  {
    id: "anclaje_cleat",
    dataTarget: "layer-cleat",
    dataColor: "text-stone-500",
    hoverClasses: "hover:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800",
    titleHoverClasses: "group-hover:text-stone-700 dark:group-hover:text-stone-400",
  }
];