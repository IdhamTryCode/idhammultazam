import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectTrack } from './ProjectTrack'

export function Projects() {
  return (
    <section className="section" id="karya">
      <div className="section__head" data-reveal>
        <h2 className="section__title">My Projects</h2>
        <p className="section__sub">Semuanya saya kerjakan sendiri, dari desain sampai online.</p>
      </div>

      <ProjectTrack count={projects.length}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectTrack>
    </section>
  )
}
