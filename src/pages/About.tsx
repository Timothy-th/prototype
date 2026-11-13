import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Earth,
  Eye,
  Radar,
  Satellite,
  ScanEye,
  ShieldCheck,
  Trees,
} from "lucide-react";

import heroImage from "../assets/image/hero.png";

const projectPrinciples = [
  {
    icon: Eye,
    number: "01",
    title: "Observe",
    description:
      "Use satellite observations to identify possible changes in forest conditions across the study area.",
  },
  {
    icon: ScanEye,
    number: "02",
    title: "Investigate",
    description:
      "Explore detected signals alongside environmental context and field evidence before drawing conclusions.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Protect",
    description:
      "Make forest information easier to understand and support informed conservation decisions.",
  },
];

const technologies = [
  {
    icon: Radar,
    name: "NISAR",
    type: "L-band and S-band SAR",
    description:
      "NASA–ISRO satellite observations can help monitor changes in Earth's surface and vegetation structure.",
    role: "Forest health monitoring",
  },
  {
    icon: Satellite,
    name: "Sentinel-1",
    type: "C-band SAR",
    description:
      "Radar observations provide information about the Earth's surface in different weather and lighting conditions.",
    role: "Radar-based forest observation",
  },
  {
    icon: Earth,
    name: "Sentinel-2",
    type: "Multispectral optical imagery",
    description:
      "Optical imagery helps examine vegetation conditions and compare forest landscapes across different periods.",
    role: "Forest change comparison",
  },
];

const About = () => {
  return (
    <main className="overflow-hidden bg-cream">
      {/* INTRODUCTION */}
      <section className="section-container pb-20 pt-20 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Intro text */}
          <div className="scroll-reveal-left">
            <p className="section-label mb-5">About the project</p>

            <h1 className="editorial-heading text-5xl text-forest-dark sm:text-6xl lg:text-7xl">
              Understanding forests through a different lens.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-muted">
              Dancing with SARs is a forest monitoring and conservation
              awareness project that explores how satellite observations can
              help us understand changes in forest environments.
            </p>

            <p className="mt-4 max-w-lg text-base leading-8 text-muted">
              By bringing together radar technology, optical imagery, and
              accessible storytelling, we aim to turn complex observations into
              information people can explore and understand.
            </p>

            <Link
              to="/stories"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-semibold text-white! transition hover:bg-forest-dark"
            >
              Discover our stories
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Hero image */}
          <div className="scroll-reveal-right relative">
            <img
              src={heroImage}
              alt="Aerial view of a green forest landscape"
              className="parallax-image h-96 w-full rounded-2xl object-cover shadow-xl lg:h-135"
            />

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/30 bg-white/90 p-5 backdrop-blur-md sm:bottom-7 sm:left-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest">
                Our focus
              </p>

              <p className="mt-2 font-editorial text-2xl text-forest-dark">
                Central Bago Yoma
              </p>

              <p className="mt-1 text-xs text-muted">Myanmar</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="scroll-reveal mx-auto max-w-3xl text-center">
            <p className="section-label mb-5">Our mission</p>

            <h2 className="editorial-heading text-4xl text-forest-dark sm:text-5xl">
              Make forest observations meaningful and accessible.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted">
              Satellite data can reveal patterns that are difficult to observe
              from the ground. However, scientific information becomes more
              useful when people can understand what it represents, explore
              where changes may be happening, and recognize the importance of
              further investigation.
            </p>
          </div>

          {/* Project principles */}
          <div className="scroll-stagger mt-16 grid gap-5 md:grid-cols-3">
            {projectPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="rounded-2xl border border-border bg-cream p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-forest">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="font-heading text-sm font-bold text-soft">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-bold text-forest-dark">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDY AREA */}
      <section className="section-container py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Study area image */}
          <div className="scroll-reveal-left relative overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt="Forest landscape representing the Bago Yoma study area"
              className="parallax-image h-96 w-full object-cover lg:h-115"
            />

            <div className="absolute inset-0 bg-linear-to-t from-forest-dark/50 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                Study area
              </p>

              <p className="mt-2 font-editorial text-3xl">Bago Yoma</p>
            </div>
          </div>

          {/* Study area description */}
          <div className="scroll-reveal-right">
            <p className="section-label mb-5">Where we focus</p>

            <h2 className="editorial-heading text-4xl text-forest-dark sm:text-5xl">
              Exploring the forests of Central Bago Yoma.
            </h2>

            <p className="mt-6 leading-8 text-muted">
              Our project focuses on a defined study area in the Central Bago
              Yoma region of Myanmar. We use this area to explore
              satellite-based forest monitoring and compare observations across
              different periods.
            </p>

            <p className="mt-4 leading-8 text-muted">
              The goal is to understand where possible forest changes may be
              occurring and how satellite observations can guide further
              investigation.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-white p-5">
              <div className="flex items-start gap-3">
                <Trees className="mt-1 shrink-0 text-forest" size={21} />

                <div>
                  <p className="font-heading text-sm font-bold text-forest-dark">
                    A focused monitoring area
                  </p>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Our analysis uses a defined Area of Interest (AOI) so that
                    satellite observations can be compared consistently within
                    the selected region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="scroll-reveal mb-14 max-w-2xl">
            <p className="section-label mb-5">The technology behind it</p>

            <h2 className="editorial-heading text-4xl text-forest-dark sm:text-5xl">
              Different satellites. A clearer picture.
            </h2>

            <p className="mt-6 leading-8 text-muted">
              We explore radar and optical satellite observations because each
              technology provides a different way to understand the Earth's
              surface.
            </p>
          </div>

          {/* Satellite technology cards */}
          <div className="scroll-stagger grid gap-5 lg:grid-cols-3">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <article
                  key={technology.name}
                  className="soft-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light text-forest">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-bold text-forest-dark">
                    {technology.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-forest">
                    {technology.type}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    {technology.description}
                  </p>

                  <div className="mt-7 border-t border-border pt-5">
                    <p className="text-xs text-soft">Project contribution</p>

                    <p className="mt-2 text-sm font-semibold text-forest-dark">
                      {technology.role}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCIENTIFIC RESPONSIBILITY */}
      <section className="section-container py-20 lg:py-28">
        <div className="scroll-scale rounded-3xl bg-sage-light p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest">
              <ShieldCheck size={24} />
            </div>

            <p className="section-label mt-7">Scientific responsibility</p>

            <h2 className="editorial-heading mt-4 text-4xl text-forest-dark sm:text-5xl">
              An observation is a starting point, not a final answer.
            </h2>

            <p className="mt-6 leading-8 text-muted">
              Satellite signals can be influenced by rainfall, soil moisture,
              vegetation conditions, and other environmental factors. A detected
              anomaly does not automatically mean deforestation or forest
              degradation.
            </p>

            <p className="mt-4 leading-8 text-muted">
              Our approach emphasizes careful interpretation, comparison with
              supporting information, and field verification wherever possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-dark py-20 text-white lg:py-24">
        <div className="section-container">
          <div className="scroll-scale text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">
              Explore the project
            </p>

            <h2 className="editorial-heading mx-auto mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Let's understand the forest, one observation at a time.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/70">
              Explore our forest monitoring dashboard and discover how satellite
              observations can help us understand environmental change.
            </p>

            <Link
              to="/monitor"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-forest-dark transition hover:bg-white"
            >
              Explore Forest Monitor
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
