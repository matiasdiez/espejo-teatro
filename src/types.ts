export interface NavItem {
  label: string;
  href: string;
}

export interface TarjetaConfig {
  id?: string;
  isCustom?: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
  dataTarget: string;
  dataColor: string;
  hoverClasses: string;
  titleHoverClasses: string;
  extraClasses?: string;
}