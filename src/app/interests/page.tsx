import Image from "next/image";

const artists = [
  {
    name: "Oasis",
    album: "(What's the Story) Morning Glory?",
    cover: "/album-morning-glory.jpg",
    description:
      "Britpop at its peak. Morning Glory is one of those albums you can play front to back without skipping a track — Champagne Supernova, Don't Look Back in Anger, Wonderwall. Timeless.",
  },
  {
    name: "Ryuichi Sakamoto",
    album: "Opus",
    cover: "/album-opus.jpg",
    description:
      "A final concert recorded in Sakamoto's living room while battling illness. Every note carries weight — minimal, intimate, and deeply moving. A masterpiece farewell.",
  },
];

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

      {/* Music */}
      <section>
        <div className="rounded-xl border border-card-border bg-card-bg p-8">
          <div className="mb-2 text-3xl">🎵</div>
          <h2 className="text-2xl font-semibold">Music</h2>
          <p className="mt-3 text-muted leading-relaxed">
            A couple of artists and albums that have shaped how I listen.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className="flex gap-4 rounded-lg border border-card-border bg-background p-4"
              >
                <Image
                  src={artist.cover}
                  alt={`${artist.album} album cover`}
                  width={120}
                  height={120}
                  className="h-28 w-28 shrink-0 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-accent">{artist.name}</h3>
                  <p className="text-sm text-foreground">{artist.album}</p>
                  <p className="mt-2 text-sm text-muted">{artist.description}</p>
                </div>
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
