import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
} from "react-icons/sl"
 
const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center
    w-full py-6 gap-4">
         <a href="https://github.com/i2PieO" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub />
            </span>
        </a>
        <a href="https://www.instagram.com/i2pieo/" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
            </span>
        </a>
        <a href="https://www.linkedin.com/in/syed-khundmir-jawad-76352822b/" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 transition-all duration-300">
                <SlSocialLinkedin />
            </span>
        </a>
    </div>
  )
}

export default Footer
