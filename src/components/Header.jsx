import { route } from "../data/routes/route";
import HamburguerMenu from "./HamburguerMenu";
import { PillLink } from "./Buttons/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-5">
      <div className="relative flex w-full max-w-max items-center gap-1.5 rounded-full border border-line bg-pill py-1.5 pr-1.5 pl-4 backdrop-blur-xl">
        <a href="#top" aria-label="Andrés Miño, back to top" className="mr-2 flex items-center gap-2 text-sm font-semibold tracking-wide text-fg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          AM
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-1 text-sm">
            {route.map(({ href, title }) => (
              <li key={href}>
                <a href={href} className="rounded-full px-3 py-2 text-muted transition-colors hover:text-fg">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="hidden md:contents">
          <PillLink href="#contact" size="sm">
            Contact
          </PillLink>
        </span>
        <HamburguerMenu />
      </div>
    </header>
  );
}
