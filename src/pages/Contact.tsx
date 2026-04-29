import { useState } from "react";
import { Mail, MapPin, Phone, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { themes } from "@/data/themes";
import { toast } from "sonner";

const Contact = () => {
  const [theme, setTheme] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const date = data.get("date") as string;
    const kids = data.get("kids") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Demande de réservation — ${theme || "thème à définir"}`);
    const body = encodeURIComponent(
      `Bonjour Soazic,\n\nJe souhaite réserver une malle.\n\n` +
      `Thème : ${theme || "à définir"}\n` +
      `Date de l'anniversaire : ${date}\n` +
      `Nombre d'enfants : ${kids}\n\n` +
      `${message}\n\n` +
      `${name}\n${email}`
    );

    window.location.href = `mailto:contact@magicsoazic.fr?subject=${subject}&body=${body}`;
    toast.success("Votre messagerie s'ouvre — il ne reste qu'à envoyer !");
  };

  return (
    <>
      <section className="magic-sky text-primary-foreground pt-32 pb-20 relative">
        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <Sparkles className="h-8 w-8 text-gold mx-auto mb-4" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-5">
            Réservez votre <span className="text-gradient-gold">malle</span>
          </h1>
          <p className="font-serif text-xl text-primary-foreground/80 leading-relaxed">
            Dites-moi tout sur la fête à venir : je vous reviens rapidement
            avec disponibilités et tarif.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Infos */}
            <aside className="md:col-span-2 space-y-6">
              <div className="card-magic p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary">Email</h3>
                </div>
                <a
                  href="mailto:contact@magicsoazic.fr"
                  className="font-serif text-base text-muted-foreground hover:text-gold-deep transition-smooth"
                >
                  contact@magicsoazic.fr
                </a>
              </div>

              <div className="card-magic p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary">Téléphone</h3>
                </div>
                <a
                  href="tel:+33745140213"
                  className="font-serif text-base text-muted-foreground hover:text-gold-deep transition-smooth"
                >
                  07 45 14 02 13
                </a>
              </div>

              <div className="card-magic p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary">Zone</h3>
                </div>
                <p className="font-serif text-base text-muted-foreground">
                  Tournefeuille (31) — retrait en main propre.
                </p>
              </div>

              <div className="card-magic p-6 bg-gradient-to-br from-gold/15 to-accent/20 border-gold/30">
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  Pensez à réserver tôt !
                </h3>
                <p className="font-serif text-sm text-primary/80 leading-relaxed">
                  Les week-ends de printemps et d'automne sont prisés.
                  N'hésitez pas à anticiper d'1 à 2 mois pour garantir le
                  thème souhaité.
                </p>
              </div>
            </aside>

            {/* Formulaire */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-3 card-magic p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="font-sans">Votre nom</Label>
                  <Input id="name" name="name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email" className="font-sans">Email</Label>
                  <Input id="email" name="email" type="email" required className="mt-2" />
                </div>
              </div>

              <div>
                <Label className="font-sans">Thème souhaité</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choisir un thème" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((t) => (
                      <SelectItem key={t.slug} value={t.name}>
                        {t.emoji} {t.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="autre">Je ne sais pas encore</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="date" className="font-sans">Date de l'anniversaire</Label>
                  <Input id="date" name="date" type="date" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="kids" className="font-sans">Nombre d'enfants</Label>
                  <Input id="kids" name="kids" type="number" min="1" max="20" defaultValue="10" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="font-sans">Votre message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Âge de l'enfant, lieu de la fête, questions éventuelles…"
                  className="mt-2"
                  required
                />
              </div>

              <Button type="submit" variant="magic" size="lg" className="w-full">
                <Send className="h-4 w-4" />
                Envoyer ma demande
              </Button>
              <p className="font-sans text-xs text-muted-foreground text-center">
                Le formulaire ouvre votre messagerie pré-remplie.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
