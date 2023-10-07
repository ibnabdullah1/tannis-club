import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    return logout();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500  font-semibold "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500  font-semibold "
              : ""
          }
        >
          Pages
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500  font-semibold "
              : ""
          }
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 font-semibold "
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const style = {
    width: "100%",
    backgroundColor: "white",
    top: "0",
    position: "sticky",
  };
  return (
    <div
      style={style}
      className=" flex justify-between items-center py-3 px-3 shadow  max-w-6xl   mx-auto"
    >
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

      {user ? (
        <button
          onClick={handleLogOut}
          className="bg-blue-500 uppercase text-white font-semibold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login">
          <button className="bg-blue-500 uppercase text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
