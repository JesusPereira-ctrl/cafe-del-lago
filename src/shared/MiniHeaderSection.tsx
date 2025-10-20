interface Props {
  title: string;
  subtitle: string;
}

export const MiniHeaderSection = ({ title, subtitle }: Props) => {
  return (
    <div className='text-center mb-16 animate-fade-in'>
      <h2 className='font-serif text-4xl md:text-5xl font-bold text-primary mb-4'>
        {title}
      </h2>
      <div className='w-24 h-1 bg-secondary mx-auto mb-8' />
      <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'>
        {subtitle}
      </p>
    </div>
  );
};
