import { motion } from "framer-motion";

interface RadioAccessProps {
  value: string;
  onChange: (value: string) => void;
}

const RadioAccess = ({ value, onChange }: RadioAccessProps) => {
  const options = [
    { id: "certificado", label: "Certificado" },
    { id: "token", label: "Token" },
    { id: "senha", label: "Senha" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="space-y-3"
    >
      <span className="label-text">Modo de acesso:</span>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative">
              <input
                type="radio"
                name="accessMode"
                value={option.id}
                checked={value === option.id}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                  value === option.id
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/40 group-hover:border-primary/60"
                }`}
              >
                {value === option.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-primary-foreground"
                  />
                )}
              </div>
            </div>
            <span className="text-sm text-foreground group-hover:text-primary transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </motion.div>
  );
};

export default RadioAccess;
