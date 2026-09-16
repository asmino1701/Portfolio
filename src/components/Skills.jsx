export default function MySkills({ skill }) {
    return (
        <div className="group flex w-28 flex-col items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-800/50 p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/95 p-2">
                <img src={skill.image} alt={skill.title} loading="lazy" className="h-full w-full object-contain" />
            </div>
            <span className="text-center text-sm font-semibold text-emerald-300">{skill.title}</span>
        </div>
    );
}
