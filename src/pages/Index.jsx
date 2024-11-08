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
      <Experience
        title="Web Developer (Club Member)"
        location="Aug 2024 - Present | 8bit Club @ UH Mānoa"
        duties="Implement responsive and user-friendly components and pages in React, Collaborate with other team members to complete tasks in a timely manner."
      />
      <Experience
        title="Multimedia Center Technician"
        location="Aug 2024 - Present | Kalakaua Middle School"
        duties="Lead a team of 5 student workers to run and manage the eSports area and equipment, Streamlined and standardized workflows to simplify software updates and prevent unauthorized software installations"
      />
      <Experience
        title="Technical Analyst Assistant"
        location="Oct 2022 - May 2024 | Hawai'i Pacific University"
        duties="Boosted teacher and student satisfaction by resolving over 1200 tickets on hardware and software related issues, Created over 30 pages of documentation on resolving complex issues - leading to an increase in response times"
      />
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
