import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DiMongodb } from "react-icons/di";
import { FaReact} from "react-icons/fa";
import { IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import image1 from '../assets/images/healthCare.jpg';
import image2 from '../assets/images/volunteerHub.jpg';
import image3 from '../assets/images/earthcraft.jpg';

const ProjectCard = ({ title, description, technologies, link, image, githubLink }) => {
  return (
    <div id="project" className="max-w-lg bg-[#140c1c] rounded-2xl shadow-xl p-8 m-6 border border-transparent hover:border-[#8a54f8] transition duration-300">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full rounded-xl mb-4"
      />
      <h2 className="text-3xl font-bold text-[#8a54f8] mb-4">{title}</h2>
      <p className="text-lg text-white mb-6">{description}</p>
      <div className="flex flex-wrap gap-4 mb-6">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-[#747779] group-hover:text-[#8a54f8] text-2xl"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          href={link}
          className="text-[#8a54f8] font-bold hover:underline text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          href={githubLink}
          className="text-[#8a54f8] font-bold hover:underline text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const MyProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "Health Care",
      description:
        "This web application provides a comprehensive platform for users and administrators to manage health checkups, view test results, book appointments, and much more.",
      technologies: [<FaReact />, <SiJavascript />, <IoLogoFirebase />, <DiMongodb />, <IoLogoCss3 />],
      link: "https://unknown-daf67.web.app/",
      githubLink: "https://github.com/SUPTO-1/HealthCare_Client",
      image:image1
    },
    {
      title: "VolunteerHub",
      description:
        "A go-to platform for connecting volunteers with meaningful opportunities to make a difference. Secure login and signup functionality to ensure a safe environment for all users.",
      technologies: [<FaReact />, <SiJavascript />, <IoLogoFirebase />, <DiMongodb />, <IoLogoCss3 />],
      link: "https://volunteerhub-f67d8.web.app/",
      githubLink: "https://github.com/SUPTO-1/VolunteerHub-client",
      image: image2,
    },
    {
      title: "EarthyCraft",
      description:
        "EarthyCraft is an online platform dedicated to showcasing and sharing various crafts made by talented artisans from around the world and ensure a safe environment for all users.",
      technologies: [<FaReact />, <SiJavascript />, <IoLogoFirebase />, <DiMongodb />, <IoLogoCss3 />],
      link: "https://volunteerhub-f67d8.web.app/",
      githubLink: "https://github.com/SUPTO-1/Earthy_Craft-client",
      image: image3,
    },
  ];

  return (
    <div data-aos="fade-up" className="bg-[#0f0715] py-20">
      <h2 className="text-4xl text-center text-[#8a54f8] font-bold mb-10">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
