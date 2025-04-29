"use client";
import { useState } from "react";
import testimonial_decoration from "@/assets/images/testimonial_decor.svg";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Cristoph Putin",
    role: "CTO",
    text: "Alexandra brought a fresh perspective and a wealth of exper tise to our collaboration. Her attention to detail and commit ment to delivering top-notch.",
  },
  {
    name: "Jane Smith",
    role: "CEO",
    text: "Boby brought a fresh perspective and a wealth of exper tise to our collaboration. Her attention to detail and commit ment to delivering top-notch.",
  },
  {
    name: "John Davis",
    role: "Marketing Director",
    text: "Niklas brought a fresh perspective and a wealth of exper tise to our collaboration. Her attention to detail and commit ment to delivering top-notch.",
  },
  {
    name: "Emma Wilson",
    role: "Product Manager",
    text: "Stanly brought a fresh perspective and a wealth of exper tise to our collaboration. Her attention to detail and commit ment to delivering top-notch.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full text-white rounded-lg py-12 grid md:grid-cols-3 md:items-start gap-5 px-8">
      <div className="md:col-span-2 md:p-10 flex flex-col gap-8 rounded-3xl border-2 border-[#121212] bg-[#181818]">
        <p className="text-xl leading-relaxed font-raleway opacity-90">
          {testimonials[currentIndex].text}
        </p>

        <div className="flex items-center justify-between">
          <div className=" font-montserrat">
            <p className="font-medium text-lg ">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-400 font-medium">
              {testimonials[currentIndex].role}
            </p>
          </div>

          <div className="flex space-x-4 mr-5">
            <button
              onClick={prevSlide}
              className="text-gray-300 cursor-pointer hover:text-[#acd800] duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
              {/* ← */}
            </button>
            <button
              onClick={nextSlide}
              className="text-gray-300 cursor-pointer hover:text-[#acd800] duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
              {/* → */}
            </button>
          </div>
        </div>
      </div>

      <div className=" relative hidden md:flex justify-center items-center h-full md:p-8 bg-[#111111] rounded-3xl ">
        <h2 className="text-4xl md:text-5xl font-bold font-oswald leading-16 text-right">
          <span>Excellence In</span>
          <br />
          <span className="text-[#acd800]">Action.</span>
        </h2>
        <Image
          className=" absolute right-[20%] h-fit w-40 rotate-12 opacity-30"
          src={testimonial_decoration}
          alt="Testi"
        />
      </div>
    </div>
  );
}
