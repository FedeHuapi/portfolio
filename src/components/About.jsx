import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Sobre mí
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                ¡Hola! Soy un desarrollador web apasionado con experiencia en el desarrollo de aplicaciones 
                web modernas y escalables. Me encanta aprender nuevas tecnologías y aplicar las mejores 
                prácticas en todo lo que hago.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Descargar CV
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Contactar
                </button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200">
                </div>
                <img
                  src="/api/placeholder/400/400"
                  alt="Foto de perfil"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});


About.displayName = 'About';

export default About;