
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Hammer, 
  Home, 
  Settings, 
  Wrench, 
  HardHat,
  PaintBucket
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Reformas Completas",
      description: "Reformas residenciais e comerciais com planejamento detalhado.",
      features: ["Cozinhas", "Banheiros", "Salas", "Comércios"]
    },
    {
      icon: HardHat,
      title: "Construção do Zero",
      description: "Construção completa com acompanhamento profissional.",
      features: ["Fundação", "Estrutura", "Cobertura", "Acabamento"]
    },
    {
      icon: Settings,
      title: "Telhados",
      description: "Instalação e manutenção de telhados duráveis.",
      features: ["Colonial", "Moderno", "Calhas", "Estruturas"]
    },
    {
      icon: Hammer,
      title: "Carpintaria",
      description: "Serviços especializados em madeira e acabamentos.",
      features: ["Portas", "Janelas", "Móveis", "Pergolados"]
    },
    {
      icon: Wrench,
      title: "Hidráulica",
      description: "Instalações e reparos hidráulicos com garantia.",
      features: ["Vazamentos", "Instalações", "Manutenção", "Emergências"]
    },
    {
      icon: PaintBucket,
      title: "Acabamentos",
      description: "Pintura e revestimentos que fazem a diferença.",
      features: ["Pintura", "Revestimentos", "Texturas", "Detalhes"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-logo-orange">Serviços</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas com 30 anos de experiência
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-logo-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-logo-orange/20 transition-colors">
                    <service.icon className="w-6 h-6 text-logo-orange" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-xs">
                        <div className="w-1 h-1 bg-logo-orange rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-logo-light/20 to-background rounded-2xl p-8 md:p-12 border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato e receba um orçamento gratuito e detalhado para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-logo-orange hover:bg-logo-orange/90 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToContact}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white px-8 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
