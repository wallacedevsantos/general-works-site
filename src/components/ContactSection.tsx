import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const serviceMap: { [key: string]: string } = {
    reforma: 'Reforma',
    construcao: 'Construção do Zero',
    telhado: 'Telhado e Cobertura',
    carpintaria: 'Carpintaria',
    hidraulica: 'Reparos Hidráulicos',
    acabamento: 'Acabamentos',
    outros: 'Outros',
  };

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha todos os campos antes de enviar.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const serviceText = serviceMap[formData.service] || formData.service; // Get the display text
    const message = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nServiço: ${serviceText}\nMensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511946522725?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Mensagem enviada!',
      description: 'Você foi redirecionado para o WhatsApp.',
      variant: 'default',
    });

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="pb-5 md:pb-5 lg:pb-20 bg-gradient-to-b from-background to-logo-light/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Entre em <span className="text-logo-orange">Contato</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mx-auto max-w-xl leading-relaxed">
            Solicite seu orçamento gratuito e vamos conversar sobre seu projeto dos sonhos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-between h-full lg:col-span-1">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-logo-orange/10 rounded-full flex items-center justify-center">
                    <Phone className="w-7 h-7 text-logo-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Telefone</h3>
                    <p className="text-muted-foreground text-base">(11) 94652-2725</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  onClick={() => window.open('https://wa.me/5511946522725', '_blank')}
                >
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-logo-orange/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-logo-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Atendimento</h3>
                    <p className="text-muted-foreground text-base">Grande São Paulo e região</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-logo-blue/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-logo-blue/10 rounded-full flex items-center justify-center">
                    <Clock className="w-7 h-7 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Horário</h3>
                    <p className="text-muted-foreground text-base">Seg-Sex: 7h às 18h</p>
                    <p className="text-muted-foreground text-base">Sáb: 7h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl bg-gradient-to-br from-background to-logo-light/5">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl text-foreground">
                  Solicite seu Orçamento Gratuito
                </CardTitle>
                <p className="text-sm md:text-base text-muted-foreground">
                  Preencha o formulário abaixo e receba uma resposta em até 24 horas
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <form onSubmit={sendWhatsApp} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(DD) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Tipo de Serviço *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reforma">Reforma</SelectItem>
                        <SelectItem value="construcao">Construção do Zero</SelectItem>
                        <SelectItem value="telhado">Telhado e Cobertura</SelectItem>
                        <SelectItem value="carpintaria">Carpintaria</SelectItem>
                        <SelectItem value="hidraulica">Reparos Hidráulicos</SelectItem>
                        <SelectItem value="acabamento">Acabamentos</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Descreva seu Projeto *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte-nos mais detalhes sobre seu projeto..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
