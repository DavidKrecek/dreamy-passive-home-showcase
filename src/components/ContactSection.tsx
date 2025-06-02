
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-nature-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kontaktujte Nás
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Máte zájem o prohlídku tohoto výjimečného pasivního domu? 
              Kontaktujte nás a domluvme si schůzku.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6" />
                <span className="text-lg">+420 xxx xxx xxx</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6" />
                <span className="text-lg">info@pasivnidum.cz</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6" />
                <span className="text-lg">Krásná lokalita, Česká republika</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Vaše jméno"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Váš email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefon"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Vaše zpráva"
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-nature-green hover:bg-white/90 font-semibold"
              >
                Odeslat zprávu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
