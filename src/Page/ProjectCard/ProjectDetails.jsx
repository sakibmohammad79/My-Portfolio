import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const projectDetails = useLoaderData();
  const {
    projectName,
    projectImage,
    rating,
    features,
    clientLink,
    serverLink,
    liveLink,
    technology
  } = projectDetails;
  console.log(projectDetails);
  return (
    <div className="bg-[#041B31] px-6 md:px-24 pt-36 pb-8">
      <div className="card w-full md:w-1/2 mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            style={{ height: "300px" }}
            src={projectImage}
            alt="Shoes"
            className="rounded-xl w-full object-cover object-top hover:object-bottom duration-1000"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-secondary">
            {projectName}
          </h2>
          <h2 className="card-title text-2xl font-bold">Feature:</h2>
          <p className="font-bold">1. {features[0]}</p>
          <p className="font-bold">2. {features[1]}</p>
          <p className="font-bold">3. {features[2]}</p>
          <h2 className="card-title text-2xl font-bold">Technology:</h2>
          <div className="flex">
          <p className="font-bold">{technology[0]}| </p>
          <p className="font-bold">{technology[1]}| </p>
          <p className="font-bold">{technology[2]}| </p>
          <p className="font-bold">{technology[3]}| </p>
          <p className="font-bold">{technology[4]}</p>
          </div>
          <div className="card-actions justify-center pt-4">
            <a
              href={clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-secondary p-6 font-bold"
            >
              GitHub Client
            </a>
            <a
              href={serverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-secondary p-6 font-bold"
            >
              GitHub Server
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-secondary p-6 font-bold"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
