import Image from 'next/image'

export function YayoWings() {
  return (
    <section className="yayo" id="yayo">
      <div className="section__head" data-reveal>
        <h2 className="section__title">Usaha saya sendiri</h2>
      </div>

      <div className="yayo__card" data-reveal>
        <div className="yayo__media">
          <Image
            src="/assets/yayo-wings/hero.png"
            alt="Chicken wings ala Korea dengan saus gochujang dan madu"
            width={1024}
            height={506}
            sizes="(min-width: 760px) 280px, 100vw"
          />
        </div>

        <div className="yayo__body">
          <div className="yayo__name">
            <Image src="/assets/yayo-wings/logo.png" alt="" width={32} height={32} />
            <div>
              <h3>Yayo Wings</h3>
              <span>Korean chicken wings · Demak</span>
            </div>
          </div>

          <p className="yayo__copy">
            Selain ngoding, saya juga punya usaha kuliner sendiri: chicken wings ala Korea
            dengan saus gochujang dan madu. Website-nya juga saya buat sendiri.
          </p>

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
              @yayo_wings →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
