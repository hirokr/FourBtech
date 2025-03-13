"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";
import { Menu } from "lucide-react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className='py-5 allPadding flex justify-between items-center'>
      <Image src='/logo.png' width={150} height={150} alt='FourBtech' />
      <div className='hidden md:block '>
        <Navbar />
      </div>
      <div className="flex gap-5">
        <Button className='hidden sm:block '>Get Started</Button>
        <MobileNavbar menu={menu} setMenu={setMenu}/>
        <Button className='block md:hidden' onClick={() => setMenu(!menu)}>
          <Menu />
        </Button>
      </div>
    </header>
  );
};

export default Header;
