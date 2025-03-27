import Image from "next/image";
import React from "react";

const UserCard = ({
  src1,
  src2,
  src3,
  src4,
  text1,
  text2,
  text3,
  text4,
  text5,
  className,
}) => {
  return (
    <div className="w-[100%] h-[240px]  rounded-lg relative shadow-lg mb-5">
      <div className="w-full h-full">
        <div className="h-[35%] w-full relative">
          <Image fill src={src1} alt="image" className="h-full" />
        </div>
        <div className="h-[55%]  absolute top-4 w-full">
          <div className="flex w-full h-full justify-center items-center px-2">
            <div className="flex-1 text-[9px] pt-16 font-bold">
              <p className="">{text1}</p>
              <p className="">{text2}</p>
            </div>
            <div className="flex-1 relative ">
              <div className="min-h-[75px] min-w-[75px] rounded-full ">
                <Image fill src={src2} alt="image" />
              </div>
            </div>
            <div className="flex-1 text-[8px] mt-20 font-bold ">
              <p className="pl-5">{text3}</p>
              {text4 && (
                <p className="float-left flex justify-start items-center ">
                  <span className="">
                    <Image src={src3} width={10} height={10} alt="instagram" />
                  </span>
                  <span className="text-[7px]">{text4}</span>
                </p>
              )}
            </div>
          </div>
          <div className="px-2 pt-2 h-full">
            <p className="text-[7px] ">{text5}</p>
            {text5 === "NO bio available" && <div className="h-[30px] "></div>}
            <div className="flex justify-between items-center pt-2 ">
              <button className={className}>More Info</button>
              <Image src={src4} width={20} height={20} alt=" love" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
