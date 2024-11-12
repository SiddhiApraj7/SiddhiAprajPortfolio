// App.js
import { useState, useRef } from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';
import SocialLinks from './Socials';

function App() {
  const [showSections, setShowSections] = useState(false);

  // Refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Callback to show sections after animation
  const handleAnimationEnd = () => {
    setShowSections(true); // This will allow other sections to render after the animation
  };

  // Scroll to section function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Pass handleAnimationEnd, scrollToSection, and refs as props to HeroSection */}
      <HeroSection
        onAnimationEnd={handleAnimationEnd}
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {/* Conditionally render sections after animation is done */}
      {showSections && (
        <>
          <div ref={aboutRef}><About /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={contactRef}><SocialLinks /></div>
        </>
      )}
    </>
  );
}

export default App;
