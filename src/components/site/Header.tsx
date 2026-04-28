import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-magic-soazic.png";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/malles", label: "Les malles" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Magic Soazic - Accueil">
          <div className="relative">
            <img
              src={logo}
              alt="Magic Soazic"
              width={56}
              height={56}
              className="h-12 w-12 md:h-14 md:w-14 object-contain transition-magic group-hover:rotate-6"
            />
            <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full -z-10" />
          </div>
          <span
            className={cn(
              "font-display text-xl md:text-2xl font-bold tracking-tight hidden sm:inline transition-smooth",
              scrolled ? "text-primary" : "text-primary-foreground drop-shadow-md"
            )}
          >
            Magic <span className="text-gradient-gold">Soazic</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-smooth font-sans",
                  isActive
                    ? "text-primary bg-gold/15"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex h-10 items-center rounded-full bg-gradient-gold px-5 text-sm font-semibold text-primary shadow-glow hover:shadow-magic hover:-translate-y-0.5 transition-magic font-sans"
          >
            Réserver
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-smooth font-sans",
                    isActive
                      ? "text-primary bg-gold/15"
                      : "text-muted-foreground hover:bg-muted"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
