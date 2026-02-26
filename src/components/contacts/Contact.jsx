import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/* ─── Initialize EmailJS ─── */
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

/* ─── Floating background cards data ─── */
const floatingMessages = [
  {
    id: 1,
    text: "Let's build something amazing together! 🚀",
    author: "— A Happy Client",
    style: {
      top: "8%",
      left: "2%",
      animationDelay: "0s",
      animationDuration: "7s",
      rotate: "-4deg",
    },
  },
  {
    id: 2,
    text: "Fast replies, great work. Highly recommend! ⚡",
    author: "— Dev Community",
    style: {
      top: "15%",
      right: "2%",
      animationDelay: "1.5s",
      animationDuration: "9s",
      rotate: "3deg",
    },
  },
  {
    id: 3,
    text: "Your ideas deserve to be heard. Reach out! 💡",
    author: "— Yash",
    style: {
      bottom: "22%",
      left: "1%",
      animationDelay: "3s",
      animationDuration: "8s",
      rotate: "2deg",
    },
  },
  {
    id: 4,
    text: "Every great project starts with a message. 🎯",
    author: "— The Universe",
    style: {
      bottom: "10%",
      right: "1%",
      animationDelay: "0.8s",
      animationDuration: "10s",
      rotate: "-3deg",
    },
  },
  {
    id: 5,
    text: "Don't hesitate — just say hello! 👋",
    author: "— Someone Who Did",
    style: {
      top: "50%",
      left: "0%",
      animationDelay: "2s",
      animationDuration: "6s",
      rotate: "5deg",
    },
  },
];

/* ─── Fake SocialLinks placeholder ─── */
const SocialLinks = () => (
  <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
    {["GitHub", "LinkedIn", "Twitter", "Email"].map((s) => (
      <a
        key={s}
        href="#"
        style={{
          color: "#fb923c",
          fontFamily: "'Courier New', monospace",
          fontWeight: "bold",
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
          textDecoration: "none",
          padding: "6px 14px",
          border: "2px solid #fb923c",
          borderRadius: "6px",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "#fb923c";
          e.target.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "#fb923c";
        }}
      >
        {s}
      </a>
    ))}
  </div>
);

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const ContactScreen = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  /* ── Validation ── */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ── Submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Yash",
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        }
      );
      setStatus("success");
      setFormData({ user_name: "", user_email: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  /* ── Change ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ─────────────────── STYLES ─────────────────── */
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inconsolata:wght@400;700&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    .contact-root {
      min-height: 100vh;
      background: #0a0a0a;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
      position: relative;
      overflow: hidden;
      font-family: 'Inconsolata', monospace;
    }

    /* Subtle grid background */
    .contact-root::before {
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

    /* ── Floating cards ── */
    @keyframes floatY {
      0%, 100% { transform: translateY(0px) rotate(var(--rotate)); }
      50%       { transform: translateY(-18px) rotate(var(--rotate)); }
    }

    .float-card {
      position: fixed;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(251,146,60,0.25);
      border-radius: 14px;
      padding: 14px 18px;
      max-width: 220px;
      backdrop-filter: blur(8px);
      animation: floatY var(--dur) ease-in-out infinite;
      animation-delay: var(--delay);
      z-index: 1;
      pointer-events: none;
    }

    .float-card p {
      color: rgba(255,255,255,0.75);
      font-size: 0.78rem;
      line-height: 1.5;
      font-family: 'Inconsolata', monospace;
    }

    .float-card span {
      display: block;
      margin-top: 6px;
      color: #fb923c;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    /* Hide side cards on small screens, keep top/bottom ones */
    @media (max-width: 640px) {
      .float-card { display: none; }
      .float-card.show-mobile { display: block; max-width: 160px; padding: 10px 14px; }
      .float-card.show-mobile p { font-size: 0.7rem; }
    }

    /* ── Form card ── */
    .form-card {
      background: rgba(15,15,15,0.92);
      border: 1.5px solid rgba(251,146,60,0.3);
      border-radius: 24px;
      padding: clamp(28px, 5vw, 52px);
      width: 100%;
      max-width: 520px;
      position: relative;
      z-index: 10;
      backdrop-filter: blur(20px);
      box-shadow: 0 0 60px rgba(251,146,60,0.08), 0 32px 64px rgba(0,0,0,0.6);
    }

    .form-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.8rem, 5vw, 2.6rem);
      font-weight: 800;
      color: #fff;
      letter-spacing: 0.06em;
      margin-bottom: 8px;
    }

    .form-title span { color: #fb923c; }

    .form-sub {
      color: rgba(255,255,255,0.4);
      font-size: 0.85rem;
      margin-bottom: 32px;
      letter-spacing: 0.04em;
    }

    /* ── Fields ── */
    .field-group { margin-bottom: 20px; }

    .field-label {
      display: block;
      color: #fb923c;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
    }

    .field-input, .field-textarea {
      width: 100%;
      background: rgba(255,255,255,0.04);
      border: 1.5px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      color: #fff;
      font-family: 'Inconsolata', monospace;
      font-size: 0.95rem;
      padding: 14px 16px;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }

    .field-input:focus, .field-textarea:focus {
      border-color: #fb923c;
      background: rgba(251,146,60,0.05);
    }

    .field-input.error, .field-textarea.error {
      border-color: #ef4444;
    }

    .field-textarea { resize: vertical; min-height: 120px; }

    .error-msg {
      color: #ef4444;
      font-size: 0.75rem;
      margin-top: 5px;
      letter-spacing: 0.03em;
    }

    /* ── Button ── */
    .submit-btn {
      width: 100%;
      background: #fb923c;
      color: #000;
      border: none;
      border-radius: 14px;
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1rem;
      letter-spacing: 0.1em;
      padding: 16px;
      cursor: pointer;
      transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
      margin-top: 8px;
    }

    .submit-btn:hover:not(:disabled) {
      background: #fdba74;
      box-shadow: 0 0 28px rgba(251,146,60,0.45);
      transform: translateY(-1px);
    }

    .submit-btn:active:not(:disabled) { transform: translateY(0); }
    .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* ── Status banners ── */
    .status-banner {
      border-radius: 12px;
      padding: 14px 18px;
      text-align: center;
      font-weight: 700;
      font-size: 0.9rem;
      margin-top: 16px;
      letter-spacing: 0.04em;
    }

    .status-success { background: rgba(34,197,94,0.12); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
    .status-error   { background: rgba(239,68,68,0.12);  color: #f87171; border: 1px solid rgba(239,68,68,0.3); }

    /* ── Social ── */
    .social-wrap { margin-top: 28px; }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="contact-root">

        {/* ── Floating background message cards ── */}
        {floatingMessages.map((msg) => (
          <div
            key={msg.id}
            className={`float-card${msg.id <= 2 ? " show-mobile" : ""}`}
            style={{
              ...msg.style,
              "--rotate": msg.style.rotate,
              "--dur": msg.style.animationDuration,
              "--delay": msg.style.animationDelay,
            }}
          >
            <p>{msg.text}</p>
            <span>{msg.author}</span>
          </div>
        ))}

        {/* ── Main form card ── */}
        <div className="form-card">
          <h1 className="form-title">
            CONTACT <span>ME</span>
          </h1>
          <p className="form-sub">// drop a message. i don't bite.</p>

          <form onSubmit={handleSubmit} noValidate>
            {/* NAME */}
            <div className="field-group">
              <label className="field-label">NAME</label>
              <input
                className={`field-input${errors.user_name ? " error" : ""}`}
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="off"
              />
              {errors.user_name && <p className="error-msg">{errors.user_name}</p>}
            </div>

            {/* EMAIL */}
            <div className="field-group">
              <label className="field-label">EMAIL</label>
              <input
                className={`field-input${errors.user_email ? " error" : ""}`}
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="your@email.com"
                autoComplete="off"
              />
              {errors.user_email && <p className="error-msg">{errors.user_email}</p>}
            </div>

            {/* MESSAGE */}
            <div className="field-group">
              <label className="field-label">MESSAGE</label>
              <textarea
                className={`field-textarea${errors.message ? " error" : ""}`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind..."
                rows={5}
              />
              {errors.message && <p className="error-msg">{errors.message}</p>}
            </div>

            {/* SUBMIT */}
            <button type="submit" className="submit-btn" disabled={status === "sending"}>
              {status === "sending" ? "SENDING..." : "SEND MESSAGE →"}
            </button>

            {status === "success" && (
              <div className="status-banner status-success">Message sent successfully ✓</div>
            )}
            {status === "error" && (
              <div className="status-banner status-error">Failed to send. Try again.</div>
            )}
          </form>

          <div className="social-wrap">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactScreen;