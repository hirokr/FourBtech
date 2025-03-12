"use client"
import { Button } from "./ui/button";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <nav className="max-w-screen">
      <Link href='/'>
        <Button className='duration-300'> Get Started </Button>
      </Link>

    </nav>
  );
};

export default MobileNavbar;
