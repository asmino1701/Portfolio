import { skills } from "../data/skills/skills";
import MySkills from "../components/Skills";

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    acc[skill.type] = acc[skill.type] || [];
    acc[skill.type].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="mx-auto max-w-[1180px] px-4 py-28">
      <div className="mb-12 flex flex-col items-center gap-2.5 text-center">
        <h2 className="font-serif text-[clamp(40px,5vw,60px)] leading-none">
          The <em>toolbox</em>
        </h2>
        <p className="text-[15px] text-muted">The languages, frameworks and tools I work with day to day.</p>
      </div>
      <div className="flex flex-col gap-9">
        {Object.entries(groupedSkills).map(([type, skillsOfType]) => (
          <div key={type} className="grid gap-4 border-t border-line pt-6 md:grid-cols-[240px_1fr]">
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase md:pt-3">{type}</h3>
            <ul className="flex flex-wrap gap-2">
              {skillsOfType.map((skill) => (
                <MySkills key={skill.title} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
