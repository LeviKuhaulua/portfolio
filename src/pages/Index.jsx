import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Index = () => {
  return (
    <div className="min-h-screen text-white bg-background">
      <Header />
      <Navbar>
        <Button name="projects" />
        <Button name="experience" />
        <Button name="download resume" download="path/to/something" />
      </Navbar>
      <div>Hello World</div>
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
