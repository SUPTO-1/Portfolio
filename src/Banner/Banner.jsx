import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/file1.png";
import { HiDownload } from "react-icons/hi";
import "react-awesome-button/dist/styles.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div
      id="home"
      className="px-4 md:px-10 xl:px-56 lg:mt-20 w-full lg:gap-5 xl:gap-10 flex flex-col-reverse lg:flex-row lg:items-center"
    >
      <div className="text-white lg:w-[60%] xl:w-[55%]">
        <motion.h4
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl mb-4 lg:mb-8 font-montserrat"
        >
          Welcome To My Portfolio
        </motion.h4>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold mb-4 lg:mb-8"
        >
          It's <span className="text-[#8953f7]">Jahidul Islam Supto</span>
        </motion.h2>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <TypeAnimation
            className="text-2xl lg:text-3xl xl:text-4xl font-semibold font-blackOp"
            sequence={[
              "A Front End Web Developer",
              1000,
              "Skilled in Problem Solving",
              1000,
            ]}
            repeat={Infinity}
          />
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-base lg:text-lg font-montserrat text-white mt-6 lg:mt-14 xl:w-full"
        >
          I'm a front-end web developer with strong problem-solving skills and
          expertise in data structures and algorithms. I excel in creating
          responsive, user-friendly interfaces and am adept at optimizing
          performance and functionality.
        </motion.p>
        <div className="mt-8 lg:mt-16 md:flex justify-between items-center">
          <div>
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="border-2 border-[#8953f7] mt-4 lg:mt-10 p-2 lg:p-4 rounded-s-2xl rounded-e-2xl hover:bg-[#8953f7] flex items-center"
            >
              <a
                href="https://drive.usercontent.google.com/download?id=1uzor2_4gFFc1itxmvo7eE7E964KNB9-v&export=download&authuser=0"
                download={true}
              >
                Download Resume <HiDownload className="inline text-xl ml-2" />
              </a>
            </motion.button>
          </div>
          <div className="mt-8 lg:mr-0 xl:mr-8">
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="border-2 mr-2 p-2 border-[#8953f7] px-2 rounded-s-2xl rounded-e-2xl hover:bg-[#8953f7]"
            >
              {" "}
              <a href="https://www.facebook.com/Iam.suptoo/" target="_blank">
                <FaFacebook className="text-xl" />
              </a>{" "}
            </motion.button>
            <motion.button
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 1.5 }}
             className="border-2 mr-2 p-2 border-[#8953f7] px-2 rounded-s-2xl rounded-e-2xl hover:bg-[#8953f7]">
              {" "}
              <a href="https://github.com/SUPTO-1" target="_blank">
                <FaGithub className="text-xl" />{" "}
              </a>
            </motion.button>
            <motion.button 
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 1.5 }}
            className="border-2 mr-2 p-2 border-[#8953f7] px-2 rounded-s-2xl rounded-e-2xl hover:bg-[#8953f7]">
              {" "}
              <a
                href="https://www.linkedin.com/in/jahidul-islam-supta/"
                target="_blank"
              >
                <FaLinkedin className="text-xl" />
              </a>{" "}
            </motion.button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[40%] xl:w-[45%] border-2 border-[#0d061b] shadow-2xl mt-10 xl:mt-0 xl:p-4 rounded-s-2xl rounded-e-2xl mb-5">
        <motion.img
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 1.5 }}
         className="w-full h-auto" src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Banner;
