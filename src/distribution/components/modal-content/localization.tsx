import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space } from "antd";
import { useState } from "react";
import LocalItem from "../distribution-form/local-item";

interface Props {
  languages: any[];
  localsToUpdate: any[];
  onSave: (locals: any[]) => void;
  formId: string;
}

const LocalizationModalContent = ({
  languages,
  localsToUpdate = [],
  onSave,
  formId,
}: Props) => {
  const [locals, setLocals] = useState([...localsToUpdate]);

  function handleAdd() {
    setLocals([...locals, {}]);
  }

  function handleDelete(id: string | number) {
    setLocals(locals.filter((l) => l.languageId !== id));
  }

  return (
    <Form
      id={formId}
      layout="vertical"
      colon
      onSubmitCapture={() => onSave(locals)}
    >
      <Row justify="space-between">
        <Col span={11}>
          <Input readOnly />
        </Col>
        <Col span={11}>
          <Input readOnly />
        </Col>
      </Row>
      <Space style={{ display: "flex" }} size="middle" direction="vertical">
        {locals.map((local, index) => (
          <LocalItem
            {...local}
            languages={languages}
            onDelete={handleDelete}
            onChange={({ target: { id, value } }) => {
              const copy = [...locals];
              copy[index][id] = value;
              setLocals(copy);
              console.log(copy);
            }}
            onLanguageChange={(id) => {
              console.log(id);
            }}
          />
        ))}
      </Space>
      <Button
        style={{ marginTop: 20 }}
        icon={<PlusCircleOutlined />}
        type="text"
        onClick={handleAdd}
      >
        Add language
      </Button>
    </Form>
  );
};

export default LocalizationModalContent;
