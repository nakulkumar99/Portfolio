
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';


const projects = [
  {
    title: "College Website",
    description: "Welcome to the College Website project! This is a multipage website designed to help users understand more about the college,explore the campus life, courses, and more.",
    image: "https://uicookies.com/wp-content/uploads/2018/08/education-free-college-website-templates.jpg",
    tags: ["HTML", "CSS"],
    github: "https://github.com/NKNakulkumar/College--Website",
    demo: "https://nknakulkumar.github.io/College-Website/"
  },
  {
    title: "Weather Forecast Application",
    description: "Next.js real-time weather app delivering accurate forecasts, live temperature updates, interactive maps, and detailed city-wise meteorological insights worldwide.",
    image: "https://cdn.dribbble.com/userupload/5015400/file/original-c61751cdfbfdaf884a0cc8493917fc1d.png?resize=1600x1200",
    tags: ["Next.js","DaisyUI","Axios","Recharts"],
    github: "https://github.com/NKNakulkumar/Weather-application",
    demo: "https://weatherclimateapp.vercel.app/"
  },
  {
    title: "Website Blocker",
    description: "Hello this is an Website Blocker browser extension is a tool that helps users limit or block access to specific websites while browsing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    tags: ["react","CSS","Tailwind","Vite"],
    github: "https://github.com/NKNakulkumar/Website-Blocker-Extension",
    demo: "https://github.com/NKNakulkumar/Website-Blocker-Extension"
  },
  {
    title: "Restaurant_App",
    description: "This is a simple and user-friendly app that lets customers view a restaurant’s menu digitally. It shows different food categories like breakfast,lunch,evening,dinner and details. ",
    image: "https://imgs.search.brave.com/58sYoKOr8W3cMwK5PL_W34UsBhh3mDNk8owjfDzrbro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MTQwMzI2NzgvZmls/ZS9vcmlnaW5hbC1l/ZWJkYjk5NjVkYjQy/MTRhZmRhMTUzYTBh/OTI2MmZmYy5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
    tags: ["react","CSS","Tailwind","Vite"],
    github: "https://github.com/NKNakulkumar/Restaurant_Menu_Appllication..",
    demo: "https://nakulmenuapp.netlify.app/"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative perspective"
    >
      <div className="relative transform-gpu transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="relative bg-[#0f1729] rounded-2xl overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-purple-900/30 text-purple-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="bg-[#0f1729] rounded-2xl h-full w-full p-6 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold text-white mb-4">Projects.</h2>
          <p className="text-gray-400 mb-12 text-lg max-w-3xl">
            My work. Each project is briefly described with links to code repositories and live demos in
            it. It reflects my ability to solve complex problems, work with different technologies, and
            manage projects effectively.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
