import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link
          to="banner"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a href="#banner" className="btn btn-ghost normal-case text-xl">
          <h1 className="md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            Reazul Alavhi
          </h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a href="/resume.pdf" download>
          <button id="btn" className="btn">
            Resume <FaDownload />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
