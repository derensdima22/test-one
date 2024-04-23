type AnnexReferences = {
  link: string;
  name: string;
}

type ColumnNavigateFooterType = {
  title: string;
  links: AnnexReferences[];
}

export const dataLinks: ColumnNavigateFooterType[] = [
  {
    title: 'About us',
    links: [
      {link: '#', name: 'Home'},
      {link: '#', name: 'Features'},
      {link: '#', name: 'Docs'},
      {link: '#', name: 'Pricing'},
    ]
  },
  {
    title: 'Features',
    links: [
      {link: '#', name: 'Services'},
      {link: '#', name: 'Online Shop'},
      {link: '#', name: 'Influences'},
      {link: '#', name: 'Media'},
      {link: '#', name: 'Brands'},
    ]
  },
  {
    title: 'Blog',
    links: [
      {link: '#', name: 'Terms & conditions'},
      {link: '#', name: 'Support'},
      {link: '#', name: 'Privacy'},
    ]
  },
] 