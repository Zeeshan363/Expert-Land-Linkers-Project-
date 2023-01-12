import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import logoEnd from "../public/Pictures/logo-end.png";

const Footer = () => {
  return (
    <>
      <div className="bg-darkColor text-white font-fancy">
        <div className="w-[90%] mx-[5%] pb-10 sm:w-[80%] sm:mx-[10%] md:w-[90%] md:mx-[5%] md:flex md:justify-around md:flex-wrap lg:w-[95%] lg:mx-[2.5%] xl:w-[80%] xl:mx-[10%]">
          {/* Log0-end */}
          <div className="my-14 md:w-[40%] lg:w-[23%]">
            <Image
              width="1000"
              height="1000"
              className="w-[40%]"
              src={logoEnd}
              alt=""
            />
            <p className="my-5 lg:pr-5 xl:pr-10">
              We provide a one-stop solution for all sales and marketing
              activities of your project. We guarantee the successful delivery
              of projects within the given deadline.
            </p>
          </div>
          {/* LInks */}
          <div className="my-14 md:w-[40%] lg:w-[23%]">
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <ul className="my-5">
              <li className="my-5 list-inside list-disc">Home</li>
              <li className="my-5 list-inside list-disc">About Us</li>
              <li className="my-5 list-inside list-disc">Career</li>
              <li className="my-5 list-inside list-disc">Contact Us</li>
              <li className="my-5 list-inside list-disc">Our Team</li>
              <li className="my-5 list-inside list-disc">Sit Maps</li>
            </ul>
          </div>
          {/* Head office */}
          <div className="my-14 md:w-[40%] lg:w-[23%]">
            <h2 className="text-3xl font-bold">Head Office</h2>
            <div className="my-5">
              <div className="mt-5">
                <MdLocationPin className="h-8 w-6" />
                <p className="ml-2">
                  2nd Floor, Save Mart, G-11 Markaz, Islamabad.
                </p>
              </div>
              <div className="mt-5">
                <BsFillTelephoneFill className="h-8 w-6" />
                <p className="ml-2">(051) 8730255-66</p>
              </div>
              <div className="mt-5">
                <AiOutlineMail className="h-8 w-6" />
                <p className="ml-2">info@toplinemarketing.com.pk</p>
              </div>
            </div>
          </div>
          {/* conntection */}
          <div className="my-14 md:w-[40%] lg:w-[23%]">
            <h2 className="text-3xl font-bold">Get Connected</h2>

            <div className="flex my-5 lg:flex-wrap">
              <AiOutlineFacebook className="mx-2 h-12 w-12 lg:h-10 lg:w-10 lg:my-2" />

              <RxTwitterLogo className="mx-2 h-12 w-12 lg:h-10 lg:w-10 lg:my-2" />

              <BsLinkedin className="mx-2 h-12 w-12 lg:h-10 lg:w-10 lg:my-2" />

              <BsYoutube className="mx-2 h-12 w-12 lg:h-10 lg:w-10 lg:my-2" />

              <GrInstagram className="mx-2 h-12 w-12 lg:h-10 lg:w-10 lg:my-2" />
            </div>
          </div>
          {/* copyright strike here */}
          <div className="text-center my-20">
            Copyright© 2021!ToplineMarketing! All Rights Reserved .
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
