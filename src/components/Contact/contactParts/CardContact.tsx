interface Props {
  icon: string;
  title: string;
  content: string;
  url: string;
}

export const CardContact = ({ icon, title, content, url }: Props) => {
  const Icon = icon;

  return (
    <a
      key={title}
      href={url}
      className='bg-card p-8 rounded-lg text-center hover-lift border border-border group'
      style={{ animationDelay: `${10 * 0.1}s` }}
    >
      <div className='inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 group-hover:bg-primary transition-colors duration-300'>
        <Icon className='w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300' />
      </div>
      <h3 className='font-serif text-xl font-semibold text-primary mb-2'>
        {title}
      </h3>
      <p className='text-muted-foreground'>{content}</p>
    </a>
  );
};
