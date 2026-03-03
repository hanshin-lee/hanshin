const jiujitsu = {
  title: "Brazilian Jiu-Jitsu",
  description:
    "Training BJJ is how I stay grounded — both literally and figuratively. The problem-solving on the mats mirrors the kind of thinking I do in code: breaking down complex positions, finding creative solutions, and always iterating on technique.",
  topics: [
    {
      name: "Training",
      detail: "Regular gi and no-gi sessions focusing on guard work and submissions",
    },
    {
      name: "Competition",
      detail: "Competing locally and learning through the pressure of live matches",
    },
    {
      name: "Community",
      detail: "The mat is the great equalizer — connecting with people from all walks of life",
    },
  ],
};

const tech = {
  title: "Tech & Engineering",
  description:
    "Beyond my day job building Android SDKs, I'm passionate about the broader technology landscape. From mobile development trends to AI and systems design, I love staying at the cutting edge.",
  topics: [
    {
      name: "Android & Mobile",
      detail: "Jetpack Compose, KMP, Kotlin advancements, and the evolving Android ecosystem",
    },
    {
      name: "AI & Machine Learning",
      detail: "Exploring LLMs, on-device ML, and how AI is reshaping developer tooling",
    },
    {
      name: "Open Source",
      detail: "Contributing to and learning from the open-source community",
    },
    {
      name: "System Design",
      detail: "Distributed systems, scalable architectures, and performance optimization",
    },
  ],
};

export default function InterestsPage() {
  return (
    <div className="space-y-16 py-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Interests<span className="text-accent">.</span>
        </h1>
        <p className="mt-3 text-lg text-muted">
          What I&apos;m passionate about outside (and inside) of work.
        </p>
      </div>

      {/* Jiu-Jitsu */}
      <section>
        <div className="rounded-xl border border-card-border bg-card-bg p-8">
          <div className="mb-2 text-3xl">🥋</div>
          <h2 className="text-2xl font-semibold">{jiujitsu.title}</h2>
          <p className="mt-3 text-muted leading-relaxed">
            {jiujitsu.description}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {jiujitsu.topics.map((topic) => (
              <div
                key={topic.name}
                className="rounded-lg border border-card-border bg-background p-4"
              >
                <h3 className="font-medium text-accent">{topic.name}</h3>
                <p className="mt-2 text-sm text-muted">{topic.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section>
        <div className="rounded-xl border border-card-border bg-card-bg p-8">
          <div className="mb-2 text-3xl">💻</div>
          <h2 className="text-2xl font-semibold">{tech.title}</h2>
          <p className="mt-3 text-muted leading-relaxed">
            {tech.description}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tech.topics.map((topic) => (
              <div
                key={topic.name}
                className="rounded-lg border border-card-border bg-background p-4"
              >
                <h3 className="font-medium text-accent">{topic.name}</h3>
                <p className="mt-2 text-sm text-muted">{topic.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
