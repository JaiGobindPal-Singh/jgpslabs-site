import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Careers | JGPS Labs",
  description:
    "Explore careers at JGPS Labs and get in touch about future opportunities to build thoughtful digital products.",
};

const waysToMakeAnImpact = [
  {
    icon: Code2,
    title: "Solve real problems",
    description:
      "Help turn the everyday challenges businesses face into useful, dependable digital products.",
  },
  {
    icon: Lightbulb,
    title: "Bring your perspective",
    description:
      "We value thoughtful ideas, practical curiosity, and people who care about the details.",
  },
  {
    icon: Sparkles,
    title: "Make the work matter",
    description:
      "Contribute to projects where good design and technology make a meaningful difference.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f6fbfc] text-[#0b2143]">
      <header className="bg-[#06152c] px-5 py-5 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="JGPS Labs home"
          >
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              className="size-10 object-contain"
            />
            <span className="text-sm font-semibold tracking-tight">
              JGPS Labs
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#bed1dd] transition hover:text-[#62ddd6]"
          >
            Back to home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#071b37] px-5 py-24 text-white sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(104,190,212,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(104,190,212,.12) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute -right-36 top-8 size-96 rounded-full bg-[#12b8bf]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#57d4d0]">
            <span className="size-2 rounded-full bg-current" />
            Careers at JGPS Labs
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] sm:text-7xl">
            Good work starts with{" "}
            <span className="text-[#52d4d0]">good people.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b3c8d9] sm:text-lg">
            We build websites, custom software, and digital products around real
            needs. If you care about thoughtful work and making technology
            useful, we&apos;d like to hear from you.
          </p>
          <Link
            href="#openings"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#52d4d0] px-5 py-3 text-sm font-bold text-[#0b2143] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Explore opportunities <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1686b5]">
            What we value
          </p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
            A chance to make useful things, together.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {waysToMakeAnImpact.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#d9e6eb] bg-white p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#e8f4f5] text-[#1686b5]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#61798c]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="openings"
        className="px-5 pb-24 sm:pb-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl rounded-[28px] bg-[#0b2143] p-8 text-white sm:p-12 lg:p-16">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#57d4d0]">
            Open positions
          </p>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                No open roles right now.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#b3c8d9] sm:text-base">
                We don&apos;t have any positions listed today, but we&apos;re
                always glad to meet people who are excited about building
                thoughtful digital products. Share a little about yourself and
                the kind of work you enjoy.
              </p>
            </div>
            <a
              href="mailto:jgpslabs@gmail.com?subject=Careers%20at%20JGPS%20Labs"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#52d4d0] px-5 py-3 text-sm font-bold text-[#0b2143] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Introduce yourself
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#06152c] px-5 py-7 text-sm text-[#9eb5c6] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <span>© 2026 JGPS Labs. All rights reserved.</span>
          <Link href="/" className="transition hover:text-[#62ddd6]">
            Back to JGPS Labs
          </Link>
        </div>
      </footer>
    </main>
  );
}
