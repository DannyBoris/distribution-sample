import { Skeleton } from "antd";

const DistributionFormSkeleton = () => {
  return (
    <>
      <Skeleton.Node active style={{ width: "40%", height: 60, margin: 10 }} />
      <Skeleton.Node active style={{ width: "40%", height: 60, margin: 10 }} />
      <Skeleton.Node active style={{ width: "70%", height: 190, margin: 10 }} />
      <br />
      <Skeleton.Node active style={{ width: "70%", height: 190, margin: 10 }} />
      <Skeleton.Node active style={{ width: "70%", height: 190, margin: 10 }} />
    </>
  );
};

export default DistributionFormSkeleton;
