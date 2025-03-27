"use client";
import Container from "@/components/Container";
import IconCard from "@/components/IconCard";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const divStyle = "flex  items-center gap-4 py-5 hover:cursor-pointer";
const linkStyle = "text-[12px] font-medium ";
const wrapperDiv = "pl-24";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="pt-28 bg-[#F6F6F6] h-full w-full pb-5 ">
      <section className="">
        <div className="flex justify-between items-center px-5">
          <div className="flex-1 ">
            {/* Menu icon */}
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex-1 hidden  cursor-pointer md:flex justify-start items-center pl-4  "
            >
              <Image
                src="/icons/menu.png"
                width={16}
                height={16}
                alt="menu_icon"
              />
            </div>
          </div>
          <div className="flex-[15] ">
            <div className="w-[93%] h-[198px] rounded-[8px] bg-[url(/images/background.png)] bg-no-repeat bg-cover  relative">
              <div className="flex justify-between items-center w-full px-10 pt-4 ">
                <div className="">
                  <Link href={"/"}>
                    <button className="w-[65px] h-[28px] text-[8px] md:text-[12px] ] cursor-pointer  text-white rounded-[5px] bg-primary-200/60">
                      Back
                    </button>
                  </Link>
                </div>
                <div className="flex justify-end   ">
                  <button className="w-[109px] h-[28px] text-[8px] md:text-[12px]  text-white flex items-center justify-center  rounded-[5px] px-[10px] bg-primary-200/60">
                    Update Cover
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center items-center ">
                <div className="flex-1 "></div>
                <div className="flex-1">
                  <div className="flex justify-start gap-6 items-center pt-6 font-semibold">
                    <p className="">Temololuwa,27</p>
                    <span className="">
                      <Image
                        src={"/icons/Create.png"}
                        width={20}
                        height={20}
                        alt="create_icon"
                      />
                    </span>
                  </div>
                  <p className="pt-2 font-semibold">Lagos</p>
                </div>
                <div className="flex-1 "></div>
                <div className="flex-1 "></div>
              </div>

              {/* Div for Menu */}

              <div
                className={`${
                  isOpen ? "left-[-100%]" : "left-6 "
                } transition-all duration-700 hidden md:block  h-[652px] w-[284px] z-30 absolute bg-white top-42 rounded-[7px]`}
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
                  <div className=" bg-primary-100 flex justify-center items-center gap-4 py-[10px] px-5 rounded-[5px] w-[177px] h-[36px]">
                    <Image
                      src={"/icons/Circled Menu.png"}
                      width={20}
                      height={20}
                      alt="menu"
                      className=""
                    />
                    <Link
                      href={"#"}
                      className="text-white text-[12px] font-medium"
                    >
                      Dashboard
                    </Link>
                  </div>
                </div>
                <div className={wrapperDiv}>
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
                <div className={wrapperDiv}>
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
                <div className={wrapperDiv}>
                  <div className={divStyle}>
                    <Image
                      src={"/icons/agree.png"}
                      width={20}
                      height={20}
                      alt="male_user"
                    />
                    <Link href={"#"} className={linkStyle}>
                      My Mutuals
                    </Link>
                  </div>{" "}
                </div>
                <div className={wrapperDiv}>
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
                <div className={wrapperDiv}>
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
                <div className={wrapperDiv}>
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

              {/* Agent image */}
              <div className="w-[180px] h-[180px] absolute top-[30%] left-[6%] hidden xl:block ">
                <div className="w-full h-full relative">
                  <Image
                    src={"/images/travel-agent.png"}
                    width={180}
                    height={180}
                    alt="travel_agent"
                  />
                </div>
                <span className="absolute right-[-20px] bottom-[-16px] cursor-pointer">
                  <Image
                    src={"/icons/Add.png"}
                    width={30}
                    height={30}
                    alt="Add"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end items-center pr-28">
          <Container>
            <div className="w-full flex justify-end items-center ">
              <div className=" w-full flex justify-between items-center gap-3 ">
                <div className="flex-1 hidden md:block "></div>
                <div className="flex-1 flex justify-center md:justify-end items-center gap-4 w-full md:w-auto ">
                  <button className="w-[83px] h-[31px] rounded-full bg-primary-100 text-white text-[8px] md:text-[12px]  font-medium capitalize">
                    edit profile
                  </button>
                  <button className="w-[119px] h-[31px] rounded-full bg-primary-100 text-white text-[8px] md:text-[12px] font-medium capitalize">
                    edit match setup
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="flex  flex-col justify-center items-center">
        {/*  bio section */}
        <div className="w-[85%] flex justify-center items-center  ">
          <div className="flex-1 w-[30%] flex justify-start">
            <div className="flex-[4] ">
              <div className="w-full  bg-white h-[81px] rounded-[6px]">
                <p className="flex  items-center gap-4 pl-5 pt-4 text-primary-200/60">
                  <span className="text-[12px]">A few words about myself</span>
                  <Image
                    src={"/icons/Pencil.png"}
                    width={20}
                    height={20}
                    alt="pencil"
                  />
                </p>
              </div>
            </div>
            <div className="lg:flex-1"></div>
          </div>
          <div className="lg:flex-1"></div>
        </div>
        {/* Images section */}
        <div className="w-[85%] flex justify-center items-center mt-5 ">
          <div className="flex-1 w-[30%] flex justify-start">
            <div className="flex-[4] ">
              <div className="w-[91%] lg:w-full  bg-white h-[99px] rounded-[6px] flex justify-start items-center gap-4 px-10">
                <div className="w-[70px] h-[70px] rounded-[8px] border border-primary-200/60 relative">
                  <Image fill src={"/images/travel-agent.png"} alt="agent" />
                </div>
                <div className="w-[70px] h-[70px] rounded-[8px] border border-primary-200/60">
                  <div className="flex flex-col justify-center items-center pt-2">
                    <h4 className="w-[41px] h-[10px] text-[8px] ">Add photo</h4>
                    <div className="w-[30px] h-[30px] relative mt-2 pt-2">
                      <Image
                        fill
                        src={"/icons/Add Image.png"}
                        alt="add_image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] rounded-[8px] border border-primary-200/60">
                  <div className="flex flex-col justify-center items-center pt-2">
                    <h4 className="w-[41px] h-[10px] text-[8px] ">Add photo</h4>
                    <div className="w-[30px] h-[30px] relative mt-2 pt-2">
                      <Image
                        fill
                        src={"/icons/Add Image.png"}
                        alt="add_image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] rounded-[8px] border border-primary-200/60 hidden md:block">
                  <div className="flex flex-col justify-center items-center pt-2">
                    <h4 className="w-[41px] h-[10px] text-[8px] ">Add photo</h4>
                    <div className="w-[30px] h-[30px] relative mt-2 pt-2">
                      <Image
                        fill
                        src={"/icons/Add Image.png"}
                        alt="add_image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] rounded-[8px] border border-primary-200/60 hidden md:block">
                  <div className="flex flex-col justify-center items-center pt-2">
                    <h4 className="w-[41px] h-[10px] text-[8px] ">Add photo</h4>
                    <div className="w-[30px] h-[30px] relative mt-2 pt-2">
                      <Image
                        fill
                        src={"/icons/Add Image.png"}
                        alt="add_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-1"></div>
          </div>
          <div className="flex-1"></div>
        </div>
        {/* Card section */}
        <div className="w-[85%] justify-center items-center mt-5">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {/* first card */}
            <div className="w-full h-[408px] bg-white rounded-[8px]">
              <div className="flex justify-between items-center px-5 pt-4">
                <h4 className="capitalize text-[12px] font-semibold">
                  my hobbies
                </h4>
                <span className="">
                  <Image
                    src={"/icons/Create.png"}
                    width={20}
                    height={20}
                    alt="create"
                  />
                </span>
              </div>
              <div className="pt-10 grid grid-cols-4 gap-3 px-5">
                {/* Icons */}
                <div className="w-[56px] h-[75px]">
                  <div className="w-full h-[50px] relative flex justify-center items-center rounded-full">
                    <Image
                      fill
                      src={"/icons/Umbrella In Circle.png"}
                      alt="icon"
                    />
                  </div>
                  <p className="h-[20px] w-full flex  justify-center  text-center text-[8px] font-semibold">
                    Laying on the Beach
                  </p>
                </div>
                <IconCard
                  src={"/icons/Mountain Biking.png"}
                  alt={"Bike_icon"}
                  text={"Biking"}
                  className={
                    "w-[50px] h-[50px] relative flex justify-center items-center rounded-full bg-red-800 "
                  }
                />{" "}
                <IconCard
                  src={"/icons/Rice Bowl.png"}
                  alt={"Bowl_icon"}
                  text={"Cooking"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-yellow-400"
                  }
                />{" "}
                <IconCard
                  src={"/icons/Tango.png"}
                  alt={"Dancee_icon"}
                  text={"Dancing"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-purple-500"
                  }
                />{" "}
                <IconCard
                  src={"/icons/Museum.png"}
                  alt={"museum_icon"}
                  text={"Museums and Art"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-cyan-500"
                  }
                />
              </div>
            </div>
            {/* second card */}
            <div className="w-full h-[408px] bg-white rounded-[8px]">
              <div className="flex justify-between items-center px-5 pt-4">
                <h4 className="capitalize text-[12px] font-semibold">
                  my interests
                </h4>
                <span className="">
                  <Image
                    src={"/icons/Create.png"}
                    width={20}
                    height={20}
                    alt="create"
                  />
                </span>
              </div>
              <div className="pt-10 grid grid-cols-4 gap-3 px-5">
                {/* Icons */}
                <IconCard
                  src={"/icons/Airplane Take Off.png"}
                  alt={"Airplane_icon"}
                  text={"Travel"}
                  className={
                    "w-[50px] h-[50px] relative flex justify-center items-center rounded-full bg-blue-800 "
                  }
                />{" "}
                <IconCard
                  src={"/icons/Paintbrush.png"}
                  alt={"brush_icon"}
                  text={"Drawing"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-pink-400"
                  }
                />{" "}
                <IconCard
                  src={"/icons/Hourglass.png"}
                  alt={"Glass_icon"}
                  text={"History"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-primary-100"
                  }
                />{" "}
                <IconCard
                  src={"/icons/Small Axe.png"}
                  alt={"axe_icon"}
                  text={"Woodworking"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-green-500"
                  }
                />
                <IconCard
                  src={"/icons/Camera.png"}
                  alt={"camera_icon"}
                  text={"Photography"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-yellow-300"
                  }
                />{" "}
                <IconCard
                  src={"/icons/Quill With Ink.png"}
                  alt={"quill_icon"}
                  text={"Poetry"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-green-800"
                  }
                />
                <IconCard
                  src={"/icons/Needle.png"}
                  alt={"needle_icon"}
                  text={"Knitting"}
                  className={
                    "w-[50px] h-[50px] relative rounded-full  flex justify-center items-center bg-primary-200"
                  }
                />
              </div>
            </div>
            {/* Third card */}
            <div className="w-full h-[408px] bg-white rounded-[8px]">
              <h4 className="pt-5 px-5 text-[12px] font-semibold">About me</h4>
              <div className="pt-10 flex flex-col justify-center items-start px-5 text-[12px] font-semibold">
                {/* Icons */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_1.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className=" text-[10px] font-normal">Gender:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Male</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_2.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal">
                    <p className="">Age:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">27</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_3.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Occupation:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Engineer</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_4.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Relationship:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Single</p>
                  </div>
                </div>{" "}
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_5.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px]  text-[10px] font-normal">
                    <p className="">Location:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Lagos</p>
                  </div>
                </div>{" "}
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_6.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Height Range:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">5'5-6.0</p>
                  </div>
                </div>{" "}
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_7.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Weight Range:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">60-70kg</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_8.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px]  text-[10px] font-normal">
                    <p className="">Religion:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Christianity</p>
                  </div>
                </div>{" "}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_9.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Nationality:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Nigerian</p>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth card */}
            <div className="w-full h-[408px] bg-white rounded-[8px]">
              <h4 className="pt-5 px-5 text-[12px] font-semibold">
                A'm Looking for
              </h4>
              <div className="pt-10 flex flex-col justify-center items-start px-5 text-[12px] font-semibold">
                {/* Icons */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_1.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className=" text-[10px] font-normal">Gender:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Female</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_2.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal">
                    <p className="">Age:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">18-25</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_3.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Occupation:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Engineer</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_4.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Relationship:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Single</p>
                  </div>
                </div>{" "}
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_5.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px]  text-[10px] font-normal">
                    <p className="">Location:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Lagos</p>
                  </div>
                </div>{" "}
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_6.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Height Range:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">5'5-6.0</p>
                  </div>
                </div>{" "}
                {/*  */}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_7.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Weight Range:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">60-70kg</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_8.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px]  text-[10px] font-normal">
                    <p className="">Religion:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Christianity</p>
                  </div>
                </div>{" "}
                <div className="flex justify-start items-center gap-5 ">
                  <div className="w-[35px] h-[35px] ">
                    <div className="w-[30px] h-[30px] bg-primary-100 relative flex justify-center items-center rounded-full">
                      <Image fill src={"/icons/icons_9.png"} alt="icon" />
                    </div>
                    <p className="h-[1px] w-full flex  justify-center  text-center text-[8px] font-semibold text-[#F6F6F6]">
                      .
                    </p>
                  </div>
                  <div className="w-[100px] text-[10px] font-normal ">
                    <p className="">Nationality:</p>
                  </div>
                  <div className="w-[70px]">
                    <p className="">Nigerian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
