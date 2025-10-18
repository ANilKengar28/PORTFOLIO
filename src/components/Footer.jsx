export default function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} {profile?.name || "Your Name"} • All Rights Reserved
        </p>
        <div className="footer-links">
          {profile?.social?.linkedin && (
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {profile?.social?.github && (
            <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {profile?.email && (
            <a href={`mailto:${profile.email}`}>Email</a>
          )}
        </div>
      </div>
    </footer>
  );
}
