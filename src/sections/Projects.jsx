import "./Project.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

const Projects = () => {
  return (
    <div id="projects">
      <h3 className="font-bold text-5xl text-center">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-16">
        <div className="card w-96  mx-auto bg-gradient-to-br from-red-800 to-pink-00 shadow-2xl">
          <figure className="box box1 border">
            {/* <img
              src="https://i.ibb.co/Y3ZnY87/project1.jpg"
              alt="project1"
            /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">LinguaLab</h2>
            <p>Unlock the Power of Language with LinguaLab.</p>
            <div className="card-actions justify-end">
              <a href="https://github.com/reaxul/LinguaLab-client.git" className="badge badge-outline gap-1">
                <AiFillGithub></AiFillGithub> Github
              </a>
              <a href="https://liguolab.web.app/" className="badge badge-outline gap-1">
                <BsLink45Deg></BsLink45Deg> Live
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto bg-gray-500 rounded-lg shadow-xl">
          <figure className="box box2">
            {/* <img
              src="https://i.ibb.co/MRMywqr/project2.jpg"
              alt="Shoes"
            /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toy-Legend</h2>
            <p>Unleash the power of your inner superhero enthusiast with our one-of-a-kind platform dedicated to all things superhero toys.</p>
            <div className="card-actions justify-end">
              <a href="https://github.com/reaxul/toy-legend-client.git" className="badge badge-outline gap-1">
                <AiFillGithub></AiFillGithub> Github
              </a>
              <a href="https://toy-legends.web.app/" className="badge badge-outline gap-1">
                <BsLink45Deg></BsLink45Deg> Live
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto bg-gradient-to-br from-red-600 to-pink-00 shadow-xl">
          <figure className="box box3">
            {/* <img
              src="https://i.ibb.co/NWJhmhd/project3.jpg"
              alt="Shoes"
            /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Tasty Drop
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>TastyDrop is a web-based food delivery platform developed using the MERN stack, where you can find verities of food items.</p>
            <div className="card-actions justify-end">
              <a href="https://github.com/BakiAbdullah/Tasty-drop-client.git" className="badge badge-outline gap-1">
                <AiFillGithub></AiFillGithub> Github
              </a>
              <a href="https://tasty-drops.web.app/" className="badge badge-outline gap-1">
                <BsLink45Deg></BsLink45Deg> Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
