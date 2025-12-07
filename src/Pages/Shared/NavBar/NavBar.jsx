import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/shop", label: "Shop" },
    { to: "/reservation", label: "Reservation" },
    { to: "/contact", label: "Contact" },
  ];

  const navOption = (
    <>
      {links.map((link) => (
        <li key={link.to} className="px-1">
          <Link
            to={link.to}
            className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
              pathname === link.to || pathname.startsWith(link.to)
                ? "text-primary"
                : "text-neutral-700 hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <header className="sticky top-1 mb-2 z-50">
      <div className="section-shell">
        <div className="navbar glass-card px-4 py-3 lg:px-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl bg-white/95 p-3 shadow-2xl"
              >
                {navOption}
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                ME
              </div>
              <div>
                <p className="text-primary font-semibold leading-tight text-neutral-900">
                  Mesa Elegante
                </p>
              </div>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{navOption}</ul>
          </div>

          <div className="navbar-end gap-2">
            <button className="btn btn-ghost btn-sm px-4">Book</button>
            <button className="btn btn-primary btn-sm px-4">Order</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
