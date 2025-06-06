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
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-logo-orange">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Solicite seu orçamento gratuito e vamos conversar sobre seu projeto dos sonhos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-logo-orange/10 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-logo-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Telefone</h3>
                    <p className="text-muted-foreground">(11) 9999-9999</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-blue/5">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-logo-blue/10 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">E-mail</h3>
                    <p className="text-muted-foreground">contato@generalconstrucoes.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-orange/5">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-logo-orange/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-logo-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Atendimento</h3>
                    <p className="text-muted-foreground">Grande São Paulo e região</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-logo-blue/5">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-logo-blue/10 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Horário</h3>
                    <p className="text-muted-foreground">Seg-Sex: 7h às 18h</p>
                    <p className="text-muted-foreground">Sáb: 7h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-logo-light/5">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl text-foreground">
                  Solicite seu Orçamento Gratuito
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Preencha o formulário abaixo e receba uma resposta em até 24 horas
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
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

                  <div className="space-y-2">
                    <Label htmlFor="message">Descreva seu Projeto *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte-nos mais detalhes sobre seu projeto..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-construction-orange hover:bg-construction-orange/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                    </Button>
                    <Button 
                      type="button"
                      onClick={sendWhatsApp}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      Enviar via WhatsApp
                    </Button>
                  </div>
                </form>

                {/* Trust Elements */}
                <div className="grid md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-logo-orange" />
                    <span className="text-sm font-medium">Resposta em 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-logo-orange" />
                    <span className="text-sm font-medium">Orçamento gratuito</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-logo-orange" />
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
