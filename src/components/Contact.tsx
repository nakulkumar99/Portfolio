import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticleRing from './ParticleRing';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget); // Use e.currentTarget to get the form element
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY || ""); // Use the environment variable
  
    const object = Object.fromEntries(formData); // Convert FormData to an object
    // console.log("Form Data:", object); // Log the form data
    const json = JSON.stringify(object); // Convert object to JSON
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const data = await res.json(); // Await the response
  
      if (data.success) {
        console.log("Success", data);
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        console.error("Submission failed", data);
      }
    } catch (error) {
      console.error("Error during submission:", error); // Handle any errors that occur during fetch
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-12"
        >
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
            <div className="max-w-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1 lg:w-[55%]">
            <ParticleRing />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;