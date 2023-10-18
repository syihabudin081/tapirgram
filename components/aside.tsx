import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileNav from "./mobilenav";
import DesktopNav from "./desktopnav";
function Aside() {
  return (
    <>
      <DesktopNav />
     <MobileNav/>
    </>
  );
}

export default Aside;
