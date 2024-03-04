import React from "react";
import Box from "../components/box";
import Table from "../components/table";

const Home = () => {
  return (
    <div className="h-full flex flex-col overflow-y-scroll max-h-[100%] p-4  no-scrollbar">
      <p className="text-3xl">Dashboard</p>
      <div>
        <div className="flex w-full gap-10">
          <Box color={"#0094f090"}>balance</Box>
          <Box color={"#ffffff"}>states</Box>
          <Box color={"#ffffff"}>store</Box>
        </div>
        <div>
          <Table
          type={"orders"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
