
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-24 px-4">
          {/* Logo - Maior no lado esquerdo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fe934f48-b0db-4a5f-aa80-f5d0fed0a611.png" 
              alt="General Construções e Reformas" 
              className="h-16 w-auto lg:h-20"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-logo-orange transition-colors duration-300 font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-logo-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-logo-orange" />
              <span className="font-medium">(11) 9999-9999</span>
            </div>
            <Button 
              size="sm" 
              className="bg-logo-orange hover:bg-logo-orange/90 text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contato')}
            >
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="flex flex-col py-6 px-4 space-y-4">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-logo-orange transition-colors font-medium py-3 text-base border-b border-border/50 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-2 py-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-logo-orange" />
                <span className="font-medium">(11) 9999-9999</span>
              </div>
              <Button 
                className="bg-logo-orange hover:bg-logo-orange/90 text-white mt-4 font-semibold"
                onClick={() => scrollToSection('contato')}
              >
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
