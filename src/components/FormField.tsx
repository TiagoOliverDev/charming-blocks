import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  children: ReactNode;
  delay?: number;
}

const FormField = ({ label, children, delay = 0 }: FormFieldProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2"
    >
      <label className="label-text">{label}</label>
      {children}
    </motion.div>
  );
};

export default FormField;
