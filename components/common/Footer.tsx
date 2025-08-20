import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col pt-10 pb-8 px-8">
      <div className=" flex items-center gap-5 text-sm font-medium font-oswald -mb-5 z-30">
        <Link
          href={"#"}
          className="hover:text-[#acd800] duration-300 cursor-pointer"
        >
          LINKEDIN
        </Link>
        <Link
          href={"#"}
          className="hover:text-[#acd800] duration-300 cursor-pointer"
        >
          INSTAGRAM
        </Link>
        <Link
          href={"#"}
          className="hover:text-[#acd800] duration-300 cursor-pointer"
        >
          FACEBOOK
        </Link>
        <Link
          href={"#"}
          className="hover:text-[#acd800] duration-300 cursor-pointer"
        >
          TWITTER
        </Link>
      </div>
      <div className=" w-full">
        <h2 className=" flex items-center justify-between gap-1 text-center text-[7.5rem] font-extrabold opacity-50 font-montserrat">
          <span>HARIHARA</span> <span className="text-[#acd800">GOPALAN</span>
        </h2>
        <div className=" font-semibold flex items-center justify-between w-full font-oswald">
          <h2>HARIHARAGOPALAN75<span className="text-[#acd800]">@GMAIL.COM</span></h2>
          <div>
            WEBSITE BY <span className="text-[#acd800]">NITHISH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
