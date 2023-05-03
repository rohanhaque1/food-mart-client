import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars4Icon, XCircleIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-between items-center px-8 md:px-20 py-5 bg-white">
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <span>
            {open === true ? (
              <XCircleIcon className="h-9 w-9 text-green-700" />
            ) : (
              <Bars4Icon className="h-9 w-9 text-green-700" />
            )}
          </span>
        </div>

        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold">FoodMart</h2>
          </Link>
        </div>

        <nav>
          <div
            className={`md:flex gap-8 font-semibold absolute md:static duration-500 ${
              open ? "left-14 top-20" : "-left-48 top-20"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-emerald-600" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isActive ? "text-emerald-600" : isPending ? "pending" : ""
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isActive ? "text-emerald-600" : isPending ? "pending" : ""
              }
            >
              Register
            </NavLink>
          </div>
        </nav>

        <div>
          {user ? (
            <>
              <NavLink
                to="/"
                className="bg-emerald-400 px-3 py-2 rounded-lg text-white font-semibold"
              >
                Log out
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className="bg-emerald-400 px-3 py-2 rounded-lg text-white font-semibold"
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="w-12 rounded-full">
          <img
            className="rounded-full"
            src="https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
