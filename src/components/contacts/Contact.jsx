import { useState } from "react";
import SocialLinks from "../SocialLinks.jsx";

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  /* ---------------- VALIDATION ---------------- */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.user_email)
    ) {
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
              user_name: formData.user_name,
              user_email: formData.user_email,
              message: formData.message
            }
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      setFormData({
        user_name: "",
        user_email: "",
        message: ""
      });
      setErrors({});

      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      console.error("Email Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  /* ---------------- CHANGE HANDLER ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-8 text-center">
          CONTACT ME
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* NAME */}
            <div>
              <label className="block font-black mb-2">NAME</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black"
                placeholder="Your name"
              />
              {errors.user_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.user_name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block font-black mb-2">EMAIL</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black"
                placeholder="your.email@example.com"
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.user_email}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-black mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black resize-none"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-black text-orange-400 py-4 rounded-xl font-black text-xl hover:bg-gray-800 disabled:opacity-50"
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status === "success" && (
              <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold">
                Message sent successfully ✓
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-100 text-red-800 p-4 rounded-xl text-center font-bold">
                Failed to send message.
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