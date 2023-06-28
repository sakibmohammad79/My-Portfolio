// import "./ProjectCardCss.css";
const ProjectCard = ({ project }) => {
  const { projectName, projectImage, liveLink, clientLink, serverLink } = project;
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
        <h2 className="card-title">
          {projectName}
          <div className="btn btn-sm btn-secondary">Details</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <a href={clientLink} target="_blank" rel="noopener noreferrer" className="badge badge-secondary p-2">
            GitHub Client
          </a>
          <a href={serverLink} target="_blank" rel="noopener noreferrer" className="badge badge-secondary p-2">
            GitHub Server
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="badge badge-secondary p-2">
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
