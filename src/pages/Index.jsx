import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";

const Index = () => {
  return (
    <>
      <div>Hello World!</div>
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
