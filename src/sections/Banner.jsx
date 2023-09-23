import "./Banner.css";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import bannerAnimation from "../assets/bannerAnimation.json";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const Banner = () => {
  return (
    <div id="banner" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <Lottie animationData={bannerAnimation} loop={true} />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl">Hi, it's</h3>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Reazul Alavhi
          </h1>
          <h3 className="text-4xl font-bold">
            I am a{" "}
            <span>
              <Typewriter
                options={{
                  strings: [
                    " MERN stack developer",
                    " Web Application developer",
                    " React developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="py-6 text-lg">
            I have a deep passion for clean and efficient code, and I strive to
            deliver high-quality solutions that not only meet the functional
            requirements but also provide a seamless user experience. I am
            constantly learning and staying up to date with the latest
            technologies and best practices to ensure I can tackle any challenge
            that comes my way.
          </p>
          <div className="flex gap-5 mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
