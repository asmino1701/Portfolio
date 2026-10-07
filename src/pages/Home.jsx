import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { PillLink } from "../components/Buttons/Button";
import ThemeToggle from "../components/ThemeToggle";
import { thumb } from "../utils/thumb";

// Screenshots floating around the name. depth: 1 = closest to the viewer (moves most).
// far cards only show from md up; desktopOnly ones would sit behind the name on a phone.
const floats = [
  { src: "andevo-landing.jpg", pos: { left: "3%", top: "14%" }, w: 150, h: 100, rotate: -10, depth: 0.35, far: true },
  { src: "reback-landing.jpg", pos: { left: "8%", top: "34%" }, w: 230, h: 150, rotate: -6, depth: 1, desktopOnly: true },
  { src: "tradebook-2.jpg", pos: { left: "4%", top: "66%" }, w: 130, h: 170, rotate: 7, depth: 0.4, far: true },
  { src: "ecotrace-1.jpg", pos: { left: "17%", top: "70%" }, w: 190, h: 124, rotate: 4, depth: 0.8, desktopOnly: true },
  { src: "amc-3.jpg", pos: { left: "30%", top: "9%" }, w: 110, h: 76, rotate: 9, depth: 0.3, far: true },
  { src: "webemul-3.jpg", pos: { right: "30%", top: "80%" }, w: 120, h: 80, rotate: -12, depth: 0.3, far: true },
  { src: "zentris-2.jpg", pos: { right: "8%", top: "18%" }, w: 210, h: 140, rotate: 8, depth: 0.9 },
  { src: "reback-2.jpg", pos: { right: "3%", top: "46%" }, w: 140, h: 96, rotate: -5, depth: 0.4, far: true },
  { src: "webemul-1.jpg", pos: { right: "12%", top: "62%" }, w: 240, h: 156, rotate: -7, depth: 1 },
  { src: "ecotrace-2.jpg", pos: { right: "26%", top: "8%" }, w: 100, h: 130, rotate: -4, depth: 0.35, far: true },
];

function FloatCard({ item, pointerX, pointerY, progress, still }) {
  const side = item.pos.left ? -1 : 1;
  const x = useTransform([pointerX, pointerY, progress], ([px, , p]) => px * 40 * item.depth + side * p * 260 * item.depth);
  const y = useTransform([pointerX, pointerY, progress], ([, py, p]) => py * 30 * item.depth - p * 220 * item.depth);
  const opacity = useTransform(progress, [0, 0.7], [1, 0]);

  return (
    <div
      className={`pointer-events-none absolute ${item.far || item.desktopOnly ? "hidden md:block" : "max-md:scale-[0.65]"}`}
      style={{ ...item.pos, width: item.w, height: item.h }}
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: item.far ? 0.5 : 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1 + item.depth * 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="h-full w-full overflow-hidden rounded-[14px] border border-line shadow-[0_24px_60px_var(--shadow)]"
          style={{
            rotate: item.rotate,
            x: still ? 0 : x,
            y: still ? 0 : y,
            opacity: still ? 1 : opacity,
            filter: item.far ? "blur(1.5px)" : undefined,
          }}
        >
          <img
            src={thumb(`/assets/projects/${item.src}`)}
            alt=""
            decoding="async"
            className="h-full w-full object-cover object-left-top"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const ref = useRef(null);
  const still = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const pointerY = useSpring(rawY, { stiffness: 60, damping: 20 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const onPointerMove = (e) => {
    if (still || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative -mt-[68px] flex min-h-[max(100svh,720px)] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-24"
    >
      {floats.map((item) => (
        <FloatCard key={item.src} item={item} pointerX={pointerX} pointerY={pointerY} progress={scrollYProgress} still={still} />
      ))}

      <motion.div
        className="relative z-10 flex max-w-4xl flex-col items-center gap-7 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">Portfolio — {new Date().getFullYear()}</p>
        <h1 className="text-[clamp(56px,11vw,156px)] leading-[0.92] font-light tracking-[-0.045em]">Andrés Miño</h1>
        <p className="flex flex-wrap items-center justify-center gap-2.5 text-lg text-muted">
          Full-stack developer building
          <span className="inline-flex min-h-[34px] items-center rounded-[10px] border border-line bg-chip px-3.5 text-fg">
            SaaS platforms
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <PillLink href="#projects">See projects</PillLink>
          <PillLink href="/assets/andres-mino-resume.pdf" download="Andres Mino Resume.pdf" variant="ghost">
            Download CV
          </PillLink>
        </div>
      </motion.div>

      <div className="absolute inset-x-4 bottom-5 z-10 flex items-center justify-between sm:inset-x-6 sm:bottom-6">
        <ThemeToggle />
        <a href="#projects" className="hidden items-center gap-2.5 text-[13px] text-muted hover:text-fg sm:flex">
          Scroll to explore
          <span className="inline-flex size-7 items-center justify-center rounded-lg bg-fg text-bg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="m6 13 6 6 6-6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
