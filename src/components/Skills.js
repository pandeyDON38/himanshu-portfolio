const skills=[
 'React.js','Redux','JavaScript (ES6+)','HTML5','CSS3','Node.js','Express.js',
 'RESTful APIs','Microservices','MongoDB','MySQL','Redis',
 'Docker','Kubernetes','AWS','Git/GitHub','Jenkins','Linux'];
const Skills=()=>(
<section><h2>Skills</h2>
<div className="grid grid-3">
 {skills.map(s=><div key={s}
 style={{background:'#fff',padding:'10px',borderRadius:'6px',
 boxShadow:'0 2px 4px rgba(0,0,0,0.05)'}}>{s}</div>)}
</div></section>);
export default Skills;
