import { IconArrowUpRight, IconLock } from "../icons/Icons";

function initials(title) {
  return title
    .replace(/[^\p{L}\p{N} ]/gu, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-700/70 bg-slate-800/50 text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10">
      <div className="aspect-video w-full overflow-hidden bg-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/25 to-blue-600/25">
            <span className="text-4xl font-bold tracking-[0.2em] text-emerald-300/80">
              {initials(project.title)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mt-auto flex flex-col gap-4 pt-5">
          {project.tags && project.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-slate-600/60 bg-slate-900/60 px-2.5 py-0.5 text-xs font-medium text-emerald-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View project: ${project.title}`}
              className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              View project
              <IconArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 self-start text-sm text-slate-500">
              <IconLock className="w-3 h-3" />
              Private repository
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
