import React from "react";
import Card from "./card";

const Live = ({ data }: any) => {
  return (
    <div className="grid w-full grid-cols-3 gap-3.5">
      {data?.map((item: any, index: number) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default Live;
