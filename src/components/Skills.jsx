// export default function Skills({ skills }) {
//   return (
//     <section id="services" className="section skills">
//       <div className="container">
//         <h2 className="h2">My Skills</h2>
//         <div className="card">
//           {skills.map(([name, pct])=>(
//             <div className="item" key={name}>
//               <div style={{display:"flex", justifyContent:"space-between", fontSize:14, marginBottom:6}}>
//                 <span>{name}</span><span>{pct}%</span>
//               </div>
//               <div className="bar"><span style={{width:`${pct}%`}}/></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Skills({ skills }) {
  // Accept both formats:
  // 1) Array of [name, pct]
  // 2) Object of { Category: [ [name, pct], ... ], ... }
  const isArrayFormat = Array.isArray(skills);

  if (!skills || (isArrayFormat && !skills.length)) return null;

  const renderBar = (name, pct) => (
    <div className="item" key={name}>
      <div style={{display:"flex", justifyContent:"space-between", fontSize:14, marginBottom:6}}>
        <span>{name}</span><span>{pct}%</span>
      </div>
      <div className="bar"><span style={{width:`${pct}%`}}/></div>
    </div>
  );

  return (
    <section id="services" className="section skills">
      <div className="container">
        <h2 className="h2">My Skills</h2>

        {/* If old array format, keep your original card */}
        {isArrayFormat ? (
          <div className="card">
            {skills.map(([name, pct]) => renderBar(name, pct))}
          </div>
        ) : (
          // New grouped layout
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card">
                <h3 style={{marginTop:0, marginBottom:12}}>{category}</h3>
                {items.map(([name, pct]) => renderBar(name, pct))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
