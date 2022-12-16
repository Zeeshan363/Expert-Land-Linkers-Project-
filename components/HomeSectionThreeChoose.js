import React from "react";

const HomeSectionThreeChoose = () => {
  return (
    <>
      <div className="w-[84%] mx-[8%] font-fancy md:w-[94%] md:mx-[3%] xl:w-[80%] xl:mx-[10%]">
        {/* Text here */}
        <div className="text-center xl:w-[80%] xl:mx-[10%]">
          <h1 className="text-4xl font-bold px-2 mb-2">Why Choose Us</h1>
          <h3 className="text-xl font-bold mb-2 tracking-wider">
            We provide the best sales and marketing services
          </h3>
          <p className="text-lg">
            A team of experts coming together as one with the ultimate goal
            “Your First Stop For Real Estate Sales & Marketing”
          </p>
        </div>
        {/* Now boxes here */}
        <div className="flex flex-wrap justify-evenly mt-16">
          {/* box */}
          <div className="border border-gray bg-white rounded-lg mb-10 shadow-lg shadow-boxShadow md:w-[300px] md:flex md:flex-col md:items-center md:py-5 xl:w-[360px]">
            <div className="relative flex flex-col">
              <img
                className="rounded-lg md:h-56 md:w-[275px] xl:w-[320px] hover:animate-bounce"
                src="./Pictures/why-choose-us1.png"
                alt=""
              />
              <p className="bg-primaryColor text-white h-20 w-20 border rounded-[50%] flex justify-center items-center absolute right-[65%] top-[90%] sm:h-28 sm:w-28 md:h-20 md:w-20">
                Logo
              </p>
            </div>
            <div className="mt-14 ml-5 sm:mt-20">
              <h2 className="text-xl font-bold mb-5">Investment Consultants</h2>
              <p>
                We are the best pioneers in top-tier sales and marketing
                providing best investment guidelines
              </p>
            </div>
          </div>

          {/* box */}
          <div className="border border-gray bg-white rounded-lg mb-10 shadow-lg shadow-boxShadow md:w-[300px] md:flex md:flex-col md:items-center md:py-5 xl:w-[360px]">
            <div className="relative flex flex-col">
              <img
                className="rounded-lg md:h-56 md:w-[275px] xl:w-[320px] hover:animate-bounce"
                src="./Pictures/why-choose-us2.jpg"
                alt=""
              />
              <p className="bg-primaryColor text-white h-20 w-20 border rounded-[50%] flex justify-center items-center absolute right-[65%] top-[90%] sm:h-28 sm:w-28 md:h-20 md:w-20">
                Logo
              </p>
            </div>
            <div className="mt-14 ml-5 sm:mt-20">
              <h2 className="text-xl font-bold mb-5">Investment Consultants</h2>
              <p>
                We are the best pioneers in top-tier sales and marketing
                providing best investment guidelines
              </p>
            </div>
          </div>

          {/* box */}
          <div className="border border-gray bg-white rounded-lg mb-10 shadow-lg shadow-boxShadow md:w-[300px] md:flex md:flex-col md:items-center md:py-5 xl:w-[360px]">
            <div className="relative flex flex-col">
              <img
                className="rounded-lg md:h-56 md:w-[275px] xl:w-[320px] hover:animate-bounce"
                src="./Pictures/why-choose-us3.jpg"
                alt=""
              />
              <p className="bg-primaryColor text-white h-20 w-20 border rounded-[50%] flex justify-center items-center absolute right-[65%] top-[90%] sm:h-28 sm:w-28 md:h-20 md:w-20">
                Logo
              </p>
            </div>
            <div className="mt-14 ml-5 sm:mt-20">
              <h2 className="text-xl font-bold mb-5">Investment Consultants</h2>
              <p>
                We are the best pioneers in top-tier sales and marketing
                providing best investment guidelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionThreeChoose;
