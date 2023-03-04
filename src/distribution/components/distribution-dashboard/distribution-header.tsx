import { Button, Row, Typography } from "antd";
import ReleaseStatusTabs from "./release-status-tabs";
const { Title } = Typography;
const DistributionHeader = () => {
  return (
    <Row
      style={{ justifyContent: "space-between",margin:'20px 0' }}
      align="middle"
    >
      <Title level={1}>Distribution</Title>
      <ReleaseStatusTabs />
      <Button>+ New release</Button>
    </Row>
  );
};

export default DistributionHeader;
