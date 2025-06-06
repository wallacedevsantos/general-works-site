
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
    <section id="galeria" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-logo-light/5">
      <div className="container mx-auto max-w-7xl px-3 md:px-4">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Portfólio de <span className="text-logo-orange">Excelência</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Conheça alguns dos projetos que marcaram nossa trajetória de três décadas, 
            cada um representando nosso compromisso com a qualidade e inovação.
          </p>
        </div>

        {/* Projects Grid - Mobile first */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-gradient-to-br from-background to-logo-light/10 backdrop-blur-sm md:hover:-translate-y-1"
            >
              {/* Image Placeholder - Aspectos ajustados para mobile */}
              <div className="aspect-[4/3] bg-gradient-to-br from-logo-orange/20 to-logo-blue/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 p-4">
                  <Camera className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-muted-foreground/50 mx-auto mb-2 md:mb-3" />
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Foto em Breve</p>
                  <div className="mt-1 md:mt-2 text-xs text-logo-orange font-semibold">
                    Obra de {project.year}
                  </div>
                </div>
                
                {/* Category Badge - Responsivo */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                  <span className="bg-logo-orange text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Quality Badge */}
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-logo-orange" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-5 md:p-6">
                <h3 className="font-bold text-foreground mb-2 md:mb-3 text-sm sm:text-base md:text-lg leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 md:mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-logo-blue bg-logo-blue/10 px-2 md:px-3 py-1 rounded-full">
                    Concluído em {project.year}
                  </span>
                  <div className="text-logo-orange">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice - Mobile optimized */}
        <div className="text-center bg-gradient-to-r from-background via-logo-light/10 to-background rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-border/50 shadow-xl">
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Image className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-logo-orange" />
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Arquivo de Obras em Organização
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Estamos digitalizando e organizando o extenso arquivo fotográfico de nossas obras mais marcantes. 
            Com mais de 500 projetos concluídos, queremos apresentar o melhor da nossa experiência.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
            {[
              { number: "500+", label: "Obras Documentadas" },
              { number: "30", label: "Anos de Portfólio" },
              { number: "100%", label: "Satisfação Garantida" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-2 sm:p-3 md:p-4">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-logo-orange mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-logo-orange hover:bg-logo-orange/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-6 sm:px-8 md:px-10 py-4 md:py-6 text-base md:text-lg font-semibold touch-manipulation"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Ver Projetos Recentes no WhatsApp
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </Button>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-4 md:mt-6 px-2">
            Entre em contato pelo WhatsApp para ver fotos dos projetos mais recentes e detalhes das obras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
