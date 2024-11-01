import * as React from "react";
import "../styles/styles.css";
import { useState } from "react";
import Button from "./Button";

const Navbar = (props, children) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-row gap-2.5 px-4 md:px-8">
      <Button name="skills" />
      <Button name="experience" />
      <Button name="download resume" download="../../public/assets/LK.svg" />
    </nav>
  );
};

export default Navbar;
