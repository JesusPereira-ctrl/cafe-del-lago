import { CardImage } from './galleryParts/CardImage';
import { imageDataArray } from './galleryParts/data/image.data';
import { MiniHeaderSection } from '@/shared/MiniHeaderSection';

const title: string = 'Galeria';
const subtitle: string = 'Un vistazo a nuestros productos y ambiente';

const Gallery = () => {
  return (
    // Caja de galeria
    <section id='galeria' className='section-padding bg-background'>
      {/* Encabezado de la seccion */}
      <div className='max-w-7xl mx-auto'>
        <MiniHeaderSection
          title={title}
          subtitle={subtitle}
        ></MiniHeaderSection>

        {/* Grid de galeria */}
        <div className='grid md:grid-cols-2 gap-6'>
          {imageDataArray.map((image) => (
            <CardImage
              src={image.src}
              alt={image.alt}
              title={image.title}
              key={image.alt}
            ></CardImage>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
