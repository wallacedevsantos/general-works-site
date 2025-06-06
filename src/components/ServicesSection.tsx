
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Hammer, 
  Home, 
  Settings, 
  Wrench, 
  HardHat,
  PaintBucket,
  Zap,
  Shield
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Reformas Completas",
      description: "Transformação total de ambientes residenciais e comerciais com planejamento detalhado, acompanhamento profissional e acabamento impecável.",
      features: ["Cozinhas Modernas", "Banheiros Luxuosos", "Salas Integradas", "Estabelecimentos Comerciais"],
      gradient: "from-logo-orange/10 to-logo-orange/5",
      highlight: "Mais Procurado"
    },
    {
      icon: HardHat,
      title: "Construção do Zero",
      description: "Projetos de construção completa desde a fundação até o acabamento final, com supervisão técnica em todas as etapas e garantia de qualidade.",
      features: ["Fundação Sólida", "Estrutura Reforçada", "Cobertura Durável", "Acabamento Premium"],
      gradient: "from-logo-blue/10 to-logo-blue/5",
      highlight: "Especialidade"
    },
    {
      icon: Settings,
      title: "Telhados e Coberturas",
      description: "Instalação, manutenção e reparo de telhados com materiais de primeira qualidade, garantindo proteção duradoura contra intempéries.",
      features: ["Telhado Colonial", "Cobertura Moderna", "Sistema de Calhas", "Estruturas Metálicas"],
      gradient: "from-logo-orange/10 to-logo-orange/5"
    },
    {
      icon: Hammer,
      title: "Carpintaria Especializada",
      description: "Serviços artesanais em madeira com técnicas tradicionais e modernas, criando soluções personalizadas e funcionais para seu espaço.",
      features: ["Portas Sob Medida", "Janelas Artesanais", "Móveis Planejados", "Pergolados e Decks"],
      gradient: "from-logo-blue/10 to-logo-blue/5"
    },
    {
      icon: Wrench,
      title: "Hidráulica e Elétrica",
      description: "Instalações e manutenções hidráulicas e elétricas com técnicas modernas, materiais certificados e atendimento de emergência disponível.",
      features: ["Instalações Novas", "Reparo de Vazamentos", "Modernização Elétrica", "Emergências 24h"],
      gradient: "from-logo-orange/10 to-logo-orange/5"
    },
    {
      icon: PaintBucket,
      title: "Acabamentos Premium",
      description: "Pintura profissional, aplicação de revestimentos e texturas especiais que transformam ambientes com durabilidade e beleza excepcionais.",
      features: ["Pintura Residencial", "Revestimentos Especiais", "Texturas Decorativas", "Detalhes Artísticos"],
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
            Serviços <span className="text-logo-orange">Especializados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Soluções completas em construção civil com três décadas de experiência comprovada. 
            Do projeto à entrega, garantimos excelência em cada detalhe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-gradient-to-br ${service.gradient} backdrop-blur-sm relative overflow-hidden`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-logo-orange text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {service.highlight}
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-logo-orange/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-logo-orange/30 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-logo-orange" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-logo-orange rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Diferenciais */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Garantia Total",
              description: "Todos os serviços incluem garantia de qualidade e suporte pós-obra."
            },
            {
              icon: Zap,
              title: "Resposta Rápida",
              description: "Orçamentos em até 24h e início dos trabalhos conforme acordado."
            },
            {
              icon: Settings,
              title: "Materiais Premium",
              description: "Parceria com fornecedores de confiança para materiais de primeira linha."
            }
          ].map((diferencial, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-background to-logo-light/5 border border-border/50">
              <diferencial.icon className="w-12 h-12 text-logo-orange mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-3">{diferencial.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{diferencial.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-logo-light/10 via-background to-logo-blue/5 rounded-3xl p-12 md:p-16 border border-border/50 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pronto para Transformar seu Espaço?
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
            Entre em contato hoje mesmo e receba um orçamento gratuito e detalhado. 
            Vamos juntos planejar a obra dos seus sonhos com a experiência e qualidade 
            que só três décadas de dedicação podem oferecer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-logo-orange hover:bg-logo-orange/90 text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={scrollToContact}
            >
              Solicitar Orçamento Detalhado
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
