import { skills } from "../data/skills/skills";
import MySkills from "../components/Skills";

export default function Skills() {
    const groupedSkills = skills.reduce((acc, skill) => {
        acc[skill.type] = acc[skill.type] || [];
        acc[skill.type].push(skill);
        return acc;
    }, {});
  return (
    <section id="skills" className="flex flex-col items-center justify-center text-center container mx-auto py-8 px-6">
      <div className="max-w-5xl flex-row">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        {Object.entries(groupedSkills).map(([type, skillsOfType]) => (
          <div key={type} className="mb-8 flex flex-col items-center">
            <h3 className="text-gray-700 mb-4 text-white">{type}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
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
