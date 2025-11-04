export const ProjectsScreen = () => {
  const projects = [
    {
      title: 'ML SIMPLIFIED',
      description: 'Educational platform making machine learning accessible to everyone',
      tags: ['ML', 'Education', 'Content'],
      color: 'bg-orange-500'
    },
    {
      title: 'AI TOOLKIT',
      description: 'Collection of AI tools and utilities for developers',
      tags: ['Python', 'AI', 'Tools'],
      color: 'bg-black'
    },
    {
      title: 'DATA VISUALIZER',
      description: 'Interactive data visualization dashboard',
      tags: ['React', 'D3.js', 'Analytics'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-8 text-center">MY PROJECTS</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`${project.color} h-32 rounded-2xl mb-4 flex items-center justify-center text-white text-4xl font-black`}>
                {index + 1}
              </div>
              <h3 className="text-2xl font-black text-black mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

