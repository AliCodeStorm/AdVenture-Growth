import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-28', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
