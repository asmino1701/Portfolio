import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { route as routes } from "../data/routes/route";

export default function HamburguerMenu() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <div ref={ref} className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setOpen((open) => !open)}
        className="flex size-9 items-center justify-center rounded-full text-fg hover:bg-chip"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {isOpen ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </>
          ) : (
            <>
              <path d="M4 8h16" />
              <path d="M4 16h16" />
            </>
          )}
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            // The header pill uses backdrop-filter, which makes it the containing block even for
            // fixed children, so center the panel on the pill and size it from the viewport.
            initial={{ opacity: 0, y: -8, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -8, x: "-50%" }}
            transition={{ duration: 0.18 }}
            className="absolute top-[calc(100%+0.5rem)] left-1/2 w-[calc(100vw-2rem)] rounded-3xl border border-line bg-card p-2 shadow-2xl"
          >
            <ul className="grid">
              {[...routes, { title: "Contact", href: "#contact" }].map((route) => (
                <li key={route.title}>
                  <a
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center rounded-2xl px-4 text-lg text-fg hover:bg-chip"
                  >
                    {route.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
