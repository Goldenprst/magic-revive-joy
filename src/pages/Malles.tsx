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
            Le détail de chaque <span className="text-gradient-gold">malle</span>
          </h1>
          <p className="font-serif text-xl text-primary-foreground/80 leading-relaxed">
            Chaque malle est un univers complet pour environ 10 enfants :
            décoration, déguisements et matériel d'activités. Vous recevez
            également par mail le contenu, le déroulé et les explications.
          </p>
          <p className="font-serif text-base text-primary-foreground/60 italic mt-4">
            Choisissez la malle qui vous intéresse et accédez à son contenu détaillé.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme) => (
              <Link
                key={theme.slug}
                to={`/malles/${theme.slug}`}
                className={`card-magic p-8 bg-gradient-to-br ${theme.color} block group`}
                aria-label={`Voir le détail de la malle ${theme.name}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="text-6xl group-hover:scale-110 transition-magic">{theme.emoji}</div>
                  <div className="flex flex-col items-end gap-1 text-xs font-sans text-primary/60">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {theme.ageRange.split("—")[0].trim()}
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
                <p className="font-serif text-base text-primary/80 leading-relaxed mb-5 line-clamp-3">
                  {theme.shortDescription}
                </p>
                <div className="flex items-center justify-between border-t border-primary/10 pt-5">
                  <span className="font-display text-xl text-gold-deep font-semibold">
                    {theme.price}
                  </span>
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary group-hover:gap-3 transition-smooth">
                    Voir le détail
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
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
