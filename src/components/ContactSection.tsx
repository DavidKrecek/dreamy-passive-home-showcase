
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    const subject = encodeURIComponent('Passive House Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:david.krecek@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success('Email client opened with your message');
  };

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
                <span className="text-lg">david.krecek@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6" />
                <span className="text-lg">Újezd u Tišnova 52, Czech Republic</span>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.7779726387844!2d16.424047!3d49.347778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712943f2b7b4a4d%3A0x4b0b5b4b4b4b4b4b!2s%C3%9Ajezd%20u%20Ti%C5%A1nova%2052%2C%20Czech%20Republic!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40" 
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40" 
                  required
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40" 
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message" 
                  rows={5} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 resize-none" 
                  required
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
