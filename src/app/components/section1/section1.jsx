import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="flex container justify-between items-center flex-wrap sm:justify-center">
      <h1 className="section1Text1 mt-[40px]">Hi 👋, My name is Usmon Ib I build things for web</h1>
      <Image className="mt-[40px] " src="/50353683 1.png" alt="" width={300} height={300}/>
    </section>
  );
};

export default Section1;
