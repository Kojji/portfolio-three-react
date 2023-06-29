import About from "./views/About";
import Education from "./views/Education";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Animations from "./views/Animations";

export const routes = [
  {
    name: "about",
    path: "/",
    element: <About />,
  },
  {
    name: "education",
    path: "/education",
    element: <Education />,
  },
  {
    name: "experience",
    path: "/experience",
    element: <Experience />,
  },
  {
    name: "skill",
    path: "/skill",
    element: <Skills />,
  },
  {
    name: "animation",
    path: "/animation",
    element: <Animations />,
  },
];

export default routes;
