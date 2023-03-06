import { Skeleton } from "antd";

const ReleasePageSkeleton = () => {
  return (
    <>
      <Skeleton  title={{style:{height:90,margin:'20px 0'}}} paragraph={{ rows: 0 }} active />
      <Skeleton
        avatar={{
          shape: "square",
          style: {
            width: 440,
            height: 440,
            borderRadius: 20,
          },
        }}
        paragraph
        active
      />
    </>
  );
};

export default ReleasePageSkeleton;
