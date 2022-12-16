import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        interval={3000}
        infiniteLoop={true}
        stopOnHover={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        transitionTime={2000}
      >
        <div className="flex h-[25rem] w-full justify-evenly ">
          <div className="    bg-white w-[100%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
          <div className="  bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
          <div className="  bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
        <div className="flex h-[25rem] w-full justify-evenly ">
          <div className="    bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
          <div className="  bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
          <div className="  bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
        <div className="flex h-[25rem] w-full justify-evenly ">
          <div className="    bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
          <div className="  bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
          <div className="  bg-white w-[33%] px-3  border-black h-[320px] text-black  sm:px-5 md:h-[280px] lg:w-[32%] lg:left-0 lg:h-[350px] lg:top-[30%] xl:h-[400px] 2xl:h-[380%]">
            <div className="flex my-3 sm:my-5">
              .
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
      </Carousel>
    );
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
