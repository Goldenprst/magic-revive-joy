import { Heart, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const faqs = [
    {
      q: "Combien de temps puis-je garder la malle ?",
      a: "La location standard est de 48h (week-end). Une formule semaine est disponible sur demande pour vacances scolaires ou anniversaires en milieu de semaine.",
    },
    {
      q: "Combien d'enfants peut accueillir une malle ?",
      a: "Chaque malle est dimensionnée pour environ une dizaine d'enfants. Les déguisements et accessoires sont prévus en quantité, et le déroulé d'animation est calibré pour ce groupe.",
    },
    {
      q: "Comment se passe le retrait de la malle ?",
      a: "Le retrait s'organise en main propre à Tournefeuille (31). Nous convenons ensemble du créneau au moment de la réservation.",
    },
    {
      q: "Quel est le montant de la caution ?",
      a: "Une caution est demandée à la remise de la malle, restituée intégralement au retour si tous les éléments sont rendus en bon état. Le montant exact dépend du thème.",
    },
    {
      q: "Que se passe-t-il en cas de casse ou de perte ?",
      a: "Une petite usure est normale et acceptée. En cas de casse importante ou d'élément manquant, un montant correspondant à la remise en état est retenu sur la caution.",
    },
    {
      q: "Comment réserver ?",
      a: "Rendez-vous sur la page Contact pour me transmettre votre demande : thème souhaité, date de l'anniversaire, et nombre d'enfants. Je vous réponds rapidement avec disponibilités et tarif.",
    },
  ];

  return (
    <>
      <section className="magic-sky text-primary-foreground pt-32 pb-20 relative">
        <div className="container relative z-10 max-w-3xl text-center mx-auto">
          <Heart className="h-8 w-8 text-gold mx-auto mb-4" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-5">
            L'histoire de <span className="text-gradient-gold">Magic Soazic</span>
          </h1>
          <p className="font-serif text-xl text-primary-foreground/80 leading-relaxed">
            Une aventure née d'un amour pour les fêtes d'enfants et l'envie
            de simplifier la vie des parents.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none font-serif text-lg text-primary leading-relaxed space-y-6">
            <p>
              Quand on devient parent, on rêve d'offrir à son enfant des
              anniversaires inoubliables. Mais entre la décoration à
              chercher, les déguisements à coordonner, les activités à
              imaginer et le déroulé à orchestrer, la fête se transforme
              vite en marathon d'organisation.
            </p>
            <p>
              <span className="font-display text-2xl text-gradient-gold font-semibold">
                C'est de ce constat qu'est née Magic Soazic.
              </span>
            </p>
            <p>
              Je conçois et assemble des malles thématiques complètes,
              pensées dans le moindre détail : déco raccord, dix
              déguisements, accessoires de qualité, activités calibrées par
              âge, et un déroulé minute par minute pour que vous puissiez
              animer la fête sereinement, sans rien improviser.
            </p>
            <p>
              Mon objectif : que vous viviez la fête, pas que vous la
              prépariez. Et que vos enfants gardent en mémoire un
              anniversaire vraiment magique.
            </p>
          </div>
        </div>
      </section>

      {/* Charte */}
      <section className="py-20 bg-gradient-soft">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold-deep mb-3">
              Charte de location
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Comment ça se passe ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Réservation", desc: "Demande via le formulaire, confirmation des disponibilités sous 48h, acompte pour valider." },
              { title: "Remise de la malle", desc: "Retrait en main propre à Tournefeuille (31), état des lieux ensemble, signature de la charte." },
              { title: "Pendant la fête", desc: "Suivez le déroulé fourni, profitez ! Je reste joignable en cas de question." },
              { title: "Restitution", desc: "Retour de la malle propre et complète, vérification rapide, restitution de la caution." },
            ].map((step, i) => (
              <div key={step.title} className="card-magic p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-gold flex items-center justify-center font-display font-bold text-primary text-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <Sparkles className="h-7 w-7 text-gold mx-auto mb-3" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">
              Questions fréquentes
            </h2>
            <p className="font-serif text-lg text-muted-foreground">
              Tout ce qu'il faut savoir avant de réserver.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-magic px-6 border-0"
              >
                <AccordionTrigger className="font-display text-lg font-semibold text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default About;
