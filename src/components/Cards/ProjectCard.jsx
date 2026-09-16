import {Anchor} from "../Buttons/Button";

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
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
      ) : (
        <div className="w-full h-48 rounded flex items-center justify-center bg-gradient-to-br from-emerald-400 to-blue-600">
          <span className="text-4xl font-bold text-white tracking-widest">{initials(project.title)}</span>
        </div>
      )}
      <h3 className="text-emerald-600 mt-2 text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600 p-2 text-center flex-grow">{project.description}</p>
      {project.tags && (
        <div className="flex flex-wrap justify-center gap-2 px-2 pb-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.link ? (
        <Anchor text="See more" href={project.link} btnClass="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"/>
      ) : (
        <span className="text-sm text-gray-400 italic m-2 py-2.5">Private repository</span>
      )}
    </div>
  );
}
