import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFab = () => {
  return (
    <motion.a
      href="https://wa.me/5511931496563?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20gr%C3%A1tis."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-16 bg-card text-foreground text-sm font-body font-medium px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale pelo WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppFab;
