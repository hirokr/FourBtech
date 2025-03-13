"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "./ui/button";
import { X } from "lucide-react";

const MobileNavbar = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: (value: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={`top-0 right-0 allPadding flex justify-center items-center h-screen z-50 px-10 flex-col gap-10 bg-black transition-all duration-500 z-50${
        menu ? "w-full absolute" : "w-0 hidden"
      }`}
    >
      <Button
        className='absolute top-6 right-10'
        onClick={() => setMenu(!menu)}
      >
        <X className='h-10 w-10' />
      </Button>
      <ul className=' '>
        <li
          className={`${
            pathname === "/" ? "text-[#A0E00D]" : ""
          } mobileHeaderButton`}
        >
          <Link href='#'>Home</Link>
        </li>
        <li
          className={`${
            pathname === "/service" ? "text-[#A0E00D]" : ""
          } mobileHeaderButton`}
        >
          <Link href='#'>Service</Link>
        </li>
        <li
          className={`${
            pathname === "/about" ? "text-[#A0E00D]" : ""
          } mobileHeaderButton`}
        >
          <Link href='#'>About Us</Link>
        </li>
        <li
          className={`${
            pathname === "/blog" ? "text-[#A0E00D]" : ""
          } mobileHeaderButton`}
        >
          <Link href='#'>Blog</Link>
        </li>
        <li
          className={`${
            pathname === "/contact" ? "text-[#A0E00D]" : ""
          } mobileHeaderButton`}
        >
          <Link href='#'>Contac US</Link>
        </li>
      </ul>
      <Button className='block sm:hidden'>Get Started</Button>
    </nav>
  );
};

export default MobileNavbar;
