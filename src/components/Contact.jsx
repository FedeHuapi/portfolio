import { forwardRef } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import PropTypes from 'prop-types';

const InputWrapper = ({ children, icon: Icon }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      <Icon className="w-5 h-5" />
    </div>
    {children}
  </div>
);

InputWrapper.displayName = 'InputWrapper';

InputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.elementType.isRequired
}

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                       from-blue-600 to-purple-600">
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
              className="w-full p-4 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 
                       dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent outline-none transition-all duration-300
                       text-gray-800 dark:text-gray-200"
            />
          </InputWrapper>

          <InputWrapper icon={Mail}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full p-4 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 
                       dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent outline-none transition-all duration-300
                       text-gray-800 dark:text-gray-200"
            />
          </InputWrapper>

          <InputWrapper icon={MessageSquare}>
            <textarea
              placeholder="Tu mensaje"
              rows="5"
              className="w-full p-4 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 
                       dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent outline-none transition-all duration-300
                       text-gray-800 dark:text-gray-200"
            ></textarea>
          </InputWrapper>

          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 
                     hover:to-blue-600 text-white rounded-lg flex items-center justify-center 
                     space-x-2 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Enviar mensaje</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
});




Contact.displayName = "Contact";

export default InputWrapper;