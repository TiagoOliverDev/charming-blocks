import JuridicalForm from "@/components/JuridicalForm";
import { motion } from "framer-motion";
import legalBackground from "@/assets/legal-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative">
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="fixed inset-0 z-0"
      >
        <img
          src={legalBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-[2px]" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full">
        <JuridicalForm />
      </div>
    </div>
  );
};

export default Index;
