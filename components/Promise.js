import Image from "next/image";
import React from "react";

const Promise = () => {
  return (
    <>
      <div className="mt-10 w-[90%] mx-[5%] font-fancy sm:w-[80%] sm:mx-[10%] md:w-[90%] md:mx-[5%] xl:w-[80%] xl:mx-[10%]">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-center px-2">
            Our promise is to be with you in every step of Real Estate
          </h1>
        </div>
        <div className="bg-white border-boxesColor  my-5 border shadow-boxShadow shadow-xl md:flex">
          {/* promise */}
          <div className="flex flex-col justify-center items-center my-5 px-5">
            <Image
              width="100"
              height="100"
              className="my-5"
              src="/./Pictures/promise1.png"
              alt=""
            />
            <h2 className="font-bold text-lg">Our Mission</h2>
            <p className="text-center my-3">
              The best Real Estate Services to our customers, with the best
              Return On Investment
            </p>
          </div>

          {/* promise */}
          <div className="flex flex-col justify-center items-center my-5 px-5">
            <Image
              width="100"
              height="100"
              className="my-5"
              src="/./Pictures/promise2.png"
              alt=""
            />
            <h2 className="font-bold text-lg">Our Mission</h2>
            <p className="text-center my-3">
              The best Real Estate Services to our customers, with the best
              Return On Investment
            </p>
          </div>

          {/* promise */}
          <div className="flex flex-col justify-center items-center my-5 px-5">
            <Image
              width="100"
              height="100"
              className="my-5"
              src="/./Pictures/promise3.png"
              alt=""
            />
            <h2 className="font-bold text-lg">Our Mission</h2>
            <p className="text-center my-3">
              The best Real Estate Services to our customers, with the best
              Return On Investment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promise;
