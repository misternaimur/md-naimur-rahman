/** @format */

import Image from "next/image";

const Logo = ({ className = "" }) => {
  return (
    <Image
      src="/asset/logo.png"
      alt="Md Naimur Rahman logo"
      width={72}
      height={36}
      priority
      className={`h-9 w-auto object-contain ${className}`}
    />
  );
};

export default Logo;
