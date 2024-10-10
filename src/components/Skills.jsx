
import { forwardRef } from 'react';
import reactLogo from "../assets/react.svg"
import tsLogo from "../assets/typescript.svg"
import expressLogo from "../assets/express.svg"
import jsLogo from '../assets/javascript.svg'
import postgresLogo from '../assets/postgres.svg'
import reduxLogo from '../assets/redux.svg'
import mongoLogo from '../assets/mongo.svg'


const Skills = forwardRef((props, ref) => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
  ];

  return (
    <section 
      ref={ref} 
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className='flex flex-row m-10'>
      <h2>Icono SVG importado como componente:</h2>
      <img src={reactLogo} alt="React Logo" width="70" height="100" className='m-4'/>
      <img src={tsLogo} alt="Typescript Logo" width="70" height="100" className='m-4'/>
      <img src={expressLogo} alt="Express Logo" className='w-16 h-16 m-4' />
      <img src={jsLogo} alt="Javascript Logo" className='w-16 h-16 m-4' />
      <img src={postgresLogo} alt="Postgres Logo" className='w-16 h-16 m-4' />
      <img src={reduxLogo} alt="Redux Logo" className='w-16 h-16 m-4' />
      <img src={mongoLogo} alt="Mongo Logo" className='w-16 h-16 m-4' />
      </div>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                      from-blue-600 to-purple-600">
            Habilidades
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg 
                       transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
                           transition-all duration-500 ease-out group-hover:from-purple-600 group-hover:to-blue-600"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});


Skills.displayName = "Skills";

export default Skills