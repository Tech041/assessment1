"use client";
import Container from "@/components/Container";
import UserCard from "@/components/UserCard";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// styles
const pStyle =
  "py-2 pl-3 hover:bg-primary-200/60 text-[10px] hover:text-white cursor-pointer relative";
const divStyle = "flex  items-center gap-4 py-5 hover:cursor-pointer";
const linkStyle = "text-[12px] font-medium ";
const wrapperDiv = "pl-24";
const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState("Dating");
  return (
    <main className="pt-28 bg-[#F6F6F6]">
      <section className="flex justify-between items-center px-5">
        <div className="flex-[2] flex  justify-between items-center ">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex-1 hidden md:block cursor-pointer "
          >
            <Image
              src="/icons/Menu.png"
              width={16}
              height={16}
              alt="menu_icon"
            />
          </div>
          <div className="flex-[0.5] md:hidden"></div>
          <div className="flex-[3] flex justify-start gap-5 items-center ">
            <div className="">
              <div className="">
                <Image
                  src="/images/agent.png"
                  width={100}
                  height={100}
                  alt="agent_image"
                />
              </div>
              <h2 className="font-bold text-black md:hidden ">
                Welcome, Temiloluwa
              </h2>
            </div>

            <div className="">
              <div className="hidden md:block">
                <h2 className="font-bold text-black ">Welcome, Temiloluwa</h2>
                <h4 className="capitalize font-semibold text-xs">
                  My profile completeness
                </h4>
              </div>
              <div className="xl:flex justify-center items-center gap-2 hidden">
                <div className="w-[176px] h-[8px] bg-[#D9D9D9] rounded-[50px] ">
                  <div className="w-[115px] h-full bg-primary-100 rounded-[50px]"></div>
                </div>
                <p className="text-[9px] font-semibold pb-2">60%</p>
              </div>
            </div>
          </div>
          {/* Div for Side Menu */}
          <div
            className={`${
              isOpen ? "left-[-100%]" : "left-16 "
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
                <Link href={"#"} className="text-white text-[12px] font-medium">
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
          <div className="flex-[3] xl:flex xl:justify-center xl:items-center">
            <div className="flex-1">
              <p className="capitalize font-semibold text-[12px] text-black w-ful ">
                Relationship type:
              </p>
            </div>
            <div className=" flex-[2] flex  items-center  py-4 ">
              {/* wrapper */}
              <div className="relative">
                <div className="flex justify-between items-center rounded-[8px] py-1 pr-2 pl-3 w-[118px] bg-white ">
                  <span className="text-[10px] capitalize">{options}</span>
                  <Image
                    onClick={() => setToggle((prev) => !prev)}
                    src="/icons/down.png"
                    width={8}
                    height={5}
                    alt="down_icon"
                    className={`cursor-pointer ${toggle ? "rotate-180" : ""}`}
                  />
                </div>

                <div
                  className={` absolute z-40 top-10 rounded-[8px] w-[120px] text-xs  bg-white  ${
                    toggle ? "block" : "hidden"
                  }`}
                >
                  <p
                    onClick={() => setOptions("Dating")}
                    className={`${pStyle} pt-4`}
                  >
                    Dating
                  </p>
                  <p onClick={() => setOptions("Marriage")} className={pStyle}>
                    Marriage
                  </p>
                  <p
                    onClick={() => setOptions("friendship")}
                    className={pStyle}
                  >
                    Frinedship
                  </p>
                  <p
                    onClick={() => setOptions("professional")}
                    className={`${pStyle} pb-3`}
                  >
                    Professional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex-1"></div>
      </section>
      <section className="w-full flex justify-center items-center md:pl-6">
        <Container>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-12">
            <UserCard
              src1={"/images/background_1.png"}
              src2={"/images/image_1.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Davina,23"}
              text2={"Abuja"}
              text3={"85% Match"}
              text4={"Verified Address"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_2.png"}
              src2={"/images/image_2.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite_red.png"}
              text1={"Emily,31"}
              text2={"Abuja"}
              text3={"80% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_3.png"}
              src2={"/images/image_3.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"John,28"}
              text2={"Delta"}
              text3={"72% Match"}
              text4={"Verified Address"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_4.png"}
              src2={"/images/image_4.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Mad,26"}
              text2={"Abuja"}
              text3={"77% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_5.png"}
              src2={"/images/image_5.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Love,26"}
              text2={"Lagos"}
              text3={"80% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-secondary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_6.png"}
              src2={"/images/image_6.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Karem,23"}
              text2={"Abuja"}
              text3={"85% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-secondary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_7.png"}
              src2={"/images/image_7.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Sharon,26"}
              text2={"Lagos"}
              text3={"80% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_8.png"}
              src2={"/images/image_8.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Kevin,30"}
              text2={"PH"}
              text3={"80% Match"}
              text5={"NO bio available"}
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_9.png"}
              src2={"/images/image_9.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Love,26"}
              text2={"Lagos"}
              text3={"80% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_10.png"}
              src2={"/images/image_10.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Lily,25"}
              text2={"Lagos"}
              text3={"89% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_11.png"}
              src2={"/images/image_11.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Davon,34"}
              text2={"Lagos"}
              text3={"80% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_12.png"}
              src2={"/images/image_12.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite_red.png"}
              text1={"Vivian,31"}
              text3={"71% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_13.png"}
              src2={"/images/image_13.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Davina,21"}
              text2={"Ibadan"}
              text3={"80% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_14.png"}
              src2={"/images/image_14.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Jack,30"}
              text2={"Lagos"}
              text3={"87% Match"}
              text5={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dictabore, eligendi nemo provident vero, consequatur iure debitis quasi remsaepe ipsam laboriosam. Porro sequi ipsa natus unde in. Consectetur?"
              }
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
            <UserCard
              src1={"/images/background_15.png"}
              src2={"/images/image_15.png"}
              src3={"/icons/instagram.png"}
              src4={"/icons/Favorite.png"}
              text1={"Dave,26"}
              text2={"Lagos"}
              text3={"80% Match"}
              text5={"NO bio available"}
              className={
                "text-[6px] bg-primary-100 px-2 py-1 text-white rounded-full"
              }
            />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Dashboard;
