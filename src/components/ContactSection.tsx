
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "O General entrará em contato em até 24 horas.",
      });
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 2000);
  };

  const sendWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento.
    
Nome: ${formData.name || '[Nome]'}
Telefone: ${formData.phone || '[Telefone]'}
Serviço: ${formData.service || '[Serviço]'}
Mensagem: ${formData.message || '[Detalhes do projeto]'}`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-3 md:px-4">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Entre em <span className="text-logo-orange">Contato</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Solicite seu orçamento gratuito e vamos conversar sobre seu projeto dos sonhos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info - Mobile stacked */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <Card className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-logo-orange/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-logo-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base sm:text-lg">Telefone</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">(11) 9999-9999</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 md:py-4 text-sm sm:text-base touch-manipulation"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-blue/5">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-logo-blue/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base sm:text-lg">E-mail</h3>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">contato@generalconstrucoes.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-logo-orange/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-logo-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base sm:text-lg">Atendimento</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Grande São Paulo e região</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-blue/5">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-logo-blue/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base sm:text-lg">Horário</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Seg-Sex: 7h às 18h</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Sáb: 7h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Mobile optimized */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-logo-light/5">
              <CardHeader className="pb-6 md:pb-8">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl text-foreground">
                  Solicite seu Orçamento Gratuito
                </CardTitle>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                  Preencha o formulário abaixo e receba uma resposta em até 24 horas
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base font-medium">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        className="py-3 md:py-4 text-base touch-manipulation"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm sm:text-base font-medium">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="py-3 md:py-4 text-base touch-manipulation"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base font-medium">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                      className="py-3 md:py-4 text-base touch-manipulation"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm sm:text-base font-medium">Tipo de Serviço *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="py-3 md:py-4 text-base touch-manipulation">
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

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base font-medium">Descreva seu Projeto *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte-nos mais detalhes sobre seu projeto..."
                      rows={4}
                      className="text-base touch-manipulation resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:gap-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-logo-orange hover:bg-logo-orange/90 py-4 md:py-5 text-base font-semibold touch-manipulation"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                    </Button>
                    <Button 
                      type="button"
                      onClick={sendWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 py-4 md:py-5 text-base font-semibold touch-manipulation"
                    >
                      Enviar via WhatsApp
                    </Button>
                  </div>
                </form>

                {/* Trust Elements - Mobile layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10 pt-6 md:pt-8 border-t border-border">
                  <div className="flex items-center justify-center sm:justify-start space-x-2 md:space-x-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-logo-orange" />
                    <span className="text-sm font-medium">Resposta em 24h</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 md:space-x-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-logo-orange" />
                    <span className="text-sm font-medium">Orçamento gratuito</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 md:space-x-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-logo-orange" />
                    <span className="text-sm font-medium">Sem compromisso</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
