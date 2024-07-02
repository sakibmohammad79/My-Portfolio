import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Typed from "react-typed";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Shared/Footer/Footer";
import { Rotate } from "react-reveal";
import About from "../About/About";

const Banner = () => {
  const linkedinProfileUrl = "https://www.linkedin.com/in/md-sakib-067392278/";
  const gitHubProfileUrl = "https://github.com/sakibmohammad79";
  const facebookProfileUrl =
    "https://www.facebook.com/profile.php?id=100011373134077";

  return (
    <div>
      <div className="bg-[#041D34]">
        <div className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-24 pt-36 md:pt-40 pb-16">
          <Rotate top left>
            <div className="space-y-3">
              <button className="btn text-white font-bold btn-secondary shadow-none">
                Welcome To My Portfolio
              </button>
              <h3 className="font-bold text-3xl md:text-5xl text-white uppercase">
                Hay, I am Sakib <br></br>
                <Typed
                  className="text-secondary font-bold text-3xl  uppercase"
                  strings={["Full Stack Developer"]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop={true}
                  smartBackspace={false}
                  shuffle={true}
                  backDelay={1000}
                />
              </h3>
              <p className="text-white font-medium ">
                I am a dedicated and passionate MERN stack developer. I believe
                in working hard and never giving up. Challenges motivate me, and
                I approach each project with determination. I always strive to
                provide the best solutions possible. My goal is to become a
                senior developer and achieve success.
              </p>
              <div className="flex gap-4 text-secondary">
                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin style={{ width: "2.2rem", height: "2.2rem" }} />
                </a>

                <a
                  href={gitHubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare
                    style={{ width: "2.2rem", height: "2.2rem" }}
                  />
                </a>
                <a
                  href={facebookProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook style={{ width: "2.2rem", height: "2.2rem" }} />
                </a>
              </div>
            </div>
          </Rotate>
          <Rotate top right>
            <div className="flex justify-center">
              <img
                style={{
                  height: "460px",
                  width: "360px",
                  borderRadius: "180px",
                }}
                className="rounded-lg bg-[#1D3246] shadow-xl"
                src="https://i.postimg.cc/SNnXFgWH/DSC-0092-removebg-preview.png"
                alt=""
              />
            </div>
          </Rotate>
        </div>
      </div>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Banner;
