import Image from "next/image";

const projects = [
  {
    name: "Grapplay",
    tagline: "AI-augmented community platform for jiu-jitsu.",
    description:
      "Built and operate one of Korea's largest jiu-jitsu platforms — 500+ monthly active users, near-zero marketing spend — entirely as a solo full-stack engineer. The Next.js web app is live; Android and iOS Kotlin Multiplatform apps ship H2 2026. I run the whole stack as a one-person team and lean on AI harness engineering — evals, guardrails, tool sandboxes, and structured context pipelines — to keep LLM-driven workflows reliable as the product evolves.",
    role: "Founder & Sole Engineer — 2024 to present.",
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
      "500+ monthly active users on near-zero marketing spend; the entire stack — Postgres/Supabase backend, REST APIs, web, mobile, CI/CD, payouts, analytics — run by one person.",
      "AI harness engineering invested up front: evals, guardrails, tool sandboxes, and structured context pipelines so LLM behavior in product stays reliable as models and prompts change.",
      "Direct line to a real developer-experience problem — I am the user, the integrator, and the operator, so I know first-hand which docs, SDKs, and abstractions are good and which ones make you give up at 11pm.",
    ],
  },
  {
    name: "Gallr",
    tagline: "Cross-platform consumer app — Android & iOS, one codebase.",
    description:
      "Gallr is a mobile-first guide to art exhibitions across Korea — featured picks, opening/closing this week, and a map view of every gallery. Designed, built, and released live on Google Play and the App Store from a single Compose Multiplatform codebase. The kind of polished, end-to-end sample-quality project I ship to show \"here's what good looks like\" — not a toy demo, a real product real users open.",
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
      "Single Kotlin codebase ships to Android and iOS via Compose Multiplatform, including a Naver Maps `UIKitView` interop for the iOS map.",
      "Owned end-to-end: discovery, store assets, release pipeline, and post-launch iteration across both platforms.",
      "Bilingual KO/EN data pipeline with a sheet-to-Supabase sync job; new schema columns are deploy-safe through an explicit known-columns contract.",
      "Reductionist monochrome design system — compile-time Kotlin design tokens, custom typography, and a tight component vocabulary.",
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
          AI- and developer-facing things I&apos;ve built outside the day job —
          shipped, in the wild, and still being polished.
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
