import { useEffect, useState } from "react";

const Feeds = ({ randomData, randomMapData}) => {

  return (
    <div className="mt-4 pb-5 flex gap-6 border-b-[3px] border-black ">
      <div className="w-[55%] text-left">
        <img
          src={randomData?.urlToImage}
          className="w-[100%] !h-[400px]"
          alt=""
        />
        <h5 className="text-red-500 text-[.8rem] font-[700] mt-2 ">
          {randomData?.source?.name}
        </h5>
        <h2 className="my-2 text-[1.5rem] font-[700] leading-6">
          {randomData?.title}
        </h2>
        <p className="text-[.8rem] text-gray-600 font-[600]">
          by {randomData?.author}
        </p>
      </div>
      <div className="w-[45%] flex flex-col gap-3 ">
        {randomMapData
          ?.filter(
            (val) =>
              val.urlToImage && val.source?.name && val.title && val.author     
          )
          ?.map((val, index) => (
            <>
              <div className="flex gap-2 text-left">
                <img
                  src={val?.urlToImage}
                  className="h-[150px] w-[200px]"
                  alt=""
                />
                <div>
                  <h5 className="text-red-500 text-[.7rem] font-[700] mt-1 ">
                    {val?.source?.name}
                  </h5>
                  <h2 className="my-2 text-[1.2rem] font-[700] leading-6">
                    {val?.title}
                  </h2>
                  <p className="text-[.8rem] text-gray-600 font-[600]">
                    by {val?.author}
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Feeds;
