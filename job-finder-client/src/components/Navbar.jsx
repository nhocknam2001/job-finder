import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      path: "/",
      title: "Start A Search",
    },
    {
      path: "/my-jobs",
      title: "My Jobs",
    },
    {
      path: "/salary",
      title: "Salary Estimate",
    },
    {
      path: "/post-job",
      title: "Post A Job",
    },
  ];

  return (
    <header className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className=" flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width={29}
            height={30}
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx={12.0143}
              cy={12.5143}
              r={12.0143}
              fill="#3575e3"
              fillOpacity={0.4}
            ></circle>
            <circle
              cx={12.0143}
              cy={17.4857}
              r={12.0143}
              fill="#3575e3"
            ></circle>
          </svg>
          <span>Job Finder</span>
        </a>

        {/* nav items for large devices */}
        <ul className=" hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign up and login button */}
        <div className=" text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className=" py-2 px-5 border rounded">
            Login
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign Up
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark />
            ) : (
              <FaBarsStaggered className=" w5 h-5 text-primary"></FaBarsStaggered>
            )}
          </button>
        </div>
      </nav>

      {/* nav items for mobile */}
      <div
        className={`px-4 bg-sky-200 py-5 rounded-sm 
        ${isMenuOpen ? "" : "hidden"}
        `}
      >
        <ul className=" justify-between">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className=" text-white py-1">
            <Link to="/login"></Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
