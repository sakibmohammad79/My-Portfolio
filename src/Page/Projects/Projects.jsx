import { useEffect, useState } from "react";


import ProjectCard from "../ProjectCard/ProjectCard";


const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/project')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    //console.log(projects);
    return (
        <div className="bg-[url('https://i.postimg.cc/fRh9jkB2/pexels-jakub-novacek-924824.jpg')] bg-cover bg-center min-h-screen">
        <div className="px-6 md:px-24 pt-24 md:pt-28 pb-8">
         <div className="text-center pt-4">
             <h3 className="font-bold text-3xl text-secondary">MY PROJECTS</h3>
             <p className="text-white font-bold pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos saepe, ut voluptatibus id aspernatur accusamus<br></br> tempore fugiat animi sint, consequatur, magni facilis? Quis esse, omnis minus deleniti repellendus earum!</p>
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