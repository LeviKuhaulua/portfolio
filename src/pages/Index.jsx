import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div>Hello World!</div>
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
