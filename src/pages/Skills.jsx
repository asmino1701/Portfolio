import { skills } from "../data/skills/skills";
import MySkills from "../components/Skills";

export default function Skills() {
    const groupedSkills = skills.reduce((acc, skill) => {
        acc[skill.type] = acc[skill.type] || [];
        acc[skill.type].push(skill);
        return acc;
    }, {});
  return (
    <section id="skills" className="flex flex-col items-center justify-center text-center container mx-auto py-16 px-6">
      <div className="flex w-full max-w-5xl flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Skills</h2>
        <p className="mb-10 max-w-2xl text-slate-400">
          The languages, frameworks and tools I work with day to day.
        </p>
        {Object.entries(groupedSkills).map(([type, skillsOfType]) => (
          <div key={type} className="mb-10 flex w-full flex-col items-center">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{type}</h3>
            <div className="flex w-full flex-wrap items-stretch justify-center gap-4">
              {skillsOfType.map((skill, idx) => (
                <MySkills key={idx} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
