import * as React from "react";
import "../styles/styles.css";
import { useState } from "react";

const Navbar = (props, children) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p>Hello World</p>
    </>
  );
};

export default Navbar;
