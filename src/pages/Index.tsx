import { Link } from "react-router-dom";
import { Sparkles, PackageOpen, PartyPopper, Heart, ArrowRight, Star, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themes } from "@/data/themes";
import heroImage from "@/assets/hero-magic.jpg";
import malleImage from "@/assets/malle-feature.jpg";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center magic-sky text-primary-foreground pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/30 text-gold mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="font-sans text-xs font-medium tracking-wide uppercase">
                Anniversaires d'enfants clé en main
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Un anniversaire <br />
              <span className="text-gradient-gold">enchanté</span>,<br />
              sans préparation.
            </h1>
            <p className="font-serif text-xl md:text-2xl text-primary-foreground/85 leading-relaxed mb-8 max-w-xl">
              Magic Soazic vous livre des malles thématiques complètes :
              décoration, déguisements, activités et déroulé pas à pas.
              Vous n'avez qu'à profiter de la fête.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="magic" size="xl">
                <Link to="/malles">
                  Découvrir les thèmes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghostLight" size="xl">
                <Link to="/contact">Réserver une malle</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block animate-float">
            <div className="absolute -inset-20 bg-gold/20 blur-3xl rounded-full" />
            <img
              src={malleImage}
              alt="Malle d'anniversaire magique remplie de décorations et déguisements"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-magic"
            />
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-24 bg-gradient-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold-deep mb-4">
              Comment ça marche
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Trois étapes, mille souvenirs
            </h2>
            <p className="font-serif text-lg text-muted-foreground">
              Un processus pensé pour les parents pressés et les enfants émerveillés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                step: "01",
                title: "Choisissez un thème",
                desc: "Princesses, pirates, sorciers, licornes… Sélectionnez l'univers qui fera briller les yeux de votre enfant.",
              },
              {
                icon: PackageOpen,
                step: "02",
                title: "Recevez la malle",
                desc: "Elle arrive complète : décoration, dix déguisements, accessoires, activités et déroulé détaillé.",
              },
              {
                icon: PartyPopper,
                step: "03",
                title: "Profitez de la fête",
                desc: "Suivez les conseils, animez la journée et savourez les rires. La magie opère toute seule.",
              },
            ].map((item) => (
              <div key={item.step} className="card-magic p-8 relative">
                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-gold/20">
                  {item.step}
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold mb-5 shadow-glow">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APERÇU THÈMES */}
      <section className="py-24">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold-deep mb-3">
                Nos malles thématiques
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                Un univers pour chaque enfant
              </h2>
            </div>
            <Button asChild variant="outlineGold" size="lg">
              <Link to="/malles">
                Voir tous les thèmes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {themes.map((theme) => (
              <Link
                key={theme.slug}
                to={`/malles/${theme.slug}`}
                className={`card-magic p-7 bg-gradient-to-br ${theme.color} group block`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-magic">
                  {theme.emoji}
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                  {theme.name}
                </h3>
                <p className="font-serif text-base text-primary/70 italic mb-4">
                  {theme.tagline}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold-deep group-hover:gap-3 transition-smooth">
                  Découvrir
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENU MALLE */}
      <section className="py-24 magic-sky text-primary-foreground">
        <div className="container relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Dans chaque malle
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tout est pensé,<br />
              <span className="text-gradient-gold">rien n'est oublié.</span>
            </h2>
            <ul className="space-y-4 font-serif text-lg">
              {[
                "Décoration complète et raccord avec le thème",
                "Une dizaine de déguisements pour les invités",
                "Activités, jeux et énigmes adaptés à l'âge",
                "Déroulé minute par minute, conseils & astuces",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-gold mt-1 shrink-0 fill-gold" />
                  <span className="text-primary-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="magic" size="xl" className="mt-8">
              <Link to="/contact">Réserver ma malle</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gold/20 blur-3xl rounded-full" />
            <div className="relative card-magic p-2 bg-card/95">
              <img
                src={malleImage}
                alt="Aperçu du contenu d'une malle Magic Soazic"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24 bg-gradient-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold-deep mb-4">
              Témoignages
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Des parents conquis
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Fanja",
                theme: "Le meilleur gâteau",
                text: "Idée d'activité très originale, déguisements soignés, matériel complet et de qualité, feuilles d'explications très claires. Les 8 petites pâtissières se sont régalées, et moi aussi !",
              },
              {
                name: "Laurianne",
                theme: "À l'école de magie",
                text: "Agréablement surprise de voir tous les ustensiles et détails proposés (bougies volantes, potions magiques, la chouette Edwige…). Il y a même un mode d'emploi pour la mise en place.",
              },
            ].map((t) => (
              <figure key={t.name} className="card-magic p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg text-primary leading-relaxed mb-5">
                  « {t.text} »
                </blockquote>
                <figcaption className="font-sans text-sm">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-muted-foreground">Malle {t.theme}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24">
        <div className="container">
          <div className="card-magic p-12 md:p-16 text-center bg-gradient-to-br from-card to-muted relative overflow-hidden">
            <div className="absolute inset-0 bg-sparkle opacity-50" />
            <Heart className="h-10 w-10 text-gold mx-auto mb-6 relative z-10" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 relative z-10">
              Prêts à créer la magie ?
            </h2>
            <p className="font-serif text-xl text-muted-foreground max-w-xl mx-auto mb-8 relative z-10">
              Réservez votre malle thématique et offrez à votre enfant un anniversaire dont il se souviendra.
            </p>
            <Button asChild variant="magic" size="xl" className="relative z-10">
              <Link to="/contact">
                Demander ma malle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
