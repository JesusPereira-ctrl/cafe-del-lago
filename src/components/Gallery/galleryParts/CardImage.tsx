export interface imageProps {
  src: string;
  alt: string;
  title: string;
}

export const CardImage = ({ src, alt, title }: imageProps) => {
  return (
    <div
      key={alt}
      className='group relative overflow-hidden rounded-lg aspect-square hover-lift'
      style={{ animationDelay: `${1 * 0.1}s` }}
    >
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
        <div className='p-6 w-full'>
          <h3 className='font-serif text-2xl font-semibold text-primary-foreground'>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
