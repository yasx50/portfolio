import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const AboutScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-5xl md:text-6xl font-black text-black mb-12"
        >
          ABOUT ME
        </motion.h1>

        {/* Who I Am */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-3xl p-8 shadow-2xl mb-10 text-left"
        >
          <h2 className="text-3xl font-black text-black mb-4">WHO I AM</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            I'm Yash, a Computer Science student and full-stack developer
            passionate about Machine Learning, system design, and building
            scalable applications.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            I enjoy breaking complex ML concepts into practical, understandable
            implementations and sharing them through content and real-world projects.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-black text-orange-400 rounded-3xl p-8">
            <h3 className="text-2xl font-black mb-4">💻 FULL STACK</h3>
            <p className="text-white">
              MERN Stack, Node.js, Express, MongoDB, REST APIs, Authentication,
              Payment Integration.
            </p>
          </div>

          <div className="bg-black text-orange-400 rounded-3xl p-8">
            <h3 className="text-2xl font-black mb-4">🤖 MACHINE LEARNING</h3>
            <p className="text-white">
              Python, NumPy, Pandas, Model Building, Data Processing,
              Practical ML Applications.
            </p>
          </div>

          <div className="bg-black text-orange-400 rounded-3xl p-8">
            <h3 className="text-2xl font-black mb-4">🚀 PROJECT BUILDER</h3>
            <p className="text-white">
              E-commerce platforms, automation tools, AI experiments,
              production-ready applications.
            </p>
          </div>
        </motion.div>

        {/* Photo Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-6"
        >
          <img
            src="/assets/photo1.jpg"
            alt="Yash working"
            className="rounded-3xl shadow-2xl object-cover h-80 w-full hover:scale-105 transition-transform"
          />
          <img
            src="/assets/photo2.jpg"
            alt="Yash coding"
            className="rounded-3xl shadow-2xl object-cover h-80 w-full hover:scale-105 transition-transform"
          />
          <img
            src="/assets/advanced.jpg"
            alt="Yash presentation"
            className="rounded-3xl shadow-2xl object-cover h-80 w-full hover:scale-105 transition-transform"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default AboutScreen;