import { useState } from "react";

const initialItemsToShow = 11;
const itemsPerLoad = 4;

const Category = ({ randomData, randomMapData, setCategory }) => {
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsPerLoad);
  };
  return (
    <div>
      <div className="mt-4 pb-5 flex max-lg:flex-col gap-6 border-b-[3px] border-black ">
        <div className="w-[55%] max-lg:w-full text-left">
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
        <div className="w-[45%] max-lg:w-full  flex flex-col gap-3 ">
          {randomMapData && randomMapData
            ?.slice(0, 3)
            ?.filter(
              (val) =>
                val.urlToImage && val.source?.name && val.title && val.author
            )
            ?.map((val, index) => (
              <>
                <div key={index} className="flex max-sm:flex-col gap-2 text-left">
                  <img
                    src={val?.urlToImage}
                    className="h-[150px] w-[200px] max-sm:w-full "
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
      <div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mt-10 ">
          {randomMapData && randomMapData
            ?.slice(3, itemsToShow)
            ?.filter(
              (val) =>
                val.urlToImage && val.source?.name && val.title && val.author
            )
            ?.map((val, i) => (
                <div
                  key={i}
                  className="shadow-xl border-[3px] border-gray-200 "
                >
                  <div className="flex flex-col gap-2 text-left">
                    <img
                      src={val?.urlToImage}
                      className="h-[150px] w-[300px] max-xl:w-full"
                      alt=""
                    />
                    <div className="pb-3 px-5">
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
                </div>
            ))}
        </div>
        {randomMapData?.length > itemsToShow && (
          <button
            onClick={handleLoadMore}
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Category;
