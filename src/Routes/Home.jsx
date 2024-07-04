import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import MyProjects from "../MyProjects/MyProjects";
import MySkills from "../MySkills/MySkills";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Education></Education>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;