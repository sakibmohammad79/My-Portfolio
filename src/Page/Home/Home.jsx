import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Typed from 'react-typed';
import Jump from 'react-reveal/Jump';
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Shared/Footer/Footer";

const Banner = () => {
  const linkedinProfileUrl = 'https://www.linkedin.com/in/md-sakib-067392278/'; 
  const gitHubProfileUrl = 'https://github.com/sakibmohammad79'; 
  const facebookProfileUrl = 'https://www.facebook.com/profile.php?id=100011373134077'; 

  return (
    <div>

<div className="bg-[url('https://i.postimg.cc/fRh9jkB2/pexels-jakub-novacek-924824.jpg')] bg-cover bg-center min-h-screen">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center px-6 md:px-24 pt-36 md:pt-40 pb-8">
        <div className="space-y-3">
          <button className="btn text-white font-bold btn-secondary">
            Welcome To My Portfolio
          </button>
          <h2 className="font-extrabold text-3xl md:text-4xl text-white">
            Hi, I am Sakib <br></br>
            <Typed className="text-secondary font-extrabold text-3xl md:text-3xl"
            strings={['MERN Stack Developer', 'Front End Developer', 'React Developer']}
            typeSpeed={80}
            backSpeed={60}
            loop={true}
            smartBackspace={false}
            shuffle={true}
            backDelay={1000}
          />
          </h2>
          <p className="text-white font-medium">
            I am a dedicated and passionate MERN stack developer. I believe in
            working hard and never giving up. Challenges motivate me, and I
            approach each project with determination. I always strive to provide
            the best solutions possible. My goal is to become a senior developer
            and achieve success in my life.
          </p>
          <div className="flex gap-4 text-secondary">

            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin style={{width: '2.3rem', height: '2.3rem'}}/></a>

            <a href={gitHubProfileUrl} target="_blank" rel="noopener noreferrer"><FaGithubSquare style={{width: '2.3rem', height: '2.3rem'}}/></a>
            <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer"><FaFacebook style={{width: '2.3rem', height: '2.3rem'}}/></a>
            
          </div>
        </div>
        <Jump>
        <div className="flex justify-center">
          <img
            style={{ height: "460px", width: "360px", borderRadius: '180px' }}
            className="rounded-lg bg-[#4D245F] shadow-lg"
            src="https://i.postimg.cc/SNnXFgWH/DSC-0092-removebg-preview.png"
            alt=""
          />
        </div>
        </Jump>
      </div>
    </div>
    <Skill></Skill>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
};

export default Banner;
