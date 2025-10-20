import { imageProps } from '../CardImage';
import pastriesImage from '../../../../../public/gallery-pastries.jpg';
import coffeeImage from '../../../../../public/gallery-coffee.jpg';
import breakfastImage from '../../../../../public/gallery-breakfast.jpg';
import interiorImage from '../../../../../public/gallery-interior.jpg';

export const imageDataArray: imageProps[] = [
  {
    src: pastriesImage,
    alt: 'Variedad de pasteles y postres artesanales',
    title: 'Pastelería Artesanal',
  },
  {
    src: coffeeImage,
    alt: 'Latte art en taza de café',
    title: 'Café de Especialidad',
  },
  {
    src: breakfastImage,
    alt: 'Desayuno completo con croissants',
    title: 'Desayunos Frescos',
  },
  {
    src: interiorImage,
    alt: 'Interior acogedor del café',
    title: 'Ambiente Tranquilo',
  },
];
