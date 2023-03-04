import { Form, InputProps, FormItemProps, Input } from "antd";

type Props = FormItemProps & InputProps;

const FormInput = ({
  required,
  label,
  placeholder = "Dear developer, please enter a placeholder",
  value,
  onChange,
  name,
  style,
  id
}: Props) => {
  const itemProps: FormItemProps = {
    required,
    requiredMark: required,
    label,
    name,
    style,
  };
  const inputProps: InputProps = {
    size: "large",
    value,
    placeholder,
    onChange,
    id
  };
  return (
    <Form.Item {...itemProps}>
      <Input {...inputProps} />
    </Form.Item>
  );
};

export default FormInput;
