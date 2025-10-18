// src/components/About.jsx
export default function About({ profile }) {
  const {
    name = "Your Name",
    email = "",
    phone = "",
    location = "",
    about = "Brief bio about you.",
    resume,
    social = {}
  } = profile || {};

  const contactItem = (label, value, href) => (
    <div>
      <b>{label}:</b>{" "}
      {href ? <a href={href} target="_blank" rel="noreferrer">{value}</a> : value}
    </div>
  );

  return (
    <section id="about" className="section" aria-label="About Me">
      {/* give this wrapper a class so CSS can control layout at breakpoints */}
      <div className="container about-grid">
        {/* Photo */}
        <img
          className="card about-photo"
          src={`${process.env.PUBLIC_URL}/projects/About.png`} // ✅ path fix
          alt="About me"
        />

        {/* Text */}
        <div>
          <h2 className="h2">About Me</h2>

          <p className="card" style={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
            {about}
          </p>

          <div
            className="card"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              alignItems: "center"
            }}
          >
            {contactItem("Name", name)}
            {contactItem("Email", email, email ? `mailto:${email}` : undefined)}
            {contactItem("Phone", phone, phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined)}
            {contactItem("Location", location)}

            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                gap: 10,
                flexWrap: "wrap"
              }}
            >
              {resume && (
                <a className="btn btn-outline" href={resume} target="_blank" rel="noreferrer">
                  View Resume
                </a>
              )}
              {social.linkedin && (
                <a className="btn btn-outline" href={social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
              )}
              {social.github && (
                <a className="btn btn-outline" href={social.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
