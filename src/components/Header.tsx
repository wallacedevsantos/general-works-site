
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-construction-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-construction-gray">General</h1>
              <p className="text-xs text-muted-foreground -mt-1">Construções & Reformas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-construction-orange transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-construction-orange transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-construction-orange transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-construction-orange transition-colors"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-construction-orange transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-construction-orange" />
              <span>(11) 9999-9999</span>
            </div>
            <Button size="sm" className="bg-construction-orange hover:bg-construction-orange/90">
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-construction-orange transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-construction-orange transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-construction-orange transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-left text-foreground hover:text-construction-orange transition-colors"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-construction-orange transition-colors"
              >
                Contato
              </button>
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="w-4 h-4 text-construction-orange" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
