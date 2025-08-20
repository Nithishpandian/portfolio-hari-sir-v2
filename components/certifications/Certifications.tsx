import React from "react";
import certificate1 from "@/assets/images/certificate-1.png";
import certificate2 from "@/assets/images/certificate-2.png";
import certificate3 from "@/assets/images/certificate-3.png";
import certificate4 from "@/assets/images/certificate-4.png";
import Image from "next/image";
import ec_council_logo from "@/assets/images/ec-council-logo.webp";
import cisco_logo from "@/assets/images/C-CISO-logo.svg";
import kba_logo from "@/assets/images/kba_logo.png";
import Marquee from "react-fast-marquee";

const Certifications = () => {
  return (
    <div className="relative pt-44 pb-24 overflow-hidden px-8">
      {/* Top banner with rotation */}
      <div className="absolute top-20 left-0 w-[120%] -ml-[10%] z-30">
        <div className="w-full bg-[#acd800] py-4 transform -rotate-2 overflow-hidden opacity-80">
          <div className="text-[#fafaf8] text-xl md:text-2xl font-bold px-4 whitespace-nowrap">
            <Marquee pauseOnHover speed={80} gradient={false}>
              <span className="mx-3 flex items-center gap-1">
                <Image
                  className=" w-24 h-6 object-contain"
                  src={ec_council_logo}
                  alt="EC-Council"
                />
                EC-COUNCIL
                <span>CERTIFIED ETHICAL HACKER</span>
              </span>
              <span className="mx-3">♦</span>
              <span className="mx-3 flex items-center gap-1">
                <Image
                  className=" w-24 h-6 object-contain"
                  src={ec_council_logo}
                  alt="EC-Council"
                />
                CERTIFIED EC-COUNCIL INSTRUCTOR
              </span>
              <span className="mx-3">♦</span>
              <span className="mx-3 flex items-center gap-4">
                <Image
                  className=" w-fit h-7 object-contain"
                  src={kba_logo}
                  alt="CISCO"
                />
                KBA CERTIFIED BLOCKCHAIN ASSOCIATE
              </span>
              <span className="mx-3">♦</span>
              <span className="mx-3 flex items-center gap-1">
                <Image
                  className=" w-fit -mr-5 h-8 object-cover"
                  src={cisco_logo}
                  alt="CISCO"
                />
                EC-COUNCIL CERTIFIED CHIEF INFORMATION SECURITY OFFICER
              </span>
              <span className="mx-3">♦</span>
            </Marquee>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-0 w-[120%] -ml-[10%]">
        <div className="w-full bg-[#1d1d1d] py-8 transform rotate-4 overflow-hidden "></div>
      </div>

      {/* Certificate marquee */}
      {/* <div className="mt-24 mb-6">
        <Marquee
          speed={60}
          gradient={false}
          className="py-8 border-y border-stone-600 bg-[#050505]"
        >
          <div className="flex items-center gap-32 justify-around">
            <div className="mx-8 flex flex-col items-center">
              <Image
                className="w-44 h-24 grayscale"
                src={certificate1}
                alt="certificate-1"
              />
            </div>
            <div className="mx-8 flex flex-col items-center">
              <Image
                className="w-44 h-24 grayscale"
                src={certificate2}
                alt="certificate-2"
              />
            </div>
            <div className="mx-8 flex flex-col items-center">
              <Image
                className="w-44 h-24 grayscale"
                src={certificate3}
                alt="certificate-3"
              />
            </div>
            <div className="mx-8 flex flex-col items-center">
              <Image
                className="w-44 h-24 grayscale"
                src={certificate4}
                alt="certificate-4"
              />
            </div>
          </div>
        </Marquee>
      </div> */}
    </div>
  );
};

export default Certifications;
