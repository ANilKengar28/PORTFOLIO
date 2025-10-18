import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/profile.json").then(r=>r.json()).then(setProfile);
    fetch(process.env.PUBLIC_URL + "/data/projects.json").then(r=>r.json()).then(setProjects);
  }, []);

  if (!profile) return null;

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile.skills} />
        <Experience items={profile.experience} />
        <Education items={profile.education} />
        <Projects items={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />s
    </>
  );
}
