const Hero = () => (
  <section className="hero">
    <img
      src="/himanshuPIC.jpg"
      alt="Himanshu Pandey"
      className="hero-avatar"
    />
    <h1 className="hero-heading">Himanshu Pandey</h1>
    <h2 style={{fontWeight:400,marginTop:8}}>
      Senior Full-Stack Developer · React&nbsp;/&nbsp;Node
    </h2>
    <p style={{maxWidth:600}}>
      I craft large-scale SaaS products and real-time data dashboards that power telecom and enterprise workloads.
    </p>
    <a href="#contact" className="btn">Let’s collaborate</a>
  </section>
);
export default Hero;
