import React from "react";

const Header = () => {
  return (
    <div className="h-[34vw] my-8 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="font-medium text-white text-[max(4.5vw,20px)]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia
          illum, quibusdam earum vitae amet? Pariatur voluptates dolores a fuga!
        </p>
        <button className="border-none text-[#747474] font-medium px-[2.3vw] py-[1vw] bg-white text-[max(1vw,13px)] rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
