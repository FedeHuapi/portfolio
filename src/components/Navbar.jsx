// Navbar.jsx
import PropTypes from 'prop-types';
import ThemeToggle from './Toggle';

const Navbar = ({ onAboutClick, onProjectsClick, onSkillsClick, onContactClick }) => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tu Logo
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onAboutClick}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={onProjectsClick}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={onSkillsClick}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={onContactClick}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Contacto
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onAboutClick: PropTypes.func.isRequired,
  onProjectsClick: PropTypes.func.isRequired,
  onSkillsClick: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired
};

export default Navbar;