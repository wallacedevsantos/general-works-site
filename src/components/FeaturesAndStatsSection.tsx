import React from 'react';
import { ArrowDown, CheckCircle2, Star, Clock, Award, Shield } from 'lucide-react';

const FeaturesAndStatsSection = () => {
  return (
    <section className="pt-[30px] pb-16 md:pb-20 lg:pb-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {/* Diferenciais - Grid responsivo */}
          <div className="space-y-6 md:space-y-8 text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Nossos Diferenciais
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in">
              {[{
                icon: Shield,
                text: 'Garantia de Qualidade'
              },
              {
                icon: Clock,
                text: 'Pontualidade Garantida'
              },
              {
                icon: Award,
                text: 'Experiência Comprovada'
              },
              {
                icon: Star,
                text: 'Satisfação Total'
              }].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 md:p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-logo-orange flex-shrink-0" />
                  <span className="text-base md:text-lg font-medium text-foreground whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Estatísticas - Mobile optimized */}
          <div className="space-y-6 md:space-y-8 text-center mx-auto mt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Nossos Números
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 animate-slide-in">
              {[{
                number: '30+',
                label: 'Anos'
              },
              {
                number: '500+',
                label: 'Obras'
              },
              {
                number: '100%',
                label: 'Satisfação'
              }].map((stat, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-logo-orange">{stat.number}</div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndStatsSection;