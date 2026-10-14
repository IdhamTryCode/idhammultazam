import Image from 'next/image'
import { railItems } from '@/lib/projects'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__photo">
          <Image
            src={site.portrait}
            alt={`Potret ${site.name}`}
            fill
            priority
            sizes="(min-width: 900px) 450px, 100vw"
          />
        </div>

        <div className="hero__text">
          <span className="eyebrow hero__eyebrow">Software Engineer · Demak</span>
          <h1 className="hero__title">{site.name}</h1>
          <p className="hero__lede">
            Halo, saya Idham. Software engineer dari Demak yang suka bikin aplikasi dari nol,
            mulai dari tampilan sampai bisa dipakai orang. Beberapa di antaranya bisa langsung
            kamu coba di bawah.
          </p>
          <a className="hero__cta" href="#karya">
            Lihat karya saya <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="rail">
        <span className="eyebrow">Yang sudah saya buat</span>
        {railItems.map((item) => (
          <a key={item.href} href={item.href}>
            <Image
              src={item.src}
              alt=""
              width={24}
              height={24}
              className={'className' in item ? item.className : undefined}
            />
            {item.label}
          </a>
        ))}
      </div>
    </section>
  )
}
