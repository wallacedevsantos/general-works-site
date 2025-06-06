
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle2, Star, Users, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center hero-pattern">
      <div className="absolute inset-0 construction-gradient opacity-95"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-construction-orange/10 border border-construction-orange/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Award className="w-4 h-4 text-construction-orange" />
            <span className="text-sm font-medium text-construction-orange">30 Anos de Experiência</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            <span className="block">General</span>
            <span className="block text-construction-orange">Construções</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium">& Reformas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-slide-in">
            Transformamos seus sonhos em realidade com <strong>qualidade</strong>, 
            <strong> pontualidade</strong> e <strong>30 anos de expertise</strong> na construção civil
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-construction-orange mb-1">30+</div>
              <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-construction-orange mb-1">500+</div>
              <div className="text-sm text-primary-foreground/80">Obras Concluídas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-construction-orange mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-construction-orange mb-1">24h</div>
              <div className="text-sm text-primary-foreground/80">Resposta Rápida</div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-primary-foreground/80 animate-slide-in">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-construction-orange" />
              <span className="text-sm">Orçamento Gratuito</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-construction-orange" />
              <span className="text-sm">Garantia de Qualidade</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-construction-orange" />
              <span className="text-sm">Entrega no Prazo</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-construction-orange hover:bg-construction-orange/90 text-lg px-8 py-4 h-auto"
              onClick={scrollToContact}
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              WhatsApp Direto
            </Button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary-foreground/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
