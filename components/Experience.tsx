import React from 'react'
import SectionTitle from './SectionTitle'
import DaloIntl from './works/DaloIntl'

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li className="border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm
          cursor-pointer duration-300 px-8 font-medium">
          DaloIntl
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm
          cursor-pointer duration-300 px-8 font-medium">
          Google
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm
          cursor-pointer duration-300 px-8 font-medium">
          Microsoft
          </li>
        </ul>
        <DaloIntl />
      </div>
    </section>
  )
}

export default Experience
