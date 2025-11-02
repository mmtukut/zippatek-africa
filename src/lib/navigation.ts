export type NavItem = {
  name: string;
  href: string;
};

export const navigation: NavItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Resources', href: '/resources' },
  { name: 'Team', href: '/team' },
];
