import React from "react";
import Map from "@/components/map";

const Page = () => {
  return (
    <Map
      style={{
        height: 640,
        overflow: "hidden",
        borderRadius: 12,
      }}
    ></Map>
  );
};

export default Page;
