import { Coffee, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Café Artesanal',
      description:
        'Granos seleccionados y preparación cuidadosa para cada taza',
    },
    {
      icon: Heart,
      title: 'Ambiente Tranquilo',
      description:
        'Un espacio acogedor donde relajarte y disfrutar del momento',
    },
  ];

  return (
    <section id='sobre-nosotros' className='section-padding bg-background'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-primary mb-4'>
            Sobre Nosotros
          </h2>
          <div className='w-24 h-1 bg-secondary mx-auto mb-8' />
          <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Café del Lago nació con la visión de crear un espacio donde el
            tiempo se detiene. Ubicados junto al lago, ofrecemos mucho más que
            café y pastelería: brindamos un refugio de tranquilidad en medio del
            ajetreo diario. Cada producto es preparado con dedicación,
            utilizando ingredientes de la mejor calidad para que cada visita sea
            una experiencia memorable.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-card rounded-lg p-8 text-center hover-lift border border-border'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6'>
                <feature.icon className='w-8 h-8 text-primary' />
              </div>
              <h3 className='font-serif text-2xl font-semibold text-primary mb-3'>
                {feature.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
