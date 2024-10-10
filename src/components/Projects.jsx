import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Github, ExternalLink } from 'lucide-react';
import PropTypes from 'prop-types';


// Asegúrate de tener las imágenes de los proyectos en tu carpeta de assets
// import proyectoImg1 from '../assets/proyecto1.png';
// import proyectoImg2 from '../assets/proyecto2.png';
// etc...

const proyectos = [
  {
    id: 1,
    nombre: 'Weather App',
    descripcion: 'Aplicación del clima que consume la API de OpenWeather. Desarrollada con React, permite buscar el clima de cualquier ciudad y muestra información detallada como temperatura, humedad, viento y pronóstico extendido.',
    img: '/api/placeholder/400/300', // Reemplaza con tu imagen real
    github: 'https://github.com/TU_USUARIO/weather-app',
    deploy: 'https://tu-weather-app.vercel.app',
    tecnologias: ['React', 'TailwindCSS', 'OpenWeather API'],
    destacado: true
  },
  {
    id: 2,
    nombre: 'E-commerce Dashboard',
    descripcion: 'Panel de administración para e-commerce con gestión de productos, órdenes y usuarios. Incluye autenticación, roles de usuario y analíticas en tiempo real.',
    img: '/api/placeholder/400/300', // Reemplaza con tu imagen real
    github: 'https://github.com/TU_USUARIO/ecommerce-dashboard',
    deploy: 'https://tu-dashboard.vercel.app',
    tecnologias: ['React', 'Node.js', 'Express', 'MongoDB'],
    destacado: true
  },
  {
    id: 3,
    nombre: 'Task Manager',
    descripcion: 'Aplicación de gestión de tareas con características de drag and drop, categorías personalizables y recordatorios. Backend desarrollado con Node.js y Express.',
    img: '/api/placeholder/400/300', // Reemplaza con tu imagen real
    github: 'https://github.com/TU_USUARIO/task-manager',
    deploy: 'https://tu-task-app.vercel.app',
    tecnologias: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    destacado: false
  },
  {
    id: 4,
    nombre: 'Portfolio Personal',
    descripcion: 'Portfolio profesional desarrollado con React y TailwindCSS. Incluye modo oscuro, animaciones suaves y es completamente responsive.',
    img: '/api/placeholder/400/300', // Reemplaza con tu imagen real
    github: 'https://github.com/TU_USUARIO/portfolio',
    deploy: 'https://tu-portfolio.vercel.app',
    tecnologias: ['React', 'TailwindCSS', 'Framer Motion'],
    destacado: true
  }
];

const ProyectoCard = ({ proyecto }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="relative">
      <img
        src={proyecto.img}
        alt={proyecto.nombre}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {proyectos.destacado && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-sm font-semibold">
          Destacado
        </div>
      )}
    </div>
    
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
      {proyectos.nombre}
    </h3>
    
    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
      {proyecto.descripcion}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {proyecto.tecnologias.map((tech, index) => (
        <span 
          key={index}
          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex justify-between items-center mt-4">
      <div className="flex space-x-4">
        <a
          href={proyecto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
          aria-label="Ver código en GitHub"
        >
          <Github className="w-6 h-6 text-gray-700 dark:text-white" />
        </a>
        <a
          href={proyecto.deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          aria-label="Ver proyecto desplegado"
        >
          <ExternalLink className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  </div>
);

const Proyectos = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Mis Proyectos
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes y destacados.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full h-full pb-12"
        >
          {proyectos.map((proyecto) => (
            <SwiperSlide key={proyecto.id}>
              <ProyectoCard proyecto={proyecto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

Proyectos.displayName = "Proyectos";

ProyectoCard.propTypes = {
  proyecto: PropTypes.array
}

export default Proyectos;