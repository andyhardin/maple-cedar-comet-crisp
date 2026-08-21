import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Gallery } from "@/components/gallery";
import { LogoMark } from "@/components/logo";
import { doors, elsewhere, site, steps, vault } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Doors />
        <Process />
        <Vault />
        <Elsewhere />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-40 border-b border-fg/8 bg-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8">
        <a href="#top" className="flex min-h-11 items-center gap-2 text-fg">
          <LogoMark className="size-6 text-accent" />
          <span className="font-display text-lg tracking-wide sm:text-xl">
            Steamworks
          </span>
        </a>
        <nav
          aria-label="Primary"
          className="flex items-center gap-1 text-xs tracking-nav text-muted uppercase"
        >
          <a
            href="#work"
            className="flex min-h-11 items-center px-2 transition-colors duration-150 hover:text-fg sm:px-3"
          >
            Work
          </a>
          <a
            href="#book"
            className="flex min-h-11 items-center px-2 transition-colors duration-150 hover:text-fg sm:px-3"
          >
            Book
          </a>
          <a
            href="#vault"
            className="flex min-h-11 items-center px-2 transition-colors duration-150 hover:text-fg sm:px-3"
          >
            Vault
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-hero overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="A wooden stool in a single beam of tungsten light and steam"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/50 to-bg/20" />
      <div className="relative mx-auto flex min-h-hero max-w-6xl flex-col justify-end px-5 pt-20 pb-16 sm:px-8 sm:pb-24">
        <p className="text-xs tracking-kicker text-accent uppercase">
          {site.location} · {site.travel}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl leading-none tracking-tight text-fg sm:text-7xl md:text-8xl">
          {site.heroLine}
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-accent sm:text-lg">
          {site.heroSupport}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#book"
            className={cn(
              "inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium tracking-wide text-accent-fg",
              "transition-transform duration-150 ease-out hover:bg-fg active:scale-press",
            )}
          >
            Book a session
          </a>
          <a
            href="#vault"
            className={cn(
              "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-medium tracking-wide text-fg",
              "shadow-border transition-[box-shadow,transform] duration-150 ease-out",
              "hover:shadow-border-hover active:scale-press",
            )}
          >
            Enter the vault
          </a>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-kicker text-muted uppercase">Work</p>
            <h2 className="font-display mt-3 text-3xl text-fg sm:text-5xl">
              {site.quote}
            </h2>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-1 text-xs tracking-nav text-muted uppercase transition-colors duration-150 hover:text-fg sm:inline-flex"
          >
            Instagram
            <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
          </a>
        </div>
        <Gallery />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-fg/8">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-12 sm:px-8 sm:py-24">
        <p className="text-xs tracking-kicker text-muted uppercase sm:col-span-3">
          The photographer
        </p>
        <div className="max-w-xl sm:col-span-8 sm:col-start-5">
          <p className="font-display text-2xl leading-snug text-fg sm:text-3xl">
            {site.about}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {site.aboutMore}
          </p>
        </div>
      </div>
    </section>
  );
}

function Doors() {
  return (
    <section id="book" className="scroll-mt-16 border-t border-fg/8">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs tracking-kicker text-muted uppercase">Book</p>
        <h2 className="font-display mt-3 max-w-lg text-3xl text-fg sm:text-5xl">
          Two ways to work together.
        </h2>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {doors.map((door) => (
            <article key={door.title} className="flex flex-col bg-bg p-6 sm:p-10">
              <p className="text-xs tracking-kicker text-subtle uppercase">
                {door.kicker}
              </p>
              <h3 className="font-display mt-4 text-3xl text-fg">{door.title}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                {door.body}
              </p>
              <a
                href={door.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-fg sm:w-auto",
                  "transition-transform duration-150 ease-out hover:bg-fg active:scale-press",
                )}
              >
                {door.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-t border-fg/8">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs tracking-kicker text-muted uppercase">The sitting</p>
        <h2 className="font-display mt-3 max-w-lg text-3xl text-fg sm:text-5xl">
          How it actually goes.
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <li key={step.n}>
              <p className="font-display text-3xl text-subtle">{step.n}</p>
              <h3 className="mt-3 text-sm font-medium tracking-wide text-fg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Vault() {
  return (
    <section id="vault" className="scroll-mt-16 border-t border-fg/8">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs tracking-kicker text-muted uppercase">The vault</p>
        <h2 className="font-display mt-3 max-w-xl text-3xl text-fg sm:text-5xl">
          The work that does not belong on the public feed.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          Patreon, Fansly, BentBox. Same photographer. Pick how you want to look.
        </p>
        <ul className="mt-12 grid gap-3 md:grid-cols-3">
          {vault.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group flex h-full flex-col rounded-xl bg-surface p-6 shadow-border sm:p-8",
                  "transition-[box-shadow,transform] duration-150 ease-out",
                  "hover:shadow-border-hover active:scale-press",
                )}
              >
                <p className="text-xs tracking-kicker text-subtle uppercase">
                  {item.kicker}
                </p>
                <h3 className="font-display mt-4 text-3xl text-fg">
                  {item.label}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {item.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-1 text-sm text-accent">
                  Enter
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Elsewhere() {
  return (
    <section id="elsewhere" className="border-t border-fg/8">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs tracking-kicker text-muted uppercase">Elsewhere</p>
        <h2 className="font-display mt-3 text-3xl text-fg sm:text-5xl">
          If you already know where you want to look.
        </h2>
        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {elsewhere.map((block) => (
            <div key={block.group}>
              <h3 className="text-xs tracking-kicker text-subtle uppercase">
                {block.group}
              </h3>
              <ul className="mt-4 divide-y divide-fg/8">
                {block.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex min-h-12 items-center justify-between gap-4 py-3 text-fg"
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="flex items-center gap-2 text-sm text-subtle">
                        <span className="hidden truncate sm:inline">
                          {item.note}
                        </span>
                        <ArrowUpRight
                          className="size-3.5 text-muted transition-colors duration-150 group-hover:text-fg"
                          strokeWidth={1.5}
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a
          href={site.linktree}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex min-h-11 items-center gap-1 text-sm text-muted transition-colors duration-150 hover:text-fg"
        >
          Every account in one list
          <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-fg/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-base tracking-wide text-muted">
          Steamworks Photo
        </p>
        <p>{site.adultNote}</p>
      </div>
    </footer>
  );
}
