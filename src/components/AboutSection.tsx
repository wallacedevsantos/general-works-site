
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-background to-logo-light/5">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conheça o <span className="text-logo-orange">General</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A história de dedicação e excelência na construção civil que construiu nossa reputação sólida
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-logo-blue/20 to-logo-orange/20 rounded-3xl flex items-center justify-center text-foreground relative overflow-hidden">
              <div className="text-center z-10">
                <div className="w-32 h-32 bg-logo-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl font-bold text-white">JN</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">José Nilson dos Santos</h3>
                <p className="text-lg text-muted-foreground">Fundador & "General"</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-logo-orange/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-logo-blue/30 rounded-full"></div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              José Nilson dos Santos - "General"
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Com mais de <strong className="text-logo-orange">30 anos de experiência</strong> na construção civil, 
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

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                'Experiência Comprovada',
                'Liderança Natural', 
                'Qualidade Garantida',
                'Compromisso Total'
              ].map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-logo-orange flex-shrink-0" />
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-light/5">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Award className="w-10 h-10 text-logo-orange" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-6">Nossa Missão</h4>
              <p className="text-muted-foreground leading-relaxed">
                Entregar <strong>obras duráveis, bem-feitas e no prazo</strong>, com atenção aos detalhes 
                e total foco na satisfação do cliente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-blue/5">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-logo-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-logo-blue" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-6">Nossos Valores</h4>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Seriedade, compromisso e transparência</strong> em todas as etapas do projeto, 
                mantendo sempre a comunicação clara com o cliente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-logo-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-logo-orange" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-6">Nosso Compromisso</h4>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Pontualidade e qualidade</strong> são pilares fundamentais. Cada obra é tratada 
                com o máximo cuidado e atenção aos prazos estabelecidos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
