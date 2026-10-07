import useTheme from "../hooks/useTheme";

const options = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <div role="group" aria-label="Color theme" className="flex gap-0.5 rounded-full border border-line bg-pill p-[3px] backdrop-blur">
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
          className={`min-h-8 rounded-full px-3 text-[13px] transition ${
            theme === value ? "bg-fg text-bg" : "text-muted hover:text-fg"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
