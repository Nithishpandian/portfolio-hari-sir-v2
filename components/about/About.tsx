import React from "react";

const About = () => {
  return (
    <div className=" mt-96 grid grid-cols-1 md:grid-cols-3 gap-4 justify-around pt-14 pb-16 px-8">
      <div
        // variants={AboutAnimationVariantLeft}
        // initial="initial"
        // whileInView={"animate"}
        // viewport={{
        //   once: true,
        // }}
        className="flex flex-col gap-5 z-0 bg-[#181818] p-5 rounded-3xl"
      >
        <h2 className="text-primary font-medium font-oswald text-[#acd800]">ABOUT ME</h2>
        <h1 className="text-[#fafafa] text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-montserrat">
          A Cyber Security Specialist & Consultant
        </h1>
      </div>
      <div className="col-span-2 flex flex-col gap-3">
        <div className=" flex flex-col gap-4 bg-[#181818] py-5 px-6 rounded-3xl font-raleway text-justify">
          <h1 className="text-[#fafafa] text-xl sm:text-2xl sm:text-[1.6rem] font-bold">
            I have also been involved in conducting technical sessions,
            workshops, and seminars on cybersecurity, blockchain, and network
            domains for students, faculty, and industry professionals.
          </h1>
          <p className="text-stone-300 text-sm lg:text-base">
            Additionally, I have been providing security consulting and
            penetration testing services to startups and organizations, helping
            them to protect their digital assets and systems from cyber threats.
            My mission is to empower and educate the next generation of
            cybersecurity professionals and leaders with the knowledge, skills,
            and innovation they need to defend the digital frontiers.
          </p>
        </div>
        <div
          className="flex items-center justify-between bg-[#181818] py-3 px-5 rounded-3xl"
          //   ref={countUpRef}
        >
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold text-[#acd800]">CERTIFICATION</p>
            {/* {isVisible && ( */}
            <div className="font-bold text-stone-50 text-xl font-oswald">
              {/* <CountUp start={500} end={10} duration={3} /> */}
              <span>39</span>
              <span className="ml-1">+</span>
            </div>
            {/* )} */}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold text-[#acd800]">EXPERIENCE</p>
            {/* {isVisible && ( */}
            <div className="font-bold text-stone-50 text-xl font-oswald">
              {/* <CountUp start={500} end={16} duration={3} /> */}
              <span>39</span>
              <span className="ml-1">+ Years</span>
            </div>
            {/* )} */}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold text-[#acd800]">PROJECTS</p>
            {/* {isVisible && ( */}
            <div className="font-bold text-stone-50 text-xl font-oswald">
              {/* <CountUp start={500} end={40} duration={3} /> */}
              <span>39</span>
              <span className="ml-1">+</span>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
