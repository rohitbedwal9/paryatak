import React from "react";
import { Main } from "@components";

export const Banner: React.FC = () => {
  return (
    <div className="flex-1 w-full">
      <Main height={200} title="A Ride in the Ganges!" btnTitle="Rafting in Rishikesh" btnbg="#6D28D9" />
    </div>
  )
}