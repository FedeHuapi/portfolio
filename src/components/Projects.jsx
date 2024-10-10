import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Github, ExternalLink } from 'lucide-react';


const proyectos = [
  {
    id: 1,
    nombre: 'Proyecto 1',
    descripcion: 'Este es el primer proyecto.',
    img: 'https://via.placeholder.com/300',
    github: 'https://github.com/usuario/proyecto1',
    deploy: 'https://proyecto1.com',
  },
  {
    id: 2,
    nombre: 'Proyecto 2',
    descripcion: 'Este es el segundo proyecto.',
    img: 'https://via.placeholder.com/300',
    github: 'https://github.com/usuario/proyecto2',
    deploy: 'https://proyecto2.com',
  },
  {
    id: 3,
    nombre: 'Proyecto 3',
    descripcion: 'Este es el tercer proyecto.',
    img: 'https://via.placeholder.com/300',
    github: 'https://github.com/usuario/proyecto3',
    deploy: 'https://proyecto3.com',
  },
  {
    id: 4,
    nombre: 'Proyecto 4',
    descripcion: 'Este es el cuarto proyecto.',
    img: 'https://via.placeholder.com/300',
    github: 'https://github.com/usuario/proyecto4',
    deploy: 'https://proyecto4.com',
  },
];

const Proyectos = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl text-center font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Mis Proyectos
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full h-full"
        >
          {proyectos.map((proyecto) => (
            <SwiperSlide key={proyecto.id}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={proyecto.img}
                  alt={proyecto.nombre}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{proyecto.nombre}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{proyecto.descripcion}</p>

                <div className="flex space-x-4 mt-4">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-gray-700 dark:text-white" />
                  </a>
                  <a
                    href={proyecto.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition"
                    aria-label="Deploy"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Proyectos;
