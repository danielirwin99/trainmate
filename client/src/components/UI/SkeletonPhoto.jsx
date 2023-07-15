import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SkeletonPhoto = () => {
  return (
    <div className="flex m-5 justify-center">
      <Skeleton
        style={{ borderRadius: "10px" }}
        variant="rounded"
        width={400}
        height={250}
      />
    </div>
  );
};

export default SkeletonPhoto;
