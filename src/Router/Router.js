import { createBrowserRouter } from "react-router-dom";
import About from "../Home/About";
import Authentication from "../Home/Authentication";
import Contact from "../Home/Contact";
import Home from "../Home/Home";
import NotFound from "../Home/NotFound";
import Dashboard from "../View/Dashboard";
import ManageLink from "../View/ManageLink";
import Notes from "../View/Notes";
import PrivateRoute from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/add",
            element: <ManageLink />,
          },
          {
            path: "/notes",
            element: <Notes />,
          },
        ],
      },
      {
        path: "/authentication",
        element: <Authentication />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
