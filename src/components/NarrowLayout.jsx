import React from "react";

export const NarrowLayout = ({ children }) => {
  return (
    <div className="flex w-full justify-center ">
      <div className="container">{children}</div>
    </div>
  );
};
