import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import "../components/Header";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen text-white bg-background">
      <Header />
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
