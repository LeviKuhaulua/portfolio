import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";

const Index = () => {
  return (
    <>
      <div className="h-screen bg-slate-800 text-stone-200">Hello World!</div>
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
