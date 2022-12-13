import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
function Topbar() {
  return (
    <div className="my-4 lg:flex lg:items-center lg:justify-center">
      <div className="flex justify-evenly lg:hidden">
        <div className="flex items-center justify-between border-2 w-[130px]">
          {/*Icon */}
          <BsTelephone />
          <p className="text-primaryColor text-fancy text-base md:text-lg">
            +923113822
          </p>
        </div>
        <div className="">
          <button className="font-fancy bg-primaryColor text-lightColor text-base py-[2px] px-4 rounded-sm md:text-lg">
            Contact Us
          </button>
        </div>
      </div>
      <div className="invisible lg:visible lg:flex xl:w-[1300px]">
        <div className="flex items-center justify-between w-[40%] xl:justify-evenly">
          <ImLocation />
          <p className="font-fancy text-sm font-normal">
            Head office: 2nd Floor, Above Save Mart, G11 Markaz, Islamabad
          </p>
        </div>
        <div className="flex items-center  justify-between w-[250px] xl:mx-4">
          <AiOutlineMail />
          <p className="font-fancy text-sm font-normal">
            info@toplinemarketing.com.pk
          </p>
        </div>
        <div className="flex items-center justify-evenly w-[250px]">
          <BsTelephone />
          <p className="font-fancy text-sm font-normal">+92-51-8730266</p>
        </div>
        <div className="flex items-center justify-center text-center rounded-sm">
          <button className="font-fancy text-sm font-semibold bg-primaryColor text-lightColor py-2 px-4 rounded-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
