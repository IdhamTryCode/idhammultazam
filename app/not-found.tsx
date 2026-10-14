import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Halaman tidak ditemukan · Idham Multazam',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="page">
      <section
        className="contact"
        style={{ minHeight: '70svh', display: 'grid', alignContent: 'center' }}
      >
        <div className="contact__text">
          <span className="eyebrow">404</span>
          <h1 className="contact__title">Halamannya tidak ada.</h1>
          <p className="contact__copy">
            Mungkin tautannya salah ketik, atau halamannya memang sudah tidak ada lagi.
          </p>
          <p style={{ margin: 0 }}>
            <Link className="hero__cta" href="/" style={{ marginTop: 12 }}>
              Kembali ke beranda
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
