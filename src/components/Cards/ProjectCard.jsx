import { IconArrowUpRight, IconLock } from "../icons/Icons";
import { thumb } from "../../utils/thumb";

function initials(title) {
  return title
    .replace(/[^\p{L}\p{N} ]/gu, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function Shot({ src, alt, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl bg-chip ${className}`}>
      {src && (
        <img
          src={thumb(src)}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const shots = project.images?.length ? project.images : [project.image].filter(Boolean);
  const [main, second, third] = shots;
  const rowHeight = featured ? "md:grid-rows-[220px_220px]" : "md:grid-rows-[150px_150px]";

  return (
    <article
      className={`group flex flex-col gap-4 rounded-[22px] border border-line bg-card p-3.5 transition duration-300 hover:-translate-y-1 hover:border-muted ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {main ? (
        <div className={`grid grid-cols-[1.4fr_1fr] grid-rows-[110px_110px] gap-2 ${rowHeight}`}>
          <Shot src={main} alt={`${project.title} screenshot`} className="row-span-2" />
          <Shot src={second ?? main} alt="" />
          <Shot src={third ?? second ?? main} alt="" />
        </div>
      ) : (
        <div className="flex aspect-[2/1] items-center justify-center rounded-xl bg-chip font-mono text-3xl tracking-[0.2em] text-muted">
          {initials(project.title)}
        </div>
      )}

      <div className="flex flex-col gap-3 px-1 pb-1">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-medium text-fg">{project.title}</h3>
            <p className={`mt-1 text-sm leading-relaxed text-muted ${featured ? "" : "line-clamp-2"}`}>{project.description}</p>
          </div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.linkLabel || "Visit"}: ${project.title}`}
              className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full bg-btn px-4 text-[13px] font-medium text-btn-fg transition hover:opacity-85"
            >
              Visit
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border border-line px-3.5 text-[13px] text-muted">
              <IconLock className="h-3 w-3" />
              Private
            </span>
          )}
        </div>
        {project.tags?.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line bg-chip px-2.5 py-0.5 font-mono text-[11px] text-muted">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function EarlierCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3.5 rounded-2xl border border-line bg-card p-3 transition duration-300 hover:-translate-y-1 hover:border-muted"
    >
      <div className="h-[60px] w-[88px] shrink-0 overflow-hidden rounded-[10px] bg-chip">
        {project.image && <img src={project.image} alt="" loading="lazy" className="h-full w-full object-cover object-left-top" />}
      </div>
      <div className="min-w-0">
        <span className="block text-sm font-medium text-fg">{project.title}</span>
        <span className="block text-xs text-muted">{project.tags?.join(" · ")}</span>
      </div>
    </a>
  );
}
