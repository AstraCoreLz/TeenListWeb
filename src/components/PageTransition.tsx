import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnter(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
        'opacity-0 translate-x-10',
        enter && 'opacity-100 translate-x-0'
      )}
    >
      {children}
    </div>
  );
};

