import React from "react";
import profile_img from "@/assets/images/profile.jpg";
import Image from "next/image";

const Hero_section = () => {
  return (
    <div className="pt-10 pb-6 h-fit relative px-8">
      <div className=" flex flex-col text-9xl font-montserrat font-bold ">
        <h1 className=" text-nowrap ">
          HEY, <span className=" mx-2"></span>I'M<span className=" mx-2"></span>{" "}
          HARI HARA
        </h1>
        <h1 className=" bg-[#0b0b0b] text-[#acd800] z-50 w-fit pt-2 pb-5 pr-20 rounded-r-4xl">
          GOPALAN
        </h1>
      </div>
      <Image
        className=" absolute top-[53%] rounded-4xl max-w-[95vw] max-h-[500px] object-cover grayscale hover:grayscale-0 transition duration-300"
        src={profile_img}
        alt="Profile"
      />
    </div>
  );
};

export default Hero_section;
