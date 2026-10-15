import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectTrack } from './ProjectTrack'
import { BlurText } from './reactbits/BlurText'

export function Projects() {
  return (
    <section className="section" id="karya">
      <div className="section__head" data-reveal>
        <BlurText as="h2" className="section__title" text="My Projects" delay={90} />
        <p className="section__sub">Semuanya saya kerjakan sendiri, dari desain sampai online.</p>
      </div>

      <ProjectTrack
        ids={projects.map((project) => project.id)}
        accents={projects.map((project) => project.vars['--card-accent'] ?? 'currentColor')}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectTrack>
    </section>
  )
}
