import type { CSSProperties } from 'react'
import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { PosMock } from './PosMock'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" id={project.id} style={project.vars as CSSProperties}>
      <div className="card__stage">
        {project.hasGlow ? <div className="card__glow" aria-hidden="true" /> : null}

        <div className="phone">
          {project.screenshot ? (
            <Image
              src={project.screenshot.src}
              alt={project.screenshot.alt}
              width={780}
              height={1688}
              sizes="(min-width: 900px) 230px, 62vw"
            />
          ) : (
            <PosMock />
          )}
        </div>
      </div>

      <div className="card__body">
        <div className="card__id">
          <Image
            className={['card__logo', project.logo.className].filter(Boolean).join(' ')}
            src={project.logo.src}
            alt=""
            width={40}
            height={40}
          />
          <div className="card__names">
            <h3 className="card__name">{project.name}</h3>
            <span className="card__kind">{project.kind}</span>
          </div>
        </div>

        <p className="card__copy">{project.copy}</p>

        <a className="card__cta" href={project.href} target="_blank" rel="noopener">
          {project.cta}
        </a>
      </div>
    </article>
  )
}
