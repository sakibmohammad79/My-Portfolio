import { Link } from "react-router-dom";

const Navber = () => {
  const navItem = (
    <>
      <li>
        <Link className="font-bold uppercase">Home</Link>
      </li>
      <li>
        <Link className="font-bold uppercase">Skill</Link>
      </li>
      <li>
        <Link className="font-bold uppercase">Projects</Link>
      </li>
      <li>
        <Link className="font-bold uppercase">About me</Link>
      </li>
    </>
  );
  return (
    <div style={{height: '100px'}} className="navbar px-8  md:px-16 text-white fixed z-10 bg-black bg-opacity-0">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-5xl">Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Navber;