export default function MySkills({ skill }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <img src={skill.image} alt={skill.title} className="w-16 h-16 mx-auto mb-4" />
            <span className="text-emerald-600 text-
            l font-bold">{skill.title}</span>
        </div>
    );
}