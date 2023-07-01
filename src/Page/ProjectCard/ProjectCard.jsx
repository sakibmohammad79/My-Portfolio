import { Link } from "react-router-dom";

// import "./ProjectCardCss.css";
const ProjectCard = ({ project }) => {
  const { projectName, projectImage, liveLink, clientLink, serverLink, _id } = project;
  //console.log(project);
  return (
    <div className="card w-90 bg-base-100 shadow-xl ">
      <figure>
        <img
          style={{ height: "300px" }}
          className="p-4 rounded-xl w-full object-cover object-top hover:object-bottom duration-1000"
          src={projectImage}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">
          {projectName}
          <Link to={`/project/${_id}`}><div  className="btn btn-sm btn-secondary">Details</div></Link>
        </h2>
        <p className="font-bold">Click the details button and see my complete project details at a glance!</p>
        <div className="card-actions justify-center">
          <a href={clientLink} target="_blank" rel="noopener noreferrer" className="badge badge-secondary p-3 uppercase font-medium">
            GitHub Client
          </a>
          <a href={serverLink} target="_blank" rel="noopener noreferrer" className="badge badge-secondary p-3 uppercase font-medium">
            GitHub Server
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="badge badge-secondary p-3 uppercase font-medium">
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
