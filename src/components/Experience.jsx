export default function Experience({ items = [] }) {
  if (!items.length) return null;
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="h2">Experience</h2>
        <div className="card" style={{display:"grid", gap:16}}>
          {items.map((e, i) => (
            <div key={i} style={{borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,.06)" : "none", paddingBottom: i < items.length - 1 ? 12 : 0}}>
              <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8}}>
                <div><b>{e.designation}</b> — {e.company}</div>
                <div style={{opacity:.8, fontSize:14}}>
                  {new Date(e.from).toLocaleDateString()} – {new Date(e.to).toLocaleDateString()}
                </div>
              </div>
              <ul style={{margin:"8px 0 0 18px"}}>
                {e.summary?.map((s, j) => <li key={j} style={{marginBottom:6}}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
