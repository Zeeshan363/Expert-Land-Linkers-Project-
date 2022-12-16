import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Blogs = () => {
  return (
    <>
      <Navbar />
      {/* main div  */}
      <div className="w-[100%] border border-white my-10 md:w-[90%] mx-auto md:flex md:justify-around md:flex-wrap lg:w-[80%]">
        {/* box here  */}
        <div className="font-fancy w-[85%] text-center mx-auto border border-white bg-lightGray my-10 sm:w-[80%] sm:mx-auto md:w-[45%] lg:w-[48%]">
          <div>
            <img
              className="hover:scale-105 hover:duration-500"
              src="./Pictures/blog.jpg"
              alt=""
            />
          </div>
          <div className="my-5 w-[95%] mx-auto">
            <h1 className="text-xl text-primaryColor font-bold my-5">
              Why is the Blue World City Islamabad Location Ideal?
            </h1>
            <p className="text-lg">
              Why is the Blue World City Islamabad Location Ideal? Table of
              contents Introduction Benefits location Access Points Conclusion
              FAQs Introduction Blue World …
            </p>
          </div>
        </div>

        {/* box here  */}
        <div className="font-fancy w-[85%] text-center mx-auto border border-white bg-lightGray my-10 sm:w-[80%] sm:mx-auto md:w-[45%] lg:w-[48%]">
          <div>
            <img
              className="hover:scale-105 hover:duration-500"
              src="./Pictures/blog.jpg"
              alt=""
            />
          </div>
          <div className="my-5 w-[95%] mx-auto">
            <h1 className="text-xl text-primaryColor font-bold my-5">
              Why is the Blue World City Islamabad Location Ideal?
            </h1>
            <p className="text-lg">
              Why is the Blue World City Islamabad Location Ideal? Table of
              contents Introduction Benefits location Access Points Conclusion
              FAQs Introduction Blue World …
            </p>
          </div>
        </div>

        {/* box here  */}
        <div className="font-fancy w-[85%] text-center mx-auto border border-white bg-lightGray my-10 sm:w-[80%] sm:mx-auto md:w-[45%] lg:w-[48%]">
          <div>
            <img
              className="hover:scale-105 hover:duration-500"
              src="./Pictures/blog.jpg"
              alt=""
            />
          </div>
          <div className="my-5 w-[95%] mx-auto">
            <h1 className="text-xl text-primaryColor font-bold my-5">
              Why is the Blue World City Islamabad Location Ideal?
            </h1>
            <p className="text-lg">
              Why is the Blue World City Islamabad Location Ideal? Table of
              contents Introduction Benefits location Access Points Conclusion
              FAQs Introduction Blue World …
            </p>
          </div>
        </div>

        {/* box here  */}
        <div className="font-fancy w-[85%] text-center mx-auto border border-white bg-lightGray my-10 sm:w-[80%] sm:mx-auto md:w-[45%] lg:w-[48%]">
          <div>
            <img
              className="hover:scale-105 hover:duration-500"
              src="./Pictures/blog.jpg"
              alt=""
            />
          </div>
          <div className="my-5 w-[95%] mx-auto">
            <h1 className="text-xl text-primaryColor font-bold my-5">
              Why is the Blue World City Islamabad Location Ideal?
            </h1>
            <p className="text-lg">
              Why is the Blue World City Islamabad Location Ideal? Table of
              contents Introduction Benefits location Access Points Conclusion
              FAQs Introduction Blue World …
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
