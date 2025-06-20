import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
