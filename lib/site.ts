/**
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment once the domain is
 * live — it drives canonical links, absolute OG URLs, and the sitemap.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'http://localhost:3000'

export const site = {
  name: 'Idham Hanif Multazam',
  shortName: 'Idham Multazam',
  title: 'Idham Hanif Multazam · Software Engineer',
  role: 'Software Engineer',
  locality: 'Demak',
  region: 'Jawa Tengah',
  description:
    'Software engineer dari Demak. Saya bikin aplikasi dari nol — SplitBillin, Catetin Duit, POSin, dan DemakMuda — mulai dari desain sampai online.',
  ogDescription:
    'Software engineer dari Demak. Saya bikin aplikasi dari nol, mulai dari desain sampai online.',
  email: 'idhammultazam7@gmail.com',
  portrait: '/assets/photo/Gemini_Generated_Image_u1uoepu1uoepu1uo.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/idham-multazam/',
    github: 'https://github.com/IdhamTryCode',
    instagram: 'https://instagram.com/idhammultazam',
  },
} as const

export const nav = [
  { href: '#karya', label: 'Karya', short: 'Karya' },
  { href: '#yayo', label: 'Yayo Wings', short: 'Yayo' },
  { href: '#tentang', label: 'Tentang', short: 'Tentang' },
  { href: '#sapa', label: 'Sapa saya', short: 'Sapa' },
] as const
