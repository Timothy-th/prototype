import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Camera,
  HeartHandshake,
  Leaf,
  Recycle,
  Share2,
  ShieldCheck,
  Sprout,
  TreePine,
  Users,
} from "lucide-react";

import heroImage from "../assets/image/hero.png";

const personalActions = [
  {
    icon: Recycle,
    number: "01",
    title: "Reduce what you waste",
    description:
      "Use fewer disposable products, reuse materials, and make thoughtful choices about the resources you consume.",
    tips: ["Carry reusable bags and bottles", "Reduce unnecessary paper use"],
  },
  {
    icon: Sprout,
    number: "02",
    title: "Grow and care for trees",
    description:
      "Support native tree planting and remember that caring for a tree after planting is just as important.",
    tips: ["Choose suitable native species", "Water and care for young trees"],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Make responsible choices",
    description:
      "Be aware of where products come from and support businesses that respect forests and sustainable practices.",
    tips: [
      "Avoid products linked to illegal logging",
      "Choose responsibly sourced materials",
    ],
  },
  {
    icon: Share2,
    number: "04",
    title: "Share what you learn",
    description:
      "Help others understand why forests matter by sharing reliable information and encouraging meaningful conversations.",
    tips: [
      "Share trusted conservation resources",
      "Talk about forest protection",
    ],
  },
];

const communityActions = [
  {
    icon: Users,
    title: "Join local initiatives",
    description:
      "Take part in community cleanups, restoration activities, and local environmental programs.",
  },
  {
    icon: TreePine,
    title: "Support restoration",
    description:
      "Help maintain restoration sites and support long-term care for newly planted native trees.",
  },
  {
    icon: Camera,
    title: "Report forest concerns",
    description:
      "Document and share observations of possible forest damage with appropriate local authorities or conservation organizations.",
  },
  {
    icon: HeartHandshake,
    title: "Work together",
    description:
      "Connect with schools, communities, and conservation groups to make forest protection a shared responsibility.",
  },
];

const TakeAction = () => {
  return (
    <main className="overflow-hidden bg-cream">
      {/* INTRODUCTION */}
      <section className="section-container pb-20 pt-20 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="section-label mb-5">From awareness to action</p>

            <h1 className="editorial-heading max-w-xl text-5xl text-forest-dark sm:text-6xl lg:text-7xl">
              Every small action can help a forest grow.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-muted">
              Protecting forests is not only the responsibility of governments
              and organizations. Our everyday decisions, community efforts, and
              shared knowledge can all contribute to a healthier environment.
            </p>

            <a
              href="#individual-actions"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-semibold text-white! transition hover:bg-forest-dark"
            >
              Find your first action
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-sage/40 blur-2xl" />

            <img
              src={heroImage}
              alt="A green forest landscape"
              className="relative h-96 w-full rounded-2xl object-cover shadow-xl lg:h-130"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/90 p-5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs">
              <p className="font-editorial text-xl text-forest-dark">
                A healthier forest begins with people who care.
              </p>
              <p className="mt-2 text-xs leading-6 text-muted">
                Awareness is the beginning. Consistent action makes a
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL ACTIONS */}
      <section id="individual-actions" className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="mb-14 max-w-2xl">
            <p className="section-label mb-4">Start where you are</p>

            <h2 className="editorial-heading text-4xl text-forest-dark sm:text-5xl">
              Small habits. Meaningful change.
            </h2>

            <p className="mt-5 leading-8 text-muted">
              You don't need to do everything at once. Start with simple choices
              that you can maintain in your everyday life.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {personalActions.map((action) => {
              const Icon = action.icon;

              return (
                <article
                  key={action.number}
                  className="soft-card group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-9"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-forest">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="font-heading text-sm font-semibold text-soft">
                      {action.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-xl font-bold text-forest-dark">
                    {action.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {action.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-border pt-5">
                    {action.tips.map((tip) => (
                      <div key={tip} className="flex items-start gap-3">
                        <Leaf size={15} className="mt-1 shrink-0 text-forest" />
                        <span className="text-sm text-ink">{tip}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNITY ACTIONS */}
      <section className="section-container py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-label mb-4">Together for forests</p>

            <h2 className="editorial-heading text-4xl text-forest-dark sm:text-5xl">
              Stronger communities. Healthier forests.
            </h2>

            <p className="mt-6 leading-8 text-muted">
              Forest conservation becomes more effective when people work
              together. Communities can help protect natural resources through
              participation, observation, and long-term commitment.
            </p>

            <Link
              to="/education"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-forest transition hover:gap-4"
            >
              Learn why forests matter
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {communityActions.map((action) => {
              const Icon = action.icon;

              return (
                <article
                  key={action.title}
                  className="rounded-2xl border border-border bg-white p-6 transition hover:border-sage hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-light text-forest">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-forest-dark">
                    {action.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {action.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OBSERVATION TO ACTION */}
      <section className="bg-forest-dark py-20 text-white lg:py-28">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-sage">
              Observe. Understand. Protect.
            </p>

            <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl">
              Conservation begins with understanding what is happening.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
              Explore satellite observations of Central Bago Yoma, learn about
              possible forest changes, and understand why field verification
              matters before conservation decisions are made.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/monitor"
                className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-forest-dark transition hover:bg-white"
              >
                Explore Forest Monitor
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/stories"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Read Forest Stories
                <BookOpen size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="section-container py-20 text-center lg:py-24">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-light text-forest">
          <Sprout size={27} strokeWidth={1.6} />
        </div>

        <h2 className="editorial-heading mt-7 text-4xl text-forest-dark sm:text-5xl">
          The future of forests is a shared responsibility.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-muted">
          Every informed choice, every community effort, and every act of care
          can become part of a bigger movement for nature.
        </p>
      </section>
    </main>
  );
};

export default TakeAction;
