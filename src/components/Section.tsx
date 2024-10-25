import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
