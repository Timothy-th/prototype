import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Satellite,
  Radar,
  Search,
  Sprout,
} from "lucide-react";

import heroImage from "../assets/image/hero.png";

const Stories = () => {
  return (
    <div className="overflow-hidden bg-cream">
      {/* STORY HERO */}

      {/* STORIES INTRODUCTION */}
      <section className="section-container pb-16 pt-20 lg:pb-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="section-label">Forest Stories · Field Notes</span>

            <h1 className="font-editorial mt-6 text-5xl leading-[1.08] text-forest-dark sm:text-6xl lg:text-7xl">
              The forest has
              <br />a story to <span className="italic text-moss">tell.</span>
            </h1>
          </div>

          <div className="max-w-lg lg:justify-self-end">
            <p className="text-sm leading-8 text-muted sm:text-base">
              Every forest holds a story of life, change, and resilience.
              Discover what satellite observations can teach us about the
              forests of Bago Yoma, and why understanding them matters.
            </p>

            <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-forest">
              <span className="h-px w-10 bg-forest" />A journey through Central
              Bago Yoma
            </div>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-2xl">
          <img
            src={heroImage}
            alt="Aerial view of a tropical forest"
            className="h-95 w-full object-cover sm:h-120 lg:h-140"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#0b241a]/65 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-7 text-white sm:bottom-10 sm:left-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
              Chapter 01
            </span>
            <p className="font-editorial mt-2 text-2xl sm:text-3xl">
              The living forest
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 01 */}
      <section id="chapter-one" className="section-container py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="section-label">
              Chapter 01 — The living forest
            </span>

            <h2 className="editorial-heading mt-6 text-4xl text-forest-dark sm:text-5xl">
              More than a landscape.
              <br />A living world.
            </h2>

            <p className="mt-7 text-sm leading-8 text-muted sm:text-base">
              A forest is not simply a collection of trees. It is a connected
              world of plants, animals, soil, water, and communities. Each part
              contributes to an ecosystem that supports life.
            </p>

            <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
              Protecting forests means protecting the relationships that keep
              these ecosystems functioning.
            </p>

            <Link
              to="/education"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-forest hover:gap-4"
            >
              Discover forest knowledge
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Green forest canopy"
              className="h-100 w-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-xl bg-cream/95 px-5 py-4 backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-moss">
                A connected ecosystem
              </span>
              <p className="font-editorial mt-1 text-xl text-forest-dark">
                Every part matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 02 */}
      <section className="bg-forest-deep py-24 text-white lg:py-32">
        <div className="section-container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-lime">
                    Looking beyond the surface
                  </span>
                  <Satellite size={24} className="text-lime" />
                </div>

                <div className="my-12 flex items-center justify-center">
                  <div className="flex h-48 w-48 items-center justify-center rounded-full border border-lime/30 bg-lime/5">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-lime/50 bg-lime/10">
                      <Radar size={58} strokeWidth={1} className="text-lime" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-t border-white/10 pt-5 text-xs text-white/60">
                  <span>Radar observations</span>
                  <span>Satellite technology</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
                Chapter 02 — Seeing differently
              </span>

              <h2 className="font-editorial mt-6 text-4xl leading-tight sm:text-5xl">
                What if we could observe forests in a different way?
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/65 sm:text-base">
                Satellites equipped with Synthetic Aperture Radar (SAR) can
                observe the Earth's surface using radar signals. Unlike ordinary
                optical imagery, radar observations do not depend on sunlight
                and can provide useful information through cloud cover.
              </p>

              <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
                Missions such as Sentinel-1 and NISAR give researchers different
                ways to examine the changing characteristics of Earth's surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03 */}
      <section className="section-container py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">
            Chapter 03 — When signals change
          </span>

          <h2 className="editorial-heading mt-6 text-4xl text-forest-dark sm:text-5xl">
            A signal is a question, not a conclusion.
          </h2>

          <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
            Changes in radar observations can help identify areas that deserve
            closer attention. But unusual signals do not automatically mean that
            a forest has been damaged.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Observe",
              description:
                "Examine radar observations collected at different times.",
              icon: Satellite,
            },
            {
              title: "Compare",
              description:
                "Look for unusual changes while considering environmental conditions.",
              icon: Search,
            },
            {
              title: "Investigate",
              description:
                "Prioritize areas for further analysis and field verification.",
              icon: Radar,
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-forest/10 bg-paper p-8"
              >
                <span className="font-heading text-xs font-bold text-moss">
                  STEP 0{index + 1}
                </span>

                <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-forest">
                  <Icon size={22} />
                </div>

                <h3 className="font-editorial mt-7 text-2xl text-forest-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-muted">
          Radar anomalies are indicators for investigation, not confirmed
          evidence of deforestation or forest degradation.
        </p>
      </section>

      {/* CHAPTER 04 */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="section-container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="section-label">
                Chapter 04 — A changing landscape
              </span>

              <h2 className="editorial-heading mt-6 text-4xl text-forest-dark sm:text-5xl">
                Time reveals what a single image cannot.
              </h2>

              <p className="mt-7 text-sm leading-8 text-muted sm:text-base">
                Comparing satellite observations from different years helps us
                understand how forest landscapes may have changed over time.
              </p>

              <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
                By combining Sentinel-1 radar and Sentinel-2 optical
                observations, our project aims to examine forest conditions in
                Central Bago Yoma between 2020 and 2026.
              </p>

              <Link
                to="/detection"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-forest"
              >
                Explore forest change
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt="Illustrative forest landscape"
                  className="h-64 w-full object-cover"
                />
                <div className="bg-forest px-5 py-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-lime">
                    Earlier period
                  </span>
                  <p className="font-editorial mt-1 text-2xl">2020</p>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt="Illustrative forest landscape"
                  className="h-64 w-full object-cover"
                />
                <div className="bg-forest-dark px-5 py-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-lime">
                    Later period
                  </span>
                  <p className="font-editorial mt-1 text-2xl">2026</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted">
            Illustrative imagery only. Actual forest change results will be
            presented when satellite data processing is complete.
          </p>
        </div>
      </section>

      {/* FINAL CHAPTER */}
      <section className="relative overflow-hidden bg-forest-deep py-28 text-center text-white lg:py-36">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="section-container relative mx-auto max-w-3xl">
          <Sprout size={38} className="mx-auto text-lime" />

          <span className="mt-7 block text-xs font-bold uppercase tracking-[0.2em] text-lime">
            Chapter 05 — The next chapter
          </span>

          <h2 className="font-editorial mt-6 text-4xl leading-tight sm:text-5xl">
            Understanding is where protection begins.
          </h2>

          <p className="mt-7 text-sm leading-8 text-white/65 sm:text-base">
            Satellite observations help us ask better questions. Investigation
            helps us understand what is happening. Conservation turns
            understanding into meaningful action.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/monitor"
              className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-forest-dark transition hover:bg-white"
            >
              Explore the Monitor
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/take-action"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Take Action
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b241a] py-8 text-white/50">
        <div className="section-container flex flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center">
          <span className="font-heading font-bold tracking-wide text-white/80">
            Dancing with SARs
          </span>
          <span>Every forest has a story worth protecting.</span>
        </div>
      </footer>
    </div>
  );
};

export default Stories;
