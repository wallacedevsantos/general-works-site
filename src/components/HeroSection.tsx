
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-logo-light/20 to-background hero-pattern pt-24 md:pt-32 lg:pt-40 pb-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Logo e Badge - Mobile First */}
          <div className="lg:order-1 flex flex-col items-center lg:items-center lg:justify-center">

            {/* Logo Principal - Responsivo */}
            <div className="mb-6 md:mb-8 animate-fade-in">
              <img 
                src="/lovable-uploads/fe934f48-b0db-4a5f-aa80-f5d0fed0a611.png" 
                alt="General Construções e Reformas" 
                className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[100%] w-auto mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Conteúdo de Texto - Mobile Optimized */}
          <div className="lg:order-2 space-y-4 md:space-y-6 text-center lg:text-left">
            {/* Badge - Responsivo */}
            <div className="inline-flex items-center space-x-2 bg-logo-orange/10 border border-logo-orange/20 rounded-full px-3 sm:px-4 md:px-6 py-2 md:py-3 animate-fade-in" >
              <Award className="w-4 h-4 md:w-5 md:h-5 text-logo-orange" />
              <span className="text-xs sm:text-sm font-semibold text-logo-orange">Mais de 30 Anos</span>
            </div>
            {/* Headline - Responsivo */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 animate-slide-in leading-tight">
              Transformamos seus sonhos em <span className="text-logo-orange">realidade</span>
            </h1>

            {/* Subtitle - Melhor para mobile */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6 animate-slide-in leading-relaxed">
              Três décadas de <span className="text-logo-orange font-semibold">experiência comprovada</span> em construção civil, 
              oferecendo <span className="text-logo-blue font-semibold">qualidade excepcional</span> e 
              <span className="text-logo-orange font-semibold"> pontualidade rigorosa</span> em cada projeto.
            </p>

            {/* CTA Buttons - Mobile First */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6 animate-fade-in">
              <Button 
                size="sm" 
                className="w-full sm:w-auto bg-logo-orange hover:bg-logo-orange/90 text-white text-sm md:text-base px-4 md:px-8 py-3 md:py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold touch-manipulation"
                onClick={scrollToContact}
              >
                Solicitar Orçamento Grátis
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white text-sm md:text-base px-4 md:px-8 py-3 md:py-4 h-auto transition-all duration-300 font-semibold touch-manipulation"
                onClick={() => window.open('https://wa.me/5511946522725', '_blank')}
              >
                WhatsApp Direto
              </Button>
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
