import { Form, FormItemProps, Select, SelectProps } from "antd";

interface customProps {
  multiSelect?: boolean;
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
  allowClear,
  multiSelect,
  dropdownRender,
  onSearch,
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
    allowClear,
    dropdownRender,
    onSearch,
  };

  if (multiSelect) {
    selectProps.mode = "multiple";
  }

  return (
    <Form.Item {...itemProps}>
      <Select {...selectProps} />
    </Form.Item>
  );
};

export default FormSelect;
