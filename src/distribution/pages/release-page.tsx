import {
  Button,
  Card,
  Col,
  Grid,
  Image,
  Menu,
  Popover,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { EllipsisOutlined, LeftOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummy_release } from "../utils/dummy-data";
import { Release } from "../utils/types";
import ReleasePageSkeleton from "../components/skeletons/release-page-skeleton";
const { Title, Text } = Typography;

const DetailsRow = ({ type, value }: { type: string; value: string }) => (
  <Row>
    <Text strong>{type}</Text>
    <Text>{value}</Text>
  </Row>
);

const ReleasePage = () => {
  const [release, setRelease] = useState<Release>();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const params = useParams();
  const { release_id } = params;

  useEffect(() => {
    setTimeout(() => {
      setRelease(dummy_release(parseInt(release_id as string)));
    }, 1000);
  }, []);

  return (
    <div style={{ padding: "0 70px" }}>
      {release ? (
        <>
          <Row align="middle">
            <LeftOutlined color="white" style={{ fontSize: 20 }} />
            <Title style={{ margin: "20px 0" }}>Release Details</Title>
          </Row>
          <Card>
            <Row align="top" justify="space-between">
              <Row gutter={25}>
                <Image
                  width="440"
                  height="440"
                  preview={false}
                  src={release.image.largeExternalUrl}
                />
                <Col>
                  <Title level={2}>{release.name}</Title>
                  <Title level={4}>{release.artistName}</Title>
                  <Title level={5}>
                    Released on <Text>32/43/5234</Text>{" "}
                  </Title>
                  <DetailsRow
                    type="Genre"
                    value={release.primaryMusicStyleId}
                  />
                  <DetailsRow
                    type="Subgenre"
                    value={release.secondaryMusicStyleId}
                  />
                  <DetailsRow
                    type="Copyright Year"
                    value={release.copyrights}
                  />
                  <DetailsRow type="Label" value={release.labelName} />
                  <DetailsRow type="UPC" value={release.upc} />
                  <DetailsRow type="Language" value={release.languageId} />
                  <DetailsRow type="Total length" value={"14:32"} />
                </Col>
              </Row>
              <Row>
                <Space size={25}>
                  <Link to={`/distribution/release/edit/${release_id}`}>
                    <Button size="large" type="primary">
                      Edit
                    </Button>
                  </Link>

                  <Tag color="red">Draft</Tag>
                  <Popover
                    content={
                      <Menu style={{ background: "none" }}>
                        <Menu.Item>Delete</Menu.Item>
                        <Menu.Item>More</Menu.Item>
                      </Menu>
                    }
                    title="Menu"
                    trigger="click"
                    open={openMenu}
                    arrow={false}
                    onOpenChange={setOpenMenu}
                    placement="bottomRight"
                  >
                    <EllipsisOutlined
                      onClick={() => setOpenMenu(true)}
                      rotate={90}
                      style={{ fontSize: 20 }}
                    />
                  </Popover>
                </Space>
              </Row>
            </Row>
          </Card>
        </>
      ) : (
        <ReleasePageSkeleton />
      )}
    </div>
  );
};

export default ReleasePage;
