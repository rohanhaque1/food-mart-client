import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars4Icon, XCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <ul
            className={`md:flex gap-8 font-semibold absolute md:static duration-500 ${
              open ? "left-14 top-20" : "-left-48 top-20"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "text-emerald-600" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isActive ? "text-emerald-600" : isPending ? "pending" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? "text-emerald-600" : isPending ? "pending" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                  isActive ? "text-emerald-600" : isPending ? "pending" : ""
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="w-12 rounded-full">
          <img src="/public/vite.svg" />
        </div>
      </div>
    </>
  );
};

export default Navbar;