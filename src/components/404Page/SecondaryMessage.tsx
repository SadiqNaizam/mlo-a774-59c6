import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryMessageProps {
  className?: string;
}

const SecondaryMessage: React.FC<SecondaryMessageProps> = ({ className }) => {
  return (
    <p className={cn("text-xl md:text-2xl text-foreground text-center", className)}>
      The page you are looking for can't be found.
    </p>
  );
};

export default SecondaryMessage;
