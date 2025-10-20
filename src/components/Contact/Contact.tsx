import InstagramIcon from '../../../public/svg-icons/instagram.svg';
import { MiniHeaderSection } from '@/shared/MiniHeaderSection';
import { contactInfo } from './contactParts/data/link.data';
import { CardContact } from './contactParts/CardContact';

const Contact = () => {
  const socialLinks = [
    {
      icon: InstagramIcon,
      name: 'Instagram',
      url: 'https://www.instagram.com/cafe_del_lago_llifen/',
      color: 'hover:text-[#E4405F]',
    },
  ];

  const IconIntagram = socialLinks[0].icon;

  return (
    <section id='contacto' className='section-padding bg-background'>
      <div className='max-w-6xl mx-auto'>
        {/* Header seccion */}
        <MiniHeaderSection
          title='Contacto'
          subtitle='Estamos aqui para atenderte. ¡Contáctanos!'
        ></MiniHeaderSection>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {contactInfo.map((item) => (
            <CardContact
              icon={item.icon}
              title={item.title}
              content={item.content}
              url={item.url}
              key={item.url}
            ></CardContact>
          ))}
        </div>

        <div className='bg-card p-8 rounded-lg text-center border border-border'>
          <h3 className='font-serif text-2xl font-semibold text-primary mb-6'>
            Síguenos en Redes Sociales
          </h3>
          <div className='flex justify-center gap-6'>
            <a
              key={socialLinks[0].name}
              href={socialLinks[0].url}
              target='_blank'
              rel='noopener noreferrer'
              className={`inline-flex items-center justify-center w-14 h-14 bg-accent rounded-full transition-all duration-300 hover-lift ${socialLinks[0].color}`}
              aria-label={socialLinks[0].name}
            >
              <IconIntagram className='w-6 h-6'></IconIntagram>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
