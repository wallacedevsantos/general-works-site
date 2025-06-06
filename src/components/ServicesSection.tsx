
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
      description: "Reformas residenciais e comerciais com planejamento detalhado e execução impecável.",
      features: ["Cozinhas", "Banheiros", "Salas", "Comércios"],
      gradient: "from-logo-orange/10 to-logo-orange/5"
    },
    {
      icon: HardHat,
      title: "Construção do Zero",
      description: "Construção completa com acompanhamento profissional em todas as etapas.",
      features: ["Fundação", "Estrutura", "Cobertura", "Acabamento"],
      gradient: "from-logo-blue/10 to-logo-blue/5"
    },
    {
      icon: Settings,
      title: "Telhados e Coberturas",
      description: "Instalação e manutenção de telhados duráveis com materiais de qualidade.",
      features: ["Colonial", "Moderno", "Calhas", "Estruturas"],
      gradient: "from-logo-orange/10 to-logo-orange/5"
    },
    {
      icon: Hammer,
      title: "Carpintaria",
      description: "Serviços especializados em madeira e acabamentos personalizados.",
      features: ["Portas", "Janelas", "Móveis", "Pergolados"],
      gradient: "from-logo-blue/10 to-logo-blue/5"
    },
    {
      icon: Wrench,
      title: "Hidráulica",
      description: "Instalações e reparos hidráulicos com garantia e atendimento rápido.",
      features: ["Vazamentos", "Instalações", "Manutenção", "Emergências"],
      gradient: "from-logo-orange/10 to-logo-orange/5"
    },
    {
      icon: PaintBucket,
      title: "Acabamentos",
      description: "Pintura e revestimentos que fazem a diferença no resultado final.",
      features: ["Pintura", "Revestimentos", "Texturas", "Detalhes"],
      gradient: "from-logo-blue/10 to-logo-blue/5"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-logo-orange">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções completas com 30 anos de experiência e compromisso com a excelência
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-logo-orange/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-logo-orange/30 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-logo-orange" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-logo-orange rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-logo-light/10 via-background to-logo-blue/5 rounded-3xl p-12 md:p-16 border border-border/50 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Entre em contato e receba um orçamento gratuito e detalhado para transformar seus sonhos em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-logo-orange hover:bg-logo-orange/90 text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={scrollToContact}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              WhatsApp Direto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
