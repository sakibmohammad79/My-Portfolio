import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkedinProfileUrl = "https://www.linkedin.com/in/md-sakib-067392278/";
  const gitHubProfileUrl = "https://github.com/sakibmohammad79";
  const facebookProfileUrl =
    "https://www.facebook.com/profile.php?id=100011373134077";
  return (
    <footer className="footer footer-center p-10 bg-black text-white">
      <div className="grid grid-flow-col gap-4">
        <Link to="/skill" className="link link-hover font-bold">
          Skill
        </Link>
        <Link to="/projects" className="link link-hover font-bold">
          Projects
        </Link>
        <Link to="/contact" className="link link-hover font-bolds font-bold">
          Contact
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href={linkedinProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ width: "2.3rem", height: "2.3rem" }} />
          </a>

          <a href={gitHubProfileUrl} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare style={{ width: "2.3rem", height: "2.3rem" }} />
          </a>
          <a
            href={facebookProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook style={{ width: "2.3rem", height: "2.3rem" }} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
