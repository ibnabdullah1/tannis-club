import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/news"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold "
              : ""
          }
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold "
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold "
              : ""
          }
        >
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold "
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" flex justify-between items-center py-5  max-w-6xl   mx-auto">
      <div className="navbar lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <img
            className="w-[80px] h-auto"
            src="https://i.ibb.co/3dZZk6D/logo.png"
            alt=""
          />
        </div>
      </div>
      <div className=" hidden lg:flex">
        <img
          className="w-[100px] h-auto"
          src="https://i.ibb.co/3dZZk6D/logo.png"
          alt=""
        />
      </div>
      <div className=" hidden lg:flex">
        <ul className="px-1 text-lg flex  gap-8">{navLinks}</ul>
      </div>

      <Link to="/login">
        <button className=" text-white bg-[#F9A51A] py-2 px-4 font-semibold">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
