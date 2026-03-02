import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import SocialProofSection from "@/components/SocialProofSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <SocialProofSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
      <CookieBanner />
    </div>
  );
};

export default Index;
