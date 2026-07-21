import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-6">
          <p className="text-sm font-mono text-accent">Hi, my name is</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hanshin Lee<span className="text-accent">.</span>
          </h1>
          <h2 className="text-3xl font-semibold text-muted sm:text-4xl">
            Senior Android SDK Engineer
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Android and SDK engineer with 7+ years delivering production mobile
            software for enterprise customers, global commerce platforms, and
            Tier-1 carriers. At{" "}
            <span className="font-medium text-foreground">Cox Automotive</span>, I
            lead public Android SDK development across Kotlin API design, camera
            and on-device ML pipelines, and enterprise backend integration. Based
            in Los Angeles.
          </p>
          <div className="grid max-w-2xl gap-3 pt-1 sm:grid-cols-3">
            {[
              ["2M+", "monthly captures onboarded"],
              ["40%", "faster partner integration"],
              ["$8M+", "regional investment supported"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-lg border border-card-border bg-card-bg px-4 py-3"
              >
                <p className="text-lg font-semibold text-accent">{value}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/experience"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Experience
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Projects
            </Link>
            <Link
              href="/interests"
              className="rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              My Interests
            </Link>
            <Link
              href="/seoul"
              className="rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Seoul Guide
            </Link>
          </div>
          <div className="flex gap-5 pt-6">
            <a
              href="https://www.linkedin.com/in/hanshin-lee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              LinkedIn &rarr;
            </a>
            <a
              href="mailto:shin.hanshin.lee@gmail.com"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Email &rarr;
            </a>
            <a
              href="tel:+14082107521"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Phone &rarr;
            </a>
          </div>
        </div>
        <Image
          src="/profile.jpeg"
          alt="Hanshin Lee"
          width={280}
          height={280}
          className="rounded-2xl object-cover object-[center_20%] w-48 h-48 sm:w-64 sm:h-64 shrink-0 border-2 border-card-border"
          priority
        />
      </div>
    </div>
  );
}
