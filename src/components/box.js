import React from "react";

const Box = ({children, color}) => {
  return (
    <div className="flex w-full gap-10">
      <div style={{backgroundColor: color}} className="rounded-md p-6 aspect-[1/.7] min-w-48 w-[50vw] max-w-sm ">
        {children}
      </div>
    </div>
  );
};

export default Box;
