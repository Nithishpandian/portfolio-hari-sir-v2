import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col pt-10 pb-8 px-3 sm:px-5 md:px-7 lg:px-8">
      <div className=" flex items-center gap-5 text-sm font-medium font-oswald z-30">
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
        <h2 className=" flex items-center justify-between gap-1 text-center text-3xl sm:text-[3.3rem] md:text-[4rem] lg:text-7xl xl:text-8xl 2xl:text-[7.5rem] font-extrabold opacity-50 font-montserrat">
          <span>HARIHARA</span> <span className="text-[#acd800">GOPALAN</span>
        </h2>
        <div className=" font-semibold flex flex-col sm:flex-row items-end sm:items-center justify-between w-full font-oswald">
          <h2>
            HARIHARAGOPALAN75<span className="text-[#acd800]">@GMAIL.COM</span>
          </h2>
          <div>
            WEBSITE BY <span className="text-[#acd800]">NITHISH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
