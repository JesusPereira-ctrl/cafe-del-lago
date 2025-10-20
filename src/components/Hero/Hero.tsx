import heroImage from '../../../public/hero-cafe.jpg';

const Hero = () => {
  return (
    <section
      id='inicio'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src={heroImage}
          alt='Café del Lago interior con vista al lago'
          className='w-full h-full object-cover'
          loading='eager'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/80' />
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in'>
        <h1 className='font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6'>
          Café del Lago
        </h1>
        <p className='text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-light'>
          Ven a Café del Lago y déjate llevar por la magia de su lugar
        </p>
        <p className='text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12'>
          Sumérgete en una experiencia única en Café del Lago donde podrás
          disfrutar de deliciosos pasteles y exquisito café de alta calidad. Un
          ambiente mágico que te brindará un espacio acogedor para relajarte y
          disfrutar de momentos especiales.
        </p>
        <a
          href='#sobre-nosotros'
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector('#sobre-nosotros')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover-lift'
        >
          Descubre Más
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2'>
          <div className='w-1 h-3 bg-primary-foreground/50 rounded-full' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
