import { motion } from "framer-motion";

const cardAnimation = {
  hidden: { opacity: 0, x: -80, rotate: -3 },
  visible: { opacity: 1, x: 0, rotate: 0 }
};

const ProjectsScreen = () => {
  const projects = [
    {
      title: "TALK TO TITANIC",
      domain: "AGENTIC AI",
      description:
        "A goal-driven Agentic AI built using Python + Streamlit enabling interactive Titanic exploration with LLM reasoning.",
      tech: ["Python", "Streamlit", "Groq", "NumPy", "Pandas"],
      link: "https://tailortalk.streamlit.app/",
      glow: "agentic"
    },
    {
      title: "ML CREDIT SCORING",
      domain: "FINTECH + ML",
      description:
        "Predicts MSME loan eligibility using ML models with FastAPI backend and MERN-based financial workflow integration.",
      tech: ["Python", "FastAPI", "Machine Learning", "MERN"],
      link:
        "https://ai-based-credit-scoring-agent-for-msmes-1.onrender.com/",
      glow: "fintech"
    },
    {
      title: "AI DEBATE ENGINE",
      domain: "MULTI-AGENT AI",
      description:
        "Users input two individuals' data and AI generates structured debate from both perspectives using advanced reasoning agents.",
      tech: ["React", "Node.js", "LLM", "Prompt Engineering"],
      link: "https://ai-war.onrender.com/",
      glow: "multi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
      <div className="max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-black mb-12 text-center"
        >
          MY PROJECTS
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardAnimation}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-7 shadow-2xl hover:shadow-black/40 transition-all duration-300"
            >
              {/* Glowing Domain Badge */}
              <div
                className={`inline-block px-4 py-1 rounded-full text-sm font-black mb-4 
                ${
                  project.glow === "agentic"
                    ? "bg-black text-orange-400 animate-pulse shadow-[0_0_20px_#f97316]"
                    : project.glow === "fintech"
                    ? "bg-orange-500 text-white animate-pulse shadow-[0_0_20px_#000]"
                    : "bg-black text-orange-400 animate-pulse shadow-[0_0_20px_#f97316]"
                }`}
              >
                {project.domain}
              </div>

              <h3 className="text-2xl font-black text-black mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link Section */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-orange-400 px-5 py-2 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                >
                  Live Demo →
                </a>
              ) : (
                <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold inline-block">
                  Under Development
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;