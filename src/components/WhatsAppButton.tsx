
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para meu projeto.";
    const whatsappUrl = `https://wa.me/5511946522725?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50">
      <div className="relative">
        {/* Tooltip - Hidden on mobile, visible on desktop */}
        {isHovered && (
          <div className="hidden lg:block absolute bottom-full right-0 mb-4 bg-background shadow-2xl rounded-xl p-4 whitespace-nowrap animate-fade-in border border-border/50 backdrop-blur-sm">
            <p className="text-sm font-semibold text-foreground">
              Fale com o General no WhatsApp!
            </p>
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-background"></div>
          </div>
        )}

        {/* WhatsApp Button - Touch optimized */}
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 p-0 touch-manipulation"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          
          {/* Close button - Touch friendly */}
          <button
            onClick={handleClose}
            className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gray-500 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors shadow-lg touch-manipulation"
          >
            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </button>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </Button>

        {/* Notification badge */}
        <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-4 h-4 sm:w-5 sm:h-5 bg-logo-orange rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold text-white">!</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
