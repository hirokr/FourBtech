import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className='py-8 allPadding flex justify-between items-center'>
      <Image src='/logo.png' width={100} height={100} alt='FourBtech' />
      <div >
        <ul className='flex justify-between items-center gap-2 text-sm text-white/70'>
          <li className='footerLinks'>Home</li>
          <li className='footerLinks'>Service</li>
          <li className='footerLinks'>About Us</li>
          <li className='footerLinks'>Blog</li>
          <li className='footerLinks'>Contact US</li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <SiFacebook className='text-blue-500 h-5 w-5 bg-white rounded-full' />
        <SiLinkedin className='text-blue-700 h-5 w-5 bg-white rounded-sm' />
        <FaTwitter className='text-white h-6 w-6 p-1 bg-blue-400 rounded-full' />
      </div>
    </footer>
  );
};

export default Footer;
