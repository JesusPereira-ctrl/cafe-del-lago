import { Coffee, Cake, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: 'Cafés de Grano',
      description:
        'Café de grano preparado con dedicación. Espresso, americano, latte, capuccino y más. Personaliza tu café con syrups de amaretto, vainilla, canela o avellana.',
      items: [
        'Espresso y variaciones',
        'Cafés helados',
        'Chocolate caliente',
        'Té y Té Chai',
      ],
    },
    {
      icon: Cake,
      title: 'Pastelería Artesanal',
      description:
        'Cheesecakes, tortas, kuchen y más elaborados diariamente. Cada pieza es preparada con ingredientes de calidad.',
      items: [
        'Cheesecake y Marquisse',
        'Tortas variadas',
        'Queques y galletas',
        'Picarones',
      ],
    },
    {
      icon: UtensilsCrossed,
      title: 'Desayunos',
      description:
        'Comienza tu día con nuestros sandwiches y desayunos frescos, preparados al momento.',
      items: ['Sandwiches', 'Variedades disponibles'],
    },
    {
      icon: ShoppingBag,
      title: 'Pasteles a Pedido',
      description:
        '¿Celebras algo especial? Hacemos pasteles personalizados para tus eventos y celebraciones.',
      items: ['Cumpleaños', 'Bodas', 'Eventos', 'Personalizados'],
    },
  ];

  return (
    <section id='servicios' className='section-padding bg-muted'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-primary mb-4'>
            Nuestros Servicios
          </h2>
          <div className='w-24 h-1 bg-secondary mx-auto mb-8' />
          <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'>
            Todo lo que necesitas para disfrutar de un momento especial
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='hover-lift bg-card border-border overflow-hidden'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className='p-6'>
                <div className='flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto'>
                  <service.icon className='w-8 h-8 text-primary' />
                </div>
                <h3 className='font-serif text-2xl font-semibold text-primary mb-3 text-center'>
                  {service.title}
                </h3>
                <p className='text-muted-foreground text-center mb-4 leading-relaxed'>
                  {service.description}
                </p>
                <ul className='space-y-2'>
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className='text-sm text-muted-foreground flex items-center'
                    >
                      <span className='w-1.5 h-1.5 bg-secondary rounded-full mr-2' />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
