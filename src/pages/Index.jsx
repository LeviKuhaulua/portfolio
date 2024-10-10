import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <div>Hello World!</div>
      <Footer />
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
