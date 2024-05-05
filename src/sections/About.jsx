import {  FaLink } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="border rounded-lg py-12">
      <h1 className="text-5xl font-bold text-center mb-10 border-b-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent pb-3">
        About
      </h1>
      <div className="hero-content flex-col mx-auto lg:flex-row md:gap-24">
        <div className="text-justify md:w-1/2">
          <p className="py-6 text-xl">
            &quot;Hello, I&apos;m Reazul Alavhi, an experienced MERN stack
            developer proficient in JavaScript, MongoDB, Express.js, React.js,
            and Node.js. I have successfully completed numerous projects
            showcasing my web development skills. My passion lies in
            problem-solving and creating seamless user experiences. I stay
            updated with the latest technologies and best practices in the
            industry. Currently seeking opportunities to contribute and grow
            through internships or freelance work. Let&apos;s connect and
            discuss how I, Reazul Alavhi, can bring value to your projects and
            create something amazing together!&quot;
          </p>
        </div>
        <div className=" w-full md:w-1/2">
          <div className="flex">
            <div>
              <h3 className="text-xl font-bold tracking-wider mb-3">
                First Name
              </h3>
              <h3 className="text-xl font-bold tracking-wider mb-3">
                Last Name
              </h3>
              <h3 className="text-xl font-bold tracking-wider mb-3">Age</h3>
              <h3 className="text-xl font-bold tracking-wider mb-3">
                Nationality
              </h3>
              <h3 className="text-xl font-bold tracking-wider mb-3">
                Language
              </h3>
              <h3 className="text-xl font-bold tracking-wider mb-3">Address</h3>
            </div>
            <div>
              <p className="text-xl tracking-wider mb-3 ml-4">: Reazul</p>
              <p className="text-xl tracking-wider mb-3 ml-4">: Alavhi</p>
              <p className="text-xl tracking-wider mb-3 ml-4">: 24</p>
              <p className="text-xl tracking-wider mb-3 ml-4">: Bangladeshi</p>
              <p className="text-xl tracking-wider mb-3 ml-4">
                : Bangla, English, Hindi, Spanish
              </p>
              <p className="text-xl tracking-wider mb-3 ml-4">
                : Brahmanbaria, Bangladesh
              </p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1OY0v1iijHUXaP5pVkh10nil1RnrURk7A/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Reazul Alavhi's resume"
          >
            <button id="btn" className="btn">
               Resume <FaLink />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;