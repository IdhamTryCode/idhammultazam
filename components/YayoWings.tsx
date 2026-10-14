import Image from 'next/image'

export function YayoWings() {
  return (
    <section className="yayo" id="yayo">
      <div className="yayo__card" data-reveal>
        <div className="yayo__media">
          <Image
            src="/assets/yayo-wings/hero.png"
            alt="Chicken wings ala Korea dengan saus gochujang dan madu"
            width={1024}
            height={506}
            sizes="(min-width: 1280px) 1240px, 100vw"
          />
          <div className="yayo__badge">
            <Image src="/assets/yayo-wings/logo.png" alt="" width={26} height={26} />
            <span>Yayo Wings · Demak</span>
          </div>
        </div>

        <div className="yayo__grid">
          <div className="yayo__text">
            <span className="yayo__eyebrow">Usaha saya sendiri</span>
            <h2 className="yayo__title">Rasa Korea, bahan Demak.</h2>
            <p className="yayo__copy">
              Selain ngoding, saya juga punya usaha kuliner sendiri di Demak: Yayo Wings,
              chicken wings ala Korea dengan saus gochujang dan madu. Website-nya juga saya
              buat sendiri.
            </p>
          </div>

          <div className="yayo__actions">
            <a
              className="yayo__btn is-primary"
              href="https://yayowings.my.id"
              target="_blank"
              rel="noopener"
            >
              Kunjungi website →
            </a>
            <a
              className="yayo__btn is-ghost"
              href="https://instagram.com/yayo_wings"
              target="_blank"
              rel="noopener"
            >
              Instagram @yayo_wings →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
