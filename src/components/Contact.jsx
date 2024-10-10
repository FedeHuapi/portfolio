import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

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
        </form>
      </div>
    </section>
  );
});

Contact.propTypes = {
  // Si necesitas añadir props específicas al componente Contact, las puedes añadir aquí
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

// Añadimos displayName a ambos componentes
InputWrapper.displayName = 'InputWrapper';
Contact.displayName = 'Contact';

export default Contact;