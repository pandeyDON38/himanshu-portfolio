import Image from 'next/image';

const projects = [
  {
    name: 'Eurion',
    description: 'Real-time network-analytics dashboard; cut incident response by 30 %',
    tech: 'React, Node, MySQL',
    link: '#',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop'
  },
  {
    name: 'Missing People DB',
    description: 'MERN app with fuzzy-search & alerting for law-enforcement',
    tech: 'MERN Stack, ElasticSearch',
    link: '#',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop'
  },
  {
    name: 'PMS Upgrade',
    description: 'Modernised Product-Management Suite; micro-frontends & GraphQL',
    tech: 'React, Apollo, Node, Docker',
    link: '#',
    img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200&h=800&fit=crop'
  },
  {
    name: 'BSS-CBS',
    description: 'Billing & Customer-Care platform (1 M+ subs, 99.99 % uptime)',
    tech: 'Node, Kafka, MongoDB, Kubernetes',
    link: '#',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop'
  },
];


const Projects = () => (
  <section id="projects">
    <h2>Selected&nbsp;Projects</h2>

    <div className="grid grid-2">
      {projects.map(p => (
        <div key={p.name} className="card">
          {/* Next/Image = lazy-loaded, optimised, no layout shift */}
          <Image
  src={p.img}
  alt={p.name}
  width={600}
  height={400}
  unoptimized     // ← skips the Next.js optimisation proxy
  style={{ width: '100%', height: 200, objectFit: 'cover' }}
/>
          <div className="card-body">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>Tech:</strong> {p.tech}</p>

            {p.link !== '#' && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener"
                className="btn"
                style={{ padding: '8px 18px', fontSize: 14 }}
              >
                Live&nbsp;Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
