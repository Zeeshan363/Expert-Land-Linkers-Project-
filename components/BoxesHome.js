import React from "react";

const BoxesHome = () => {
  return (
    <>
      <div className="mb-40 w-[90%] mx-[5%] sm:w-[70%] sm:mx-[15%] md:w-[90%] md:mx-[5%] md:flex md:flex-wrap md:justify-center xl:w-[80%] xl:mx-[10%]">
        {/*  box */}
        <div className="hover:relative hover:bottom-10 bg-boxesColor h-[150px] border-boxesColor shadow-lg shadow-boxShadow rounded-lg opacity-4 text-center relative flex flex-col justify-evenly items-center mb-20 md:w-[40%] md:h-[170px] md:mx-5 xl:w-[28%]">
          <div className="h-20 w-20 border rounded-[50%] flex justify-center bg-black text-white items-center absolute -top-10 mr-40">
            Logo
          </div>
          <div className="pt-10">
            <div className="font-fancy text-2xl text-primaryColor font-bold">
              30+
            </div>
            <div className="text-lg">Successful Projects</div>
          </div>
        </div>
        {/*  box */}
        <div className="hover:relative hover:bottom-10 bg-boxesColor h-[150px] border-boxesColor shadow-lg shadow-boxShadow rounded-lg opacity-4 text-center relative flex flex-col justify-evenly items-center mb-20 md:w-[40%] md:h-[170px] md:mx-5 xl:w-[28%]">
          <div className="h-20 w-20 border rounded-[50%] flex justify-center bg-black text-white items-center absolute -top-10 mr-40">
            Logo
          </div>
          <div className="pt-10">
            <div className="font-fancy text-2xl text-primaryColor font-bold">
              30+
            </div>
            <div className="text-lg">Successful Projects</div>
          </div>
        </div>
        {/*  box */}
        <div className="hover:relative hover:bottom-10 bg-boxesColor h-[150px] border-boxesColor shadow-lg shadow-boxShadow rounded-lg opacity-4 text-center relative flex flex-col justify-evenly items-center mb-20 md:w-[40%] md:h-[170px] md:mx-5 xl:w-[28%]">
          <div className="h-20 w-20 border rounded-[50%] flex justify-center bg-black text-white items-center absolute -top-10 mr-40">
            Logo
          </div>
          <div className="pt-10">
            <div className="font-fancy text-2xl text-primaryColor font-bold">
              30+
            </div>
            <div className="text-lg">Successful Projects</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxesHome;
