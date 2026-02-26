import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inconsolata:wght@400;700&display=swap');

  /* ── Toggle button ── */
  .nav-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    width: 44px;
    height: 44px;
    background: #fb923c;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #000;
    font-weight: 900;
    transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
    box-shadow: 0 0 0 rgba(251,146,60,0);
  }

  .nav-toggle:hover {
    background: #fdba74;
    box-shadow: 0 0 20px rgba(251,146,60,0.6);
    transform: scale(1.08);
  }

  /* ── Expanding circle ── */
  .nav-circle {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #0a0a0a;
    border-radius: 50%;
    z-index: 9990;
    transition: width 0.7s cubic-bezier(0.77,0,0.18,1),
                height 0.7s cubic-bezier(0.77,0,0.18,1),
                opacity 0.3s;
    transform: translate(50%, -50%);
    pointer-events: none;
  }

  .nav-circle.open {
    width: 3000px;
    height: 3000px;
    pointer-events: all;
  }

  .nav-circle.closed {
    width: 44px;
    height: 44px;
  }

  /* Grid overlay inside expanded circle */
  .nav-circle.open::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(251,146,60,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(251,146,60,0.05) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Fullscreen menu ── */
  .nav-menu {
    position: fixed;
    inset: 0;
    z-index: 9995;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    animation: menuFadeIn 0.4s ease forwards;
  }

  @keyframes menuFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Nav label above links ── */
  .nav-label {
    font-family: 'Inconsolata', monospace;
    font-size: 0.75rem;
    color: rgba(251,146,60,0.4);
    letter-spacing: 0.2em;
    font-weight: 700;
    margin-bottom: 20px;
  }

  /* ── Nav items ── */
  .nav-item {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 16px 40px;
    border-radius: 20px;
    transition: background 0.2s, transform 0.2s;
    width: 280px;
    position: relative;
    overflow: hidden;
  }

  .nav-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(251,146,60,0.06);
    border: 1.5px solid rgba(251,146,60,0);
    border-radius: 20px;
    transition: border-color 0.25s, background 0.25s;
  }

  .nav-item:hover::before,
  .nav-item.active::before {
    border-color: rgba(251,146,60,0.4);
    background: rgba(251,146,60,0.1);
  }

  .nav-item:hover { transform: translateX(6px); }
  .nav-item.active { transform: translateX(8px); }

  .nav-icon {
    color: rgba(255,255,255,0.35);
    transition: color 0.2s;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .nav-item:hover .nav-icon,
  .nav-item.active .nav-icon {
    color: #fb923c;
  }

  .nav-text {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 800;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.5);
    transition: color 0.2s;
    position: relative;
    z-index: 1;
  }

  .nav-item:hover .nav-text,
  .nav-item.active .nav-text {
    color: #fff;
  }

  /* Active dot indicator */
  .nav-active-dot {
    width: 8px;
    height: 8px;
    background: #fb923c;
    border-radius: 50%;
    margin-left: auto;
    box-shadow: 0 0 10px #fb923c;
    position: relative;
    z-index: 1;
    animation: dotPulse 1.5s ease-in-out infinite;
  }

  @keyframes dotPulse {
    0%, 100% { box-shadow: 0 0 6px #fb923c; }
    50%       { box-shadow: 0 0 18px #fb923c, 0 0 30px rgba(251,146,60,0.4); }
  }

  /* ── Responsive ── */
  @media (max-width: 480px) {
    .nav-item { width: 240px; padding: 14px 28px; }
  }
`;

const navItems = [
  { id: "home",     label: "Home",     Icon: AiFillHome },
  { id: "about",    label: "About",    Icon: BsFillPersonFill },
  { id: "projects", label: "Projects", Icon: BsFillBriefcaseFill },
  { id: "contact",  label: "Contact",  Icon: BsFillEnvelopeFill },
];

const Navigation = ({ activeScreen, setActiveScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (id) => {
    setActiveScreen(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{css}</style>

      {/* Expanding dark circle */}
      <div className={`nav-circle ${isMenuOpen ? "open" : "closed"}`} />

      {/* Toggle button — always on top */}
      <button
        className="nav-toggle"
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Menu links */}
      {isMenuOpen && (
        <nav className="nav-menu">
          <p className="nav-label">// NAVIGATE</p>

          {navItems.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`nav-item${activeScreen === id ? " active" : ""}`}
              onClick={() => handleNav(id)}
            >
              <Icon size={26} className="nav-icon" />
              <span className="nav-text">{label.toUpperCase()}</span>
              {activeScreen === id && <span className="nav-active-dot" />}
            </button>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navigation;