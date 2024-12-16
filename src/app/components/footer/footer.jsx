import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex justify-between mt-[100px] flex-wrap sm:justify-center">
        <div className="divImages">
          <h1 className="iconText">
            {"{ 007 }"} <br /> <span className="nameIcon">usmonib</span>
          </h1>
        </div>
        <div className="flex items-center flex-wrap sm:justify-center gap-4 w-[600px] justify-between">
          <h1>+992 888 55 07 79</h1>
          <h1>ibragimovusmon73@gmail.com</h1>
          <div className="flex w-[100px] justify-between">
            <Link target="_blank" href="https://github.com/ibragimzodaa">
              <Image width={20} height={20} alt="" src="/Vector (1).svg" />
            </Link>
            <Link target="_blank" href="https://t.me/usmon2oo8">
              <Image
                width={20}
                height={20}
                alt=""
                src="/ant-design_twitter-circle-filled (1).svg"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/usmon-ibragimov-252613341/"
            >
              <Image
                width={20}
                height={20}
                alt=""
                src="/entypo-social_linkedin-with-circle (1).svg"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="container" />
      <div className="flex justify-between mt-[20px] mb-[40px] flex-wrap sm:justify-center sm:gap-[30px]">
      <div className="flex w-[500px] justify-between">
        <p>Home</p>
        <p>About</p>
        <p>Tech Stack</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <h1>Designed and built by Pavan MG with Love & Coffee</h1>
      </div>
    </footer>
  );
};

export default Footer;
