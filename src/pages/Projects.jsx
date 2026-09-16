import React from "react";
import { projects } from "../data/projects/projects";
import ProjectCard from "../components/Cards/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center items-center text-center py-16 px-6 transition-colors duration-500 ease-in-out bg-slate-900 text-slate-300 container mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-white">Projects</h2>
      <p className="mb-10 max-w-2xl text-slate-400">
        A selection of the products I have built, from multi-tenant SaaS platforms to internal tools.
      </p>
      <div className="grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
