import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import gitLogo from '../assets/github.svg'
import inLogo from '../assets/in.svg'
import emailLogo from '../assets/mail.svg'

const InputWrapper = forwardRef(({ children, icon: Icon }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      <Icon className="w-5 h-5" />
    </div>
    {children}
  </div>
));

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType.isRequired
};

const Contact = forwardRef((props, ref) => {
  // Constantes para las URLs de las redes sociales - Reemplaza con tus propios enlaces
  const GITHUB_URL = "https://github.com/FedeHuapi";
  const LINKEDIN_URL = "https://www.linkedin.com/in/federico-curto-318227288/";
  const EMAIL = "federicocurto00@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Contacto
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
            Te responderé lo antes posible.
          </p>
        </div>

        <form className="space-y-6 max-w-xl mx-auto">
          <InputWrapper icon={User}>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </InputWrapper>

          <InputWrapper icon={Mail}>
            <input
              type="email"
              placeholder="Tu email"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </InputWrapper>

          <InputWrapper icon={MessageSquare}>
            <textarea
              placeholder="Tu mensaje"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
            />
          </InputWrapper>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>Enviar mensaje</span>
            <Send className="w-5 h-5" />
          </button>

          <div className="flex justify-center items-center space-x-8 mt-8">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button group"
            >
              <img 
                src={gitLogo} 
                alt="Github" 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
              />
            </a>
            
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button group"
            >
              <img 
                src={inLogo} 
                alt="LinkedIn" 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
              />
            </a>
            
            <button
              onClick={handleEmailClick}
              className="social-button group"
            >
              <img 
                src={emailLogo} 
                alt="Email" 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
              />
            </button>
          </div>
        </form>


      </div>
    </section>
  );
});

Contact.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

InputWrapper.displayName = 'InputWrapper';
Contact.displayName = 'Contact';

export default Contact;