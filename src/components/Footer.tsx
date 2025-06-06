
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-gray text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-construction-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">General</h3>
                  <p className="text-sm opacity-80">Construções & Reformas</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Há mais de 30 anos transformando sonhos em realidade através da experiência, 
                qualidade e compromisso do José Nilson "General" dos Santos.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-construction-orange" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-construction-orange" />
                  <span>contato@generalconstrucoes.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-construction-orange" />
                  <span>Grande São Paulo e região</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>Reformas Completas</li>
                <li>Construção do Zero</li>
                <li>Telhados e Coberturas</li>
                <li>Carpintaria</li>
                <li>Reparos Hidráulicos</li>
                <li>Acabamentos</li>
              </ul>
            </div>

            {/* Business Hours & Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Atendimento</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-construction-orange" />
                    <span className="font-medium">Horários</span>
                  </div>
                  <div className="text-primary-foreground/80 text-sm space-y-1">
                    <p>Segunda à Sexta: 7h às 18h</p>
                    <p>Sábado: 7h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-construction-orange font-medium text-sm mb-2">
                    ⚡ Resposta rápida em até 24h
                  </p>
                  <p className="text-construction-orange font-medium text-sm">
                    💬 WhatsApp sempre disponível
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} General Construções e Reformas. Todos os direitos reservados.</p>
          </div>
          
          <div className="text-primary-foreground/60 text-sm">
            <p>José Nilson dos Santos - 30 anos de experiência</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
