
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-construction-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
              Conheça o <span className="text-construction-orange">General</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A história de dedicação e excelência na construção civil que construiu nossa reputação
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-construction-blue to-construction-gray rounded-2xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">JN</span>
                  </div>
                  <p className="text-lg font-medium">José Nilson dos Santos</p>
                  <p className="text-sm opacity-80">Fundador & "General"</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-construction-orange rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-construction-blue rounded-full opacity-30"></div>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-construction-gray">
                José Nilson dos Santos - "General"
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Com mais de <strong className="text-construction-orange">30 anos de experiência</strong> na construção civil, 
                  José Nilson dos Santos conquistou o apelido de <strong>"General"</strong> pela sua liderança 
                  exemplar e capacidade de coordenar equipes nos canteiros de obra.
                </p>
                
                <p>
                  Iniciou sua carreira como pedreiro ainda jovem e, ao longo dos anos, especializou-se 
                  em todos os aspectos da construção civil, desde fundações até acabamentos refinados.
                </p>
                
                <p>
                  Hoje, o General lidera a <strong>General Construções e Reformas</strong>, uma empresa 
                  que carrega seus valores de <strong>seriedade, compromisso e qualidade</strong> em cada projeto realizado.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-construction-orange flex-shrink-0" />
                  <span className="text-sm font-medium">Experiência Comprovada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-construction-orange flex-shrink-0" />
                  <span className="text-sm font-medium">Liderança Natural</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-construction-orange flex-shrink-0" />
                  <span className="text-sm font-medium">Qualidade Garantida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-construction-orange flex-shrink-0" />
                  <span className="text-sm font-medium">Compromisso Total</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-construction-orange" />
                </div>
                <h4 className="text-xl font-bold text-construction-gray mb-4">Nossa Missão</h4>
                <p className="text-muted-foreground">
                  Entregar <strong>obras duráveis, bem-feitas e no prazo</strong>, com atenção aos detalhes 
                  e total foco na satisfação do cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-construction-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-construction-blue" />
                </div>
                <h4 className="text-xl font-bold text-construction-gray mb-4">Nossos Valores</h4>
                <p className="text-muted-foreground">
                  <strong>Seriedade, compromisso e transparência</strong> em todas as etapas do projeto, 
                  mantendo sempre a comunicação clara com o cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-construction-gray/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-construction-gray" />
                </div>
                <h4 className="text-xl font-bold text-construction-gray mb-4">Nosso Compromisso</h4>
                <p className="text-muted-foreground">
                  <strong>Pontualidade e qualidade</strong> são pilares fundamentais. Cada obra é tratada 
                  com o máximo cuidado e atenção aos prazos estabelecidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
