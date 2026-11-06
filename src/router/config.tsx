
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Wordjjang from "../pages/wordjjang/page";
import Programs from "../pages/programs/page";
import Courses from "../pages/courses/page";
import About from "../pages/about/page";
import Contact from "../pages/contact/page";
import Resources from "../pages/resources/page";
import Board from "../pages/board/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Wordjjang />,
  },
  {
    path: "/wordjjang",
    element: <Wordjjang />,
  },
  {
    path: "/academy",
    element: <Home />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/board",
    element: <Board />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
