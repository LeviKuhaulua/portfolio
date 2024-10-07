import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";

const Index = () => {
  return (
    <>
      {/* Configure Tailwind with Webpack and React later */}
      <h1 className="text-3xl font-bold underline-offset-2">Hello World</h1>
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
