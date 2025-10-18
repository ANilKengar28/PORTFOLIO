import { FaTwitter, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

const HERO_PATH = "/projects/hero.png"; // <-- updated path

export default function Hero({ profile }) {
  // const name    = profile?.name || "Your Name";
  const role    = profile?.role || "Frontend Developer";
  const tagline = profile?.tagline || "I build clean, responsive, fast web experiences.";
  const resume  = profile?.resume || "/resume/Resume_AnilKengar_2025";
  const social  = profile?.social || {};
  const iconStyle = { display: "inline-flex", alignItems: "center", gap: 8 };

  async function downloadResume(e) {
    e.preventDefault();
    const path = resume.startsWith("/")
      ? `${process.env.PUBLIC_URL}${resume}`
      : `${process.env.PUBLIC_URL}/${resume}`;
    const resp = await fetch(path);
    if (!resp.ok) return alert("Resume not found.");
    const blob = await resp.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (resume.split("/").pop()) || "resume.pdf";
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  }

  const heroSrc = `${process.env.PUBLIC_URL}${HERO_PATH}`;

  return (
    <section id="home" className="hero" aria-label="Hero">
      <div className="container hero-inner">
        <div>
          <div style={{ display: "flex", gap: 12, marginBottom: 18, color: "#8fb8ff" }}>
            {social.twitter  && <a href={social.twitter}  aria-label="Twitter"><FaTwitter/></a>}
            {social.linkedin && <a href={social.linkedin} aria-label="LinkedIn"><FaLinkedin/></a>}
            {social.github   && <a href={social.github}   aria-label="GitHub"><FaGithub/></a>}
            {social.behance  && <a href={social.behance}  aria-label="Behance"><FaBehance/></a>}
          </div>

          <h1 style={{ margin: 0 }}> A {role}</h1>
          <p className="tag">{tagline}</p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#projects">My Work</a>
            <a className="btn btn-outline" href="#contact">Hire Me</a>
            {resume && (
              <button className="btn btn-outline" style={iconStyle} type="button" onClick={downloadResume}>
                Download Resume
              </button>
            )}
          </div>
        </div>

        <div>
          <div className="card" style={{ textAlign: "center" }}>
            <img
              src={heroSrc}
              alt="Portfolio hero portrait"
              style={{ width: "100%", borderRadius: 12 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
