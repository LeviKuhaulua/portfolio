import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
<<<<<<< HEAD
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
=======
import "../components/Header";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="h-screen text-white bg-background">
      <Header />
>>>>>>> cc14909cb0b628f5e026c6260667f2905b893f86
      <div>Hello World!</div>
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
