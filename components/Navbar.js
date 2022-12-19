import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

const Navbar = () => (
  <>
    <div className="sticky top-0 right-0 left-0 z-10 bg-white ">
      <div className="w-[90%] mx-[5%] flex justify-between items-center md:py-5 lg:py-10 xl:w-[80%] xl:mx-[10%] xl:py-5">
        <div>
          <img
            className="h-[75px] w-[75px] md:h-[120px] md:w-[120px] lg:h-[75px] lg:w-[75px]"
            src="./pictures/logo.png"
            alt="logo"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="lg:flex">
            <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold lg:text-primaryColor">
              HOME
            </span>
            <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
              ABOUT US
            </span>
            <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
              OUR PROJECTS
            </span>
            <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
              OUR TEAM
            </span>
            <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
              CAREER
            </span>
            <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
              BLOGS
            </span>
            <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
              CONTACT US
            </span>
          </div>
          <FiMenu className="h-10 w-10 md:h-14 md:w-14 lg:hidden" />
          <BsSearch className="ml-10 hidden lg:h-7 lg:w-7 lg:block" />
        </div>
      </div>
    </div>
  </>
);

export default Navbar;

// A comment to check git push is working or not.
// Another comment i am commit.
