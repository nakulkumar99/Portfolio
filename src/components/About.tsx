import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const roles = [
  {
    title: "Full Stack Web Developer",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-5019746-4183733.png"
  },
  {
    title: "React.js Developer",
    icon: "https://cdn3d.iconscout.com/3d/free/thumb/react-5645899-4695757.png"
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0a0a0a] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Overview.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            I'm a skilled Full Stack Web Developer with a strong foundation in HTML, CSS and JavaScript, Mern Stack, 
            responsive, modern, and performance-focused websites
            and specialized expertise in frameworks like React and Express.js. With a passion 
            for solving complex problems, I deliver efficient, scalable, and user-friendly solutions 
            tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group perspective"
            >
              <div className="relative bg-[#151030] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center
                transition-all duration-500 hover:scale-105
                before:absolute before:inset-0 before:rounded-[24px] sm:before:rounded-[30px] before:bg-[#1a1744]
                before:transition-opacity before:duration-500 before:opacity-0 group-hover:before:opacity-100
                border border-[#2a2666] group-hover:border-[#4a3f9f]"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 sm:mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <img 
                      src={role.icon} 
                      alt={role.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">{role.title}</h3>
                </div>

                <div className="absolute inset-0 rounded-[24px] sm:rounded-[30px] opacity-0 group-hover:opacity-100
                  bg-gradient-to-b from-transparent via-[#2a1f6f]/20 to-[#2a1f6f]/40
                  transition-opacity duration-500"
                />

                <div className="absolute -inset-0.5 rounded-[24px] sm:rounded-[30px] bg-gradient-to-r from-[#4a3f9f] to-[#2a1f6f]
                  opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
