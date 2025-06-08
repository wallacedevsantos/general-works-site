
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesAndStatsSection from '@/components/FeaturesAndStatsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen mx-auto">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesAndStatsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
