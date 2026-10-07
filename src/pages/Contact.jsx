import { IconLinkedIn, IconGitHub, IconTwitter, IconArrowUpRight } from "../components/icons/Icons";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andr%C3%A9s-mi%C3%B1o-27319814a/", Icon: IconLinkedIn },
  { label: "GitHub", href: "https://github.com/asmino1701", Icon: IconGitHub },
  { label: "X", href: "https://x.com/aminoDR", Icon: IconTwitter },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-4 pt-28 pb-32">
      <div className="flex flex-col items-center gap-8 rounded-[28px] border border-line bg-card px-6 py-20 text-center">
        <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">Contact</p>
        <h2 className="font-serif text-[clamp(44px,7vw,96px)] leading-none">
          Let&apos;s work <em>together</em>
        </h2>
        <p className="max-w-xl text-base text-muted">
          I&apos;m always open to new opportunities and collaborations. Hope to hear from you soon!
        </p>
        <a
          href="mailto:andresmino1701@gmail.com"
          className="group inline-flex items-center gap-2 border-b border-line pb-1 text-[clamp(18px,2.4vw,26px)] text-fg transition-colors hover:border-fg"
        >
          andresmino1701@gmail.com
          <IconArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <ul className="flex gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-muted hover:text-fg"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
