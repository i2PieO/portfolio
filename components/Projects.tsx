import { discord, spotify, notion } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/i2PieO/discord-clone"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={discord}
                alt="discord"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-extraFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Discord Clone</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            This is a Fullstack 
              {" "}
              <span className="text-textGreen">Discord Clone</span> made with using Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL.
            </p>
            <ul className="text-xs md:text-sm font-extraFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js 13</li>
              <li>React Hook Form</li>
              <li>Zustand</li>
              <li>Shadcn</li>
              <li>Typescript</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/i2PieO"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://twitter.com/i2PieO/status/1695881196616515761"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/i2PieO/spotify"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={spotify}
                alt="spotify"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-extraFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Spotify Clone</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            This is a Full Stack  
              <span className="text-textGreen"> Spotify Clone</span> with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe.{" "}
            </p>
            <ul className="text-xs md:text-sm font-extraFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs 13</li>
              <li>React Hook Form</li>
              <li>Zustand</li>
              <li>Radix UI</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/i2PieO/spotify"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/i2PieO/cypress"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={notion}
                alt="notion"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-extraFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Notion Clone</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            A SaaS App with Realtime cursors, Nextjs 13, Stripe, Drizzle ORM, Tailwind, Supabase, Sockets.{" "}
            </p>
            <ul className="text-xs md:text-sm font-extraFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs 13</li>
              <li>Sockets</li>
              <li>Tailwind</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/i2PieO/cypress"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;