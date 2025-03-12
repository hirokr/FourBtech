"use client";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar side='left' >
      <SidebarContent className='colConatiner gap-10'>
        <Image src='/logo.png' width={150} height={150} alt='FourBtech' />
        <ul className=' colConatiner gap-3'>
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
      </SidebarContent>
    </Sidebar>
  );
}
