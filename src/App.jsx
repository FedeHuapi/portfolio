import  { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
// import SliderComponent from './components/ui/SliderComponent';



const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="container mx-auto px-4 py-8">
        
        <About />
        <Skills />
        {/* <SliderComponent /> */}
        <Projects />
        <Contact />
      </main>


    </div>
  );
};

export default App;