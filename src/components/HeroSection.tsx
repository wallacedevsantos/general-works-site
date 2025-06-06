
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-logo-light/20 to-background hero-pattern pt-20">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-logo-orange/10 border border-logo-orange/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Award className="w-5 h-5 text-logo-orange" />
            <span className="text-sm font-semibold text-logo-orange">30 Anos de Experiência Comprovada</span>
          </div>

          {/* Logo Principal */}
          <div className="mb-12 animate-fade-in">
            <img 
              src="/lovable-uploads/fe934f48-b0db-4a5f-aa80-f5d0fed0a611.png" 
              alt="General Construções e Reformas" 
              className="h-36 md:h-48 w-auto mx-auto"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-in leading-tight">
            Transformamos seus sonhos em realidade
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-slide-in leading-relaxed">
            Com <span className="text-logo-orange font-semibold">qualidade excepcional</span>, 
            <span className="text-logo-blue font-semibold"> pontualidade rigorosa</span> e 
            <span className="text-logo-orange font-semibold"> 30 anos de expertise</span>
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {[
              { number: '30+', label: 'Anos de Experiência', icon: Clock },
              { number: '500+', label: 'Obras Concluídas', icon: Award },
              { number: '100%', label: 'Clientes Satisfeitos', icon: Star },
              { number: '24h', label: 'Resposta Rápida', icon: CheckCircle2 }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-background/90 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                <stat.icon className="w-8 h-8 text-logo-orange mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-logo-orange mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-muted-foreground animate-slide-in">
            {[
              'Orçamento Gratuito',
              'Garantia de Qualidade',
              'Entrega no Prazo'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-logo-orange" />
                <span className="text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-logo-orange hover:bg-logo-orange/90 text-white text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              onClick={scrollToContact}
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white text-lg px-10 py-6 h-auto transition-all duration-300 font-semibold"
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
