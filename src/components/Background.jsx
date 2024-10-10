// BackgroundElements.jsx
const BackgroundElements = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-1/4 w-px h-screen bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-screen bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        
        {/* Dots grid */}
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] dark:bg-grid-slate-700/[0.04] bg-[size:40px_40px]" />
      </div>
    );
  };
  
  export default BackgroundElements;