import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageCircle, Instagram, Send, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yasx50',
      color: 'hover:text-green-400',
      bgColor: 'bg-green-500/10 border-green-500/30',
      description: 'Check out my repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/yash-yadav-y05/e',
      color: 'hover:text-red-400',
      bgColor: 'bg-red-500/10 border-red-500/30',
      description: 'Professional network'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.com/users/yasx50',
      color: 'hover:text-green-400',
      bgColor: 'bg-green-500/10 border-green-500/30',
      description: 'Let\'s chat on Discord'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/yash___yadu1c/',
      color: 'hover:text-red-400',
      bgColor: 'bg-red-500/10 border-red-500/30',
      description: 'Follow my journey'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:yasxcode@gmail.com',
      color: 'hover:text-green-400',
      bgColor: 'bg-green-500/10 border-green-500/30',
      description: 'yasxcode@gmail.com'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4">
        <div className="w-20 ml-10 h-10 bg-successGreen"></div>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-black border border-red-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-green-400 mr-3" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 border-red-600 border border-green-500/30 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:yasxcode@gmail.com" className="text-white font-medium hover:text-green-400 transition-colors">
                      yasxcode@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black border border-red-500/30 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Available Worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black border border-green-500/30 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black border border-red-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 ${social.bgColor} hover:scale-[1.02] hover:shadow-lg`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${social.bgColor}`}>
                      <social.icon className={`w-6 h-6 text-gray-400 group-hover:scale-110 transition-all ${social.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{social.description}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      hoveredCard === index ? 'bg-green-500 text-black' : 'bg-gray-700 text-gray-400'
                    }`}>
                      <Send className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black border border-red-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 text-red-400 mr-3" />
              Send a Message
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full bg-black border border-red-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-black border border-red-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows="6"
                  className="w-full bg-black/50 border bborder-red-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-red-500 hover:from-green-600 hover:to-red-600 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-500/25"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-green-500/10 border border-red-600 rounded-xl">
              <p className="text-green-400 text-sm text-center">
                <strong>Quick Response:</strong> I typically respond within 24 hours. For urgent inquiries, reach out on Discord!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-black border border-red-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Something Great?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether it's a new project, collaboration, or just a friendly chat about tech, I'm always excited to connect with fellow developers and creators.
            </p>
            <a
              href="mailto:yasxcode@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-red-500 hover:from-green-600 hover:to-red-600 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;