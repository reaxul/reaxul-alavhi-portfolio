import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="border rounded-lg py-12">
      <h1 className="text-5xl font-bold text-center mb-10 border-b-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent pb-3">
        About Me
      </h1>
      <div className="hero-content flex-col mx-auto lg:flex-row md:gap-24">
        <div className="text-justify md:w-1/2">
          <p className="py-6 text-xl">
            "Hello, I'm Reazul Alavhi, an experienced MERN stack developer proficient in JavaScript, MongoDB, Express.js, React.js, and Node.js. I have successfully completed numerous projects showcasing my web development skills. My passion lies in problem-solving and creating seamless user experiences. I stay updated with the latest technologies and best practices in the industry. Currently seeking opportunities to contribute and grow through internships or freelance work. Let's connect and discuss how I, Reazul Alavhi, can bring value to your projects and create something amazing together!"
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
              <p className="text-xl tracking-wider mb-3 ml-4">: 23</p>
              <p className="text-xl tracking-wider mb-3 ml-4">: Bangladeshi</p>
              <p className="text-xl tracking-wider mb-3 ml-4">
                : Bangla, English, Hindi
              </p>
              <p className="text-xl tracking-wider mb-3 ml-4">
                : Brahmanbaria, Bangladesh
              </p>
            </div>
          </div>
          {/* <div className="flex gap-5 mt-5">
            <a href="https://www.facebook.com/Reaxul.Alavhi">
              <BsFacebook size={24}></BsFacebook>
            </a>
            <a href="https://www.linkedin.com/in/reazul-alavhi/">
              <BsLinkedin size={24}></BsLinkedin>
            </a>
            <a href="https://github.com/reaxul">
              <BsGithub size={24}></BsGithub>
            </a>
            <a href="https://www.instagram.com/your_reaxul/">
              <BsInstagram size={24}></BsInstagram>
            </a>
          </div> */}
          <a href="/resume.pdf" download>
            <button id="btn" className="btn">
              Resume <FaDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

// <table className="table text">
//               <tbody>
//                 {/* row 1 */}
//                 <tr>
//                   <th className="text-lg">First Name</th>
//                   <td className="text-lg tracking-widest">: Reazul</td>
//                 </tr>
//                 {/* row 2 */}
//                 <tr>
//                   <th className="text-lg">Last Name</th>
//                   <td className="text-lg tracking-widest">: Alavhi</td>
//                 </tr>
//                 {/* row 3 */}
//                 <tr>
//                   <th className="text-lg">Age</th>
//                   <td className="text-lg tracking-widest">: 23</td>
//                 </tr>
//                 {/* row 4 */}
//                 <tr>
//                   <th className="text-lg">Nationality</th>
//                   <td className="text-lg tracking-widest">: Bangladeshi</td>
//                 </tr>
//                 {/* row 5 */}
//                 <tr>
//                   <th className="text-lg">Address</th>
//                   <td className="text-lg ">: Brahmanbaria, Bangladeshi</td>
//                 </tr>
//                 {/* row 6 */}
//                 <tr>
//                   <th className="text-lg">Language</th>
//                   <td className="text-lg tracking-widest">: Bangla, English, Hindi</td>
//                 </tr>
//               </tbody>
//             </table>
