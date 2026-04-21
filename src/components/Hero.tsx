import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Web Developer', 'React.js Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-0 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        
          {/* Left Section (Text + Typing Animation) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:mt-[90px] mt-4 w-full"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
              Hi, I'm Nakul Kumar <br />
              <span ref={typedRef} className="text-purple-500"></span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 max-w-xs sm:max-w-md md:max-w-lg">
              Creating immersive web experiences with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors text-center"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/nakulkumar99" target="_blanked" rel="noreferrer"
                className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors text-center"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right Section (Image / Illustration) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] mt-6 md:mt-[90px] flex items-center justify-center"
          >
            <img
              src="https://cdnl.iconscout.com/lottie/premium/thumb/web-development-6113550-5044209.gif"
              alt="Development Illustration"
              className="w-full max-w-[320px] sm:max-w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
