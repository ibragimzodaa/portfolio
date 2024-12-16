import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="container">
      <section className="max-w-[1600px] mx-auto bg-green  bg-red mt-[200px] flex sm:flex-wrap sm:justify-center">
        <div className="col-span-1 row-span-1 bg-red w-[70%]">
          <h1 className="text-[#42446E] text-[42px] font-bold">About Me</h1>
          <p className="text-[18px] font-medium mt-[10px] text-[#666666]">
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            y4ou to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </p>
          <div className="col-span-1 row-span-1 bg-red w-[70%]">
          <h1 className="text-[#42446E] text-[42px] font-bold">Education</h1>
          <div className="flex items-center mt-[15px] gap-[40px]">
            <p className="text-[18px] font-medium text-[#666666]">
              Bachelor in Electronics & Communication
            </p>
            <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">
              Full Time
            </button>
          </div>
        </div>
        </div>
        <div className="col-span-1 bg-500 flex flex-col items-end w-[80%] row-span-2">
          <h1 className="text-[#42446E] mb-[30px] text-[42px] font-bold">
            Work Experience
          </h1>
          <div className="w-[70%] border-b-[2px] py-[20px] border-[#dadada] justify-between flex items-center">
            <p className="text-[23px] text-[#666666]">Junior Web Developer</p>
            <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">
              Full Time
            </button>
          </div>
          <div className="w-[70%] border-b-[2px] py-[20px] border-[#dadada] justify-between flex items-center">
            <p className="text-[23px] text-[#666666]">Web Development Intern</p>
            <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">
              Intership
            </button>
          </div>
          <div className="w-[70%] border-b-[2px] py-[20px] border-[#dadada] justify-between flex items-center">
            <p className="text-[23px] text-[#666666]">SEO / SEM Specialist</p>
            <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">
              Intership
            </button>
          </div>
        </div>

      </section>

      <section className="max-w-[1600px] flex flex-col items-center mx-auto mt-[130px]">
        <h1 className="text-[#42446E] text-[46px] font-bold">My Tech Stack</h1>
        <p className="mt-[10px] text-[33px] font-medium text-[#777777] sm:text-center">
          Technologies I’ve been working with recently
        </p>
        <div className="w-[100%] justify-between flex flex-wrap sm:justify-center mt-[50px]">
          <Image
            src="/html.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/css.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/js.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/react.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/tailwind.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/git.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/github.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/next_js.png"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
          <Image
            src="/vscode.svg"
            width={500}
            height={0}
            className="w-[150px] mt-[70px] mr-[100px]"
            alt=""
          />
        </div>
      </section>
      

      <section className="max-w-[1600px]  flex flex-col items-center mx-auto mt-[230px]">
        <h1 className="text-[#42446E] text-[46px] font-bold">Projects</h1>
        <p className="mt-[10px] text-[33px] font-medium text-[#777777]">Things I’ve built so far</p>
        <div className="w-[100%] mt-[50px] flex flex-wrap justify-between sm:justify-center">
          <div className="w-[30%] sm:w-[100%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400}
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="https://github.com/ibragimzodaa/homework3" target="_blank" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[100%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img1.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} // Пример пропорций, можно настроить под ваши изображения
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="https://github.com/ibragimzodaa/homework2" target="_blank" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[100%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img2.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} // Пример пропорций, можно настроить под ваши изображения
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview

                  </a>
                <a href="https://github.com/ibragimzodaa/homework1" target="_blank" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[100%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img3.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} // Пример пропорций, можно настроить под ваши изображения
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="https://github.com/ibragimzodaa/homework" target="_blank" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[100%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img4.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} // Пример пропорций, можно настроить под ваши изображения
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="https://github.com/ibragimzodaa/Tajik-ICT" target="_blank" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[100%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img2.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} // Пример пропорций, можно настроить под ваши изображения
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="#" className="text-black text-[20px] hover:underline">
                  View Code

                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section2;
