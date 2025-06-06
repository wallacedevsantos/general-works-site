
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Image, Camera, Star } from 'lucide-react';

const GallerySection = () => {
  const projects = [
    {
      title: "Reforma Residencial Completa",
      category: "Reforma Premium",
      description: "Modernização completa de residência com novos acabamentos, integração de ambientes e tecnologia smart home.",
      year: "2024"
    },
    {
      title: "Construção Comercial Moderna",
      category: "Construção do Zero",
      description: "Estabelecimento comercial construído do zero com design contemporâneo e funcionalidade otimizada.",
      year: "2023"
    },
    {
      title: "Cobertura e Telhado Colonial",
      category: "Telhados",
      description: "Novo telhado colonial com estrutura reforçada, sistema de calhas integrado e isolamento térmico.",
      year: "2024"
    },
    {
      title: "Acabamentos em Madeira",
      category: "Carpintaria",
      description: "Detalhes artesanais em madeira nobre com portas sob medida, janelas personalizadas e móveis integrados.",
      year: "2023"
    },
    {
      title: "Ampliação Residencial Integrada",
      category: "Construção",
      description: "Ampliação harmoniosa com perfeita integração à estrutura original, mantendo a estética arquitetônica.",
      year: "2024"
    },
    {
      title: "Reforma de Banheiro Luxuoso",
      category: "Reforma Premium",
      description: "Banheiro spa com acabamentos premium, hidromassagem, iluminação LED e revestimentos importados.",
      year: "2023"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-background to-logo-light/5">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfólio de <span className="text-logo-orange">Excelência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que marcaram nossa trajetória de três décadas, 
            cada um representando nosso compromisso com a qualidade e inovação.
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
                <div className="text-center z-10">
                  <Camera className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground font-medium">Foto em Breve</p>
                  <div className="mt-2 text-xs text-logo-orange font-semibold">
                    Obra de {project.year}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-logo-orange text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Quality Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Star className="w-4 h-4 text-logo-orange" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-logo-blue bg-logo-blue/10 px-3 py-1 rounded-full">
                    Concluído em {project.year}
                  </span>
                  <div className="text-logo-orange">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice - Melhorado */}
        <div className="text-center bg-gradient-to-r from-background via-logo-light/10 to-background rounded-3xl p-12 md:p-16 border border-border/50 shadow-xl">
          <div className="w-20 h-20 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Image className="w-10 h-10 text-logo-orange" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Arquivo de Obras em Organização
          </h3>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Estamos digitalizando e organizando o extenso arquivo fotográfico de nossas obras mais marcantes. 
            Com mais de 500 projetos concluídos, queremos apresentar o melhor da nossa experiência.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { number: "500+", label: "Obras Documentadas" },
              { number: "30", label: "Anos de Portfólio" },
              { number: "100%", label: "Satisfação Garantida" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-2xl md:text-3xl font-bold text-logo-orange mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="bg-logo-orange hover:bg-logo-orange/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-6 text-lg font-semibold"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Ver Projetos Recentes no WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Entre em contato pelo WhatsApp para ver fotos dos projetos mais recentes e detalhes das obras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
