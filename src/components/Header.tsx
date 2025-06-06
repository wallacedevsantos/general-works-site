
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
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24 px-3 md:px-4">
          {/* Logo - Responsivo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/fe934f48-b0db-4a5f-aa80-f5d0fed0a611.png" 
              alt="General Construções e Reformas" 
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-20"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-logo-orange transition-colors duration-300 font-medium text-sm xl:text-base relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-logo-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-logo-orange" />
              <span className="font-medium">(11) 9999-9999</span>
            </div>
            <Button 
              size="sm" 
              className="bg-logo-orange hover:bg-logo-orange/90 text-white font-semibold px-4 xl:px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              onClick={() => scrollToSection('contato')}
            >
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile Menu Button - Maior área de toque */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 hover:bg-muted rounded-md transition-colors touch-manipulation"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Melhorado */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border shadow-lg">
            <nav className="flex flex-col py-4 px-3 space-y-1">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-logo-orange hover:bg-logo-light/10 transition-all font-medium py-4 px-3 text-base rounded-lg border-b border-border/30 last:border-0 touch-manipulation"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="flex items-center space-x-2 py-4 px-3 text-muted-foreground border-t border-border/30 mt-2">
                <Phone className="w-5 h-5 text-logo-orange" />
                <span className="font-medium text-base">(11) 9999-9999</span>
              </div>
              
              {/* Mobile CTA */}
              <div className="px-3 pb-2">
                <Button 
                  className="w-full bg-logo-orange hover:bg-logo-orange/90 text-white font-semibold py-4 text-base touch-manipulation"
                  onClick={() => scrollToSection('contato')}
                >
                  Orçamento Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
