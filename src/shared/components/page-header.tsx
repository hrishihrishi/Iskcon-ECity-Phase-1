'use client';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

const PageHeader: React.FC<Props> = ({ className, title, children }) => {
  return (
    <section
      className={cn(
        'min-h-[180px] md:min-h-[220px] bg-[#f7d2be]/40 flex justify-center items-center border-b border-amber-900/10',
        className
      )}
    >
      {title && (
        <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#221b00]">{title}</h1>
      )}
      {children}
    </section>
  );
};

export default PageHeader;
