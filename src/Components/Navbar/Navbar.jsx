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
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500  font-semibold "
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reviews"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500  font-semibold "
              : ""
          }
        >
          Reviews
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

  return (
    <div className=" flex justify-between items-center py-3 px-3 shadow  max-w-6xl   mx-auto">
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
            className="w-[40px] h-auto"
            src="https://www.svgrepo.com/show/487884/tennis.svg"
            alt=""
          />
          <h1 className="text-2xl font-bold Barlow-Condensed">Tennis club</h1>
        </div>
      </div>
      <div className=" hidden justify-center items-center  lg:flex">
        <img
          className="w-[40px] h-auto"
          src="https://www.svgrepo.com/show/487884/tennis.svg"
          alt=""
        />
        <h1 className="text-2xl font-bold Barlow-Condensed">Tennis club</h1>
      </div>
      <div className=" hidden lg:flex">
        <ul className="px-1 text-lg flex  gap-8">
          {navLinks}

          {user && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-500 font-semibold "
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {user?.email ? (
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar online"
          >
            <div className="w-10 rounded-full">
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://www.svgrepo.com/show/525577/user-circle.svg"
                }
                alt={user.displayName}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            <li>
              <button className="btn btn-sm  btn-ghost">
                {user.displayName ? user.displayName : "Unknown user"}
              </button>
            </li>

            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-blue-500 uppercase w-full text-white font-semibold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-blue-500 w-full uppercase text-white font-semibold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
      ) : (
        <Link to="/login">
          <button className="bg-blue-500 w-full uppercase text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
