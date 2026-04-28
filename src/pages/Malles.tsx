import { Link } from "react-router-dom";
import { Calendar, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themes } from "@/data/themes";

const Malles = () => {
  return (
    <>
      <section className="magic-sky text-primary-foreground pt-32 pb-20 relative">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <Sparkles className="h-8 w-8 text-gold mx-auto mb-4" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-5">
            Nos malles <span className="text-gradient-gold">thématiques</span>
          </h1>
          <p className="font-serif text-xl text-primary-foreground/80 leading-relaxed">
            Chaque malle est un univers complet, prêt à être déployé.
            Choisissez le thème qui fera rêver votre enfant.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme) => (
              <article
                key={theme.slug}
                className={`card-magic p-8 bg-gradient-to-br ${theme.color}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="text-6xl">{theme.emoji}</div>
                  <div className="flex flex-col items-end gap-1 text-xs font-sans text-primary/60">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {theme.ageRange}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {theme.duration}
                    </span>
                  </div>
                </div>
                <h2 className="font-display text-3xl font-semibold text-primary mb-2">
                  {theme.name}
                </h2>
                <p className="font-serif text-lg text-primary/70 italic mb-4">
                  {theme.tagline}
                </p>
                <p className="font-serif text-base text-primary/80 leading-relaxed mb-5">
                  {theme.description}
                </p>
                <div className="border-t border-primary/10 pt-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-deep mb-3">
                    Ce que contient la malle
                  </p>
                  <ul className="grid grid-cols-2 gap-2 font-sans text-sm text-primary/80">
                    {theme.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Sparkles className="h-3 w-3 text-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="magic" size="xl">
              <Link to="/contact">
                Réserver une malle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Malles;
