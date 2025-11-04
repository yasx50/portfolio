import React from 'react';
import { Instagram, Github, Linkedin, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Instagram,
      color: 'hover:bg-pink-500',
      label: 'Instagram',
      link: 'https://www.instagram.com/mlsimplifiedbyyash/',
    },
    {
      icon: Github,
      color: 'hover:bg-gray-700',
      label: 'GitHub',
      link: 'https://github.com/yasx50',
    },
    {
      icon: Linkedin,
      color: 'hover:bg-blue-600',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/yash-yadav-y05/',
    },
    {
      icon: MessageCircle,
      color: 'hover:bg-indigo-500',
      label: 'Discord',
      link: 'https://discord.com/users/yasx50',
    },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-8">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`bg-white p-4 rounded-2xl transition-all ${social.color} hover:text-white transform hover:scale-110`}
          >
            <IconComponent size={28} strokeWidth={2.5} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
