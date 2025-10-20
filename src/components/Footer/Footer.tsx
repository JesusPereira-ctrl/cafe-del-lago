const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white dark:bg-black text-gray-800 dark:text-white py-8 border-t border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <p className='font-serif text-2xl font-bold mb-2'>Café del Lago</p>
        <p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>
          Un momento de tranquilidad junto al lago
        </p>
        <div className='w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-4' />
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          © {currentYear} Café del Lago. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
