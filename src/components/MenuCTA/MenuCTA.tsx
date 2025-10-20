import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MenuCTA = () => {
  return (
    <section className='section-padding bg-accent'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='animate-fade-in'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-primary mb-6'>
            Descubre Nuestro Menú
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Explora nuestra selección completa de cafés, pastelería y desayunos
          </p>

          <a href='/menu/menu.pdf#zoom=250' download>
            <Button size='lg' className='text-lg px-8 py-6 hover-lift'>
              <FileText className='mr-2 h-5 w-5' />
              Descargar Menú PDF
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuCTA;
