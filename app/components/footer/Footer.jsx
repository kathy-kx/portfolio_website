import React from "react";
import Link from "next/link";
import ThemeLogo from "../ThemeLogo";

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-gray-600 border-l-transparent border-r-transparent] text-white">
      <div className="container p-16 flex justify-between">
        <Link href={"/"} className="text-2xl md:text-5xl font-semibold">
          <ThemeLogo
            width={40}
            height={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px]"
          />
        </Link>
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
