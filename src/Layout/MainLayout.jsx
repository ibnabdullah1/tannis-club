import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-6xl  mx-auto font-poppins">
        <Navbar />
        <div className="min-h-[70vh]">
          <Outlet></Outlet>
          <Toaster />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
