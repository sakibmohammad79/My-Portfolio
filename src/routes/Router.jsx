import { createBrowserRouter } from "react-router-dom";
import Home from '../Page/Home/Home'
import Skill from "../Page/Skill/Skill";
import Main from "../layout/Main";
import Contact from "../Page/Contact/Contact";
import Projects from "../Page/Projects/Projects";

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
        }
      ]
    },
    
  ]);

export default router;