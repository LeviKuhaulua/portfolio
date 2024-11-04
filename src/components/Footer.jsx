import * as React from "react";
import "../styles/styles.css";

const Footer = () => {
  return (
    <>
      <footer className="text-sm font-normal border-t border-t-white/30 mt-10 pt-4 flex flex-col flex-wrap justify-start items-center gap-8 lg:border-t-0">
        <p>
          &copy; Levi Kuhaulua {new Date().getFullYear()}, All rights reserved
        </p>
        <a href="#" className="border border-accent p-2 rounded-md">
          <p className="sr-only">Go back to top of page</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="oklab(71.59% 0.077 -0.10)"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </a>
      </footer>
    </>
  );
};

export default Footer;
