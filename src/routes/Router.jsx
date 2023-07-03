import { createBrowserRouter } from "react-router-dom";
import Home from '../Page/Home/Home'
import Skill from "../Page/Skill/Skill";
import Main from "../layout/Main";
import Contact from "../Page/Contact/Contact";
import Projects from "../Page/Projects/Projects";
import ProjectDetails from "../Page/ProjectCard/ProjectDetails";
import About from "../Page/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/skill",
          element: <Skill></Skill>
        },
        {
          path: "/projects",
          element: <Projects></Projects>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/project/:id',
          element: <ProjectDetails></ProjectDetails>,
          loader: ({params}) => fetch(`https://my-portfolio-server-navy.vercel.app/project/${params.id}`)
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    
  ]);

export default router;