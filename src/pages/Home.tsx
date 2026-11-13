import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Satellite,
  Search,
  Sprout,
  Trees,
  ShieldCheck,
} from "lucide-react";

import heroImage from "../assets/image/hero.png";
import home from "../assets/image/home.png";

const Home = () => {
  return (
    <div className="overflow-hidden bg-cream">
      {/* HERO */}
      <section className="relative min-h-162.5 overflow-hidden bg-forest-deep">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Forest landscape"
            className="parallax-image h-full w-full object-cover object-center"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0b241a]/95 via-[#0b241a]/65 to-[#0b241a]/15" />

          {/* Bottom shadow */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0b241a]/65 via-transparent to-[#0b241a]/20" />
        </div>

        {/* Hero content */}
        <div className="section-container relative flex min-h-162.5 items-center py-24">
          <div className="max-w-3xl text-white">
            <span className="hero-content mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Forest monitoring & conservation
            </span>

            <h1 className="hero-content font-editorial text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Every forest has
              <br />
              a story worth
              <br />
              <span className="italic text-lime">protecting.</span>
            </h1>

            <p className="hero-content mt-7 max-w-xl text-sm leading-8 text-white/85 sm:text-base">
              Discover how satellite technology helps us understand forest
              change, investigate environmental signals, and inspire action for
              the future of Bago Yoma.
            </p>

            <div className="hero-content mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/monitor"
                className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-forest-dark transition hover:bg-white"
              >
                Explore Forest Monitor
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/stories"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discover Our Stories
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-content mt-16 flex items-center gap-3 text-xs font-medium text-white/60">
              <ArrowDown size={16} />
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-container py-24 lg:py-32">
        <div className="scroll-reveal grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="section-label">Why this matters</span>

            <h2 className="editorial-heading mt-5 max-w-xl text-4xl text-forest-dark sm:text-5xl">
              A changing forest needs more than just observation.
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-sm leading-8 text-muted sm:text-base">
              Forests support biodiversity, regulate our climate, protect water
              resources, and sustain communities. Yet changes can happen
              gradually and across places that are difficult to observe.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
              By bringing satellite observations, field investigation, and
              conservation awareness together, we can turn complex environmental
              information into something people can understand and act upon.
            </p>
          </div>
        </div>
      </section>

      {/* THREE STAGES */}
      <section className="bg-paper py-24">
        <div className="section-container">
          <div className="scroll-reveal mx-auto max-w-2xl text-center">
            <span className="section-label">Our approach</span>

            <h2 className="editorial-heading mt-5 text-4xl text-forest-dark sm:text-5xl">
              From observation to action.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted">
              Understanding forest change is a journey. We bring three important
              stages together.
            </p>
          </div>

          <div className="scroll-stagger mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Observe",
                description:
                  "Use satellite observations to identify possible forest changes and unusual environmental signals.",
                icon: Satellite,
              },
              {
                number: "02",
                title: "Investigate",
                description:
                  "Explore potential hotspots and connect satellite observations with field reports and evidence.",
                icon: Search,
              },
              {
                number: "03",
                title: "Protect",
                description:
                  "Build awareness, encourage responsible choices, and support meaningful conservation action.",
                icon: Sprout,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-2xl border border-forest/10 bg-cream p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-moss">
                      {item.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-forest">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="font-editorial mt-10 text-3xl text-forest-dark">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MONITORING FEATURE */}
      <section className="section-container py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="scroll-reveal-left relative min-h-90 overflow-hidden rounded-2xl bg-forest">
            <img
              src={home}
              alt="Forest landscape viewed from above"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />

            <div className="absolute inset-0 bg-linear-to-t from-forest-deep/90 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
                Central Bago Yoma
              </span>

              <h3 className="font-editorial mt-3 text-3xl sm:text-4xl">
                Looking closer at our forests.
              </h3>
            </div>
          </div>

          {/* Text */}
          <div className="scroll-reveal-right">
            <span className="section-label">Explore the data</span>

            <h2 className="editorial-heading mt-5 text-4xl text-forest-dark sm:text-5xl">
              See what satellites can reveal.
            </h2>

            <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
              Explore forest change through Sentinel-1 and Sentinel-2
              observations, and examine forest health signals using NISAR radar
              observations.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest">
                  <Trees size={19} />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-forest-dark">
                    Forest change detection
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Compare forest conditions across different years.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest">
                  <Satellite size={19} />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-forest-dark">
                    Forest health monitoring
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Examine unusual signals and identify areas for further
                    investigation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-forest-dark">
                    Evidence before conclusions
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Satellite anomalies indicate possible changes, not confirmed
                    forest degradation.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/monitor"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-white! transition hover:bg-forest-dark"
            >
              Enter Forest Monitor
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-forest-deep py-24 text-center text-white">
        <div className="scroll-scale section-container">
          <Sprout className="mx-auto text-lime" size={34} strokeWidth={1.5} />

          <h2 className="font-editorial mx-auto mt-7 max-w-3xl text-4xl leading-tight sm:text-5xl">
            The future of our forests is a story we can help shape.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65">
            Learn, explore, and discover how small actions can contribute to a
            healthier environment.
          </p>

          <Link
            to="/take-action"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-forest-dark transition hover:bg-white"
          >
            Be Part of the Change
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b241a] py-8 text-white/50">
        <div className="scroll-reveal section-container flex flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center">
          <span className="font-heading font-bold tracking-wide text-white/80">
            Dancing with SARs
          </span>

          <span>Forest monitoring, understanding & conservation.</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
