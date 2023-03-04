import { Typography, Card, Col, Image, Row, Button, Space } from "antd";
import { Release } from "../../utils/types";
const { Title, Text } = Typography;

const ReleaseLivePreview = ({
  name,
  version,
  image,
  artistName,
  copyrightC,
  copyrightP,
}: Partial<Release>) => {
  return (
    <Card style={{ background: "transparent", marginLeft: 25 }}>
      <Row>
        <Space size="large" align="start">
          <Col>
            <Image
              width="190"
              height="190"
              src="https://picsum.photos/190/190"
            />
          </Col>
          <Space direction="vertical" style={{ display: "flex" }}>
            <Title level={2}>{name || "Untitled release"}</Title>
            <Text>{artistName || "Unknown artist"}</Text>
            <Text>
              Genre <Text strong>Pop</Text>
            </Text>
            <Text>
              Genre <Text strong>Rock</Text>
            </Text>
            <Text>
              (C) <Text strong>{}</Text>
            </Text>
            <Text>
              (C) <Text strong>Rock</Text>
            </Text>
          </Space>
        </Space>
      </Row>
      <Button
        style={{ background: "white", color: "black", height: 40, width: 230 }}
      >
        Submit to review
      </Button>
    </Card>
  );
};

export default ReleaseLivePreview;
