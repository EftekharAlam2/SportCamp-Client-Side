import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/SharedPage/ErrorPage";
import Login from "../Pages/User/Login";
import Registration from "../Pages/User/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
