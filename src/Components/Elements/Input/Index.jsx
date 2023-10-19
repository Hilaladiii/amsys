import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = (props) => {
  const { label, name, placeholder,type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} id={name} />
    </div>
  );
};
