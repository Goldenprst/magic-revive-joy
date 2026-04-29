import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Users, Sparkles, Star, ImageIcon, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themes } from "@/data/themes";

const ThemeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const theme = themes.find((t) => t.slug === slug);

  if (!theme) return <Navigate to="/malles" replace />;

  const currentIndex = themes.findIndex((t) => t.slug === slug);
  const next = themes[(currentIndex + 1) % themes.length];

  // Galerie : on affiche soit les vraies photos, soit 6 emplacements prêts à recevoir des images.
  const placeholderCount = 6;
  const galleryItems =
    theme.gallery.length > 0
      ? theme.gallery
      : Array(placeholderCount).fill(null);

  return (
    <>
      {/* HERO */}
      <section className={`magic-sky text-primary-foreground pt-32 pb-20 relative`}>
        <div className="container relative z-10 max-w-4xl mx-auto">
          <Link
            to="/malles"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-smooth font-sans text-sm mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les malles
          </Link>
          <div className="text-7xl mb-4">{theme.emoji}</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            {theme.name}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gold italic mb-6">
            {theme.tagline}
          </p>
          <div className="flex flex-wrap gap-6 font-sans text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold" />
              {theme.ageRange}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold" />
              {theme.duration}
            </span>
            <span className="flex items-center gap-2 font-display text-base font-semibold text-gold">
              <Sparkles className="h-4 w-4" />
              {theme.price}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-20 bg-gradient-soft">
        <div className="container max-w-4xl">
          <div className="card-magic p-8 md:p-10 mb-10">
            <p className="font-serif text-xl text-primary mb-6 leading-relaxed">
              {theme.shortDescription}
            </p>
            <div className="space-y-4">
              {theme.longDescription.map((p, i) => (
                <p key={i} className="font-serif text-lg text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {theme.highlights.map((h) => (
              <div key={h} className="card-magic p-5 flex items-start gap-3">
                <Star className="h-5 w-5 text-gold fill-gold shrink-0 mt-0.5" />
                <span className="font-serif text-base text-primary">{h}</span>
              </div>
            ))}
          </div>

          {/* Ingrédients à fournir (le meilleur gâteau) */}
          {theme.ingredients && (
            <div className="card-magic p-8 mb-10 bg-gradient-to-br from-gold/10 to-accent/15 border-gold/30">
              <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                À prévoir dans vos placards
              </h2>
              <ul className="space-y-2 font-serif text-base text-primary/80">
                {theme.ingredients.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-gold-deep shrink-0 mt-1" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* VIDÉO */}
      {theme.youtubeId && (
        <section className="py-16 bg-gradient-soft">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold-deep mb-2">
                En vidéo
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                Découvrez la malle en mouvement
              </h2>
            </div>
            <div className="card-magic p-2 overflow-hidden">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${theme.youtubeId}`}
                  title={`Vidéo de présentation — ${theme.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GALERIE */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold-deep mb-2">
                Galerie
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                Photos de la malle {theme.name}
              </h2>
            </div>
            {theme.gallery.length === 0 && (
              <p className="font-sans text-sm text-muted-foreground italic max-w-md">
                Photos à venir — ces emplacements accueilleront prochainement
                les vraies images.
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((src: string | null, i: number) =>
              src ? (
                <img
                  key={i}
                  src={src}
                  alt={`${theme.name} — photo ${i + 1}`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-card"
                />
              ) : (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl border-2 border-dashed border-gold/40 bg-muted/40 flex flex-col items-center justify-center text-muted-foreground gap-2"
                >
                  <ImageIcon className="h-8 w-8 text-gold/60" />
                  <span className="font-sans text-xs">Photo à venir</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      {theme.testimonial && (
        <section className="py-20 magic-sky text-primary-foreground">
          <div className="container relative z-10 max-w-3xl">
            <div className="text-center mb-10">
              <Quote className="h-10 w-10 text-gold mx-auto mb-3" />
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                Avis vérifié
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Ils ont testé la malle {theme.name}
              </h2>
            </div>
            <figure className="card-magic p-8 md:p-10 bg-card/95">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="space-y-4 font-serif text-lg text-primary leading-relaxed mb-6">
                {theme.testimonial.text.map((p, i) => (
                  <p key={i}>« {p} »</p>
                ))}
              </blockquote>
              <figcaption className="font-sans text-sm font-semibold text-gold-deep">
                — {theme.testimonial.author}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-soft">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Cette malle vous tente ?
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-8">
            Réservez-la dès maintenant pour l'anniversaire de votre enfant.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="magic" size="xl">
              <Link to="/contact">Réserver cette malle</Link>
            </Button>
            <Button asChild variant="outlineGold" size="xl">
              <Link to={`/malles/${next.slug}`}>
                Malle suivante : {next.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThemeDetail;
