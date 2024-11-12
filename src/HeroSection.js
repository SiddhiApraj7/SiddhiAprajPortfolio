// HeroSection.js
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroImage from './assets/heroImage.jpeg'; // Adjust the path accordingly

export default function HeroSection({ onAnimationEnd, scrollToSection, aboutRef, projectsRef, contactRef }) {
  const [showNav, setShowNav] = useState(false);

  // Show navbar after image and text animation complete
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNav(true);
      if (onAnimationEnd) {
        onAnimationEnd(); // Trigger the callback to show sections in App component
      }
    }, 2500);
    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  return (
    <div className="relative h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Animated Image */}
      <motion.img
        src={heroImage}
        alt="Hero"
        className="w-full sm:w-auto h-60 sm:h-96 rounded-sm shadow-lg"
        initial={{ scale: 1.2, opacity: 1 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{ duration: 2 }}
      />

      {/* Animated Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center mb-10 sm:mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-xs sm:text-sm text-[#B4E8FF]">Hello! I'm</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#B4E8FF]">Siddhi :)</h1>
      </motion.div>

      {/* Navbar - Appears after animation */}
      {showNav && (
        <motion.nav
          className="absolute top-0 left-0 w-full p-4 flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#A69D74]">Siddhi Apraj</span>
          <div className="flex space-x-4">
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-[#34AED5] text-[#102F5D]">About</button>
            <button onClick={() => scrollToSection(projectsRef)} className="hover:text-[#34AED5] text-[#102F5D]">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#34AED5] text-[#102F5D]">Contact</button>
          </div>
        </motion.nav>
      )}
    </div>
  );
}
