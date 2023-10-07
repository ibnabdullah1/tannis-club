import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Components/Home/Home";
import EventsDetails from "../Components/Events/EventsDetails";
import Contact from "../Components/Contact/Contect";
import Tournaments from "../Components/Tournaments/Tournaments";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Blog from "../Components/Blog/Blog";
import Reviews from "../Components/Reviews/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./tennis.json"),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <EventsDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/tennis.json"),
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Tournaments />
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
