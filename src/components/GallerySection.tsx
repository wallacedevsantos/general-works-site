
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
    <section id="galeria" className="py-24 bg-gradient-to-b from-background to-logo-light/5">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galeria de <span className="text-logo-orange">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Alguns dos projetos realizados ao longo de 30 anos de dedicação e excelência
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-gradient-to-br from-background to-logo-light/10 backdrop-blur-sm hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-logo-orange/20 to-logo-blue/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <Image className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground font-medium">Em breve</p>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-logo-orange text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center bg-gradient-to-r from-background via-logo-light/10 to-background rounded-3xl p-12 md:p-16 border border-border/50 shadow-xl">
          <div className="w-20 h-20 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Image className="w-10 h-10 text-logo-orange" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Galeria em Construção
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Estamos organizando as fotos dos nossos melhores projetos. 
            Em breve você poderá ver toda a qualidade do trabalho do General!
          </p>
          <Button 
            size="lg" 
            className="bg-logo-orange hover:bg-logo-orange/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-6 text-lg font-semibold"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Ver Projetos no WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
