
 // Common layout (Navbar, Footer)
import Home from "../Home/Home";
import NotFound from "../PagenotFound/NotFound";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Home2 from "../LandingPage2.jsx/Home2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrapper for common elements like Navbar/Footer
    children: [
      { index: true, element: <Home /> }, 
      { path: "/skillbased", element: <Home2 /> },
    //   { path: "contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // 404 page
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
