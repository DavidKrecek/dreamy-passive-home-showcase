
import React from 'react';
import { Leaf, Sun, Thermometer, Home, Droplets, Shield, Zap, Wind, TreePine, Gauge, Battery, Wifi } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Ekologické bydlení",
      description: "Minimální uhlíková stopa díky pasivnímu standardu a obnovitelným zdrojům energie."
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solární energie",
      description: "Fotovoltaické panely pokrývají většinu energetických potřeb domácnosti."
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Kontrolované klima",
      description: "Rekuperace tepla a řízenné větrání zajišťují ideální teplotu po celý rok."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Moderní design",
      description: "Čistý architektonický styl s důrazem na funkčnost a estetiku."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Bazén a terasa",
      description: "Venkovní relaxační zóna s bazénem a prostornou dřevěnou terasou."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Kvalitní izolace",
      description: "Pokročilé izolační materiály garantují energetickou efektivnost."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energetická třída A+",
      description: "Nejvyšší energetická třída s minimální spotřebou energie."
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Čistý vzduch",
      description: "Systém filtrace vzduchu zajišťuje zdravé vnitřní prostředí."
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Přírodní materiály",
      description: "Dřevo a další ekologické materiály pro zdravé bydlení."
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Nízké provozní náklady",
      description: "Úspora až 90% nákladů na vytápění a chlazení."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Akumulace energie",
      description: "Bateriový systém pro ukládání přebytečné solární energie."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Smart home",
      description: "Inteligentní ovládání všech systémů přes mobilní aplikaci."
    }
  ];

  return (
    <section id="features" className="py-20 bg-soft-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">
            Klíčové vlastnosti
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Objevte všechny výhody moderního pasivního bydlení v tomto výjimečném domě
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-nature-green mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-nature-green transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
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
