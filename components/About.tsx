import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
    id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex
        flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Amet asperiores error vero id sunt excepturi! 
            Fugiat earum nobis perspiciatis adipisci exercitationem 
            nam aliquid magnam in ducimus, 
            obcaecati explicabo veritatis! Fugiat.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Fugiat iure porro veritatis cum facilis quod,
             enim quae quisquam recusandae! Recusandae aliquam rerum sunt odio tenetur corrupti.
             Fugit debitis corporis exercitationem.
          </p>
          <p>
            fast forward , a start-up,{" "}
            <span className="text-textGreen">
              a corporation, studio.
            </span>
            Lorem repellat{""} 
            <span className="text-textGreen">
              , accusammus!
              </span>
          </p>
          <p>
            lorem 
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2
          mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
                </span>
                JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
                </span>
                React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
                </span>
                Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
                </span>
                TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
                </span>
                Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
                </span>
                MongoDB
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w=full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
               image
               <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/
               20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
            rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2
            transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
