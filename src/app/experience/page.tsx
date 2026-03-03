const experiences = [
  {
    title: "Senior Android SDK Engineer",
    company: "Cox Automotive",
    location: "San Francisco Bay Area",
    period: "January 2022 – Present",
    highlights: [
      "Lead development of enterprise-grade Android SDK (Kotlin 2.2+, Jetpack Compose 1.10+) for automotive solutions at scale",
      "Architect camera capture and image processing features using CameraX for vehicle imagery and inspection workflows",
      "Design modular, multi-module SDK architecture following Clean Architecture with comprehensive KDoc documentation",
      "Develop extensive test suites: unit tests (kotlin.test), UI tests (Espresso, Marathon), snapshot tests (Paparazzi)",
      "Implement ProGuard/R8 optimization ensuring API stability and backward compatibility for SDK consumers",
      "Provide integration support for enterprise automotive clients, streamlining SDK adoption across dealer networks",
    ],
  },
  {
    title: "Android SDK Engineer",
    company: "Fyusion Inc.",
    location: "San Francisco Bay Area",
    period: "March 2020 – January 2022",
    highlights: [
      "Built Android SDK for innovative 3D capture technology, serving e-commerce and automotive markets globally",
      "Developed high-performance camera capture features enabling immersive product visualization",
      "Powered one of Korea's leading e-commerce groups, generating 2M+ monthly captures",
      "Spearheaded Korean market expansion, contributing to $8M+ regional investment and acquisition by Cox Automotive",
      "Reduced client integration time by 40% through improved SDK documentation and support",
    ],
  },
  {
    title: "Android Software Engineer, Account Management",
    company: "LG Electronics",
    location: "San Diego, CA",
    period: "February 2019 – March 2020",
    highlights: [
      "Developed native Android applications for LG mobile devices across multiple product lines",
      "Managed end-to-end software lifecycle for Tier-1 mobile OEM accounts",
      "Collaborated with cross-functional hardware and software teams to optimize system integrations",
    ],
  },
  {
    title: "Software Engineer",
    company: "Geromics LLC",
    location: "San Diego, CA",
    period: "November 2016 – September 2017",
    highlights: [
      "Built server infrastructure and data processing pipelines for genome analysis using Python and Ruby",
      "Developed automated workflows for Hi-C dataset analysis utilizing GATK and Denovo pipelines",
    ],
  },
];

const skills = {
  Languages: ["Kotlin", "Java", "Python", "Ruby"],
  Android: ["Jetpack Compose", "CameraX", "Coroutines", "Flow", "Room", "Hilt/Dagger"],
  Architecture: ["MVVM", "Clean Architecture", "Multi-module", "SDK Development"],
  Tools: ["Android Studio", "Git", "Gradle", "ProGuard/R8", "CI/CD", "Firebase"],
  Testing: ["JUnit", "Espresso", "Paparazzi", "Marathon"],
};

const education = {
  degree: "B.S. in Bioinformatics, Minor in Computer Science",
  school: "University of California, San Diego",
  period: "September 2012 – March 2020",
};

const military = {
  title: "Sergeant (Head Translator)",
  org: "Korean Intelligence Production Center (KIPC)",
  period: "November 2013 – August 2015",
  description:
    "Led translation operations and coordinated conferences between multinational intelligence agencies (NGA, NIS, Ministry of National Defense)",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-16 py-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Experience<span className="text-accent">.</span>
        </h1>
        <p className="mt-3 text-lg text-muted">
          5+ years building production-grade Android SDKs and applications.
        </p>
      </div>

      {/* Skills */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        <h2 className="mb-6 text-2xl font-semibold">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.title}
              className="group rounded-xl border border-card-border bg-card-bg p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <div className="text-sm text-muted">
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

      {/* Military */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">
          Leadership & Military Service
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
