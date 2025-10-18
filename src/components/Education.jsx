export default function Education({ items = [] }) {
  if (!items.length) return null;
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="h2">Education</h2>
        <div className="card" style={{overflowX:"auto"}}>
          <table style={{width:"100%", borderCollapse:"collapse"}}>
            <thead style={{textAlign:"left", opacity:.8}}>
              <tr>
                <th style={{padding:"8px 6px"}}>Level</th>
                <th style={{padding:"8px 6px"}}>Institute</th>
                <th style={{padding:"8px 6px"}}>Board/University</th>
                <th style={{padding:"8px 6px"}}>Year</th>
                <th style={{padding:"8px 6px"}}>%</th>
              </tr>
            </thead>
            <tbody>
              {items.map((e, i) => (
                <tr key={i} style={{borderTop:"1px solid rgba(255,255,255,.06)"}}>
                  <td style={{padding:"8px 6px"}}><b>{e.level}</b> — {e.stream}</td>
                  <td style={{padding:"8px 6px"}}>{e.institute}</td>
                  <td style={{padding:"8px 6px"}}>{e.board}</td>
                  <td style={{padding:"8px 6px"}}>{e.year}</td>
                  <td style={{padding:"8px 6px"}}>{e.percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
