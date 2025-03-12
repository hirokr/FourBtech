"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='bConatiner'>
      <ul className='bConatiner gap-3 '>
        <li className={`${pathname === "/" ? "text-[#A0E00D]" : ""}`}>
          <Link href='#'>Home</Link>
        </li>
        <li
          className={`${
            pathname === "/service" ? "text-[#A0E00D]" : ""
          } headerButton`}
        >
          <Link href='#'>Service</Link>
        </li>
        <li
          className={`${
            pathname === "/about" ? "text-[#A0E00D]" : ""
          } headerButton`}
        >
          <Link href='#'>About Us</Link>
        </li>
        <li
          className={`${
            pathname === "/blog" ? "text-[#A0E00D]" : ""
          } headerButton`}
        >
          <Link href='#'>Blog</Link>
        </li>
        <li
          className={`${
            pathname === "/contact" ? "text-[#A0E00D]" : ""
          } headerButton`}
        >
          <Link href='#'>Contac US</Link>
        </li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
