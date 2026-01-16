import { Info } from "lucide-react";
import { motion } from "framer-motion";

interface InfoBoxProps {
  processo: string;
  dataPublicacao: string;
  mensagem: string;
}

const InfoBox = ({ processo, dataPublicacao, mensagem }: InfoBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="info-box flex gap-3"
    >
      <div className="flex-shrink-0 mt-0.5">
        <Info className="w-5 h-5 text-primary" />
      </div>
      <div className="space-y-1 text-sm">
        <p className="text-foreground font-medium">Processo: {processo}</p>
        <p className="text-muted-foreground">Data publicação: {dataPublicacao}</p>
        <p className="text-muted-foreground">{mensagem}</p>
      </div>
    </motion.div>
  );
};

export default InfoBox;
