type Props = {
  children: React.ReactNode;
  heading?: string;
  className?: string;
};

const Section = ({ children, heading, className = "" }: Props) => {
  return (
    <section
      className={`container mb-8 last:mb-0 md:mb-12 xl:mb-18 ${className}`}
    >
      {heading && (
        <h2 className="text-sans text-2xl font-bold text-center text-green mb-5 md:text-4xl md:mb-8 xl:text-5xl xl:mb-12">
          {heading}
        </h2>
      )}

      {children}
    </section>
  );
};

export default Section;
