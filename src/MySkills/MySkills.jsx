
import { CgCPlusPlus } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const MySkills = () => {
  return (
    <div id="skills" className="bg-[#0f0715]">
      <h2 className="text-4xl text-center text-[#8a54f8] font-bold mt-20 mb-6 pt-10">
        My Skills
      </h2>
      <p className="text-lg text-center text-white mb-10 pb-10">
        Proficient front-end web developer with a strong foundation in creating
        engaging and intuitive user interfaces.
      </p>
      <div className="w-3/4 mx-auto lg:flex flex-wrap gap-10">
        <div>
          <motion.div
            variants={iconVariants(0.5)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <FaReact className="text-7xl mb-4 group-hover:text-[#53c1de]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                85%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            React
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <FaHtml5 className="text-7xl mb-4 group-hover:text-[#f74a1d]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
              HTML
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            HTML
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <IoLogoCss3 className="text-7xl mb-4 group-hover:text-[#2762e8]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                90%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            CSS
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <RiTailwindCssFill className="text-7xl mb-4 group-hover:text-[#36b6f2]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                85%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            Tailwind
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <SiJavascript className="text-7xl mb-4 group-hover:text-[#efd81d]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                85%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            JavaScript
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <FaNodeJs className="text-7xl mb-4 group-hover:text-[#509941]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                82%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            Node
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <DiMongodb className="text-7xl mb-4 group-hover:text-[#419432]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                60%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            MongoDB
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <CgCPlusPlus className="text-7xl mb-4 group-hover:text-[#007cc7]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                90%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            C & C++
          </h2>
        </div>
        <div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="py-10 px-16 mx-auto bg-[#140c1c] rounded-2xl shadow-xl group border border-transparent hover:border-[#8a54f8]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[#8a54f8]">
              <IoLogoFirebase className="text-7xl mb-4 group-hover:text-[#f3c43e]" />
              <h2 className="text-xl font-poppins ml-2 font-bold text-[#747779] group-hover:text-[#31234d]">
                70%
              </h2>
            </div>
          </motion.div>
          <h2 className="text-xl text-center mt-2 font-poppins ml-2 font-bold text-[#8a54f8]">
            Firebase
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
