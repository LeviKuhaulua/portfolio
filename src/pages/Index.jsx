import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import "../components/Header";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="h-screen text-white bg-background">
      <Header />
      <div>Hello World!</div>
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
