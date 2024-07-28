import { DataModel, ClimbingGym } from "@/app/dataModel";
import { getData } from "@/app/main";
import React from "react";
import ClimbGym from "./ClimbGym";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const ClimbingGyms = async () => {
  await delay(3000);
  const data = getData();

  return (
    <div>
      {data.climbingGyms.map((gym) => (
        <ClimbGym data={gym} key={gym.name} />
      ))}
    </div>
  );
};

export default ClimbingGyms;
