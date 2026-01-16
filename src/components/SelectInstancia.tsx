import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectInstanciaProps {
  value: string;
  onValueChange: (value: string) => void;
}

const SelectInstancia = ({ value, onValueChange }: SelectInstanciaProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="select-field h-auto">
        <SelectValue placeholder="Selecione a instância" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1ª Instância</SelectItem>
        <SelectItem value="2">2ª Instância</SelectItem>
        <SelectItem value="3">Instância Superior</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectInstancia;
