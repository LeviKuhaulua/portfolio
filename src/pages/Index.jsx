import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import Experience from "../components/Experience";
import Resume from "../assets/LeviKuhaulua_Resume_2024.pdf";

const Index = () => {
  return (
    <div className="min-h-screen text-white bg-background">
      <Header />
      <Navbar>
        <Button name="projects" />
        <Button name="experience" />
        <Button name="download resume" download={Resume} />
      </Navbar>
      <Section name="projects"></Section>
      <Section name="experience"></Section>
      <Experience />
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
