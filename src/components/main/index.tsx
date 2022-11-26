import React from "react";

interface Props{
  title:string,
  height:number,
  btnTitle: string,
  btnbg:string
}

export const Main: React.FC<Props> = ({title,height,btnTitle,btnbg}) => {
  return (
    <div className=" bg-no-repeat bg-cover w-full " style={{ backgroundImage: `url('${height?'/images/rishikesh.jpg':'/images/hill-station.jpg'}')`, height: `${height ? `${height}px` : '360px'}` }}>
      <h1 className="text-5xl pt-16 font-extrabold text-white text-center">{title}</h1>
      {height !== 360 ? (
        <div className="mt-5 flex justify-center items-center ">
          <button type="button" className="px-4 py-2 rounded-2xl text-white transition-colors duration-200 transform" style={{backgroundColor:`${btnbg}`}}>
            {btnTitle}
          </button>
        </div>
        ):(<p></p>)
      }
    </div>
  );
};