import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-6xl py-10  mx-auto font-poppins">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
