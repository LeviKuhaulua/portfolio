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
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen text-white bg-background">
      <Header />
      <div>Hello World</div>
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
