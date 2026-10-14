import { experience, stack } from '@/lib/projects'

export function About() {
  return (
    <section className="about" id="tentang">
      <div className="block" data-reveal>
        <h2 className="block__title">Pengalaman</h2>
        <div className="rows">
          {experience.map((item) => (
            <div className="row" key={item.what}>
              <span className="row__what">{item.what}</span>
              <span className="row__when">{item.when}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="block" data-reveal>
        <h2 className="block__title">Pendidikan</h2>
        <div className="row row--standalone">
          <span className="row__what">S1 Ilmu Komputer, Universitas Diponegoro</span>
          <span className="row__when">2020 – 2024</span>
        </div>
      </div>

      <div className="block" data-reveal>
        <h2 className="block__title">Tech Stack</h2>
        <dl className="stack">
          {stack.map((group) => (
            <div className="stack__group" key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
