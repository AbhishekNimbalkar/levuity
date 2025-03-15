import { Outlet, Link } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function Layout() {
  return (
    <div className="layout min-h-screen flex flex-col">
      <Navbar/>

      <main className="flex-grow">
        <Outlet /> {/* This renders the current route's component */}
      </main>

     <Footer/>
    </div>
  );
}
