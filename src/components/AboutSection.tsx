
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, CheckCircle2, Hammer, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-logo-light/5">
      <div className="container mx-auto max-w-7xl px-3 md:px-4">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            A História do <span className="text-logo-orange">General</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Conheça a trajetória de três décadas que transformou José Nilson dos Santos no profissional mais respeitado da região
          </p>
        </div>

        {/* Main Content - Mobile first grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Photo Placeholder - Responsivo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-logo-blue/20 to-logo-orange/20 rounded-2xl md:rounded-3xl flex items-center justify-center text-foreground relative overflow-hidden shadow-xl md:shadow-2xl">
              <div className="text-center z-10 p-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-logo-orange rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">JN</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">José Nilson dos Santos</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-3 md:mb-4">Fundador & "General"</p>
                <div className="flex items-center justify-center space-x-2">
                  <Hammer className="w-4 h-4 md:w-5 md:h-5 text-logo-orange" />
                  <span className="text-xs sm:text-sm font-medium">Mestre da Construção Civil</span>
                </div>
              </div>
              {/* Decorative elements - Responsivos */}
              <div className="absolute -top-4 md:-top-8 -right-4 md:-right-8 w-8 h-8 md:w-16 md:h-16 bg-logo-orange/20 rounded-full"></div>
              <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-6 h-6 md:w-12 md:h-12 bg-logo-blue/30 rounded-full"></div>
            </div>
          </div>

          {/* Story - Mobile optimized */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Da Paixão pela Construção ao Reconhecimento Profissional
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                José Nilson dos Santos iniciou sua jornada na construção civil ainda jovem, movido pela paixão 
                em <strong className="text-logo-orange">transformar projetos em realidade</strong>. Ao longo de mais de 
                <strong> 30 anos</strong>, construiu não apenas casas e estabelecimentos, mas também uma 
                reputação sólida baseada na confiança e excelência.
              </p>
              
              <p>
                O apelido <strong>"General"</strong> surgiu naturalmente nos canteiros de obra, onde sua 
                <strong className="text-logo-blue"> liderança natural</strong> e capacidade de coordenar equipes 
                com precisão militar se destacavam. Cada projeto sob sua supervisão é executado com 
                <strong className="text-logo-orange"> disciplina e atenção aos detalhes</strong>.
              </p>
              
              <p>
                Especializado em todos os aspectos da construção civil - desde fundações robustas até 
                acabamentos refinados - o General construiu sua empresa sobre os pilares da 
                <strong> seriedade, pontualidade e compromisso</strong> com a satisfação total do cliente.
              </p>

              <p>
                Hoje, a <strong>General Construções e Reformas</strong> é sinônimo de 
                <strong className="text-logo-orange"> qualidade garantida</strong> e 
                <strong className="text-logo-blue"> confiabilidade absoluta</strong> em toda a Grande São Paulo.
              </p>
            </div>

            {/* Achievements - Mobile grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6">
              {[
                { icon: Award, text: 'Mais de 500 Obras Concluídas' },
                { icon: Users, text: '100% de Clientes Satisfeitos' }, 
                { icon: Clock, text: 'Pontualidade Rigorosa' },
                { icon: Heart, text: 'Paixão pelo que Faz' }
              ].map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 md:p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50">
                  <achievement.icon className="w-4 h-4 md:w-5 md:h-5 text-logo-orange flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Values Cards - Mobile optimized */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-light/5">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-logo-orange" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Nossa Missão</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Transformar sonhos em realidade através de <strong>obras duráveis, bem-feitas e entregues no prazo</strong>, 
                superando expectativas com atenção aos detalhes e total foco na satisfação do cliente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-blue/5">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-logo-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-logo-blue" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Nossos Valores</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                <strong>Integridade, transparência e compromisso</strong> guiam cada decisão. Mantemos comunicação clara, 
                orçamentos honestos e relacionamentos duradouros baseados na confiança mútua.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5 md:col-span-3 lg:col-span-1">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-logo-orange" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Nosso Diferencial</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                <strong>Experiência de três décadas, pontualidade rigorosa e qualidade excepcional</strong>. 
                Cada projeto é único e recebe atenção personalizada do planejamento à entrega final.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
