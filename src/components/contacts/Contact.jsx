import { useState } from "react";
import SocialLinks from "../SocialLinks.jsx";

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // "", sending, success, error
  const [errors, setErrors] = useState({});

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  /* ---------------- VALIDATION ---------------- */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              to_name: "Yash",
              from_name: formData.user_name,
              from_email: formData.user_email,
              message: formData.message
            }
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      // auto-clear success after 4 seconds
      setTimeout(() => {
        setStatus("");
      }, 4000);

    } catch (error) {
      console.error("Email Error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  /* ---------------- CHANGE HANDLER ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Remove error dynamically while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6 relative overflow-hidden">
      {/* Background Sticky Notes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sticky Note 1 - Top Left */}
        <div className="absolute top-32 left-10 transform -rotate-6 bg-yellow-300 p-6 rounded-lg shadow-xl max-w-xs">
          <p className="text-black font-bold text-lg italic">
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <div className="mt-2 text-sm text-gray-700">— Cory House</div>
        </div>

        {/* Sticky Note 2 - Top Right */}
        <div className="absolute top-40 right-10 transform rotate-3 bg-pink-300 p-6 rounded-lg shadow-xl max-w-xs">
          <p className="text-black font-bold text-lg italic">
            "First, solve the problem. Then, write the code."
          </p>
          <div className="mt-2 text-sm text-gray-700">— John Johnson</div>
        </div>

        {/* Sticky Note 3 - Bottom Left */}
        <div className="absolute bottom-32 left-20 transform rotate-2 bg-blue-300 p-6 rounded-lg shadow-xl max-w-xs">
          <p className="text-black font-bold text-lg italic">
            "Make it work, make it right, make it fast."
          </p>
          <div className="mt-2 text-sm text-gray-700">— Kent Beck</div>
        </div>

        {/* Sticky Note 4 - Middle Right (Mobile Hidden) */}
        <div className="hidden md:block absolute top-1/2 right-5 transform -rotate-3 bg-green-300 p-6 rounded-lg shadow-xl max-w-xs">
          <p className="text-black font-bold text-lg italic">
            "Talk is cheap. Show me the code."
          </p>
          <div className="mt-2 text-sm text-gray-700">— Linus Torvalds</div>
        </div>

        {/* Sticky Note 5 - Bottom Right (Mobile Hidden) */}
        <div className="hidden lg:block absolute bottom-40 right-32 transform rotate-6 bg-purple-300 p-6 rounded-lg shadow-xl max-w-xs">
          <p className="text-black font-bold text-lg italic">
            "The best way to predict the future is to invent it."
          </p>
          <div className="mt-2 text-sm text-gray-700">— Alan Kay</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-8 text-center">
          CONTACT ME
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-black font-black mb-2">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-black font-black mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black transition-colors"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-black font-black mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-black text-orange-400 py-4 rounded-xl font-black text-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status === "success" && (
              <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold">
                Message sent successfully! ✓
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-100 text-red-800 p-4 rounded-xl text-center font-bold">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;