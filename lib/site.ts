/**
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment once the domain is
 * live — it drives canonical links, absolute OG URLs, and the sitemap.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'http://localhost:3000'

export const site = {
  name: 'Idham Multazam',
  fullName: 'Idham Hanif Multazam',
  shortName: 'Idham Multazam',
  title: 'Idham Multazam · Software Engineer',
  role: 'Software Engineer',
  locality: 'Demak',
  region: 'Jawa Tengah',
  description:
    'Software engineer who loves exploring on my own and building independent projects that solve real problems: SplitBillin, Catetin Duit, POSin, and DemakMuda.',
  ogDescription:
    'Software engineer who loves building independent projects that solve real problems.',
  email: 'idhammultazam7@gmail.com',
  portrait: '/assets/photo/Gemini_Generated_Image_u1uoepu1uoepu1uo.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/idham-multazam/',
    github: 'https://github.com/IdhamTryCode',
    instagram: 'https://instagram.com/idhammultazam',
  },
} as const

export const nav = [
  { href: '#karya', label: 'Projects', short: 'Projects' },
  { href: '#yayo', label: 'Yayo Wings', short: 'Yayo' },
  { href: '#tentang', label: 'About', short: 'About' },
  { href: '#connect', label: 'Connect', short: 'Connect' },
] as const
