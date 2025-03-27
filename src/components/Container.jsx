import React from "react";

const Container = ({ children }) => {
  return (
    <div className="p-4 w-[84%] flex flex-col justify-center items-center " >
      {children}
    </div>
  );
};

export default Container;
