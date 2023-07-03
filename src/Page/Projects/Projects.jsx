import { useEffect, useState } from "react";


import ProjectCard from "../ProjectCard/ProjectCard";


const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://my-portfolio-server-navy.vercel.app/project')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    //console.log(projects);
    return (
        //<div className="bg-[url('https://i.postimg.cc/fRh9jkB2/pexels-jakub-novacek-924824.jpg')] bg-cover bg-center min-h-screen">
        <div className="bg-[#052646]">
        <div className="px-6 md:px-24 pt-24 md:pt-28 pb-8">
        <div className="text-center">
                 <h3 className="text-white font-bold text-2xl uppercase">my project</h3>
                 <h3 className="text-secondary font-bold text-3xl uppercase">My Experience Area</h3>
              </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-16 pb-12">
            {
                projects.map(project => <ProjectCard 
                key={project._id}
                project={project}
                ></ProjectCard>)
             }
         </div>

         </div>
         
        </div>
    );
};

export default Projects;