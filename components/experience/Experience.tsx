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
    <div className=" grid grid-cols-5 gap-5 justify-around pt-4 pb-10 px-10">
      <div className=" col-span-2 flex flex-col gap-3">
        <h2 className="text-primary font-medium font-oswald text-[#acd800]">
          EXPERIENCE
        </h2>
        <h1 className="text-[#fafafa] text-3xl sm:text-4xl leading-tight font-bold font-montserrat">
          Driving growth through cybersecurity expertise
        </h1>
      </div>
      <div className=" col-span-3 flex flex-col gap-8 mt-10">
        <ExperienceCard
          place={"SRI RAMAKRISHNA ENGINEERING COLLEGE"}
          role={"PROFESSOR"}
          description={
            "Developed and taught courses including Network Security, Cryptography, and Secure Software Development."
          }
          start={"2012"}
          end={"PRESENT"}
        />
        <ExperienceCard
          place={"Zyphron Technologies"}
          role={"FOUNDER & CEO"}
          description={
            "Built innovative cybersecurity solutions, led strategic growth, and delivered advanced training in secure systems and network defense."
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
    <div className=" flex items-start justify-between gap-6 font-montserrat">
      <div className=" flex flex-col gap-[10px]">
        <h1 className=" font-bold text-lg">{place}</h1>
        <h2 className=" text-xs font-semibold text-[#acd800] opacity-90">
          {role}
        </h2>
        <p className=" text-[#727272] font-semibold text-lg font-raleway">
          {description}
        </p>
      </div>
      <h2 className=" text-nowrap text-sm font-semibold text-[#727272] min-w-32">
        {start}
        <span className=" mx-1">-</span> {end}
      </h2>
    </div>
  );
};
