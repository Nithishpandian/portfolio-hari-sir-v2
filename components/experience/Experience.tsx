import React from "react";

interface ExperienceCardProps {
  place: string;
  role: string;
  description: string;
  start: string;
  end: string;
}

const Experience = () => {
  return (
    <div
      id="Experience"
      className=" grid grid-cols-1 lg:grid-cols-5 gap-2 sm:gap-5 justify-around pt-4 pb-10 px-3 sm:px-4 md:px-8 lg:px-6 xl:px-10"
    >
      <div className=" col-span-2 flex flex-col gap-3">
        <h2 className="text-primary font-medium font-oswald text-[#acd800]">
          EXPERIENCE
        </h2>
        <h1 className="text-[#fafafa] text-2xl sm:text-4xl leading-tight font-bold font-montserrat">
          Driving growth through cybersecurity expertise
        </h1>
      </div>
      <div className=" col-span-3 flex flex-col gap-8 mt-10">
        <ExperienceCard
          place={"Sri Ramakrishna Engineering College"}
          role={"ASSOCIATE PROFESSOR"}
          description={
            "Over 17 years of teaching and leadership roles, including curriculum development, communication, and heading IT Services. Courses taught: Cybersecurity, Computer Networks, Blockchain, and Cryptography."
          }
          start={"2008"}
          end={"PRESENT"}
        />
        <ExperienceCard
          place={"Zyphron Technologies Pvt. Ltd."}
          role={"FOUNDER & CEO"}
          description={
            "Founded and lead a cybersecurity startup, delivering advanced secure systems solutions, strategic growth initiatives, and industry-focused training."
          }
          start={"2024"}
          end={"PRESENT"}
        />
        <ExperienceCard
          place={"CSIR-CMERI (IASc Fellowship)"}
          role={"RESEARCH FELLOW"}
          description={
            "Conducted research on Secure Blockchain-Federated Learning for Industrial IoT. Analyzed large-scale Digital Twin datasets, enhanced predictive maintenance, and contributed to blockchain security advancements."
          }
          start={"2025"}
          end={"2025"}
        />
        <ExperienceCard
          place={"SREC Alumni Association"}
          role={"VICE PRESIDENT"}
          description={
            "Strengthening alumni engagement and professional networking while supporting initiatives for students and graduates."
          }
          start={"2022"}
          end={"PRESENT"}
        />
        <ExperienceCard
          place={"IEEE & ISACA (Professional Memberships)"}
          role={"MEMBER"}
          description={
            "Active professional memberships with IEEE, IEEE Computer Society, and ISACA Coimbatore Chapter, contributing to cybersecurity and computer science communities."
          }
          start={"2024"}
          end={"PRESENT"}
        />
      </div>
    </div>
  );
};

export default Experience;

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  place,
  role,
  description,
  start,
  end,
}) => {
  return (
    <div className=" flex flex-col sm:flex-row items-start justify-between sm:gap-6 font-montserrat">
      <div className=" order-2 sm:order-1 flex flex-col gap-[7px]">
        <h1 className=" font-bold text-sm sm:text-base md:text-lg">{place}</h1>
        <h2 className=" text-xs font-semibold text-[#acd800] opacity-90">
          {role}
        </h2>
        <p className=" text-[#727272] font-semibold text-sm sm:text-base md:text-lg font-raleway">
          {description}
        </p>
      </div>
      <h2 className=" order-1 sm:order-2 text-[#acd800] sm:text-[#727272] text-nowrap text-xs sm:text-sm font-semibold min-w-32">
        {start}
        <span className=" mx-1">-</span> {end}
      </h2>
    </div>
  );
};
