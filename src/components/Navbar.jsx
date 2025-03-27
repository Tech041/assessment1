"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// Styles
const divStyle = "flex  items-center gap-4 py-5 hover:cursor-pointer";
const linkStyle = "text-[12px] font-medium ";
const wrapperDiv = "pl-[30%]";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white  flex justify-center  items-center   shadow-lg  fixed w-full z-50  ">
      <div className="w-full h-[71px] px-10 relative ">
        <div className="w-full h-full  flex justify-between  py-2.5 gap-20 md:gap-[184px]  items-center ">
          {/* Logo container Div */}
          <div className="w-[194px] h-[71px] shadow flex justify-center items-center">
            <div className="min-w-[124px] min-h-[60px]">
              <Link href={"/"}>
                <Image
                  src="/images/logo.png"
                  width={124}
                  height={60}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="w-[988px] h-[51px] flex justify-between items-center ">
            {/* Search and filter */}
            <div className="flex-1 w-[312px] h-[33px] lg:flex justify-start gap-5 items-center hidden">
              <div className="flex items-center justify-start gap-4 border bg-[#E3EBF14D] border-[#3E7BEA] py-2 px-5 rounded-full w-[202px] h-full">
                <span className="">
                  <Image
                    src="/icons/Search.png"
                    width={15}
                    height={15}
                    alt="search_icon"
                    className=""
                  />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[90%] outline-none placeholder:text-[10px] text-[12px] "
                />
              </div>
              <div className="w-[85px] h-full flex items-center justify-center gap-2  border  border-primary-200/60 rounded-full">
                <span className="">
                  <Image
                    src="/icons/Filter.png"
                    width={15}
                    height={15}
                    alt="filter_icon"
                  />
                </span>
                <p className="text-[12px] text-primary-200/60 font-bold">
                  Filter
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-5">
              <div className="sm:flex justify-center items-center min-w-[25px] min-h-[25px] hidden">
                <Image
                  src="/icons/Alarm.png"
                  width={25}
                  height={25}
                  alt="Alarm"
                />
              </div>
              {/* icon for mobile menu */}
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden cursor-pointer z-50 "
              >
                <Image
                  src="/icons/Menu.png"
                  width={16}
                  height={16}
                  alt="menu_icon"
                />
              </div>

              {/* Mobile menu */}

              <div
                className={`${
                  isOpen ? "right-[-100%]" : "right-0 "
                } transition-all duration-700 md:hidden h-screen w-full z-40 absolute bg-white top-0 bottom-0 rounded-[7px]`}
              >
                <div className="w-full flex  justify-center items-center pt-10">
                  <Image
                    src={"/images/agent.png"}
                    width={75}
                    height={75}
                    alt="Agent"
                  />
                </div>
                <p className="text-center font-semibold text-black pt-4">
                  Temiloluwa
                </p>
                <div className="flex justify-center items-center pt-4 pb-6">
                  <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className=" bg-primary-100 flex justify-center items-center gap-4 py-[10px] px-5 rounded-[5px] w-[177px] h-[36px]"
                  >
                    <Image
                      src={"/icons/Circled Menu.png"}
                      width={20}
                      height={20}
                      alt="menu"
                      className=""
                    />
                    <Link
                      href={"/"}
                      className="text-white text-[12px] font-medium"
                    >
                      Dashboard
                    </Link>
                  </div>
                </div>
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={wrapperDiv}
                >
                  <div className={divStyle}>
                    <Image
                      src={"/icons/Male User.png"}
                      width={20}
                      height={20}
                      alt="male_user"
                    />
                    <Link href={"/profile"} className={linkStyle}>
                      My Profile
                    </Link>
                  </div>
                </div>
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={wrapperDiv}
                >
                  <div className={divStyle}>
                    <Image
                      src={"/icons/Heart.png"}
                      width={20}
                      height={20}
                      alt="male_user"
                    />
                    <Link href={"#"} className={linkStyle}>
                      Favorites
                    </Link>
                  </div>{" "}
                </div>
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={wrapperDiv}
                >
                  <div className={divStyle}>
                    <Image
                      src={"/icons/Agree.png"}
                      width={20}
                      height={20}
                      alt="male_user"
                    />
                    <Link href={"#"} className={linkStyle}>
                      My Mutuals
                    </Link>
                  </div>{" "}
                </div>
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={wrapperDiv}
                >
                  <div className={divStyle}>
                    <Image
                      src={"/icons/Romance.png"}
                      width={20}
                      height={20}
                      alt="male_user"
                    />
                    <Link href={"#"} className={linkStyle}>
                      Interested In Me
                    </Link>
                  </div>
                </div>
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={wrapperDiv}
                >
                  <div className={divStyle}>
                    <Image
                      src={"/icons/Gear.png"}
                      width={20}
                      height={20}
                      alt="male_user"
                    />
                    <Link href={"#"} className={linkStyle}>
                      Settings
                    </Link>
                  </div>{" "}
                </div>
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={wrapperDiv}
                >
                  <div className={divStyle}>
                    <Image
                      src={"/icons/Shutdown.png"}
                      width={20}
                      height={20}
                      alt="male_user"
                    />
                    <Link href={"#"} className={linkStyle}>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:flex justify-center items-center min-w-[50px] min-h-[50px] hidden">
                <Image
                  src="/images/agent.png"
                  width={50}
                  height={50}
                  alt="Alarm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
