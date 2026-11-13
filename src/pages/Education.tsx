import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Droplets,
  Globe2,
  Leaf,
  ShieldCheck,
  Sprout,
  Trees,
  Wind,
} from "lucide-react";

import heroImage from "../assets/image/hero.png";

const topics = [
  {
    icon: Globe2,
    number: "01",
    title: "Biodiversity",
    description:
      "Forests provide habitats for countless plant, animal, and microorganism species. Healthy ecosystems help sustain biodiversity.",
  },
  {
    icon: Wind,
    number: "02",
    title: "Climate & Carbon",
    description:
      "Trees absorb carbon dioxide and store carbon in their trunks, roots, and surrounding soil, helping regulate the climate.",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Water & Soil",
    description:
      "Forest vegetation helps regulate water cycles, reduce soil erosion, and protect watersheds.",
  },
  {
    icon: Trees,
    number: "04",
    title: "Communities",
    description:
      "Forests support livelihoods, provide natural resources, and hold cultural and economic importance for communities.",
  },
];

const threats = [
  {
    title: "Deforestation",
    description:
      "Permanent forest clearing can destroy habitats, reduce biodiversity, and change local ecosystems.",
  },
  {
    title: "Forest Degradation",
    description:
      "Forests can lose ecological quality through repeated disturbance, selective logging, and other pressures.",
  },
  {
    title: "Forest Fires",
    description:
      "Uncontrolled fires can damage vegetation, wildlife habitats, soil, and surrounding communities.",
  },
  {
    title: "Unsustainable Land Use",
    description:
      "Poorly managed land conversion and resource extraction can place long-term pressure on forest ecosystems.",
  },
];

const Education = () => {
  return (
    <div className="overflow-hidden bg-cream">
      {/* INTRODUCTION */}
      <section className="section-container pb-16 pt-20 lg:pb-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="section-label">
              Forest Knowledge · Learn & Understand
            </span>

            <h1 className="font-editorial mt-6 text-5xl leading-[1.08] text-forest-dark sm:text-6xl lg:text-7xl">
              Understanding
              <br />
              <span className="italic text-moss">our forests.</span>
            </h1>
          </div>

          <p className="max-w-lg text-sm leading-8 text-muted sm:text-base lg:justify-self-end">
            Forests are essential to life on Earth. Learn about the ecosystems
            they support, the environmental challenges they face, and the role
            we can play in protecting them.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-2xl">
          <img
            src={heroImage}
            alt="Tropical forest landscape"
            className="h-85 w-full object-cover sm:h-115"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b241a]/70 to-transparent" />
          <div className="absolute bottom-7 left-7 text-white sm:bottom-10 sm:left-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              Our natural world
            </span>
            <p className="font-editorial mt-2 text-3xl sm:text-4xl">
              Every forest has a purpose.
            </p>
          </div>
        </div>
      </section>

      {/* WHY FORESTS MATTER */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label">01 · Why forests matter</span>
            <h2 className="editorial-heading mt-6 text-4xl text-forest-dark sm:text-5xl">
              A foundation for life on Earth.
            </h2>
            <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
              Forests are complex living systems. Their benefits extend far
              beyond the trees themselves, supporting nature and people in many
              interconnected ways.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <article
                  key={topic.number}
                  className="rounded-2xl border border-forest/10 bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-moss">
                      {topic.number}
                    </span>
                    <Icon size={25} className="text-forest" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-editorial mt-10 text-2xl text-forest-dark">
                    {topic.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {topic.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* THREATS */}
      <section className="section-container py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <span className="section-label">
              02 · Understanding the threats
            </span>

            <h2 className="editorial-heading mt-6 text-4xl text-forest-dark sm:text-5xl">
              When forest ecosystems are under pressure.
            </h2>

            <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
              Forests face different forms of disturbance. Understanding these
              pressures is an important first step toward responsible monitoring
              and conservation.
            </p>

            <div className="mt-9 overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Forest landscape"
                className="h-75 w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-0">
            {threats.map((threat, index) => (
              <article
                key={threat.title}
                className="border-b border-forest/15 py-7 first:pt-0"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-xs font-bold text-moss">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-forest-dark">
                      {threat.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {threat.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSERVATION */}
      <section className="bg-forest-deep py-24 text-white lg:py-32">
        <div className="section-container">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
                03 · Conservation & responsibility
              </span>

              <h2 className="font-editorial mt-6 text-4xl leading-tight sm:text-5xl">
                Protecting forests starts with understanding them.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/65 sm:text-base">
                Forest conservation involves more than planting trees. It
                includes protecting existing ecosystems, managing natural
                resources responsibly, supporting local communities, and
                restoring damaged environments.
              </p>

              <Link
                to="/take-action"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-forest-dark transition hover:bg-white"
              >
                Discover ways to help
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Protect",
                  text: "Support the protection of existing forests and habitats.",
                },
                {
                  icon: Sprout,
                  title: "Restore",
                  text: "Encourage responsible restoration using suitable native species.",
                },
                {
                  icon: Leaf,
                  title: "Use Responsibly",
                  text: "Make thoughtful choices about natural resources and consumption.",
                },
                {
                  icon: Trees,
                  title: "Participate",
                  text: "Support community awareness and conservation initiatives.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-7"
                  >
                    <Icon size={26} className="text-lime" strokeWidth={1.5} />
                    <h3 className="font-heading mt-7 font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CONNECTION */}
      <section className="section-container py-24 text-center lg:py-32">
        <span className="section-label">Knowledge meets technology</span>

        <h2 className="editorial-heading mx-auto mt-6 max-w-3xl text-4xl text-forest-dark sm:text-5xl">
          Learn about forests.
          <br />
          Discover how we monitor them.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted">
          Explore how satellite observations help us examine possible forest
          changes across Central Bago Yoma.
        </p>

        <Link
          to="/monitor"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-white! transition hover:bg-forest-dark"
        >
          Explore Forest Monitor
          <ArrowUpRight size={17} />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b241a] py-8 text-white/50">
        <div className="section-container flex flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center">
          <span className="font-heading font-bold tracking-wide text-white/80">
            Dancing with SARs
          </span>
          <span>Learn today. Protect tomorrow.</span>
        </div>
      </footer>
    </div>
  );
};

export default Education;
