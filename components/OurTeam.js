import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OurTeam = () => {
  return (
    <>
      <Navbar />
      {/* <div className="w-[90%] mx-[5%] font-fancy my-20 sm:w-[80%] sm:mx-[10%] lg:w-[90%] lg:mx-[5%] xl:w-[80%] xl:mx-[10%] mb-7 "> */}
      <div className="flex mt-[6rem] flex-col sm:flex-row md:flex-wrap md:justify-center">
        <div className="h-[400px] w-[90%] md:w-[420px]  mx-auto bg-primaryColor flex justify-center items-start relative  mb-[4rem] sm:mx-3 ">
          <div className="w-[90%] flex flex-col justify-between items-center relative bottom-[50px]  h-[25rem] ">
            <Image
              width="1000"
              height="1000"
              className="w-[100%] h-[90%]"
              src="/./Pictures/team1.jpg"
              alt=""
            />
            <h1>Jawad Amin</h1>
            <h4>General Manager</h4>
          </div>
        </div>
        <div className="h-[400px] w-[90%] md:w-[420px] mx-auto bg-primaryColor flex justify-center items-start relative  mb-[4rem] sm:mx-3">
          <div className="w-[90%] flex flex-col justify-between items-center relative bottom-[50px]  h-[25rem] ">
            <Image
              width="1000"
              height="1000"
              className="w-[100%] h-[90%]"
              src="/./Pictures/team1.jpg"
              alt=""
            />
            <h1>Jawad Amin</h1>
            <h4>General Manager</h4>
          </div>
        </div>
        <div className="h-[400px] w-[90%] md:w-[420px] mx-auto bg-primaryColor flex justify-center items-start relative  mb-[4rem] sm:mx-3">
          <div className="w-[90%] flex flex-col justify-between items-center relative bottom-[50px]  h-[25rem] ">
            <Image
              width="1000"
              height="1000"
              className="w-[100%] h-[90%]"
              src="/./Pictures/team1.jpg"
              alt=""
            />
            <h1>Jawad Amin</h1>
            <h4>General Manager</h4>
          </div>
        </div>
        <div className="h-[400px] w-[90%] md:w-[420px] mx-auto bg-primaryColor flex justify-center items-start relative  mb-[4rem] sm:mx-3">
          <div className="w-[90%] flex flex-col justify-between items-center relative bottom-[50px]  h-[25rem] ">
            <Image
              width="1000"
              height="1000"
              className="w-[100%] h-[90%]"
              src="/./Pictures/team1.jpg"
              alt=""
            />
            <h1>Jawad Amin</h1>
            <h4>General Manager</h4>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default OurTeam;
