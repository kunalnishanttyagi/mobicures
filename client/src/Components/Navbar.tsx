"use client";

import { FaPhoneAlt } from "react-icons/fa";

import { MdOutlineSettingsSuggest } from "react-icons/md";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-[60%] mx-auto z-50", className)}
    >
      <div className=' absolute top-[10px] left-[30px] z-20 flex justify-center items-center text-white ' >
             <MdOutlineSettingsSuggest size={50} />
             <h1 className=' text-2xl font-bold text-center'>Mobicures</h1>
         </div>
      <Menu setActive={setActive} >
        {/* <MenuItem setActive={setActive} active={active} item="Home"> */}
        
        {/* </MenuItem> */}
        <div className="flex text-white justify-center items-center gap-7">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-white text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm text-white grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex text-white flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        </div>
      </Menu>
      <div className=" text-white absolute text-[17px] top-[25px] right-10 flex justify-center items-center gap-7">
        <h3>Signin</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}



export default NavbarDemo;










// import Link from 'next/link';
// import React from 'react';
// import { FaPhoneAlt } from "react-icons/fa";

// import { MdOutlineSettingsSuggest } from "react-icons/md";
// const Navbar = () => {
//   return (
//     <nav className='w-screen text-black bg-white h-[8vh] flex justify-between px-2 ' >
//        {/* here we have three sections  */}
//         {/* first section of logoo and name */}
//         <div className=' flex justify-center items-center ' >
//             <MdOutlineSettingsSuggest size={50} />
//             <h1 className=' text-2xl font-bold text-center'>Mobicures</h1>
//         </div>
//         <ul className='flex justify-center items-center gap-4' >
//           <li>Services</li>
//           <li>Contact Us</li>
//           <li>Support</li>
//         </ul>
//         <div className=' flex justify-center items-center gap-7' >
//           <a href="tel:9017247247" className='flex gap-2 justify-center items-center' >
//             <FaPhoneAlt size={20}  />
//             <span className='text-sm font-bold' >+91 8285086402</span>
//           </a>
//           <div>Sign In</div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar
