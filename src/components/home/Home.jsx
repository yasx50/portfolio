import { useState, useEffect } from "react";
import SocialLinks from "../SocialLinks.jsx";

/* ── Typewriter strings ── */
const typewriterLines = [
  "Node.js & Express",
  "REST APIs & MongoDB",
  "FastAPI & Python",
  "System Design",
  "Auth & Payments",
  "Scalable Backends",
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Fraunces:ital,wght@0,900;1,300;1,700&display=swap');

  :root {
    --orange: #fb923c;
    --orange-dim: rgba(251,146,60,0.15);
    --orange-faint: rgba(251,146,60,0.05);
    --white: #ffffff;
    --muted: rgba(255,255,255,0.45);
    --bg: #080808;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ════════ ROOT ════════ */
  .home-root {
    min-height: 100vh;
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 20px 60px;
    position: relative;
    overflow: hidden;
    font-family: 'DM Mono', monospace;
  }

  /* ── Dot-grid background ── */
  .home-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: radial-gradient(circle, rgba(251,146,60,0.12) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
  }

  /* ════════ GIANT BACKGROUND TEXT ════════ */
  .bg-word {
    position: fixed;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(120px, 22vw, 260px);
    letter-spacing: -0.02em;
    line-height: 0.85;
    pointer-events: none;
    z-index: 0;
    user-select: none;
  }

  .bg-word-backend {
    top: -20px;
    left: -20px;
    color: transparent;
    -webkit-text-stroke: 1px rgba(251,146,60,0.1);
    animation: bgDrift 18s ease-in-out infinite alternate;
  }

  .bg-word-dev {
    bottom: -30px;
    right: -10px;
    color: transparent;
    -webkit-text-stroke: 1px rgba(251,146,60,0.07);
    animation: bgDrift 22s ease-in-out infinite alternate-reverse;
  }

  @keyframes bgDrift {
    from { transform: translateY(0px) rotate(-1deg); }
    to   { transform: translateY(20px) rotate(1deg); }
  }

  /* ── Horizontal scrolling ticker ── */
  .ticker-wrap {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%) rotate(-8deg);
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
    opacity: 0.035;
  }

  .ticker-track {
    display: flex;
    gap: 0;
    width: max-content;
    animation: tickerScroll 30s linear infinite;
  }

  .ticker-item {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 96px;
    color: var(--orange);
    white-space: nowrap;
    padding: 0 40px;
    letter-spacing: 0.05em;
  }

  @keyframes tickerScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ════════ MAIN CONTENT ════════ */
  .home-inner {
    max-width: 500px;
    width: 100%;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* ── HI row ── */
  .hi-row {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    margin-bottom: 28px;
  }

  .hi-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(5rem, 18vw, 9rem);
    color: var(--orange);
    line-height: 0.85;
    letter-spacing: 0.04em;
  }

  .hi-sub {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1rem, 3vw, 1.35rem);
    color: var(--muted);
    padding-bottom: 12px;
    line-height: 1.4;
  }

  /* ── Photo card ── */
  .photo-card {
    border: 1.5px solid rgba(251,146,60,0.28);
    border-radius: 24px;
    padding: 7px;
    margin-bottom: 28px;
    box-shadow: 0 0 60px rgba(251,146,60,0.08), 0 40px 80px rgba(0,0,0,0.7);
    transition: border-color 0.3s;
    background: rgba(12,12,12,0.9);
  }

  .photo-card:hover { border-color: var(--orange); }
  .photo-card img { width: 100%; border-radius: 18px; display: block; }

  /* ── Name ── */
  .name-block {
    margin-bottom: 28px;
  }

  .name-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    color: rgba(251,146,60,0.5);
    margin-bottom: 4px;
    font-style: italic;
  }

  .name-heading {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.8rem, 10vw, 4.8rem);
    color: var(--white);
    letter-spacing: 0.04em;
    line-height: 0.9;
  }

  .name-heading span { color: var(--orange); }

  /* ════════ BACKEND SECTION ════════ */
  .backend-section {
    border: 1px solid rgba(251,146,60,0.2);
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 24px;
    background: rgba(251,146,60,0.025);
  }

  /* top bar */
  .backend-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 18px;
    background: rgba(251,146,60,0.06);
    border-bottom: 1px solid rgba(251,146,60,0.15);
  }

  .topbar-dots { display: flex; gap: 6px; }

  .topbar-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
  }
  .dot-red    { background: #ff5f57; }
  .dot-yellow { background: #febc2e; }
  .dot-green  { background: #28c840; }

  .topbar-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    color: rgba(251,146,60,0.45);
    letter-spacing: 0.12em;
    font-style: italic;
  }

  /* quote area */
  .backend-quote-area {
    padding: 24px 22px 18px;
    position: relative;
  }

  .quote-mark {
    font-family: 'Fraunces', serif;
    font-size: 5rem;
    color: rgba(251,146,60,0.15);
    line-height: 0.6;
    position: absolute;
    top: 14px;
    left: 16px;
    font-style: italic;
  }

  .backend-quote {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.05rem, 3vw, 1.25rem);
    color: rgba(255,255,255,0.85);
    line-height: 1.65;
    padding-left: 28px;
    margin-bottom: 18px;
  }

  .backend-quote strong {
    font-weight: 700;
    color: var(--orange);
    font-style: normal;
    font-family: 'Fraunces', serif;
  }

  /* badge row */
  .badge-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    padding: 0 22px 20px;
  }

  .backend-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(251,146,60,0.1);
    border: 1px solid rgba(251,146,60,0.4);
    border-radius: 999px;
    padding: 5px 14px;
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--orange);
    animation: badgePulse 2.5s ease-in-out infinite;
  }

  .blink-dot {
    width: 7px; height: 7px;
    background: var(--orange);
    border-radius: 50%;
    animation: dotBlink 1.2s ease-in-out infinite;
  }

  @keyframes dotBlink {
    0%, 100% { opacity: 1; box-shadow: 0 0 4px var(--orange); }
    50%       { opacity: 0.2; box-shadow: none; }
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 8px rgba(251,146,60,0.15); }
    50%       { box-shadow: 0 0 18px rgba(251,146,60,0.4); }
  }

  .years-badge {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.06em;
    font-style: italic;
  }

  /* typewriter line */
  .tw-line {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px 18px;
    border-top: 1px solid rgba(251,146,60,0.1);
    flex-wrap: wrap;
  }

  .tw-prompt {
    font-family: 'DM Mono', monospace;
    font-size: 0.78rem;
    color: rgba(251,146,60,0.55);
    font-style: italic;
  }

  .tw-text {
    font-family: 'DM Mono', monospace;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.8);
    font-weight: 500;
    min-width: 4px;
  }

  .tw-cursor {
    display: inline-block;
    width: 2px; height: 0.9em;
    background: var(--orange);
    margin-left: 2px;
    vertical-align: middle;
    animation: blink 0.8s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* ── Stack pills row ── */
  .stack-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  .stack-pill {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 5px 12px;
    letter-spacing: 0.06em;
    transition: color 0.2s, border-color 0.2s;
    font-style: italic;
  }

  .stack-pill:hover {
    color: var(--orange);
    border-color: rgba(251,146,60,0.4);
  }

  /* ── Channel row ── */
  .channel-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    background: rgba(12,12,12,0.9);
    border: 1.5px solid rgba(251,146,60,0.18);
    border-radius: 18px;
    padding: 16px 20px;
    transition: border-color 0.3s;
  }

  .channel-row:hover { border-color: rgba(251,146,60,0.45); }

  .channel-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.3rem, 4vw, 1.7rem);
    color: var(--white);
    letter-spacing: 0.08em;
    line-height: 1.2;
    text-align: center;
  }

  .channel-text span { color: var(--orange); }

  .channel-icon {
    width: 46px; height: 46px;
    border-radius: 10px;
    object-fit: cover;
    transition: transform 0.2s;
  }

  .channel-icon:hover { transform: scale(1.1); }

  /* ── Identity pills ── */
  .pills { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }

  .pill {
    background: var(--orange-faint);
    border: 1.5px solid rgba(251,146,60,0.25);
    color: var(--orange);
    padding: 13px 24px;
    border-radius: 14px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.1rem, 3vw, 1.3rem);
    letter-spacing: 0.12em;
    transition: background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }

  .pill:hover {
    background: var(--orange-dim);
    border-color: var(--orange);
    box-shadow: 0 0 20px rgba(251,146,60,0.18);
  }

  .pill-1 { transform: rotate(-0.8deg); }
  .pill-1:hover { transform: rotate(-1.5deg) translateY(-2px); }
  .pill-2 { transform: rotate(0.8deg); }
  .pill-2:hover { transform: rotate(1.5deg) translateY(-2px); }
  .pill-3 { transform: rotate(-0.8deg); }
  .pill-3:hover { transform: rotate(-1.5deg) translateY(-2px); }

  /* ── Footer ── */
  .footer-text {
    font-family: 'DM Mono', monospace;
    font-style: italic;
    color: rgba(255,255,255,0.15);
    font-size: 0.65rem;
    letter-spacing: 0.14em;
    margin-top: 20px;
    text-align: center;
  }
`;

const HomeScreen = () => {
  const [float, setFloat] = useState(0);
  const [twIndex, setTwIndex] = useState(0);
  const [twCharIdx, setTwCharIdx] = useState(0);
  const [twDisplayed, setTwDisplayed] = useState("");
  const [twDeleting, setTwDeleting] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setFloat((p) => (p + 1) % 360), 50);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const target = typewriterLines[twIndex];
    let t;
    if (!twDeleting && twCharIdx < target.length) {
      t = setTimeout(() => setTwCharIdx((c) => c + 1), 80);
    } else if (!twDeleting && twCharIdx === target.length) {
      t = setTimeout(() => setTwDeleting(true), 1400);
    } else if (twDeleting && twCharIdx > 0) {
      t = setTimeout(() => setTwCharIdx((c) => c - 1), 45);
    } else if (twDeleting && twCharIdx === 0) {
      setTwDeleting(false);
      setTwIndex((i) => (i + 1) % typewriterLines.length);
    }
    setTwDisplayed(target.slice(0, twCharIdx));
    return () => clearTimeout(t);
  }, [twCharIdx, twDeleting, twIndex]);

  const floatY = Math.sin(float * 0.05) * 10;

  return (
    <>
      <style>{css}</style>
      <div className="home-root">

        {/* ── Giant background words ── */}
        <div className="bg-word bg-word-backend">BACKEND</div>
        <div className="bg-word bg-word-dev">DEV</div>

        {/* ── Horizontal ticker ── */}
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="ticker-item">
                BACKEND DEV · NODE.JS · FASTAPI · REST APIs · MONGODB ·&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="home-inner">

          {/* HI */}
          <div className="hi-row">
            <h1 className="hi-text">HI 👋</h1>
            <p className="hi-sub">welcome to<br />my corner of the internet</p>
          </div>

          {/* Photo */}
          <div className="photo-card" style={{ transform: `translateY(${floatY}px)` }}>
            <img src="ghibli.png" alt="Yash" />
          </div>

          {/* Name */}
          <div className="name-block">
            <p className="name-label">// introducing</p>
            <h2 className="name-heading">THIS IS <span>YASH</span></h2>
          </div>

          {/* ── Backend section ── */}
          <div className="backend-section">

            {/* macOS-style top bar */}
            <div className="backend-topbar">
              <div className="topbar-dots">
                <span className="topbar-dot dot-red" />
                <span className="topbar-dot dot-yellow" />
                <span className="topbar-dot dot-green" />
              </div>
              <span className="topbar-label">yash@backend ~ $</span>
              <span style={{ width: 52 }} />
            </div>

            {/* Quote */}
            <div className="backend-quote-area">
              <span className="quote-mark">"</span>
              <p className="backend-quote">
                
                I live in the part <strong>nobody sees</strong> —<br />
                and that's exactly how I <strong>like it</strong>.
              </p>
            </div>

            {/* Badge row */}
            <div className="badge-row">
              <span className="backend-badge">
                <span className="blink-dot" />
                BACKEND DEVELOPER
              </span>
              <span className="years-badge">// building since day one</span>
            </div>

            {/* Typewriter */}
            <div className="tw-line">
              <span className="tw-prompt">$ specializes_in →</span>
              <span className="tw-text">
                {twDisplayed}<span className="tw-cursor" />
              </span>
            </div>

          </div>

          {/* Stack pills */}
          <div className="stack-row">
            {["Node.js", "Express", "MongoDB", "FastAPI", "Python", "REST APIs", "JWT Auth", "Razorpay"].map((s) => (
              <span key={s} className="stack-pill">{s}</span>
            ))}
          </div>

          {/* Channel row */}
          <div className="channel-row">
            <a href="https://www.youtube.com/@MLSimplified-u2y" target="_blank" rel="noopener noreferrer">
              {/* <img className="channel-icon" src="ytt.jpeg" alt="YouTube" /> */}
            </a>
            <p className="channel-text">
              BUILDING<br /><span>MLSIMPLIFIED</span>
            </p>
            <a href="https://www.youtube.com/@MLSimplified-u2y" target="_blank" rel="noopener noreferrer">
              {/* <img className="channel-icon" src="trophy.jpeg" alt="Trophy" /> */}
            </a>
          </div>

          {/* Identity pills */}
          <div className="pills">
            {[
              { label: " CONTENT CREATION", cls: "pill-1" },
              { label: " MACHINE LEARNING",  cls: "pill-2" },
              { label: " WEB DEVELOPMENT",   cls: "pill-3" },
            ].map((item, i) => (
              <div key={i} className={`pill ${item.cls}`}>{item.label}</div>
            ))}
          </div>

          <SocialLinks />

          <p className="footer-text">// all rights reserved · yash</p>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;