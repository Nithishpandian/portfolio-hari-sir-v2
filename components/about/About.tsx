import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className=" mt-48 sm:mt-64 md:mt-96 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-around pt-14 pb-16 px-2 sm:px-3 md:px-8"
    >
      <div
        // variants={AboutAnimationVariantLeft}
        // initial="initial"
        // whileInView={"animate"}
        // viewport={{
        //   once: true,
        // }}
        className="flex flex-col gap-2 sm:gap-5 z-0 bg-[#181818] p-3 sm:p-5 rounded-3xl"
      >
        <h2 className="text-primary font-medium font-oswald text-[#acd800]">
          ABOUT ME
        </h2>
        <h1 className="text-[#fafafa] text-xl sm:text-3xl xl:text-[2.6rem] font-bold font-montserrat">
          A Cyber Security Specialist & Consultant
        </h1>
      </div>
      <div className="col-span-2 flex flex-col gap-3">
        <div className=" flex flex-col gap-4 bg-[#181818] py-3 sm:py-5 px-3 sm:px-6 rounded-3xl font-raleway text-justify">
          <h1 className="text-[#fafafa] text-base sm:text-xl xl:text-[1.6rem] font-bold">
            A seasoned academic with over 17 years of expertise in teaching,
            research, and consultancy, specializing in Cyber Security and
            Wireless Networks. Currently serving as an Associate Professor in
            Computer Science and Engineering, with several industry recognized
            certifications including CEH, CISO, and Certified Blockchain
            Associate.
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm lg:text-base">
            Instrumental in designing and implementing over 10 advanced
            cybersecurity courses and specializations across institutions. Has
            successfully established a Centre of Excellence in Cyber Security,
            fostering advanced research, student innovation, and industry
            collaboration. Widely recognized for bridging academic knowledge
            with real-world application through impactful research
            contributions, national-level hackathon mentorship, and professional
            training initiatives.
          </p>
        </div>
        <div
          className="flex items-center justify-between bg-[#181818] py-3 px-5 rounded-3xl"
          //   ref={countUpRef}
        >
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold text-[#acd800]">
              CERTIFICATION
            </p>
            {/* {isVisible && ( */}
            <div className="font-bold text-stone-50 text-lg sm:text-xl font-oswald">
              {/* <CountUp start={500} end={10} duration={3} /> */}
              <span>39</span>
              <span className="ml-1">+</span>
            </div>
            {/* )} */}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold text-[#acd800]">
              EXPERIENCE
            </p>
            {/* {isVisible && ( */}
            <div className="font-bold text-stone-50 text-lg sm:text-xl font-oswald">
              {/* <CountUp start={500} end={16} duration={3} /> */}
              <span>39</span>
              <span className="ml-1">+ Years</span>
            </div>
            {/* )} */}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-xs font-semibold text-[#acd800]">
              PROJECTS
            </p>
            {/* {isVisible && ( */}
            <div className="font-bold text-stone-50 text-lg sm:text-xl font-oswald">
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
