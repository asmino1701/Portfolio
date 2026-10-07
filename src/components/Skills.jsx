export default function MySkills({ skill }) {
    return (
        <li className="inline-flex min-h-10 items-center gap-2.5 rounded-full border border-line bg-card py-1.5 pr-4 pl-1.5 text-sm text-fg transition-colors hover:border-muted">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white p-1">
                <img src={skill.image} alt="" loading="lazy" className="h-full w-full object-contain" />
            </span>
            {skill.title}
        </li>
    );
}
