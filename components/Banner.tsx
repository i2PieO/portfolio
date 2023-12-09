import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-extraFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Syed Khundmir Jawad.
        <span className="text-textDark text-3xl mt-4 lgl:mt-4">
          And i am a 
        <TypeAnimation
      sequence={[
        ' Web Developer.',
        1000,
        ' Mobile Developer.',
        1000
      ]}
      wrapper="span"
      speed={9}
      repeat={Infinity}
    />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a software engineer with a passion specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.{" "}
        <a href="https://www.dalointl.com/" target="_blank">
          {" "}
        </a>
      </motion.p>
      <a href="https://github.com/i2PieO" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-extraFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;