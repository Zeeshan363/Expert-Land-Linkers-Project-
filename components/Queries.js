import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Queries = () => {
  return (
    <>
      <div className="font-fancy my-20 bg-queries py-20 text-white">
        <div className="w-[90%] mx-[5%] md:flex md:justify-around md:w-[95%] md:mx-[2.5%]  lg:w-[80%] lg:mx-[10%]">
          {/* Details area */}
          <div className="md:w-[45%] md:pt-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-5">
                Contact us for your queries
              </h1>
              <p className="text-lg">
                <b className="text-primaryColor">Topline Marketing</b> values
                their clients and we are radially available for all your
                queries.
              </p>
            </div>
            <div className="my-2 mx-2">
              <div className="mt-5 h-[90px] border-2 border-boxShadow shadow-boxShadow shadow-lg border-l-4 border-l-primaryColor hover:bg-primaryColor hover:transition-all hover:duration-500">
                <MdLocationPin className="h-8 w-6" />
                <p className="ml-2">
                  2nd Floor, Save Mart, G-11 Markaz, Islamabad.
                </p>
              </div>
              <div className="mt-5 h-[90px] border-2 border-boxShadow shadow-boxShadow shadow-lg border-l-4 border-l-primaryColor hover:bg-primaryColor hover:transition-all hover:duration-500">
                <BsFillTelephoneFill className="h-8 w-6" />
                <p className="ml-2">(051) 8730255-66</p>
              </div>
              <div className="mt-5 h-[90px] border-2 border-boxShadow shadow-boxShadow shadow-lg border-l-4 border-l-primaryColor hover:bg-primaryColor hover:transition-all hover:duration-500">
                <AiOutlineMail className="h-8 w-6" />
                <p className="ml-2">info@toplinemarketing.com.pk</p>
              </div>
            </div>
          </div>
          {/* input area */}
          <div className="border bg-white border-gray my-10 rounded-xl flex flex-col items-center md:w-[45%] md:my-0 md:pt-5">
            <input
              className="block border border-gray mx-2 my-5 px-5 w-[80%] py-3 text-black rounded-lg"
              type="text"
              placeholder="Name*"
            />
            <input
              className="block border border-gray mx-2 my-5 px-5 w-[80%] py-3 text-black rounded-lg"
              type="text"
              placeholder="Number*"
            />
            <input
              className="block border border-gray mx-2 my-5 px-5 w-[80%] py-3 text-black rounded-lg"
              type="text"
              placeholder="Email*"
            />
            <textarea
              rows="3"
              className="block border border-gray mx-2 my-5 px-5 w-[80%] py-3 text-black rounded-lg"
              type="text"
              placeholder="Message"
            />
            <input
              className="block border border-gray mx-2 my-5 px-5 w-40 py-3 text-white bg-primaryColor rounded-lg md:mb-5 hover:bg-darkGray "
              type="submit"
              placeholder="Submit Now"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Queries;
