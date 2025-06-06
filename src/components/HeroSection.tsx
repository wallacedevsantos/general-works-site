
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle2, Star, Clock, Award, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-logo-light/20 to-background hero-pattern pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto max-w-7xl px-3 md:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Logo e Badge - Mobile First */}
          <div className="lg:order-1 text-center lg:text-left">
            {/* Badge - Responsivo */}
            <div className="inline-flex items-center space-x-2 bg-logo-orange/10 border border-logo-orange/20 rounded-full px-3 sm:px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 animate-fade-in">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-logo-orange" />
              <span className="text-xs sm:text-sm font-semibold text-logo-orange">Mais de 30 Anos Transformando Sonhos</span>
            </div>

            {/* Logo Principal - Responsivo */}
            <div className="mb-6 md:mb-8 animate-fade-in">
              <img 
                src="/lovable-uploads/fe934f48-b0db-4a5f-aa80-f5d0fed0a611.png" 
                alt="General Construções e Reformas" 
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Conteúdo de Texto - Mobile Optimized */}
          <div className="lg:order-2 space-y-6 md:space-y-8">
            {/* Headline - Responsivo */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-slide-in leading-tight">
              Transformamos seus sonhos em <span className="text-logo-orange">realidade</span>
            </h1>

            {/* Subtitle - Melhor para mobile */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 animate-slide-in leading-relaxed">
              Três décadas de <span className="text-logo-orange font-semibold">experiência comprovada</span> em construção civil, 
              oferecendo <span className="text-logo-blue font-semibold">qualidade excepcional</span> e 
              <span className="text-logo-orange font-semibold"> pontualidade rigorosa</span> em cada projeto.
            </p>

            {/* Diferenciais - Grid responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 animate-fade-in">
              {[
                { icon: Shield, text: 'Garantia de Qualidade' },
                { icon: Clock, text: 'Pontualidade Garantida' },
                { icon: Award, text: 'Experiência Comprovada' },
                { icon: Star, text: 'Satisfação Total' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 md:p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-logo-orange flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Mobile First */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 md:mb-8 animate-fade-in">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-logo-orange hover:bg-logo-orange/90 text-white text-base md:text-lg px-6 md:px-10 py-4 md:py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold touch-manipulation"
                onClick={scrollToContact}
              >
                Solicitar Orçamento Grátis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white text-base md:text-lg px-6 md:px-10 py-4 md:py-6 h-auto transition-all duration-300 font-semibold touch-manipulation"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                WhatsApp Direto
              </Button>
            </div>

            {/* Estatísticas - Mobile optimized */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 text-center animate-slide-in">
              {[
                { number: '30+', label: 'Anos' },
                { number: '500+', label: 'Obras' },
                { number: '100%', label: 'Satisfação' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-logo-orange">{stat.number}</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator - Apenas em telas maiores */}
        <div className="hidden md:block text-center mt-12 lg:mt-16 animate-bounce-soft">
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
