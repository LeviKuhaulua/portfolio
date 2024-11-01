import * as React from "react";
import "../styles/styles.css";

const Navbar = (props) => {
  return (
    <nav className="flex flex-col justify-start items-start gap-8 px-4 py-3.5 md:gap-4 md:px-8 md:flex-row">
      {props.children.map((btn, index) => (
        <li key={index} className="list-none">
          {btn}
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
