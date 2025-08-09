import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  image,
  category,
  techIcons = [],
  demoLink,
  githubLink,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  return (
  <div
  ref={cardRef}
  className={`
    relative sarpanch-regular bg-black border border-red-600 text-white
    w-[90%] md:w-2/3 flex items-center mx-auto overflow-hidden
    p-4 rounded-lg shadow-lg
    transform transition-all duration-700 ease-out
    ${isVisible 
      ? 'translate-y-0 opacity-100 scale-100' 
      : 'translate-y-8 opacity-0 scale-95'
    }
    hover:scale-[1.02] hover:border-green-400 hover:shadow-xl hover:shadow-green-400/20
    group
    mb-6 last:mb-0
  `}
>

      {/* Left: Project Image */}
      <div className="w-[40%] flex items-center justify-center overflow-hidden rounded-l-lg">
        <img
          src={image || "https://via.placeholder.com/400x200?text=Project+Image"}
          alt={title}
          className={`
            w-full h-full object-cover rounded-l-lg
            transform transition-all duration-500 ease-out
            ${isVisible ? 'scale-100' : 'scale-110'}
            group-hover:scale-105
          `}
        />
      </div>

      {/* Right: Details */}
      <div className="w-[60%] p-4 flex flex-col justify-center">
        {/* Title + Category */}
        <div
          className={`
            flex justify-between items-center mb-3
            transform transition-all duration-500 ease-out
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
          `}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          <h2 className="text-lg md:text-xl font-bold truncate flex-1 mr-3 group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h2>
          <div className={`
            px-3 py-1 bg-gradient-to-r from-green-400 to-red-500 rounded-full 
            text-xs font-semibold shadow-lg shadow-green-500/50 whitespace-nowrap text-black
            transform transition-all duration-300
            ${isVisible ? 'animate-pulse' : ''}
            group-hover:shadow-green-500/70 group-hover:scale-105
          `}>
            {category}
          </div>
        </div>

        {/* Description */}
        <p
          className={`
            text-sm text-gray-300 mb-3 line-clamp-1 overflow-hidden
            transform transition-all duration-500 ease-out
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
            group-hover:text-white
          `}
          style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
        >
          {description}
        </p>

        {/* Tech Stack + Action Buttons */}
        <div
          className={`
            flex items-center justify-between
            transform transition-all duration-500 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}
          style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
        >
          {/* Tech Stack Icons */}
          {techIcons.length > 0 && (
            <div className="w-[30%] relative bg-gray-900 rounded-lg p-2 border border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
              <div className="flex space-x-2 justify-center">
                {techIcons.slice(0, 4).map((IconComponent, idx) => (
                  <div 
                    key={idx} 
                    className={`
                      text-lg md:text-xl flex-shrink-0 hover:scale-110 transition-all duration-200
                      transform
                      ${isVisible ? 'scale-100' : 'scale-0'}
                    `}
                    style={{ transitionDelay: isVisible ? `${500 + (idx * 100)}ms` : '0ms' }}
                  >
                    {IconComponent}
                  </div>
                ))}
                {techIcons.length > 4 && (
                  <div
                    className={`
                      text-xs text-gray-400 flex items-center
                      transform transition-all duration-300
                      ${isVisible ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
                  >
                    +{techIcons.length - 4}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 
                  rounded-full transition-all duration-300 group/btn
                  transform
                  ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
                  hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50
                `}
                style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
                title="Live Demo"
              >
                <ExternalLink className="text-sm text-white group-hover/btn:scale-110 transition-transform" />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center w-8 h-8 bg-gray-700 hover:bg-gray-600 
                  rounded-full transition-all duration-300 group/btn
                  transform
                  ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
                  hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50
                `}
                style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
                title="GitHub Repository"
              >
                <Github className="text-sm text-white group-hover/btn:scale-110 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/0 via-transparent to-red-500/0 group-hover:from-green-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
