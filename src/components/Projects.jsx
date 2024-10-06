import { forwardRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectCard = ({ 
  title = 'Proyecto', 
  description = '', 
  image = '/api/placeholder/600/400', 
  technologies = [], 
  githubUrl, 
  liveUrl 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/api/placeholder/600/400"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-3">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Una aplicación web moderna construida con React y Node.js que permite a los usuarios gestionar sus tareas diarias de manera eficiente.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/600/400",
      githubUrl: "https://github.com/tuusuario/proyecto1",
      liveUrl: "https://proyecto1.com"
    },
    
  ];

  return (
    <section 
      ref={ref} 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Proyectos
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
});


ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    githubUrl: PropTypes.string,
    liveUrl: PropTypes.string,
  };


Projects.displayName = "Projects";

export default Projects;