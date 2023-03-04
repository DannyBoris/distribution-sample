import { Card, Col, Skeleton, Space } from "antd";
import { Release } from "../utils/types";
import ReleaseCard from "./release-card";
interface Props {
  releases: Release[];
}
const ReleaseList = ({ releases = [] }: Props) => {
  const skeletonCount = 3;
  return (
    <Space size="large" direction="vertical">
      {releases.map((release) => (
        <ReleaseCard release={release} />
      ))}
    </Space>
  );
};

export default ReleaseList;
