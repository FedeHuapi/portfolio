
import { forwardRef, useEffect, useRef } from 'react';

import reactLogo from "../assets/react.svg";
import tsLogo from "../assets/typescript.svg";
import expressLogo from "../assets/express.svg";
import jsLogo from '../assets/javascript.svg';
import postgresLogo from '../assets/postgres.svg';
import reduxLogo from '../assets/redux.svg';
import mongoLogo from '../assets/mongo.svg';
import nodeLogo from '../assets/node.svg';
import cssLogo from '../assets/css.svg';
import tailwindLogo from '../assets/tailwind.svg';
import bootLogo from '../assets/bootstrap.svg';

const Skills = forwardRef((props, sectionRef) => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const draggedItem = useRef(null);
  const initialPos = useRef({ x: 0, y: 0 });

  const logos = [
    { src: reactLogo, alt: 'React Logo' },
    { src: tsLogo, alt: 'Typescript Logo' },
    { src: expressLogo, alt: 'Express Logo' },
    { src: jsLogo, alt: 'Javascript Logo' },
    { src: postgresLogo, alt: 'Postgres Logo' },
    { src: reduxLogo, alt: 'Redux Logo' },
    { src: mongoLogo, alt: 'MongoDB Logo' },
    { src: nodeLogo, alt: 'Node.js Logo' },
    { src: cssLogo, alt: 'CSS Logo' },
    { src: tailwindLogo, alt: 'Tailwind CSS Logo' },
    { src: bootLogo, alt: 'Bootstrap Logo' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.getElementsByClassName('logo-item');
    const containerRect = container.getBoundingClientRect();

    Array.from(items).forEach((item) => {
      const maxX = containerRect.width - item.offsetWidth;
      const maxY = containerRect.height - item.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      const randomRotate = Math.random() * 360;

      item.style.position = 'absolute';
      item.style.left = `${randomX}px`;
      item.style.top = `${randomY}px`;
      item.style.transform = `rotate(${randomRotate}deg)`;
      item.style.transition = 'transform 0.3s ease';
    });
  }, []);

  const handleMouseDown = (e, item) => {
    if (item) {
      isDragging.current = true;
      draggedItem.current = item;
      const rect = item.getBoundingClientRect();

      initialPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      item.style.zIndex = '50';
      item.style.transition = 'none';
      item.style.transform = 'scale(1.1)';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !draggedItem.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left - initialPos.current.x;
    const y = e.clientY - containerRect.top - initialPos.current.y;

    const maxX = containerRect.width - draggedItem.current.offsetWidth;
    const maxY = containerRect.height - draggedItem.current.offsetHeight;

    const boundedX = Math.min(Math.max(0, x), maxX);
    const boundedY = Math.min(Math.max(0, y), maxY);

    draggedItem.current.style.left = `${boundedX}px`;
    draggedItem.current.style.top = `${boundedY}px`;
  };

  const handleMouseUp = () => {
    if (draggedItem.current) {
      draggedItem.current.style.zIndex = '1';
      draggedItem.current.style.transition = 'transform 0.3s ease';
      draggedItem.current.style.transform = 'scale(1)';

      isDragging.current = false;
      draggedItem.current = null;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Habilidades
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={containerRef}
          className="relative min-h-[600px] bg-transparent"
        >
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="logo-item absolute bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg cursor-move 
                       hover:shadow-xl transition-shadow duration-300"
              onMouseDown={(e) => handleMouseDown(e, e.currentTarget)}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-16 h-16 object-contain"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;

