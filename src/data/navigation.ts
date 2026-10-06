export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Master Plan", href: "/master-plan" },
  { label: "Plot Sizes", href: "/plot-types" },
  { label: "Amenities", href: "/amenities" },
  { label: "Nearby", href: "/nearby" },
  { label: "Contact", href: "/contact" },
];
