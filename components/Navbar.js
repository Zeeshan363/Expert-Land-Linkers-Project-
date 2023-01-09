import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="sticky top-0 right-0 left-0 z-10 bg-white ">
        <div className="w-[90%] mx-[5%] flex justify-between items-center py-5 md:py-5 lg:py-10 xl:w-[80%] xl:mx-[10%] xl:py-5">
          <div>
            <img
              className="h-[75px] w-[75px] md:h-[120px] md:w-[120px] lg:h-[75px] lg:w-[75px]"
              src="./Pictures/logo.png"
              alt="logo"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="lg:flex">
              <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold lg:text-primaryColor">
                <Link href="/home">HOME</Link>
              </span>
              <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
                <Link href="/aboutus">ABOUT US</Link>
              </span>
              <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
                {/* <Link href="">Our Projects</Link> */}
                OUR PROJECTS
              </span>
              <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
                <Link href="/team">OUR TEAM</Link>
              </span>
              <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
                <Link href="/careers">CAREER</Link>
              </span>
              <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
                <Link href="/blog">BLOGS</Link>
              </span>
              <span className="hidden hover:text-primaryColor hover:cursor-pointer lg:block lg:px-4 lg:py-2 lg:text-sm lg:font-semibold">
                <Link href="/contactus">CONTACT US</Link>
              </span>
            </div>
            <FiMenu
              className="h-10 w-10 md:h-14 md:w-14 lg:hidden"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <BsSearch className="ml-10 hidden lg:h-7 lg:w-7 lg:block" />
          </div>
        </div>
        {toggle && (
          <div className="absolute h-screen py-10 md:py-20 opacity-80 font-bold top-20 lg:hidden z-10 bg-white">
            <ul className="w-screen text-center">
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#A51818] hover:text-white">
                COMPANY
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#A51818] hover:text-white">
                SERVICES
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#A51818] hover:text-white">
                WORK
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#A51818] hover:text-white">
                INSIGHTS
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#A51818] hover:text-white">
                CAREERS
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#A51818] hover:text-white">
                CONTACT
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

// A comment to check git push is working or not.
// Another comment i am commit.
// alkdfja;lsdkjflk;asdjf;lksadjf
