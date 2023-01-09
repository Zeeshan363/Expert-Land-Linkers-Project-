import { img } from "react-icons/gi";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "next/image";

const About = () => (
  <>
    <Navbar />
    <div className="w-[90%] mx-[5%] font-fancy my-20 sm:w-[80%] sm:mx-[10%] lg:w-[90%] lg:mx-[5%] xl:w-[80%] xl:mx-[10%]">
      {/* about text is here  */}
      <div>
        <h1 className="text-3xl font-bold sm:my-5 ">About Topline Marketing</h1>
        <p className="leading-7 text-lg">
          Topline Marketing stepped into Real Estate Market with the conviction
          of changing the image of this field in Pakistan. Over the last 27
          years, Topline Marketing has provided you the quality of service,
          clarity of transaction, and complete legal cover to set a new trend in
          Real Estate Industry. With 20,000+ satisfied clients and 30+
          successful projects, in six major cities of Pakistan, Topline
          Marketing is here to bring endless opportunities in the real estate
          industry. We bring you trust, creativity, innovation, and unique ideas
          and we plan to take that on as our goal.
        </p>
      </div>
      {/* offers with 3 icons are here  */}
      <div className="my-10 mb-10 md:flex md:justify-center">
        {/* offer  */}
        <div className="flex flex-col items-center justify-center text-center md:mx-5">
          <Image
            width="1000"
            height="1000"
            className="h-14 w-14 mt-10"
            src="/./Pictures/about-us-offer1.png"
            alt="icons"
          />
          <h1 className="text-2xl font-bold my-5">Investment Consultants</h1>
          <p className="leading-7 text-lg">
            We are the best pioneers in top-tier sales and marketing providing
            best investment guidelines.
          </p>
        </div>

        {/* offer  */}
        <div className="flex flex-col items-center justify-center text-center md:mx-5">
          <Image
            width="1000"
            height="1000"
            className="h-14 w-14 mt-10"
            src="/./Pictures/about-us-offer2.png"
            alt="icons"
          />
          <h1 className="text-2xl font-bold my-5">Investment Consultants</h1>
          <p className="leading-7 text-lg">
            We are the best pioneers in top-tier sales and marketing providing
            best investment guidelines.
          </p>
        </div>

        {/* offer  */}
        <div className="flex flex-col items-center justify-center text-center md:mx-5">
          <Image
            width="1000"
            height="1000"
            className="h-14 w-14 mt-10"
            src="/./Pictures/about-us-offer3.png"
            alt="icons"
          />
          <h1 className="text-2xl font-bold my-5">Investment Consultants</h1>
          <p className="leading-7 text-lg">
            We are the best pioneers in top-tier sales and marketing providing
            best investment guidelines.
          </p>
        </div>
      </div>

      {/* ceo  */}
      <div className="my-10 md:flex md:justify-around lg:mt-20">
        <div className="my-5 md:w-[45%] lg:w-[350px] lg:h-[350px]">
          <Image width="1000" height="1000" src="/./Pictures/ceo.jpg" alt="" />
        </div>
        <div className="md:w-[45%]">
          <p className="text-lg font-bold my-5 md:text-xl ">
            A company that delivers sustainable long-term growth by looking
            forward to a new era of growth as we develop more projects. Topline
            Marketing is not just a label; it’s a promise to value each person
            who comes in our door.
          </p>
          <h1 className="text-3xl text-primaryColor font-bold my-5">
            CEO Toplinemarketing (Pvt) Ltd.
          </h1>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default About;
