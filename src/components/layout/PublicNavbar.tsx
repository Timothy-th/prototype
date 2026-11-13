import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Leaf, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Stories", path: "/stories" },
  { name: "Forest Knowledge", path: "/education" },
  { name: "Take Action", path: "/take-action" },
  { name: "About", path: "/about" },
];

const PublicNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-1000 border-b border-forest/10 bg-cream/95 backdrop-blur-md">
      <nav className="section-container flex h-19 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white">
            <Leaf size={21} />
          </div>

          <div className="leading-tight">
            <span className="block font-heading text-lg font-extrabold tracking-tight text-forest-dark">
              Dancing with SARs
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
              Forest Watch & Conservation
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative py-2 text-[13px] font-semibold transition-colors ${
                  isActive ? "text-forest" : "text-ink/70 hover:text-forest"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-forest" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Explore button */}
        <Link
          to="/monitor"
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-xs font-bold text-white! transition hover:bg-forest-dark lg:flex"
        >
          Explore Monitor
          <ArrowUpRight size={15} className="text-white" />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-forest/10 bg-cream px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-sage-light text-forest"
                      : "text-ink hover:bg-paper"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/monitor"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white"
            >
              Explore Monitor
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
