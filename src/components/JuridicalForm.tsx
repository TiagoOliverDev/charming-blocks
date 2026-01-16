import { useState } from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import InfoBox from "./InfoBox";
import FormField from "./FormField";
import SelectInstancia from "./SelectInstancia";
import CPFInput from "./CPFInput";
import RadioAccess from "./RadioAccess";
import { toast } from "@/hooks/use-toast";

const JuridicalForm = () => {
  const [instancia, setInstancia] = useState("1");
  const [cpf, setCpf] = useState("");
  const [accessMode, setAccessMode] = useState("certificado");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cpf || cpf.length < 14) {
      toast({
        title: "CPF inválido",
        description: "Por favor, informe um CPF válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Solicitação enviada!",
      description: "Sua solicitação foi processada com sucesso.",
    });
    
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setCpf("");
    setInstancia("1");
    setAccessMode("certificado");
    toast({
      title: "Formulário limpo",
      description: "Todos os campos foram resetados.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card-elegant w-full max-w-lg mx-auto p-8"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-4"
        >
          <Scale className="w-7 h-7 text-primary" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-2xl font-semibold text-foreground"
        >
          Assistente Jurídico Digital
        </motion.h1>
      </div>

      {/* Info Box */}
      <div className="mb-6">
        <InfoBox
          processo="0010830-98.2019.5.15.0007"
          dataPublicacao="01/01/2019"
          mensagem="Por favor, informe a instância e suas credenciais"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField label="Informe a instância do TRT:" delay={0.2}>
          <SelectInstancia value={instancia} onValueChange={setInstancia} />
        </FormField>

        <FormField label="CPF:" delay={0.3}>
          <CPFInput value={cpf} onChange={setCpf} />
        </FormField>

        <RadioAccess value={accessMode} onChange={setAccessMode} />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="space-y-3 pt-4"
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
              />
            ) : (
              "Enviar"
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="btn-outline w-full"
          >
            Cancelar
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default JuridicalForm;
