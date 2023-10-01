import SectionTitle from './SectionTitle'
import { AiOutlineYoutube } from 'react-icons/ai';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
              {/* Project one */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
          href=''
          target='_blank'
          >
          <div>
            image
          </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right xl:-ml-16 z-10'>
          <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Projects</p>
          <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            An Amazon Clone with{" "}
            <span className='text-textGreeb'>o-auth</span> and purchase <span className='text-textGreen'>stripe</span>
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark'>
              <li>next</li>
              <li>react</li>
          </ul>
          <div className='text-2xl flex gap-4'>
            <a 
            className='hover:text-textGreen duration-300'
            href=''
            target='_blank'
            >
               <TbBrandGithub />
          </a>
          <a
            className='hover:text-textGreen duration-300'
            href=''
            target='_blank'
          >
            <RxOpenInNewWindow />
          </a>
          </div>
        </div>
        </div>
      </div>
      {/* Project two */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row-reverse gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
          href=''
          target='_blank'
          >
          <div>
            image
          </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right z-10'>
          <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Projects</p>
          <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
            An Amazon Clone with{" "}
            <span className='text-textGreeb'>o-auth</span> and purchase <span className='text-textGreen'>stripe</span>
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark'>
              <li>next</li>
              <li>react</li>
          </ul>
          <div className='text-2xl flex gap-4'>
            <a 
            className='hover:text-textGreen duration-300'
            href=''
            target='_blank'
            >
               <TbBrandGithub />
          </a>
          <a
            className='hover:text-textGreen duration-300'
            href=''
            target='_blank'
          >
            <RxOpenInNewWindow />
          </a>
          </div>
        </div>
        </div>
      </div>
      {/* Project three */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
          href=''
          target='_blank'
          >
          <div>
            image
          </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right xl:-ml-16 z-10'>
          <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Projects</p>
          <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            An Amazon Clone with{" "}
            <span className='text-textGreeb'>o-auth</span> and purchase <span className='text-textGreen'>stripe</span>
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark'>
              <li>next</li>
              <li>react</li>
          </ul>
          <div className='text-2xl flex gap-4'>
            <a 
            className='hover:text-textGreen duration-300'
            href=''
            target='_blank'
            >
               <TbBrandGithub />
          </a>
          <a
            className='hover:text-textGreen duration-300'
            href=''
            target='_blank'
          >
            <RxOpenInNewWindow />
          </a>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Projects
