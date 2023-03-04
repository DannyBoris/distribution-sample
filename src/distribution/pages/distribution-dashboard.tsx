import { Layout } from "antd";
import DistributionHeader from "../components/distribution-dashboard/distribution-header";
import ReleaseList from "../components/distribution-dashboard/release-list";
import { dummy_release } from "../utils/dummy-data";

const DistributionDashboard = () => {
  return (
    <Layout style={{ padding: "0 70px" }}>
      <DistributionHeader />
      <ReleaseList
        releases={[dummy_release(1), dummy_release(2), dummy_release(3)]}
      />
    </Layout>
  );
};

export default DistributionDashboard;
