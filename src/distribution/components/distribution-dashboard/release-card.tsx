import { Release } from "../../utils/types";
import {
  Avatar,
  Card,
  Typography,
  Row,
  Col,
  Badge,
  Image,
  Tag,
  Space,
  Skeleton,
} from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const { Text, Title } = Typography;
interface Props {
  release: Release;
}

const ReleaseCard = ({ release }: Props) => {
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 2000);
  },[])
  return (
    <Link to={`release/${release.release_id}`}>
      <Card onClick={() => {}} style={{ width: "100%", cursor: "pointer" }}>
        <Row justify="space-between">
          <Row gutter={25}>
            {loading ? (
              <Skeleton.Image active style={{ width: 190, height: 190 }} />
            ) : (
              <Image
                style={{ borderRadius: 10 }}
                src={release.image.externalUrl}
              />
            )}
            <Col>
              {loading ? (
                <Skeleton active title={{ width: 500 }} />
              ) : (
                <Title style={{ marginTop: 0 }} level={2}>
                  Single | {release.name}
                </Title>
              )}
              <Title level={4}>{release.artistName}</Title>
            </Col>
          </Row>
          <Row align="top">
            <Space>
              <Text>Sent on Jan 11 2023</Text>
              <Tag color="geekblue">Draft</Tag>
            </Space>
          </Row>
        </Row>
      </Card>
    </Link>
  );
};

export default ReleaseCard;
