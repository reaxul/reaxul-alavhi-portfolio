import Lottie from "lottie-react";
import skills from "../assets/skills.json";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="mt-12">
      <h3 className="font-bold text-4xl text-center mb-2 ">My Skills</h3>
      <hr className="w-56 mb-1 mx-auto" />
      <hr className="w-56 mx-auto" />
      <div className="hero min-h-screen ">
        <div className="hero-content gap-20 md:gap-56 flex-col lg:flex-row">
          <div className="md:w-1/2">
            <Lottie animationData={skills} loop={true} />
          </div>
          <div className="grid grid-cols-2 gap-6 md:w-1/2">
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <FaNodeJs size={20}></FaNodeJs>Node.js
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <FaReact></FaReact> React.js
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <SiTailwindcss></SiTailwindcss> Tailwind CSS
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <FaBootstrap></FaBootstrap>
              Bootstrap
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <FaCss3Alt></FaCss3Alt>
              CSS3
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <SiExpress></SiExpress>
              Express.js
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <SiFirebase></SiFirebase>
              Firebase
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <FaHtml5></FaHtml5>
              HTML 5
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <SiJavascript></SiJavascript>
              JavaScript
            </div>
            <div className="border-2 w-40 h-12 flex gap-2 items-center justify-center hover:border-red-500 hover:scale-105 transition-all duration-300">
              <SiMongodb></SiMongodb>
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
