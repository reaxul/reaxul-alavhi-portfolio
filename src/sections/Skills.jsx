import { FaBootstrap, FaCogs, FaCss3Alt, FaHtml5, FaLock, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
import { useEffect } from "react";

const skillsData = [
  {
    icon: <FaNodeJs size={60} />,
    title: "Node.js",
    description: "Server-side JavaScript runtime.",
  },
  {
    icon: <FaReact size={60} />,
    title: "React.js",
    description: "JavaScript library for building user interfaces.",
  },
  {
    icon: <SiTailwindcss size={60} />,
    title: "Tailwind CSS",
    description: "A utility-first CSS framework.",
  },
  {
    icon: <FaBootstrap size={60} />,
    title: "Bootstrap",
    description: "Front-end framework for web development.",
  },
  {
    icon: <FaCss3Alt size={60} />,
    title: "CSS3",
    description: "Cascading Style Sheets for web design.",
  },
  {
    icon: <SiExpress size={60} />,
    title: "Express.js",
    description: "Fast, minimalist web framework for Node.js.",
  },
  {
    icon: <SiFirebase size={60} />,
    title: "Firebase",
    description: "App development platform by Google.",
  },
  {
    icon: <FaHtml5 size={60} />,
    title: "HTML5",
    description: "Hypertext Markup Language for web content.",
  },
  {
    icon: <SiJavascript size={60} />,
    title: "JavaScript",
    description: "High-level, interpreted scripting language.",
  },
  {
    icon: <SiMongodb size={60} />,
    title: "MongoDB",
    description: "Document-oriented NoSQL database.",
  },
  {
    icon: <FaLock size={60} />,
    title: "JWT",
    description: "JSON Web Tokens for secure authentication.",
  },
  {
    icon: <FaCogs size={60} />,
    title: "Redux",
    description: "State management library for React applications.",
  },
];
const SkillCard = (skill) => {
  const { icon, title, description } = skill;
  return (
    <div className="skill-card hero-content" data-aos='fade-up'>
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
};
const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills" className="mt-24 md:px-24 px-5">
      <h3 className="font-bold text-4xl text-center mb-2">My Skills</h3>
      <hr className="w-56 mb-1 mx-auto" />
      <hr className="w-56 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
