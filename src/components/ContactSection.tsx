
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl mb-8 opacity-90">
              Are you interested in viewing this exceptional passive house? 
              Contact us and let's arrange a meeting.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6" />
                <span className="text-lg">+420 731 604 722</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6" />
                <span className="text-lg">info@passivehome4sale.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6" />
                <span className="text-lg">Újezd u Tišnova, Czech Republic</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <form className="space-y-6">
              <div>
                <Input 
                  type="text" 
                  placeholder="Your name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40" 
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40" 
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Phone" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40" 
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your message" 
                  rows={5} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 resize-none" 
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-white text-nature-green hover:bg-white/90 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
