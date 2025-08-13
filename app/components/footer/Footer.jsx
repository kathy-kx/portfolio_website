import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent] text-white">
      <div className="container p-16 flex justify-between">
        <span>
          <Image src="/logo_small.png" alt="Logo" width={40} height={40} />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
