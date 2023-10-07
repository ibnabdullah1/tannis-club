import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Components/Home/Home";
import Events from "../Components/Events/Events";
import EventsDetails from "../Components/Events/EventsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./tennis.json"),
      },
      {
        path: "/:id",
        element: <EventsDetails />,
        loader: () => fetch("/tennis.json"),
      },
      {
        path: "/events",
        element: <Events />,
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
