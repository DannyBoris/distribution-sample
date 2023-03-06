import { Form, FormItemProps, Select, SelectProps } from "antd";

interface customProps {
  multiSelect?: boolean;
  customOptions?: any[];
}

type Props = FormItemProps & SelectProps & customProps;

const FormSelect = ({
  required,
  label,
  placeholder = "Dear developer, please enter a placeholder",
  value,
  onChange,
  name,
  options,
  showSearch,
  help,
  multiSelect,
  dropdownRender,
  onSearch,
  customOptions,
  labelInValue,
}: Props) => {
  const itemProps: FormItemProps = {
    required,
    requiredMark: required,
    label,
    name,
    help,
  };
  const selectProps: SelectProps = {
    size: "large",
    value,
    placeholder,
    onChange,
    options,
    optionFilterProp: "label",
    showSearch,
    dropdownRender,
    onSearch,
    labelInValue,
  };

  if (multiSelect) {
    selectProps.mode = "multiple";
    selectProps.allowClear = true;
  }

  return (
    <Form.Item {...itemProps}>
      <Select {...selectProps}>{customOptions}</Select>
    </Form.Item>
  );
};

export default FormSelect;
