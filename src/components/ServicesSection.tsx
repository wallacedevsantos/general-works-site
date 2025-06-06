
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
      features: ["Reforma de cozinhas", "Banheiros modernos", "Salas e quartos", "Comércios"]
    },
    {
      icon: HardHat,
      title: "Construção do Zero",
      description: "Construção de casas e estabelecimentos comerciais com acompanhamento completo.",
      features: ["Fundação", "Estrutura", "Cobertura", "Acabamento"]
    },
    {
      icon: Settings,
      title: "Instalações e Telhados",
      description: "Instalação de telhados diversos e estruturas de cobertura duráveis.",
      features: ["Telhado colonial", "Telhado moderno", "Calhas", "Estruturas metálicas"]
    },
    {
      icon: Hammer,
      title: "Carpintaria",
      description: "Serviços especializados em madeira e acabamentos personalizados.",
      features: ["Portas e janelas", "Móveis sob medida", "Divisórias", "Pergolados"]
    },
    {
      icon: Wrench,
      title: "Reparos Hidráulicos",
      description: "Manutenção e instalações hidráulicas com garantia de qualidade.",
      features: ["Vazamentos", "Instalações novas", "Manutenção", "Emergências"]
    },
    {
      icon: PaintBucket,
      title: "Acabamentos",
      description: "Pintura, revestimentos e detalhes que fazem toda a diferença.",
      features: ["Pintura interna/externa", "Revestimentos", "Texturas", "Detalhes decorativos"]
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
            <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
              Nossos <span className="text-construction-orange">Serviços</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para transformar seu espaço com a experiência de 30 anos do General
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-construction-orange/20 transition-colors">
                    <service.icon className="w-8 h-8 text-construction-orange" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-construction-gray mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-construction-orange rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-construction-light-gray rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-construction-gray mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e receba um orçamento gratuito e detalhado para seu projeto. 
              O General está pronto para transformar suas ideias em realidade!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-construction-orange hover:bg-construction-orange/90 px-8"
                onClick={scrollToContact}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-construction-blue text-construction-blue hover:bg-construction-blue hover:text-white px-8"
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
