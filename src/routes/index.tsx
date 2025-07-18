import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Start from "../pages/Start";
import Skills from "../pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/about",
    element: <MainLayout />,
    children: [{ index: true, element: <About /> }],
  },
  {
    path: "/skills",
    element: <MainLayout />,
    children: [{ index: true, element: <Skills /> }],
  },
  {
    path: "/start",
    element: <Start />,
  },
]);
export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
