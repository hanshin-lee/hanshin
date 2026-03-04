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
            Senior Android Developer
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            5+ years building production-grade Android SDKs and applications.
            Currently at{" "}
            <span className="text-foreground font-medium">Cox Automotive</span>,
            previously at Fyusion and LG Electronics. Based between California
            and Seoul.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/experience"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Experience
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
