
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">
              Výjimečný Pasivní Dům
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Představujeme vám jedinečný pasivní dům, který kombinuje moderní architektonický design 
              s nejpokročilejšími technologiemi pro energeticky efektivní bydlení. Tento dům je navržen 
              tak, aby poskytoval maximální komfort při minimální spotřebě energie.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Díky dokonalé tepelné izolaci, kvalitním oknům a řízenému větrání s rekuperací tepla 
              dosahuje dům výjimečných energetických parametrů. Solární panely na střeše zajišťují 
              výrobu obnovitelné energie pro domácnost.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Interiér domu je navržen s důrazem na přirozené světlo a spojení s okolní přírodou. 
              Velká okna a prosklené stěny vytvářejí pocit propojení s krásně upravenou zahradou 
              a bazénem.
            </p>
          </div>
          <div className="animate-slide-up">
            <img
              src="/lovable-uploads/3539edde-8070-43b2-8b1f-f43bc15fa201.png"
              alt="Interiér pasivního domu"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
