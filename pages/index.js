import Head from 'next/head';
import Hero from '../src/components/Hero';
import Skills from '../src/components/Skills';
import Experience from '../src/components/Experience';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Himanshu Pandey | Senior Full-Stack Developer</title>
        <meta name="description"
              content="Portfolio of Himanshu Pandey, Senior MERN-Stack Developer."/>
      </Head>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  );
}
