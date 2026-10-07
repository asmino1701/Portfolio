export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-4 py-28">
      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        <img
          src="/assets/Amino.png"
          alt="Portrait of Andrés Miño"
          loading="lazy"
          className="mx-auto size-56 rounded-full border border-line object-cover md:size-[280px]"
        />
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-[clamp(36px,4.4vw,56px)] leading-[1.05]">
            I build products <em>end to end</em> — from the database to the last pixel.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            I&apos;m a full-stack developer with over five years of experience. I started on the front end with
            JavaScript, React and CMSs like Sitecore and WordPress, and today I design and ship complete platforms:
            NestJS APIs, PostgreSQL schemas, Next.js apps and the cloud infrastructure they run on.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            I care about software that holds up in production — multi-tenant SaaS, internal tools for real operations
            and the boring details that keep them reliable. I&apos;m always open to new challenges and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
