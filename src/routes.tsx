import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./app/ErrorPage";
import SignUp from "./auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  }
]);

export default router;