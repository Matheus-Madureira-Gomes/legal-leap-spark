import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg p-4 md:p-6"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 max-w-4xl">
            <Shield className="w-6 h-6 text-gold flex-shrink-0" />
            <p className="font-body text-sm text-muted-foreground text-center md:text-left flex-1">
              Este site utiliza cookies para melhorar sua experiência de navegação. 
              Ao continuar, você concorda com nossa{" "}
              <a href="/privacidade" className="text-gold hover:underline">
                Política de Privacidade
              </a>{" "}
              em conformidade com a LGPD (Lei nº 13.709/2018).
            </p>
            <button
              onClick={accept}
              className="bg-gold text-accent-foreground px-6 py-2 text-sm font-semibold rounded hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Aceitar Cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
