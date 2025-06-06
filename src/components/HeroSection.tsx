
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle2, Star, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-logo-light/30 to-background hero-pattern">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-logo-orange/10 border border-logo-orange/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-logo-orange" />
            <span className="text-sm font-semibold text-logo-orange">30 Anos de Experiência</span>
          </div>

          {/* Logo Principal */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/fe934f48-b0db-4a5f-aa80-f5d0fed0a611.png" 
              alt="General Construções e Reformas" 
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in leading-relaxed">
            Transformamos seus sonhos em realidade com <strong className="text-logo-orange">qualidade</strong>, 
            <strong className="text-logo-blue"> pontualidade</strong> e <strong className="text-logo-orange">30 anos de expertise</strong>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in">
            {[
              { number: '30+', label: 'Anos de Experiência' },
              { number: '500+', label: 'Obras Concluídas' },
              { number: '100%', label: 'Clientes Satisfeitos' },
              { number: '24h', label: 'Resposta Rápida' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-logo-orange mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-muted-foreground animate-slide-in">
            {[
              'Orçamento Gratuito',
              'Garantia de Qualidade',
              'Entrega no Prazo'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-logo-orange" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-logo-orange hover:bg-logo-orange/90 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white text-lg px-8 py-4 h-auto transition-all duration-300"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              WhatsApp Direto
            </Button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce-soft">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
