import "./Project.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projectsData = [
  {
    title: "LinguaLab",
    description: "Unlock the Power of Language with LinguaLab.It is a learning platform designed to help users master different languages.",
    githubLink: "https://github.com/reaxul/LinguaLab-client.git",
    liveLink: "https://liguolab.web.app/",
    imageSrc: "https://i.ibb.co/Y3ZnY87/project1.jpg",
    altText: "LinguaLab Project",
  },
  {
    title: "Tasty Drop-Team project",
    description:
      "TastyDrop is a web-based food delivery platform developed using the MERN stack, where you can find varieties of food items.",
    githubLink: "https://github.com/BakiAbdullah/Tasty-drop-client.git",
    liveLink: "https://tasty-drops.web.app/",
    imageSrc:
      "https://i.ibb.co/KrJmDDg/Web-capture-24-9-2023-34359-tasty-drops-web-app.jpg",
    altText: "Tasty Drop Project",
  },
  {
    title: "Toy-Legend",
    description:
      "Unleash the power of your inner superhero enthusiast with our one-of-a-kind platform dedicated to all things superhero toys.",
    githubLink: "https://github.com/reaxul/toy-legend-client.git",
    liveLink: "https://toy-legends.web.app/",
    imageSrc: "https://i.ibb.co/MRMywqr/project2.jpg",
    altText: "Toy-Legend Project",
  },
];

const ProjectCard = (project) => {
  const { title, description, githubLink, liveLink, imageSrc, altText } =
    project;
  const cardClasses =
    "card w-96 mx-auto bg-gradient-to-br from-red-800 to-pink-00 shadow-xl rounded-xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300 border border-red-900";

  return (
    <div className={cardClasses} data-aos='fade-up'>
      <figure
        className="box bg-cover h-40 transition-opacity hover:opacity-70"
        style={{ backgroundImage: `url(${imageSrc})` }}
        alt={altText}
      ></figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
        <hr />
        <p className="text-gray-200">{description}</p>
        <div className="card-actions justify-end mt-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-outline gap-1 rounded-full py-2 px-4 text-sm hover:bg-gray-300 hover:text-black"
          >
            <AiFillGithub /> Github
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-outline gap-1 rounded-full py-2 px-4 text-sm hover:bg-gray-300 hover:text-black"
          >
            <BsLink45Deg /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="projects">
      <h3 className="font-bold text-3xl md:text-5xl text-center mt-24 mb-16">
        My Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
