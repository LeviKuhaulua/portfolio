import * as React from "react";
import "../styles/styles.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="text-2xl container font-semibold p-4 border-b border-b-slate-600/0.5 inline-flex justify-center items-center sticky">
        <div className="pl-2">Levi Kuhaulua</div>

        <button
          type="button"
          className="ml-auto mr-2 outline-none ring-none rounded-lg focus:ring focus:ring-blue-400/30"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Click to open dropdown menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div>
          <a href="#">About Me</a>
          <a href="#">Experience</a>
          <a href="#">Education</a>
          <a href="#">Projects</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
