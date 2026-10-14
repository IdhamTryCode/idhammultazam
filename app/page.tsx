import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { BottomNav, Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Reveal } from '@/components/Reveal'
import { YayoWings } from '@/components/YayoWings'
import { site, siteUrl } from '@/lib/site'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: site.shortName,
  jobTitle: site.role,
  email: site.email,
  url: siteUrl,
  image: `${siteUrl}${site.portrait}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: 'ID',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universitas Diponegoro',
  },
  sameAs: [site.links.linkedin, site.links.github, site.links.instagram],
}

export default function HomePage() {
  return (
    <div className="page">
      <Reveal />
      <Header />
      <BottomNav />

      <main id="top">
        <Hero />
        <Projects />
        <YayoWings />
        <About />
        <Contact />
      </main>

      <footer className="footer">
        <span>© 2026 {site.name} · Demak</span>
        <span>Debug pakai console.log, dan saya tidak malu.</span>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </div>
  )
}
