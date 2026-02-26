import { motion } from "framer-motion";

const cardAnimation = {
  hidden: { opacity: 0, x: -80, rotate: -3 },
  visible: { opacity: 1, x: 0, rotate: 0 },
};

/* ── Floating background cards ── */
const floatingCards = [
  {
    id: 1,
    text: "Shipping real products since day one 🚀",
    style: { top: "7%", left: "1%", animationDelay: "0s", animationDuration: "7s", rotate: "-3deg" },
  },
  {
    id: 2,
    text: "ML + Web = unstoppable combo ⚡",
    style: { top: "14%", right: "1%", animationDelay: "2s", animationDuration: "9s", rotate: "4deg" },
  },
  {
    id: 3,
    text: "Every project solves a real problem 🎯",
    style: { bottom: "24%", left: "0%", animationDelay: "1s", animationDuration: "8s", rotate: "2deg" },
  },
  {
    id: 4,
    text: "From idea to production. Fast. 🔥",
    style: { bottom: "8%", right: "1%", animationDelay: "3s", animationDuration: "10s", rotate: "-4deg" },
  },
  {
    id: 5,
    text: "Code that actually ships 💻",
    style: { top: "50%", left: "0%", animationDelay: "1.5s", animationDuration: "6s", rotate: "5deg" },
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inconsolata:wght@400;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .projects-root {
    min-height: 100vh;
    background: #0a0a0a;
    padding: 90px 16px 60px;
    position: relative;
    overflow: hidden;
    font-family: 'Inconsolata', monospace;
  }

  .projects-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(251,146,60,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(251,146,60,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    z-index: 0;
  }

  .projects-inner {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }

  /* ── Floating cards ── */
  @keyframes floatY {
    0%, 100% { transform: translateY(0px) rotate(var(--rotate)); }
    50%       { transform: translateY(-16px) rotate(var(--rotate)); }
  }

  .float-card {
    position: fixed;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(251,146,60,0.22);
    border-radius: 14px;
    padding: 12px 16px;
    max-width: 200px;
    backdrop-filter: blur(8px);
    animation: floatY var(--dur) ease-in-out infinite;
    animation-delay: var(--delay);
    z-index: 1;
    pointer-events: none;
    color: rgba(255,255,255,0.7);
    font-size: 0.76rem;
    line-height: 1.5;
    font-family: 'Inconsolata', monospace;
  }

  @media (max-width: 640px) { .float-card { display: none; } }

  /* ── Title ── */
  .projects-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.08em;
    text-align: center;
    margin-bottom: 52px;
  }

  .projects-title span { color: #fb923c; }

  /* ── Grid ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px)  { .projects-grid { grid-template-columns: 1fr; } }

  /* ── Project card ── */
  .project-card {
    background: rgba(15,15,15,0.9);
    border: 1.5px solid rgba(251,146,60,0.22);
    border-radius: 24px;
    padding: 28px 24px;
    backdrop-filter: blur(16px);
    box-shadow: 0 0 40px rgba(251,146,60,0.04), 0 24px 48px rgba(0,0,0,0.5);
    transition: border-color 0.3s, transform 0.25s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .project-card:hover {
    border-color: #fb923c;
    transform: translateY(-6px);
    box-shadow: 0 0 40px rgba(251,146,60,0.15), 0 32px 60px rgba(0,0,0,0.6);
  }

  /* ── Domain badge ── */
  .badge {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 999px;
    font-family: 'Syne', sans-serif;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    border: 1.5px solid #fb923c;
    color: #fb923c;
    background: rgba(251,146,60,0.08);
    width: fit-content;
    animation: badgePulse 2.5s ease-in-out infinite;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 8px rgba(251,146,60,0.3); }
    50%       { box-shadow: 0 0 22px rgba(251,146,60,0.7); }
  }

  /* ── Card title ── */
  .project-card h3 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.05em;
  }

  /* ── Description ── */
  .project-card p {
    color: rgba(255,255,255,0.6);
    font-size: 0.9rem;
    line-height: 1.75;
    flex: 1;
  }

  /* ── Tech tags ── */
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    background: rgba(251,146,60,0.1);
    border: 1px solid rgba(251,146,60,0.35);
    color: #fb923c;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: background 0.2s;
  }

  .tag:hover { background: rgba(251,146,60,0.2); }

  /* ── CTA button ── */
  .demo-btn {
    display: inline-block;
    background: #fb923c;
    color: #000;
    padding: 10px 22px;
    border-radius: 12px;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    letter-spacing: 0.06em;
    text-decoration: none;
    transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
    width: fit-content;
  }

  .demo-btn:hover {
    background: #fdba74;
    box-shadow: 0 0 24px rgba(251,146,60,0.5);
    transform: translateY(-1px);
  }

  .wip-badge {
    display: inline-block;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.4);
    padding: 10px 22px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
  }
`;

const ProjectsScreen = () => {
  const projects = [
    {
      title: "TALK TO TITANIC",
      domain: "AGENTIC AI",
      description:
        "A goal-driven Agentic AI built using Python + Streamlit enabling interactive Titanic exploration with LLM reasoning.",
      tech: ["Python", "Streamlit", "Groq", "NumPy", "Pandas"],
      link: "https://tailortalk.streamlit.app/",
    },
    {
      title: "ML CREDIT SCORING",
      domain: "FINTECH + ML",
      description:
        "Predicts MSME loan eligibility using ML models with FastAPI backend and MERN-based financial workflow integration.",
      tech: ["Python", "FastAPI", "Machine Learning", "MERN"],
      link: "https://ai-based-credit-scoring-agent-for-msmes-1.onrender.com/",
    },
    {
      title: "AI DEBATE ENGINE",
      domain: "MULTI-AGENT AI",
      description:
        "Users input two individuals' data and AI generates structured debate from both perspectives using advanced reasoning agents.",
      tech: ["React", "Node.js", "LLM", "Prompt Engineering"],
      link: "https://ai-war.onrender.com/",
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="projects-root">

        {/* Floating cards */}
        {floatingCards.map((card) => (
          <div
            key={card.id}
            className="float-card"
            style={{
              ...card.style,
              "--rotate": card.style.rotate,
              "--dur": card.style.animationDuration,
              "--delay": card.style.animationDelay,
            }}
          >
            {card.text}
          </div>
        ))}

        <div className="projects-inner">

          {/* Title */}
          <motion.h1
            className="projects-title"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            MY <span>PROJECTS</span>
          </motion.h1>

          {/* Cards Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardAnimation}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <span className="badge">{project.domain}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    Live Demo →
                  </a>
                ) : (
                  <span className="wip-badge">Under Development</span>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectsScreen;