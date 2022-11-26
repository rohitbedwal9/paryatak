import React from "react";
import data from "@public/meta.json";

interface Props {
  circle: boolean,
}
export const Cards: React.FC<Props> = ({ circle }) => {

  return (
    <div className="justify-items-center grid gap-5 container my-8 w-screen  p-5">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(data?.plugins ?? []).map((plugin) => (
          <div className="flex flex-col justify-center">
            <div
              key={plugin.name}
              className={`col-span-1 flex justify-center text-white rounded-md border border-gray-300 p-5 w-full bg-no-repeat bg-cover ${circle ? "rounded-full" : ""}`}
              style={{ backgroundImage: `url('${circle ? plugin.img : plugin.tourImage}')`, width: "200px", height: " 200px" }}
            >
              <h2 className="text-xl self-center justify-self-center font-semibold mb-2">{circle ? " " : plugin.name}</h2>

            </div>
            {circle ?
              <p className="text-center mr-2 text-lg font-bold mt-2">{plugin.tourName} </p> : " "
            }
          </div>
        ))}
      </div>

    </div >
  );
}