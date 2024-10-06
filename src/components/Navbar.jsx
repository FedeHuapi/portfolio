import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
      
        <div className="relative group">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent 
                         transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-600">
            Mi Portafolio
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                         transition-all duration-300 group-hover:w-full"></span>
        </div>


        <div className="hidden md:flex items-center space-x-8">
          {['Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 
                       transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 
                       after:bg-blue-600 after:left-0 after:-bottom-0.5 after:transition-all after:duration-300 
                       hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>


        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                   transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

 
      <div className={`md:hidden fixed inset-x-0 bg-white dark:bg-gray-900 shadow-lg 
                    transition-all duration-300 ease-in-out ${
                      isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}>
        <div className="flex flex-col items-center py-6 space-y-6">
          {['Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="w-full text-center py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 
                       dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar