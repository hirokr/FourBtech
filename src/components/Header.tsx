import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className='py-5 allPadding flex justify-between items-center'>
      <Image src='/logo.png' width={200} height={200} alt='FourBtech' />
      <div className='hidden md:block '>
        <Navbar />
      </div>
      <Button>Get Started</Button>
    </header>
  );
};

export default Header;
