import { projects } from "../data/projects/projects";
import ProjectCard, { EarlierCard } from "../components/Cards/ProjectCard";

const selected = projects.filter((project) => project.group !== "earlier");
const earlier = projects.filter((project) => project.group === "earlier");

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1180px] px-4 pt-28 pb-32">
      <div className="mb-14 flex flex-col items-center gap-2.5 text-center">
        <h2 className="font-serif text-[clamp(40px,5vw,60px)] leading-none">
          Selected <em>work</em>
        </h2>
        <p className="text-[15px] text-muted">Products I&apos;ve built, from multi-tenant SaaS to internal tools.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {selected.map((project, idx) => (
          <ProjectCard key={project.title} project={project} featured={idx === 0} />
        ))}
      </div>

      {earlier.length > 0 && (
        <div className="mt-18 flex flex-col gap-5">
          <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">Earlier &amp; academic</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {earlier.map((project) => (
              <EarlierCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
