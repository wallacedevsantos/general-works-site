
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Image } from 'lucide-react';

const GallerySection = () => {
  const projects = [
    {
      title: "Reforma Residencial",
      category: "Reforma",
      description: "Modernização completa com novos acabamentos"
    },
    {
      title: "Construção Comercial",
      category: "Construção",
      description: "Estabelecimento comercial construído do zero"
    },
    {
      title: "Cobertura e Telhado",
      category: "Telhado",
      description: "Novo telhado com estrutura reforçada"
    },
    {
      title: "Acabamentos Premium",
      category: "Acabamento",
      description: "Detalhes em madeira personalizados"
    },
    {
      title: "Ampliação Residencial",
      category: "Construção",
      description: "Ampliação com integração perfeita"
    },
    {
      title: "Reforma de Banheiro",
      category: "Reforma",
      description: "Banheiro moderno com acabamento premium"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-background to-logo-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Galeria de <span className="text-logo-orange">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos realizados ao longo de 30 anos
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group bg-card/80 backdrop-blur-sm"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-logo-orange/10 to-logo-blue/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <Image className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Em breve</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-logo-orange text-white text-xs font-medium px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2 text-sm">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <div className="w-16 h-16 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image className="w-8 h-8 text-logo-orange" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Galeria em Construção
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos organizando as fotos dos nossos melhores projetos. 
              Em breve você poderá ver toda a qualidade do trabalho do General!
            </p>
            <Button 
              size="lg" 
              className="bg-logo-orange hover:bg-logo-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Ver Projetos no WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
