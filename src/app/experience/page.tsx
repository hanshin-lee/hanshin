const experiences = [
  {
    title: "Senior SDK Engineer",
    company: "Cox Automotive",
    location: "San Francisco Bay Area",
    period: "January 2022 – Present",
    highlights: [
      "Set technical direction and lead implementation of a public Android SDK used by multiple enterprise client engineering teams for vehicle imaging and inspection workflows.",
      "Own the complete integration surface, including Kotlin APIs, multi-module architecture, KDoc, sample apps, migration guidance, release versioning, and backward-compatibility policy.",
      "Translate partner and product requirements into stable SDK contracts, then deliver the camera, networking, and on-device ML components behind them.",
      "Partner directly with customer, product, and backend teams to diagnose integration issues, ship fixes, and turn recurring implementation friction into SDK roadmap improvements.",
      "Implemented on-device ML inference and introduced repeatable evaluation criteria and release checks for ML-enabled functionality; shared the practices across the team to improve delivery consistency.",
      "Built layered automated coverage with kotlin.test, Espresso, Marathon, and Paparazzi, plus CI checks that keep SDK behavior, documentation, and examples aligned.",
    ],
  },
  {
    title: "SDK Engineer",
    company: "Fyusion Inc.",
    location: "San Francisco Bay Area",
    period: "March 2020 – January 2022",
    highlights: [
      "Shipped and scaled a 3D-capture Android SDK used by automotive and e-commerce partners worldwide, including one of Korea's largest commerce groups at 2M+ monthly captures.",
      "Owned partner onboarding from technical discovery through production launch, aligning Android SDK behavior with customer applications, backend services, and operational requirements.",
      "Reduced partner integration time by 40% by rebuilding SDK documentation, sample projects, and troubleshooting guidance around issues observed in real implementations.",
      "Worked across ML research, product, backend, and client engineering to turn capture models into stable, supportable Android APIs for external developers.",
      "Led technical relationships for Korean-market partners, contributing to an $8M+ regional investment and Fyusion's 2021 acquisition by Cox Automotive.",
    ],
  },
  {
    title: "Android Software Engineer",
    company: "LG Electronics",
    location: "San Diego, CA",
    period: "February 2019 – March 2020",
    highlights: [
      "Delivered Android software for Tier-1 US carrier devices from planning through production release, coordinating platform, hardware, quality, and certification dependencies.",
      "Resolved carrier and system integration requirements under strict release constraints while maintaining compatibility across device and Android platform variants.",
    ],
  },
];

const skills = {
  Android: [
    "Kotlin",
    "Java",
    "Android SDK",
    "Jetpack Compose",
    "CameraX",
    "Coroutines/Flow",
    "Room",
    "WorkManager",
    "Hilt/Dagger",
  ],
  "SDK & Public API Engineering": [
    "Kotlin API design",
    "Multi-module libraries",
    "KDoc",
    "Sample apps",
    "Migration guides",
    "Semantic versioning",
    "Backward compatibility",
    "ProGuard/R8",
  ],
  "Enterprise API Integration": [
    "REST",
    "GraphQL",
    "Retrofit/Ktor",
    "OkHttp",
    "Protobuf",
    "Client networking",
    "Offline-first caching",
    "Error handling",
    "Integration support",
  ],
  "AI & ML": [
    "OpenAI API integration",
    "Tool/function calling",
    "Retrieval-augmented generation",
    "Model evaluation",
    "Safety controls",
    "Structured context workflows",
    "On-device ML inference",
  ],
  "Architecture & Quality": [
    "MVVM",
    "MVI",
    "Clean Architecture",
    "JUnit",
    "kotlin.test",
    "Espresso",
    "Paparazzi",
    "Marathon",
    "Snapshot & integration testing",
  ],
  "Build & Delivery": [
    "Gradle",
    "GitHub Actions",
    "Fastlane",
    "Firebase",
    "CI quality gates",
    "Observability & analytics",
  ],
};

const education = {
  degree: "B.S. in Bioinformatics, Minor in Computer Science",
  school: "University of California, San Diego",
  period: "2020",
};

const military = {
  title: "Sergeant, Head Translator",
  org: "Korean Intelligence Production Center",
  period: "2013 – 2015",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-16 py-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Experience<span className="text-accent">.</span>
        </h1>
        <p className="mt-3 text-lg text-muted max-w-3xl">
          7+ years delivering production Android software for enterprise
          customers, global commerce platforms, and Tier-1 carriers, with a
          focus on stable public APIs, reliable integrations, and on-device ML.
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
        </div>
      </section>
    </div>
  );
}
