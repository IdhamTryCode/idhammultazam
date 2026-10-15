export type Project = {
  id: string
  name: string
  /** Platform badge, tinted with the product's own accent colour. */
  kind: string
  copy: string
  cta: string
  href: string
  logo: { src: string; className?: string }
  /** Absent for POSin, which renders a hand-built cashier mock instead. */
  screenshot?: { src: string; alt: string }
  hasGlow?: boolean
  /** Per-card accent custom properties consumed by .card in globals.css. */
  vars: Record<string, string>
}

export const projects: Project[] = [
  {
    id: 'splitbillin',
    name: 'SplitBillin',
    kind: 'Web app',
    copy: 'Aplikasi untuk bagi tagihan makan bareng teman. Cukup foto struknya, AI membaca semua pesanan, lalu kamu tinggal pilih siapa pesan apa. Gratis, tanpa perlu daftar.',
    cta: 'Buka SplitBillin →',
    href: 'https://www.splitbillin.my.id',
    logo: { src: '/assets/splitbillin/mark-tile.png' },
    screenshot: {
      src: '/assets/screenshots/splitbillin-mobile.png',
      alt: 'Tampilan SplitBillin di HP',
    },
    hasGlow: true,
    vars: {
      '--card-accent': 'var(--sb-accent)',
      '--card-panel': '#0B0F17',
      '--card-cta': '#006948',
      '--card-glow': 'rgba(108,248,187,.2)',
      '--frame-bg': '#05070B',
      '--frame-shadow':
        '0 30px 60px -18px rgba(0,0,0,.8), 0 0 0 1px rgba(255,255,255,.12)',
    },
  },
  {
    id: 'catetin-duit',
    name: 'Catetin Duit',
    kind: 'Bot Telegram + Web',
    copy: "Catat pemasukan dan pengeluaran cukup dengan chat ke Telegram, misalnya 'beli kopi 25rb'. AI langsung mencatatnya, dan ringkasan keuanganmu bisa dilihat di website.",
    cta: 'Buka Catetin Duit →',
    href: 'https://www.catetinduit.de',
    logo: {
      src: '/assets/catetin-duit/logo.png',
      className: 'on-paper is-contain',
    },
    screenshot: {
      src: '/assets/screenshots/catetin-duit-mobile.png',
      alt: 'Tampilan Catetin Duit di HP',
    },
    vars: {
      '--card-accent': 'var(--cd-accent)',
      '--card-panel': 'var(--cd-panel)',
      '--card-cta': '#00754A',
      '--frame-bg': '#0A0F0C',
      '--frame-shadow': '0 30px 60px -18px rgba(11,26,18,.6)',
    },
  },
  {
    id: 'posin',
    name: 'POSin',
    kind: 'Aplikasi Android',
    copy: 'Aplikasi kasir sederhana untuk warung dan usaha kecil. Tetap bisa dipakai tanpa internet, bisa cetak struk ke printer Bluetooth, dan ada laporan penjualannya.',
    cta: 'Download di Google Play →',
    href: 'https://play.google.com/store/apps/details?id=com.posin.posin',
    logo: { src: '/assets/posin/logo.png' },
    hasGlow: true,
    vars: {
      '--card-accent': 'var(--pos-accent)',
      '--card-panel': 'var(--pos-panel)',
      '--card-cta': '#2563EB',
      '--card-glow': 'rgba(139,92,246,.18)',
      '--frame-bg': '#0B0B0F',
      '--frame-shadow': '0 30px 60px -18px rgba(15,23,42,.55)',
    },
  },
  {
    id: 'demakmuda',
    name: 'DemakMuda',
    kind: 'Web app',
    copy: 'Satu tempat untuk info kegiatan, lomba, beasiswa, dan komunitas pemuda di Kabupaten Demak. Saya buat untuk lomba aplikasi di Jambore Pemuda Demak 2026.',
    cta: 'Buka DemakMuda →',
    href: 'https://demakmuda.space',
    logo: {
      src: '/assets/demakmuda/demak_logo.png',
      className: 'is-bare is-contain',
    },
    screenshot: {
      src: '/assets/screenshots/demakmuda-mobile.png',
      alt: 'Tampilan DemakMuda di HP',
    },
    vars: {
      '--card-accent': 'var(--dm-accent)',
      '--card-panel': 'var(--dm-panel)',
      '--card-cta': '#0D5C4C',
      '--frame-bg': '#0B0F0E',
      '--frame-shadow': '0 30px 60px -18px rgba(13,40,34,.6)',
    },
  },
]

/** Logo rail under the hero — the four products plus the food business. */
export const railItems = [
  { href: '#splitbillin', label: 'SplitBillin', src: '/assets/splitbillin/mark-tile.png' },
  {
    href: '#catetin-duit',
    label: 'Catetin Duit',
    src: '/assets/catetin-duit/logo.png',
    className: 'on-white',
  },
  { href: '#posin', label: 'POSin', src: '/assets/posin/logo.png' },
  {
    href: '#demakmuda',
    label: 'DemakMuda',
    src: '/assets/demakmuda/demak_logo.png',
    className: 'is-contain',
  },
  {
    href: '#yayo',
    label: 'Yayo Wings',
    src: '/assets/yayo-wings/logo.png',
    className: 'is-contain',
  },
] as const

export const experience = [
  { what: 'IT at Bank Jateng', when: 'Sep 2026 – Present' },
  { what: 'Software Engineer at RantAI', when: 'Sep 2024 – 2026' },
  { what: 'Intern Developer at Bhakti Usaha Jaya', when: 'Dec 2022 – Apr 2023' },
] as const

export const stack = [
  { label: 'Languages', value: 'TypeScript, JavaScript, Dart, Python, SQL' },
  { label: 'Frontend', value: 'Next.js, React, Tailwind CSS, shadcn/ui, Radix UI, Flutter' },
  {
    label: 'Backend & Database',
    value: 'Node.js, Hono, FastAPI, PostgreSQL, Supabase, Prisma, SQLite',
  },
  { label: 'AI', value: 'LLM integration, prompt design, RAG' },
  {
    label: 'Infra & DevOps',
    value: 'Docker, Kubernetes, Google Cloud Platform, Vercel, GitHub Actions, Git',
  },
] as const
