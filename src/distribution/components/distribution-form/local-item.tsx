import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Tooltip } from "antd";
import { ChangeEvent } from "react";
import { languageMapper } from "../../utils/mappers";
import DeleteButton from "../shared/delete-button";
import FormInput from "../shared/form-input";
import FormSelect from "../shared/form-select";

interface Props {
  languages: any[];
  name: string;
  version: string;
  languageId: string | number;
  onDelete: (id: string | number) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLanguageChange: (id: number) => void;
}

const LocalItem = ({
  languages,
  name,
  version,
  languageId,
  onDelete,
  onChange,
  onLanguageChange,
}: Props) => {
  const sharedStyles = {
    background: "rgba(26, 26, 26, 1)",
  };

  return (
    <Space direction="vertical" style={{ width: "100%", marginTop: 10 }}>
      <Card style={sharedStyles}>
        <DeleteButton onClick={() => onDelete(languageId)} />
        <Row>
          <Col span={24}>
            <FormSelect
              onChange={onLanguageChange}
              label="Language"
              value={languageId}
              options={languages.map(languageMapper)}
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <FormInput
              onChange={onChange}
              label="Local title"
              value={name}
              id="name"
            />
          </Col>
          <Col span={12}>
            <FormInput
              onChange={onChange}
              label="Local version"
              id="version"
              value={version}
            />
          </Col>
        </Row>
      </Card>
    </Space>
  );
};

export default LocalItem;
