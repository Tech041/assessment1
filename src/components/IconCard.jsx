import Image from "next/image";
import React from "react";

const IconCard = ({ src, alt, text, className }) => {
  return (
    <div className="w-[56px] h-[75px]">
      <div className={className}>
        <Image src={src} alt={alt} width={30} height={30} />
      </div>
      <p className="h-[20px] w-full flex  justify-center  text-center text-[8px] font-semibold">
        {text}
      </p>
    </div>
  );
};

export default IconCard;
