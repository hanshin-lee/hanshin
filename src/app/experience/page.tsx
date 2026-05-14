const experiences = [
  {
    title: "Senior SDK Engineer",
    company: "Cox Automotive",
    location: "San Francisco Bay Area",
    period: "January 2022 – Present",
    highlights: [
      "Set technical direction for a public SDK consumed by multiple enterprise client engineering teams — own the full developer-facing surface: API design, KDoc, sample apps, migration guides, and semver/backward-compatibility policy",
      "Built the integration support loop with downstream developer teams: triage issues, ship fixes, and feed pain points back into the roadmap",
      "Shipped on-device ML inference and applied harness engineering (evals, guardrails, structured context pipelines) to AI-assisted developer workflows; ran internal enablement so other engineers could adopt the same tooling, measurably lifting team delivery velocity",
      "Authored a layered test suite (kotlin.test, Espresso, Marathon, Paparazzi) and CI gates so that \"the docs and the SDK don't drift\" is a property of the build, not a checklist",
    ],
  },
  {
    title: "SDK Engineer",
    company: "Fyusion Inc.",
    location: "San Francisco Bay Area",
    period: "March 2020 – January 2022",
    highlights: [
      "Shipped and scaled a public 3D-capture SDK used by e-commerce and automotive partners globally — including onboarding one of Korea's largest e-commerce groups to 2M+ monthly captures",
      "Owned SDK documentation, sample projects, and white-glove integration support for external client engineering teams — cut integration time by 40% by rewriting docs against real partner pain points",
      "Drove Korean-market developer/partner expansion as a hands-on engineer + relationship owner, contributing to an $8M+ regional investment and Fyusion's 2021 acquisition by Cox Automotive",
      "Acted as the bridge between research/ML, product, and external developer teams — translating cutting-edge capture models into something a partner engineer could integrate in an afternoon",
    ],
  },
  {
    title: "Android Software Engineer",
    company: "LG Electronics",
    location: "San Diego, CA",
    period: "February 2019 – March 2020",
    highlights: [
      "Delivered Android software for Tier-1 US carriers end-to-end, coordinating across platform, hardware, and certification teams — early training in shipping into environments with competing priorities and loosely defined specs",
    ],
  },
];

const skills = {
  "AI / LLMs": [
    "OpenAI API",
    "Function calling & tool use",
    "RAG",
    "Agentic systems",
    "Prompt engineering",
    "Harness engineering",
    "Evals",
    "Guardrails",
    "Tool sandboxes",
    "Context pipelines",
    "MCP",
    "On-device ML inference",
  ],
  Languages: ["Python", "TypeScript/JavaScript", "Kotlin", "Swift", "Java"],
  "Full-Stack & Web": [
    "Node.js",
    "Next.js",
    "React",
    "REST & GraphQL APIs",
    "Supabase/Postgres",
    "Vercel",
    "Serverless",
  ],
  Mobile: [
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "Compose Multiplatform",
    "SwiftUI",
    "CameraX",
    "Coroutines/Flow",
  ],
  "Developer Tooling & SDKs": [
    "Public API design",
    "KDoc / typed docs",
    "Sample apps",
    "Integration guides",
    "Multi-module / monorepo",
    "Semver & backward compatibility",
  ],
  Delivery: [
    "GitHub Actions",
    "Gradle",
    "Fastlane",
    "Firebase",
    "Vercel",
    "Playwright",
    "Observability / analytics",
  ],
  "Testing & Quality": [
    "JUnit",
    "kotlin.test",
    "Espresso",
    "Paparazzi",
    "Playwright",
    "Snapshot & integration testing",
  ],
  "Community & Content": [
    "Technical writing",
    "Demo & sample-app authoring",
    "Developer onboarding",
    "Integration support",
    "Open-source collaboration",
  ],
};

const education = {
  degree: "B.S. in Bioinformatics, Minor in Computer Science",
  school: "University of California, San Diego",
  period: "2020",
};

const military = {
  title: "Sergeant, Head Translator",
  org: "Korean Intelligence Production Center (KIPC)",
  period: "November 2013 – August 2015",
  description:
    "Led translation operations and coordinated multinational conferences across NGA, NIS, and the Ministry of National Defense — fluent English/Korean, with experience representing technical work to non-technical and international audiences.",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-16 py-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Experience<span className="text-accent">.</span>
        </h1>
        <p className="mt-3 text-lg text-muted max-w-3xl">
          8+ years building production SDKs, developer tools, and AI-powered
          consumer apps. I ship the surface developers actually touch — public
          APIs, docs, sample code, and integration guides — and turn that craft
          into adoption.
        </p>
      </div>

      {/* Skills */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-card-border bg-card-bg p-5"
            >
              <h3 className="mb-3 text-sm font-semibold text-accent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.title}
              className="group rounded-xl border border-card-border bg-card-bg p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p>{exp.location}</p>
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, i) => (
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
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Education</h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-6">
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <p className="text-accent">{education.school}</p>
          <p className="text-sm text-muted">{education.period}</p>
        </div>
      </section>

      {/* Leadership & Languages */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">
          Leadership &amp; Languages
        </h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-6">
          <h3 className="text-lg font-semibold">{military.title}</h3>
          <p className="text-accent">{military.org}</p>
          <p className="text-sm text-muted">{military.period}</p>
          <p className="mt-3 text-sm text-muted">{military.description}</p>
        </div>
      </section>
    </div>
  );
}
