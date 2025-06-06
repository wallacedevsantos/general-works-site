
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Image } from 'lucide-react';

const GallerySection = () => {
  // Placeholder para as imagens das obras
  const projects = [
    {
      title: "Reforma Residencial Completa",
      category: "Reforma",
      description: "Modernização completa de casa antiga com novos acabamentos"
    },
    {
      title: "Construção Comercial",
      category: "Construção",
      description: "Novo estabelecimento comercial construído do zero"
    },
    {
      title: "Cobertura e Telhado",
      category: "Telhado",
      description: "Instalação de novo telhado com estrutura reforçada"
    },
    {
      title: "Acabamentos Premium",
      category: "Acabamento",
      description: "Detalhes em madeira e acabamentos personalizados"
    },
    {
      title: "Ampliação Residencial",
      category: "Construção",
      description: "Ampliação de casa com integração perfeita"
    },
    {
      title: "Reforma de Banheiro",
      category: "Reforma",
      description: "Banheiro moderno com acabamento de primeira"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-construction-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
              Galeria de <span className="text-construction-orange">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos realizados pelo General ao longo de 30 anos de experiência
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-construction-blue/20 to-construction-gray/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <Image className="w-12 h-12 text-construction-gray/40 mx-auto mb-2" />
                    <p className="text-sm text-construction-gray/60">Foto em breve</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-construction-orange text-white text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-construction-gray mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center bg-background rounded-2xl p-8 md:p-12 border border-border">
            <div className="w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image className="w-8 h-8 text-construction-orange" />
            </div>
            <h3 className="text-2xl font-bold text-construction-gray mb-4">
              Galeria em Construção
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos organizando as fotos dos nossos melhores projetos dos últimos 30 anos. 
              Em breve você poderá ver toda a qualidade do trabalho do General!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-construction-orange hover:bg-construction-orange/90"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Ver Projetos no WhatsApp
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
