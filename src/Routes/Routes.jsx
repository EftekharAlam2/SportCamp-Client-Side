import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/SharedPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
