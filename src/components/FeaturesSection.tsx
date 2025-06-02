
import React from 'react';
import { Leaf, Sun, Thermometer, Home, Droplets, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Ekologické Bydlení",
      description: "Minimální uhlíková stopa díky pasivnímu standardu a obnovitelným zdrojům energie."
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solární Energie",
      description: "Fotovoltaické panely pokrývají většinu energetických potřeb domácnosti."
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Kontrolované Klima",
      description: "Rekuperace tepla a řízenné větrání zajišťují ideální teplotu po celý rok."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Moderní Design",
      description: "Čistý architektonický styl s důrazem na funkčnost a estetiku."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Bazén a Terasa",
      description: "Venkovní relaxační zóna s bazénem a prostornou dřevěnou terasou."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Kvalitní Izolace",
      description: "Pokročilé izolační materiály garantují energetickou efektivnost."
    }
  ];

  return (
    <section id="features" className="py-20 bg-soft-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">
            Klíčové Vlastnosti
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Objevte všechny výhody moderního pasivního bydlení v tomto výjimečném domě
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-nature-green mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
