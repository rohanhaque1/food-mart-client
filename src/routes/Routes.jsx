import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Layout/Home";
import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../pages/ErrorPage";
import ChefsRecipe from "../pages/ChefsRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/chefRecipe/:id",
        element: <ChefsRecipe />,
        loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`),
      },
    ],
  },
]);

export default router;
