import { Link } from "react-router-dom";
import { Sparkles, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="magic-sky text-primary-foreground mt-20">
      <div className="container relative z-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-gold" />
            <span className="font-display text-xl font-bold">
              Magic <span className="text-gradient-gold">Soazic</span>
            </span>
          </Link>
          <p className="mt-4 text-primary-foreground/70 font-serif text-lg leading-relaxed">
            Des malles d'anniversaire à thème pour transformer la fête de
            votre enfant en souvenir inoubliable.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-gold mb-4">Navigation</h3>
          <ul className="space-y-2 font-sans text-sm">
            <li><Link to="/" className="text-primary-foreground/70 hover:text-gold transition-smooth">Accueil</Link></li>
            <li><Link to="/malles" className="text-primary-foreground/70 hover:text-gold transition-smooth">Les malles</Link></li>
            <li><Link to="/a-propos" className="text-primary-foreground/70 hover:text-gold transition-smooth">À propos & Charte</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/70 hover:text-gold transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-gold mb-4">Contact</h3>
          <ul className="space-y-3 font-sans text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:contact@magicsoazic.fr" className="hover:text-gold transition-smooth">
                contact@magicsoazic.fr
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span>France</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-primary-foreground/10">
        <div className="container py-6 text-center text-xs text-primary-foreground/50 font-sans">
          © {new Date().getFullYear()} Magic Soazic. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
