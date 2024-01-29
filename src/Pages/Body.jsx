import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import ProjectSection from "../components/ProjectSection";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },

    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
<<<<<<< HEAD
      path: "/contact",
=======
      path: "projects1",
      element: <ProjectSection />,
    },
    {
      path: "contact",
>>>>>>> 6157db1d387831d81dfcab6a57ce4097fd1b8a51
      element: <Contact />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
