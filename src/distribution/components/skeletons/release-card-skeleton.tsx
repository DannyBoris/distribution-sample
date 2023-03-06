import { Skeleton } from "antd";

const ReleaseCardSkeleton = () => {
  return (
    <>
      <Skeleton
        avatar={{
          shape: "square",
          style: {
            width: 160,
            height: 160,
            marginBottom: 20,
            borderRadius: 20,
          },
        }}
        paragraph
        active
      />
    </>
  );
};

export default ReleaseCardSkeleton;
