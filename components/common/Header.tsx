"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const scrambleText = (el: HTMLElement, originalText: string) => {
  const chars = "!@#$%^&*()_+{}:<>?|[];',./~`abcdefghijklmnopqrstuvwxyz";
  let iterations = 0;

  const interval = setInterval(() => {
    el.innerText = originalText
      .split("")
      .map((_, i) => {
        if (i < iterations) {
          return originalText[i];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    iterations += 0.35;
    if (iterations > originalText.length) clearInterval(interval);
  }, 50);
};

const Header: React.FC = () => {
  const contactTextRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView && contactTextRef.current) {
      scrambleText(contactTextRef.current, "CONTACT");
    }
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="flex items-start justify-between gap-5 py-5 font-medium font-oswald px-8"
    >
      <h1 className="text-lg text-[#acd800]">HARIHARA GOPALAN</h1>
      <div className="grid grid-cols-2 gap-2 w-fit">
        <div className="flex flex-col gap-1">
          <Link
            href="#"
            className="hover:text-[#acd800] duration-300 cursor-pointer"
          >
            HOME
          </Link>
          <Link
            href="#"
            className="hover:text-[#acd800] duration-300 cursor-pointer"
          >
            ABOUT
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="#"
            className="hover:text-[#acd800] duration-300 cursor-pointer"
          >
            EXPERIENCE
          </Link>
          <Link
            href="#"
            className="hover:text-[#acd800] duration-300 cursor-pointer"
          >
            TESTIMONIALS
          </Link>
        </div>
      </div>

      <button className="hover:text-[#acd800] text-[#acd800] duration-300 cursor-pointer">
        <span>CONTACT</span>
      </button>
    </div>
  );
};

export default Header;
