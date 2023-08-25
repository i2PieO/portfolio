import SectionTitle from "./SectionTitle"

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
          <p></p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
