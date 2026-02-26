import { motion } from "framer-motion";
import gym from "../../assets/gg.jpeg";
import content from "../../assets/cc.jpg";
import coder from "../../assets/pp.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

/* ── Floating background cards ── */
const floatingCards = [
  {
    id: 1,
    text: "CS Student & Full-Stack Dev 🧠",
    style: { top: "6%", left: "1%", animationDelay: "0s", animationDuration: "7s", rotate: "-3deg" },
  },
  {
    id: 2,
    text: "Building scalable apps since day one 🚀",
    style: { top: "12%", right: "1%", animationDelay: "2s", animationDuration: "9s", rotate: "4deg" },
  },
  {
    id: 3,
    text: "ML + Web = the dream stack ⚡",
    style: { bottom: "25%", left: "0%", animationDelay: "1s", animationDuration: "8s", rotate: "2deg" },
  },
  {
    id: 4,
    text: "Turning ideas into real products 🎯",
    style: { bottom: "8%", right: "1%", animationDelay: "3s", animationDuration: "10s", rotate: "-4deg" },
  },
  {
    id: 5,
    text: "Code. Lift. Create. Repeat. 💪",
    style: { top: "48%", left: "0%", animationDelay: "1.5s", animationDuration: "6s", rotate: "5deg" },
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inconsolata:wght@400;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .about-root {
    min-height: 100vh;
    background: #0a0a0a;
    padding: 90px 16px 60px;
    position: relative;
    overflow: hidden;
    font-family: 'Inconsolata', monospace;
  }

  .about-root::before {
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

  .about-inner {
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

  @media (max-width: 640px) {
    .float-card { display: none; }
  }

  /* ── Section title ── */
  .about-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.08em;
    text-align: center;
    margin-bottom: 48px;
  }

  .about-title span { color: #fb923c; }

  /* ── Who I Am card ── */
  .who-card {
    background: rgba(15,15,15,0.9);
    border: 1.5px solid rgba(251,146,60,0.25);
    border-radius: 24px;
    padding: clamp(24px, 4vw, 44px);
    margin-bottom: 32px;
    backdrop-filter: blur(16px);
    box-shadow: 0 0 40px rgba(251,146,60,0.06), 0 24px 48px rgba(0,0,0,0.5);
  }

  .who-card h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    font-weight: 800;
    color: #fb923c;
    letter-spacing: 0.06em;
    margin-bottom: 16px;
  }

  .who-card p {
    color: rgba(255,255,255,0.75);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 12px;
  }

  /* ── Skill cards ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    .skills-grid { grid-template-columns: 1fr; }
  }

  .skill-card {
    background: rgba(251,146,60,0.06);
    border: 1.5px solid rgba(251,146,60,0.28);
    border-radius: 20px;
    padding: 28px 24px;
    transition: border-color 0.25s, background 0.25s, transform 0.2s;
  }

  .skill-card:hover {
    border-color: #fb923c;
    background: rgba(251,146,60,0.1);
    transform: translateY(-4px);
  }

  .skill-card h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: #fb923c;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }

  .skill-card p {
    color: rgba(255,255,255,0.65);
    font-size: 0.9rem;
    line-height: 1.7;
  }

  /* ── Photo grid ── */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    .photo-grid { grid-template-columns: 1fr; }
  }

  .photo-card {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    height: 320px;
    cursor: pointer;
    border: 1.5px solid rgba(251,146,60,0.2);
    transition: border-color 0.3s;
  }

  .photo-card:hover { border-color: #fb923c; }

  .photo-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-out;
  }

  .photo-card:hover img { transform: scale(1.1); }

  .photo-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0);
    transition: background 0.4s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .photo-card:hover .photo-overlay {
    background: rgba(0,0,0,0.72);
  }

  .photo-label {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    color: #fb923c;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    letter-spacing: 0.1em;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.4s, transform 0.4s;
    text-align: center;
    padding: 0 16px;
  }

  .photo-card:hover .photo-label {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutScreen = () => {
  return (
    <>
      <style>{css}</style>
      <div className="about-root">

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

        <div className="about-inner">

          {/* Heading */}
          <motion.h1
            className="about-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            ABOUT <span>ME</span>
          </motion.h1>

          {/* Who I Am */}
          <motion.div
            className="who-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
          >
            <h2>WHO I AM</h2>
            <p>
              I'm Yash, a Computer Science student and full-stack developer
              passionate about Machine Learning, system design, and building
              scalable applications.
            </p>
            <p>
              I enjoy breaking complex ML concepts into practical, understandable
              implementations and sharing them through content and real-world projects.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeUp}
          >
            <div className="skill-card">
              <h3> FULL STACK</h3>
              <p>MERN Stack, Node.js, Express, MongoDB, REST APIs, Authentication, Payment Integration.</p>
            </div>
            <div className="skill-card">
              <h3> MACHINE LEARNING</h3>
              <p>Python, NumPy, Pandas, Model Building, Data Processing, Practical ML Applications.</p>
            </div>
            <div className="skill-card">
              <h3> PROJECT BUILDER</h3>
              <p>E-commerce platforms, automation tools, AI experiments, production-ready applications.</p>
            </div>
          </motion.div>

          {/* Photos */}
          <motion.div
            className="photo-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeUp}
          >
            <div className="photo-card">
              <img src={gym} alt="Gym" />
              <div className="photo-overlay">
                <span className="photo-label">GYM</span>
              </div>
            </div>
            <div className="photo-card">
              <img src={content} alt="Content Creation" />
              <div className="photo-overlay">
                <span className="photo-label">CONTENT CREATION</span>
              </div>
            </div>
            <div className="photo-card">
              <img src={coder} alt="Software Developer" />
              <div className="photo-overlay">
                <span className="photo-label">SOFTWARE DEVELOPER</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default AboutScreen;