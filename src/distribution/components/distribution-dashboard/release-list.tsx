import { Card, Col, Skeleton, Space } from "antd";
import { useState } from "react";
import { Release } from "../../utils/types";
import ReleaseCardSkeleton from "../skeletons/release-card-skeleton";

import ReleaseCard from "./release-card";
interface Props {
  releases: Release[];
}
const ReleaseList = ({ releases = [] }: Props) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return loading ? (
    <>
      <ReleaseCardSkeleton />
      <ReleaseCardSkeleton />
      <ReleaseCardSkeleton />
    </>
  ) : (
    <Space size="large" direction="vertical">
      {releases.map((release) => (
        <ReleaseCard release={release} />
      ))}
    </Space>
  );
};

export default ReleaseList;
