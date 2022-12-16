import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="h-[650px] bg-gray my-20  sm:relative">
        <div className="my-20 w-[100%] h-[450px] border-2 border-black bg-primaryColor text-white font-fancy">
          {/* Text here */}
          <div className="text-center my-5 w-[90%] mx-[5%] sm:w-[95%] sm:mx-[2.5%]">
            <span className="border-2 border-white text-xl font-bold px-6 py-2">
              Our Testimonials
            </span>
            <div className="my-7 text-3xl font-bold">
              We are proud to have positive reviews from our clients, which
              makes the company grow only stronger.
            </div>
          </div>
          <div className="lg:flex">
            {/* People reviews here */}
            <div className="w-[90%] mx-[5%] bg-white px-3 border-2 border-black h-[320px] text-black sm:absolute sm:top-[40%] sm:px-5 md:h-[280px] lg:w-[25%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
              <div className="flex my-3 sm:my-5">
                <img
                  className="h-[100px] w-[100px] rounded-[50%]"
                  src="./Pictures/review1.jpg"
                  alt=""
                />
                <h1 className="text-xl">Jalal khan 1</h1>
              </div>
              <div className=" my-3 sm:my-5">
                <p className="sm:text-lg lg:text-sm xl:text-lg">
                  It has been a real pleasure working with your team again.
                  Everyone is always very professional to work with, pleasant to
                  communicate with, and incredibly responsive to
                </p>
              </div>
              <div className=" my-3 sm:my-5 sm:text-lg">
                <button>stars</button>
              </div>
            </div>

            {/* People reviews here */}
            <div className="hidden w-[90%] mx-[5%] bg-white px-3 border-2 border-black h-[320px] text-black sm:absolute sm:top-[40%] sm:px-5 md:h-[280px] lg:block lg:w-[25%] lg:left-[30%] lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
              <div className="flex my-3 sm:my-5">
                <img
                  className="h-[100px] w-[100px] rounded-[50%]"
                  src="./Pictures/review1.jpg"
                  alt=""
                />
                <h1 className="text-xl">Jalal khan 1</h1>
              </div>
              <div className=" my-3 sm:my-5">
                <p className="sm:text-lg lg:text-sm xl:text-lg">
                  It has been a real pleasure working with your team again.
                  Everyone is always very professional to work with, pleasant to
                  communicate with, and incredibly responsive to
                </p>
              </div>
              <div className=" my-3 sm:my-5 sm:text-lg">
                <button>stars</button>
              </div>
            </div>

            {/* People reviews here */}
            <div className="hidden w-[90%] mx-[5%] bg-white px-3 border-2 border-black h-[320px] text-black sm:absolute sm:top-[40%] sm:px-5 md:h-[280px] lg:block lg:w-[25%] lg:left-[60%] lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
              <div className="flex my-3 sm:my-5">
                <img
                  className="h-[100px] w-[100px] rounded-[50%]"
                  src="./Pictures/review1.jpg"
                  alt=""
                />
                <h1 className="text-xl">Jalal khan 1</h1>
              </div>
              <div className=" my-3 sm:my-5">
                <p className="sm:text-lg lg:text-sm xl:text-lg">
                  It has been a real pleasure working with your team again.
                  Everyone is always very professional to work with, pleasant to
                  communicate with, and incredibly responsive to
                </p>
              </div>
              <div className=" my-3 sm:my-5 sm:text-lg">
                <button>stars</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
