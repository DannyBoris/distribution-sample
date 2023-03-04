import { Radio, RadioGroupProps } from "antd";
interface CustomProps {
  negativeButtonText?: string;
  positiveButtonText?: string;
}
const RadioGroup = ({
  onChange,
  value,
  name,
  style,
  negativeButtonText = "No",
  positiveButtonText = "Yes",
}: RadioGroupProps & CustomProps) => {
  return (
    <Radio.Group style={style} name={name} onChange={onChange} value={value}>
      <Radio value={false}>{negativeButtonText}</Radio>
      <Radio value={true}>{positiveButtonText}</Radio>
    </Radio.Group>
  );
};

export default RadioGroup;
