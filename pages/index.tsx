import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import {motion} from "framer-motion"
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Syed Khundmir Jawad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <main className="w-full h-screen font-bodyfont bg-bodyColor text-textLight
   overflow-x-hidden overflow-y-scroll">
     <Navbar />
     <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
       >
        <LeftSide />
      </motion.div>
      <div className="h-[88vh] w-full mx-auto p-4">
        <Banner />
        <About />
        <Experience />
        {/* Projects */}
        {/* Archive */}
        {/* Contact */}
        {/* Footer */}
      </div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
       className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
       >
        <RightSide />
      </motion.div>
     </div>
    </main>
    </>
  )
}
