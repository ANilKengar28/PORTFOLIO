export default function Projects({ items }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Portfolio</h2>
        <div className="projects">
          {items.map(p=>(
            <a key={p.title} className="card proj" href={p.url}>
              <img src={process.env.PUBLIC_URL + p.image} alt={p.title}/>
              <h3 style={{margin:"10px 0 6px"}}>{p.title}</h3>
              <p style={{color:"var(--muted)", margin:0}}>{p.desc}</p>
              <div style={{marginTop:8, fontSize:13, opacity:.8}}>{p.stack.join(" • ")}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
