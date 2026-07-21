import Image from "next/image";

const projects = [
  {
    name: "Grapplay",
    tagline: "Android community platform for jiu-jitsu.",
    description:
      "Building the Android client for a jiu-jitsu community serving 500+ monthly active users, using Kotlin Multiplatform and Compose with a shared API and domain layer.",
    role: "Founder & Lead Engineer — 2024 to present.",
    images: [],
    links: [{ label: "grapplay.com", href: "https://grapplay.com" }],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase / Postgres",
      "Row-Level Security",
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "OpenAI API",
      "Evals & guardrails",
      "Vercel",
      "GitHub Actions",
    ],
    highlights: [
      "Serving 500+ monthly active users with a Kotlin Multiplatform client and shared API and domain layer.",
      "Apply LLM APIs to structured content and operational workflows with explicit evaluation criteria, safety controls, and monitoring for dependable product behavior.",
    ],
  },
  {
    name: "Gallr",
    tagline: "Production consumer app built with Kotlin Multiplatform and Compose.",
    description:
      "Designed, built, and released a mobile guide to art exhibitions across Korea, owning Android architecture, data integration, release automation, and post-launch quality.",
    role: "Founder & Lead Engineer — 2024 to present.",
    images: [
      { src: "/gallr-map.png", alt: "Gallr map view showing exhibitions across Seoul" },
      { src: "/gallr-featured.png", alt: "Gallr featured exhibitions list" },
    ],
    links: [
      { label: "gallrmap.com", href: "https://gallrmap.com" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.gallr.app",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/gallr/id6743558061",
      },
    ],
    stack: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Material 3",
      "Naver Maps SDK",
      "Supabase / Postgres",
      "Ktor",
      "Coil",
      "DataStore",
      "Google Apps Script",
      "Eleventy (marketing site)",
    ],
    highlights: [
      "Built shared domain and data layers with API integration and offline-first caching.",
      "Integrated crash reporting and analytics for post-launch quality and observability.",
      "Automated store delivery and release workflows.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-16 py-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Projects<span className="text-accent">.</span>
        </h1>
        <p className="mt-3 text-lg text-muted max-w-3xl">
          Production Android projects I design, build, release, and operate
          outside the day job.
        </p>
      </div>

      {projects.map((project) => (
        <section key={project.name}>
          <div className="rounded-xl border border-card-border bg-card-bg p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-4 hover:opacity-80"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-2 text-accent">{project.tagline}</p>
            <p className="mt-4 text-muted leading-relaxed">
              {project.description}
            </p>
            <p className="mt-3 text-sm text-muted italic">{project.role}</p>

            {project.images.length > 0 && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.images.map((img) => (
                  <div
                    key={img.src}
                    className="overflow-hidden rounded-lg border border-card-border bg-background"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={640}
                      height={1386}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold text-accent">
                Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold text-accent">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
