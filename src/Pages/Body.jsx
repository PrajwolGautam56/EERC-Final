import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Gallerypage from "./Gallerypage";

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
      path: "gallery",

      element: <Gallerypage />,
    },

    {
      path: "contact",

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
