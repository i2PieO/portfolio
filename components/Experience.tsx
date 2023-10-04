import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Microsoft from "./works/Microsoft";
import Google from "./works/Google";
import DaloIntl from "./works/DaloIntl";

const Experience = () => {
  const [workDaloIntl, setWorkDaloIntl] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workMicrosoft, setWorkMicrosoft] = useState(false);

  const handleDaloIntl = () => {
    setWorkDaloIntl(true);
    setWorkGoogle(false);
    setWorkMicrosoft(false);
  };

  const handleGoogle = () => {
    setWorkDaloIntl(false);
    setWorkGoogle(true);
    setWorkMicrosoft(false);
  };

  const handleMicrosoft = () => {
    setWorkDaloIntl(false);
    setWorkGoogle(false);
    setWorkMicrosoft(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleDaloIntl}
            className={`${
              workDaloIntl
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            DaloIntl
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleMicrosoft}
            className={`${
              workMicrosoft
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Microsoft
          </li>
        </ul>
        {workDaloIntl && <DaloIntl />}
        {workGoogle && <Google />}
        {workMicrosoft && <Microsoft />}
      </div>
    </section>
  );
};

export default Experience;