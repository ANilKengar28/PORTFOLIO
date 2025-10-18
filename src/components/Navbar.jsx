// import { useEffect, useRef, useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef(null);
//   const btnRef  = useRef(null);

//   // Close when viewport grows beyond mobile breakpoint
//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth > 820) setOpen(false); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // Close on click outside
//   useEffect(() => {
//     const onDocClick = (e) => {
//       if (!open) return;
//       const m = menuRef.current, b = btnRef.current;
//       if (m && b && !m.contains(e.target) && !b.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("click", onDocClick);
//     return () => document.removeEventListener("click", onDocClick);
//   }, [open]);

//   // Close on Esc
//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   // Close on hash navigation (anchor jump)
//   useEffect(() => {
//     const onHash = () => setOpen(false);
//     window.addEventListener("hashchange", onHash);
//     return () => window.removeEventListener("hashchange", onHash);
//   }, []);

//   const items = [
//     ["Home", "#home"],
//     ["About", "#about"],
//     ["Skills", "#services"],
//     ["Experience", "#experience"],
//     ["Education", "#education"],
//     ["Projects", "#projects"],
//     ["Contact", "#contact"],
//   ];

//   return (
//     <nav className="nav" role="navigation" aria-label="Main">
//       <div className="container row">
//         <a href="#home" className="brand">Parth Pidurkar</a>

//         {/* Hamburger */}
//         <button
//           ref={btnRef}
//           className="menu-toggle"
//           type="button"
//           aria-label="Toggle navigation"
//           aria-controls="main-menu"
//           aria-expanded={open}
//           onClick={() => setOpen(v => !v)}
//         >
//           ☰
//         </button>

//         {/* Backdrop (mobile) – click to close */}
//         <div
//           className={`menu-backdrop ${open ? "show" : ""}`}
//           onClick={() => setOpen(false)}
//           aria-hidden="true"
//         />

//         {/* Menu */}
//         <ul
//           id="main-menu"
//           ref={menuRef}
//           className={`menu ${open ? "is-open" : ""}`}
//           onClick={(e) => { if (e.target.tagName === "A") setOpen(false); }}
//         >
//           {items.map(([label, href]) => (
//             <li key={label}><a href={href}>{label}</a></li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef  = useRef(null);

  // Close when viewport grows beyond mobile breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on click outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (!open) return;
      const m = menuRef.current, b = btnRef.current;
      if (m && b && !m.contains(e.target) && !b.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close on hash navigation (anchor jump)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const items = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#services"],
    ["Experience", "#experience"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="nav" role="navigation" aria-label="Main">
      <div className="container row">
        {/* Logo + Brand Name */}
        <a href="#home" className="brand" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img 
            src={process.env.PUBLIC_URL + "./projects/logo.png"} 
            alt="Logo" 
            style={{ height: "60px", width: "60px", borderRadius: "20px" }} 
          />
          <span>ANIL KENGAR</span>
        </a>

        {/* Hamburger */}
        <button
          ref={btnRef}
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-controls="main-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>

        {/* Backdrop (mobile) – click to close */}
        <div
          className={`menu-backdrop ${open ? "show" : ""}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Menu */}
        <ul
          id="main-menu"
          ref={menuRef}
          className={`menu ${open ? "is-open" : ""}`}
          onClick={(e) => { if (e.target.tagName === "A") setOpen(false); }}
        >
          {items.map(([label, href]) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
