import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

const Navber = () => {
  const navItem = (
    <>
      <li>
        <Link to="/" className="font-bold uppercase">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-bold uppercase">
          About me
        </Link>
      </li>
      <li>
        <Link to="/skill" className="font-bold uppercase">
          Skill
        </Link>
      </li>
      <li>
        <Link to="/projects" className="font-bold uppercase">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="font-bold uppercase">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/" className="font-bold uppercase">
          Blog
        </Link>
      </li>
    </>
  );

  const handleDownloadResume = () => {
    const resumeUrl = "./Md Sakib_Mern Stack Developer(resume).pdf.pdf";

    // Fetch the resume file
    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the resume file using FileSaver.js
        saveAs(blob, "resume.pdf");
      })
      .catch((error) => {
        console.error("Error downloading the resume:", error);
      });
  };

  return (
    <div className="navbar pt-4 fixed z-50 md:pt-8 px-4 md:px-16 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="text-secondary menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl md:text-5xl text-secondary font-bold"
        >
          Portfolio
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-extrabold">{navItem}</ul>
      </div>
      <div className="navbar-end ">
        <button
          onClick={handleDownloadResume}
          className="btn btn-outline btn-secondary font-bold"
        >
          Resume<FaDownload></FaDownload>
        </button>
      </div>
    </div>
  );
};

export default Navber;
